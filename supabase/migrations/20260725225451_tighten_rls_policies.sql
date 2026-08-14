/*
# Tighten RLS policies across all tables

1. Purpose
   Several RLS policies used `USING (true)` / `WITH CHECK (true)` for admin
   operations, which granted access to ANY authenticated user instead of only
   admin users. Public form INSERT policies also allowed rows to be inserted
   with arbitrary status values. This migration replaces those blanket-true
   predicates with real authorization checks.

2. New database object
   - `public.is_admin()` — SECURITY DEFINER function that returns true when the
     current Supabase auth user's email exists in `admin_users`. SECURITY DEFINER
     lets it read `admin_users` without needing an RLS policy on that table
     (avoids a circular dependency).

3. Policy changes per table
   - `admin_users` — replace `FOR ALL USING(true)` with SELECT/INSERT/UPDATE/
     DELETE each gated on `is_admin()`.
   - `wellness_requests` — admin SELECT/UPDATE/DELETE gated on `is_admin()`;
     public INSERT now requires `status = 'awaiting_review'` so a malicious
     submitter cannot pre-set a workflow status.
   - `contact_submissions` — admin SELECT/UPDATE/DELETE gated on `is_admin()`;
     public INSERT now requires `status = 'new'`.
   - `request_notes` — replace `FOR ALL USING(true)` with SELECT/INSERT/UPDATE/
     DELETE each gated on `is_admin()`.
   - `request_status_history` — replace `FOR ALL USING(true)` with SELECT/
     INSERT/UPDATE/DELETE each gated on `is_admin()`.
   - `refund_requests` — admin UPDATE gated on `is_admin()`; public INSERT now
     requires `status = 'pending'`.
   - `membership_cancellations` — admin UPDATE gated on `is_admin()`; public
     INSERT now requires `status = 'pending_verification'`.
   - `privacy_requests` — admin UPDATE gated on `is_admin()`; public INSERT
     now requires `status = 'pending'`.
   - `consent_records` — public INSERT now requires `checkbox_status = true`
     (a consent record can only be logged when affirmative consent was given).

4. Security
   - No `USING (true)` remains on any admin operation.
   - No `WITH CHECK (true)` remains on any public INSERT; each has a real
     predicate that enforces the row matches a fresh, valid submission.
   - Admin access is now restricted to users whose email is in `admin_users`.

5. Important notes
   - `is_admin()` is SECURITY DEFINER and STABLE; it bypasses RLS to read the
     allow-list, so `admin_users` policies no longer create a circular check.
   - Existing admin_users rows are preserved. To add a new admin, insert into
     `admin_users` via the SQL editor or service role.
   - No data is modified or deleted; only policies and one function are changed.
*/

-- Helper: is the current authenticated user an admin?
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.email = (auth.jwt() ->> 'email')
  );
$$;

-- admin_users: split FOR ALL into per-verb policies gated on is_admin()
DROP POLICY IF EXISTS "admin_all_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_select_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_insert_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_update_admin_users" ON admin_users;
DROP POLICY IF EXISTS "admin_delete_admin_users" ON admin_users;

CREATE POLICY "admin_select_admin_users" ON admin_users FOR SELECT
  TO authenticated USING (public.is_admin());
CREATE POLICY "admin_insert_admin_users" ON admin_users FOR INSERT
  TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "admin_update_admin_users" ON admin_users FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "admin_delete_admin_users" ON admin_users FOR DELETE
  TO authenticated USING (public.is_admin());

-- wellness_requests
DROP POLICY IF EXISTS "public_insert_wellness_requests" ON wellness_requests;
CREATE POLICY "public_insert_wellness_requests" ON wellness_requests FOR INSERT
  TO anon, authenticated WITH CHECK (status = 'awaiting_review');

DROP POLICY IF EXISTS "admin_read_wellness_requests" ON wellness_requests;
CREATE POLICY "admin_read_wellness_requests" ON wellness_requests FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "admin_update_wellness_requests" ON wellness_requests;
CREATE POLICY "admin_update_wellness_requests" ON wellness_requests FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_delete_wellness_requests" ON wellness_requests;
CREATE POLICY "admin_delete_wellness_requests" ON wellness_requests FOR DELETE
  TO authenticated USING (public.is_admin());

