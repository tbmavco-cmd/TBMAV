/*
# Lock down announcements write policies + revoke public execute on sync_admin_claim

## Changes

1. **Announcements table — tighten INSERT/UPDATE/DELETE policies**
   - Previously: `TO anon, authenticated` with `USING (true)` / `WITH CHECK (true)` — any visitor could modify announcements.
   - Now: INSERT, UPDATE, DELETE restricted `TO authenticated` with an `is_admin()` check. Only signed-in admins can modify announcements.
   - SELECT remains open to `anon, authenticated` (announcements are public content).

2. **sync_admin_claim() — revoke public EXECUTE**
   - This function is a SECURITY DEFINER trigger function that writes to `auth.users.raw_app_meta_data`.
   - It is only meant to run as a trigger, not via RPC. Revoking EXECUTE from anon and authenticated prevents anyone from calling it directly through the REST API.

## Security
   - Announcements can only be created/edited/deleted by authenticated admins.
   - `sync_admin_claim()` can no longer be invoked via `/rest/v1/rpc/sync_admin_claim`.
*/

-- 1. Fix announcements policies
DROP POLICY IF EXISTS "authenticated_insert_announcements" ON announcements;
CREATE POLICY "admin_insert_announcements" ON announcements FOR INSERT
  TO authenticated WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "authenticated_update_announcements" ON announcements;
CREATE POLICY "admin_update_announcements" ON announcements FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "authenticated_delete_announcements" ON announcements;
CREATE POLICY "admin_delete_announcements" ON announcements FOR DELETE
  TO authenticated USING (public.is_admin());

-- 2. Revoke public EXECUTE on sync_admin_claim from anon and authenticated
REVOKE EXECUTE ON FUNCTION public.sync_admin_claim() FROM anon;
REVOKE EXECUTE ON FUNCTION public.sync_admin_claim() FROM authenticated;