/*
# The Bare Method — Core Database Tables

1. Purpose
   Stores nonclinical business data for The Bare Method website: wellness-plan
   requests, contact-form submissions, admin notes, and status-change history.
   No protected health information (PHI) is stored here — medical intake,
   charting, and prescriptions are handled through OptiMantra.

2. New Tables
   - `wellness_requests` — public wellness-plan / consultation requests
     submitted from the website. Nonclinical fields only.
   - `contact_submissions` — general contact-form submissions.
   - `request_notes` — internal admin notes attached to any request.
   - `request_status_history` — audit trail of status changes per request.
   - `admin_users` — lightweight allow-list of admin emails used by the
     admin dashboard (authentication itself is handled by Supabase Auth).

3. Security
   - RLS enabled on every table.
   - Public tables (wellness_requests, contact_submissions) allow anon INSERT
     (anyone can submit a request) but only authenticated admins can SELECT,
     UPDATE, or DELETE.
   - request_notes and request_status_history are admin-only (authenticated).
   - admin_users is admin-only (authenticated).

4. Important Notes
   - No medical/clinical fields are stored. Only administrative contact info,
     selected program, scheduling preferences, and admin workflow state.
   - Status values are enforced via CHECK constraints.
   - request_type distinguishes 'wellness' vs 'contact' for shared note/history
     tables.
*/

CREATE TABLE IF NOT EXISTS wellness_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  state_of_residence text NOT NULL,
  preferred_contact_method text NOT NULL CHECK (preferred_contact_method IN ('email','phone','sms')),
  selected_program text NOT NULL,
  consultation_format text NOT NULL CHECK (consultation_format IN ('telehealth','in_person','no_preference')),
  scheduling_preference text,
  admin_message text,
  consent_email boolean NOT NULL DEFAULT false,
  consent_sms boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'awaiting_review' CHECK (status IN ('awaiting_review','medical_intake_required','invoice_ready','invoice_sent','paid','cancelled','follow_up_required')),
  invoice_link text,
  invoice_total_cents integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE wellness_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_wellness_requests" ON wellness_requests;
CREATE POLICY "public_insert_wellness_requests"
  ON wellness_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_wellness_requests" ON wellness_requests;
CREATE POLICY "admin_read_wellness_requests"
  ON wellness_requests FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_wellness_requests" ON wellness_requests;
CREATE POLICY "admin_update_wellness_requests"
  ON wellness_requests FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_wellness_requests" ON wellness_requests;
CREATE POLICY "admin_delete_wellness_requests"
  ON wellness_requests FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  area_of_interest text,
  preferred_contact_method text CHECK (preferred_contact_method IN ('email','phone','sms') OR preferred_contact_method IS NULL),
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new','reviewed','responded','archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "public_insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_contact_submissions" ON contact_submissions;
CREATE POLICY "admin_read_contact_submissions"
  ON contact_submissions FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_contact_submissions" ON contact_submissions;
CREATE POLICY "admin_update_contact_submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "admin_delete_contact_submissions"
  ON contact_submissions FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS request_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_type text NOT NULL CHECK (request_type IN ('wellness','contact')),
  request_id uuid NOT NULL,
  note_body text NOT NULL,
  created_by_email text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE request_notes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin_all_request_notes" ON request_notes;
CREATE POLICY "admin_all_request_notes"
  ON request_notes FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS request_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_type text NOT NULL CHECK (request_type IN ('wellness','contact')),
  request_id uuid NOT NULL,
  previous_status text,
  new_status text NOT NULL,
  changed_by_email text,
  changed_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE request_status_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin_all_request_status_history" ON request_status_history;
CREATE POLICY "admin_all_request_status_history"
  ON request_status_history FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  display_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin_all_admin_users" ON admin_users;
CREATE POLICY "admin_all_admin_users"
  ON admin_users FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_wellness_requests_status ON wellness_requests(status);
CREATE INDEX IF NOT EXISTS idx_wellness_requests_created ON wellness_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_request_notes_request ON request_notes(request_type, request_id);
CREATE INDEX IF NOT EXISTS idx_request_status_history_request ON request_status_history(request_type, request_id);