-- contact_submissions
DROP POLICY IF EXISTS "public_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "public_insert_contact_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "admin_read_contact_submissions" ON contact_submissions;
CREATE POLICY "admin_read_contact_submissions" ON contact_submissions FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "admin_update_contact_submissions" ON contact_submissions;
CREATE POLICY "admin_update_contact_submissions" ON contact_submissions FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "admin_delete_contact_submissions" ON contact_submissions FOR DELETE
  TO authenticated USING (public.is_admin());

-- request_notes: split FOR ALL into per-verb policies gated on is_admin()
DROP POLICY IF EXISTS "admin_all_request_notes" ON request_notes;
DROP POLICY IF EXISTS "admin_select_request_notes" ON request_notes;
DROP POLICY IF EXISTS "admin_insert_request_notes" ON request_notes;
DROP POLICY IF EXISTS "admin_update_request_notes" ON request_notes;
DROP POLICY IF EXISTS "admin_delete_request_notes" ON request_notes;

CREATE POLICY "admin_select_request_notes" ON request_notes FOR SELECT
  TO authenticated USING (public.is_admin());
CREATE POLICY "admin_insert_request_notes" ON request_notes FOR INSERT
  TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "admin_update_request_notes" ON request_notes FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "admin_delete_request_notes" ON request_notes FOR DELETE
  TO authenticated USING (public.is_admin());

-- request_status_history: split FOR ALL into per-verb policies gated on is_admin()
DROP POLICY IF EXISTS "admin_all_request_status_history" ON request_status_history;
DROP POLICY IF EXISTS "admin_select_request_status_history" ON request_status_history;
DROP POLICY IF EXISTS "admin_insert_request_status_history" ON request_status_history;
DROP POLICY IF EXISTS "admin_update_request_status_history" ON request_status_history;
DROP POLICY IF EXISTS "admin_delete_request_status_history" ON request_status_history;

CREATE POLICY "admin_select_request_status_history" ON request_status_history FOR SELECT
  TO authenticated USING (public.is_admin());
CREATE POLICY "admin_insert_request_status_history" ON request_status_history FOR INSERT
  TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "admin_update_request_status_history" ON request_status_history FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "admin_delete_request_status_history" ON request_status_history FOR DELETE
  TO authenticated USING (public.is_admin());

-- refund_requests
DROP POLICY IF EXISTS "anon_insert_refund_requests" ON refund_requests;
CREATE POLICY "anon_insert_refund_requests" ON refund_requests FOR INSERT
  TO anon, authenticated WITH CHECK (status = 'pending');

DROP POLICY IF EXISTS "auth_read_refund_requests" ON refund_requests;
CREATE POLICY "auth_read_refund_requests" ON refund_requests FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "auth_update_refund_requests" ON refund_requests;
CREATE POLICY "auth_update_refund_requests" ON refund_requests FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- membership_cancellations
DROP POLICY IF EXISTS "anon_insert_membership_cancellations" ON membership_cancellations;
CREATE POLICY "anon_insert_membership_cancellations" ON membership_cancellations FOR INSERT
  TO anon, authenticated WITH CHECK (status = 'pending_verification');

DROP POLICY IF EXISTS "auth_read_membership_cancellations" ON membership_cancellations;
CREATE POLICY "auth_read_membership_cancellations" ON membership_cancellations FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "auth_update_membership_cancellations" ON membership_cancellations;
CREATE POLICY "auth_update_membership_cancellations" ON membership_cancellations FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- privacy_requests
DROP POLICY IF EXISTS "anon_insert_privacy_requests" ON privacy_requests;
CREATE POLICY "anon_insert_privacy_requests" ON privacy_requests FOR INSERT
  TO anon, authenticated WITH CHECK (status = 'pending');

DROP POLICY IF EXISTS "auth_read_privacy_requests" ON privacy_requests;
CREATE POLICY "auth_read_privacy_requests" ON privacy_requests FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "auth_update_privacy_requests" ON privacy_requests;
CREATE POLICY "auth_update_privacy_requests" ON privacy_requests FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- consent_records
DROP POLICY IF EXISTS "anon_insert_consent_records" ON consent_records;
CREATE POLICY "anon_insert_consent_records" ON consent_records FOR INSERT
  TO anon, authenticated WITH CHECK (checkbox_status = true);

DROP POLICY IF EXISTS "auth_read_consent_records" ON consent_records;
CREATE POLICY "auth_read_consent_records" ON consent_records FOR SELECT
  TO authenticated USING (public.is_admin());
