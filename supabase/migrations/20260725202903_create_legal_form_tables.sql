/*
# Create legal form submission tables

1. New Tables
- `refund_requests` — public refund/billing-review form submissions.
  Columns: id, name, email, phone, order_number, transaction_date, purchase_type,
  reason, requested_resolution, attachment_url, no_medical_info_confirmed,
  status, created_at.
- `membership_cancellations` — public membership cancellation form submissions.
  Columns: id, name, email, phone, membership, requested_date, reason,
  terms_acknowledged, status, created_at.
- `privacy_requests` — public privacy-request form submissions.
  Columns: id, name, email, phone, request_type, details,
  no_medical_info_confirmed, status, created_at.
- `consent_records` — checkout consent audit log.
  Columns: id, policy_version, policy_title, timestamp, transaction_id,
  consent_language, checkbox_status, user_identifier, created_at.

2. Security
- Enable RLS on all tables.
- All tables allow anon INSERT (public forms) and authenticated SELECT/UPDATE
  (admin review). No public read access to submitted data.
- No DELETE policy — submissions are retained for audit/compliance.
*/

CREATE TABLE IF NOT EXISTS refund_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  order_number text,
  transaction_date date,
  purchase_type text NOT NULL,
  reason text,
  requested_resolution text,
  attachment_url text,
  no_medical_info_confirmed boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE refund_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_refund_requests" ON refund_requests;
CREATE POLICY "anon_insert_refund_requests" ON refund_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_refund_requests" ON refund_requests;
CREATE POLICY "auth_read_refund_requests" ON refund_requests FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_refund_requests" ON refund_requests;
CREATE POLICY "auth_update_refund_requests" ON refund_requests FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS membership_cancellations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  membership text NOT NULL,
  requested_date date NOT NULL,
  reason text,
  terms_acknowledged boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending_verification',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE membership_cancellations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_membership_cancellations" ON membership_cancellations;
CREATE POLICY "anon_insert_membership_cancellations" ON membership_cancellations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_membership_cancellations" ON membership_cancellations;
CREATE POLICY "auth_read_membership_cancellations" ON membership_cancellations FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_membership_cancellations" ON membership_cancellations;
CREATE POLICY "auth_update_membership_cancellations" ON membership_cancellations FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS privacy_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  request_type text NOT NULL,
  details text,
  no_medical_info_confirmed boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE privacy_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_privacy_requests" ON privacy_requests;
CREATE POLICY "anon_insert_privacy_requests" ON privacy_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_privacy_requests" ON privacy_requests;
CREATE POLICY "auth_read_privacy_requests" ON privacy_requests FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_privacy_requests" ON privacy_requests;
CREATE POLICY "auth_update_privacy_requests" ON privacy_requests FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS consent_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  policy_version text NOT NULL,
  policy_title text NOT NULL,
  transaction_id text,
  consent_language text NOT NULL,
  checkbox_status boolean NOT NULL,
  user_identifier text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE consent_records ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consent_records" ON consent_records;
CREATE POLICY "anon_insert_consent_records" ON consent_records FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_consent_records" ON consent_records;
CREATE POLICY "auth_read_consent_records" ON consent_records FOR SELECT
  TO authenticated USING (true);
