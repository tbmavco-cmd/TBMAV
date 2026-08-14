/*
# Switch is_admin() to SECURITY INVOKER (JWT-claim based)

## Problem
`public.is_admin()` was a SECURITY DEFINER function. Any signed-in user could
call it directly via `/rest/v1/rpc/is_admin` and execute it with the function
owner's elevated privileges (it bypasses RLS to read `admin_users`). This is
flagged as a privilege-escalation risk.

## Why not just REVOKE EXECUTE
PostgreSQL requires the querying role to hold EXECUTE on any function called
inside an RLS policy's USING / WITH CHECK expressions. Revoking EXECUTE from
`authenticated` would break every admin-gated RLS policy in the database.

## Why not just switch to SECURITY INVOKER (without other changes)
SECURITY INVOKER runs with the caller's privileges and cannot bypass RLS.
The current body queries `admin_users`, whose SELECT policy calls `is_admin()`
— that would recurse infinitely.

## Fix
1. Move admin status into the JWT: store `is_admin: true` in
   `auth.users.raw_app_meta_data` for every admin email.
2. Rewrite `is_admin()` to read the claim from `auth.jwt()` instead of
   querying `admin_users`. No table access = no RLS recursion.
3. Switch `is_admin()` to SECURITY INVOKER. Direct RPC calls now run with
   the caller's own privileges — no escalation. A non-admin calling it
   simply gets `false`; an admin gets `true` (which they already know).
4. Rewrite `admin_users` RLS policies to check the JWT claim directly
   (same expression the function uses), so they no longer call `is_admin()`
   and cannot recurse.
5. Add a trigger on `admin_users` that keeps `auth.users.raw_app_meta_data`
   in sync when admin rows are inserted, updated, or deleted, so the JWT
   claim never drifts from the table.
6. One-time backfill: set `is_admin = true` in `raw_app_meta_data` for every
   existing `admin_users` email so current admins keep access immediately.

## Security
- `is_admin()` is now SECURITY INVOKER — direct RPC can no longer escalate.
- `admin_users` RLS policies now use the JWT `app_metadata` claim directly.
- EXECUTE remains granted to `authenticated` (required for RLS), but this is
  now safe because the function cannot bypass RLS or escalate privileges.
- The sync trigger is SECURITY DEFINER (must write to `auth.users`) and is
  owned by the postgres role; it only flips a boolean claim, nothing else.

## Important notes
1. After this migration, admin status is sourced from the JWT claim, which
   is populated from `auth.users.raw_app_meta_data`. The `admin_users` table
   remains the source of truth; the trigger keeps the claim in sync.
2. Existing admin sessions issued BEFORE this migration will not have the
   `is_admin` claim until they sign out and back in (JWT is refreshed on
   sign-in). This is expected JWT behavior.
3. The trigger handles INSERT (set claim true), DELETE (set claim false),
   and UPDATE of email (clear old, set new).
*/

-- ── 1. Backfill: set is_admin claim for existing admins ────────────────
UPDATE auth.users
SET raw_app_meta_data = jsonb_set(
  COALESCE(raw_app_meta_data, '{}'::jsonb),
  '{is_admin}',
  'true'::jsonb
)
WHERE email IN (SELECT email FROM public.admin_users);

-- Also ensure non-admins do not carry a stale claim
UPDATE auth.users
SET raw_app_meta_data = (COALESCE(raw_app_meta_data, '{}'::jsonb) - 'is_admin')
WHERE email NOT IN (SELECT email FROM public.admin_users)
  AND raw_app_meta_data ? 'is_admin';

-- ── 2. Sync trigger function ──────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.sync_admin_claim()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = auth, public
AS $$
BEGIN
  -- INSERT: mark the new admin
  IF (TG_OP = 'INSERT') THEN
    UPDATE auth.users
    SET raw_app_meta_data = jsonb_set(
      COALESCE(raw_app_meta_data, '{}'::jsonb),
      '{is_admin}',
      'true'::jsonb
    )
    WHERE email = NEW.email;
    RETURN NEW;
  END IF;

  -- DELETE: unmark the removed admin
  IF (TG_OP = 'DELETE') THEN
    UPDATE auth.users
    SET raw_app_meta_data = (COALESCE(raw_app_meta_data, '{}'::jsonb) - 'is_admin')
    WHERE email = OLD.email;
    RETURN OLD;
  END IF;

  -- UPDATE: if email changed, transfer the claim
  IF (TG_OP = 'UPDATE' AND OLD.email IS DISTINCT FROM NEW.email) THEN
    UPDATE auth.users
    SET raw_app_meta_data = (COALESCE(raw_app_meta_data, '{}'::jsonb) - 'is_admin')
    WHERE email = OLD.email;

    UPDATE auth.users
    SET raw_app_meta_data = jsonb_set(
      COALESCE(raw_app_meta_data, '{}'::jsonb),
      '{is_admin}',
      'true'::jsonb
    )
    WHERE email = NEW.email;
  END IF;

  RETURN NEW;
END;
$$;

-- ── 3. Attach trigger to admin_users ──────────────────────────────────
DROP TRIGGER IF EXISTS admin_users_sync_claim ON public.admin_users;
CREATE TRIGGER admin_users_sync_claim
  AFTER INSERT OR UPDATE OR DELETE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.sync_admin_claim();

-- ── 4. Rewrite is_admin() as SECURITY INVOKER, JWT-based ───────────────
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY INVOKER
STABLE
SET search_path = public
AS $$
  SELECT COALESCE(
    (auth.jwt() #>> '{app_metadata, is_admin}')::boolean,
    false
  );
$$;

-- ── 5. Rewrite admin_users RLS policies to use the JWT claim directly ──
-- (Breaks the is_admin() -> admin_users -> is_admin() recursion chain.)
DROP POLICY IF EXISTS "admin_select_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_insert_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_update_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_delete_admin_users" ON admin_users;

CREATE POLICY "admin_select_admin_users" ON admin_users FOR SELECT
  TO authenticated USING (
    COALESCE((auth.jwt() #>> '{app_metadata, is_admin}')::boolean, false)
  );

CREATE POLICY "admin_insert_admin_users" ON admin_users FOR INSERT
  TO authenticated WITH CHECK (
    COALESCE((auth.jwt() #>> '{app_metadata, is_admin}')::boolean, false)
  );

CREATE POLICY "admin_update_admin_users" ON admin_users FOR UPDATE
  TO authenticated
  USING (COALESCE((auth.jwt() #>> '{app_metadata, is_admin}')::boolean, false))
  WITH CHECK (COALESCE((auth.jwt() #>> '{app_metadata, is_admin}')::boolean, false));

CREATE POLICY "admin_delete_admin_users" ON admin_users FOR DELETE
  TO authenticated USING (
    COALESCE((auth.jwt() #>> '{app_metadata, is_admin}')::boolean, false)
  );
