/*
# Lock down EXECUTE on public.is_admin()

1. Context
   - `public.is_admin()` is a SECURITY DEFINER function used by RLS policies on
     admin_users, wellness_requests, contact_submissions, request_notes,
     request_status_history, refund_requests, membership_cancellations,
     privacy_requests, and consent_records to gate admin access.
   - By default CREATE FUNCTION grants EXECUTE to PUBLIC, so both `anon` and
     `authenticated` could invoke it directly via /rest/v1/rpc/is_admin.

2. Security changes
   - REVOKE EXECUTE on public.is_admin() from PUBLIC and anon.
   - GRANT EXECUTE on public.is_admin() to authenticated only.
   - The `authenticated` grant is intentional and required: RLS policies scoped
     TO authenticated call is_admin() in their USING/WITH CHECK expressions,
     and PostgreSQL checks EXECUTE on the calling role. Revoking from
     authenticated would make every admin-gated policy fail and lock admins out.
   - anon has no policies that reference is_admin(), so anon EXECUTE is not
     needed and is removed to close the public RPC exposure.

3. No data changes
   - No tables, columns, or rows are modified. Only function EXECUTE privileges.
*/

REVOKE EXECUTE ON FUNCTION public.is_admin() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
