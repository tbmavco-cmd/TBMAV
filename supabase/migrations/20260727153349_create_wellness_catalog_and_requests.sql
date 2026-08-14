/*
# Create Wellness Catalog, Requests, and HRT Assessments tables

1. New Tables
  - `wellness_catalog` — admin-managed product/service catalog for the wellness request shop
    - `id` (uuid, PK)
    - `slug` (text, unique) — URL-safe identifier
    - `category` (text) — goal category grouping
    - `name` (text) — public display name
    - `description` (text) — plain-language overview
    - `why_ask` (text) — "Why someone may ask about it"
    - `available_forms` (text[]) — forms when approved
    - `starting_consultation_price` (numeric, nullable)
    - `medication_price_visible` (boolean, default false)
    - `labs_required` (boolean, default false)
    - `labs_separate_pricing` (boolean, default false)
    - `secure_intake_link` (text, nullable)
    - `payment_link` (text, nullable)
    - `state_availability` (text[], nullable) — list of state codes
    - `disclaimer` (text, nullable)
    - `sort_order` (int, default 0)
    - `is_active` (boolean, default false) — hidden until manually approved
    - `approved_clinical` (boolean, default false)
    - `approved_pharmacy` (boolean, default false)
    - `approved_merchant` (boolean, default false)
    - `legal_review_status` (text, default 'pending')
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  - `wellness_requests` — client request submissions
    - `id` (uuid, PK)
    - `client_name` (text)
    - `client_email` (text)
    - `client_phone` (text, nullable)
    - `requested_items` (jsonb) — array of {catalog_id, name, category}
    - `wellness_goals` (text, nullable) — free-text wellness goals
    - `consultation_preference` (text, nullable)
    - `status` (text, default 'secure_intake_required')
    - `created_at` (timestamptz)

  - `hrt_assessments` — public HRT questionnaire submissions
    - `id` (uuid, PK)
    - `life_stage` (text)
    - `goal_categories` (text[])
    - `preferred_format` (text, nullable)
    - `already_know_what_you_want` (boolean, default false)
    - `hormone_interests` (text[])
    - `delivery_preference` (text, nullable)
    - `state_of_residence` (text)
    - `contact_name` (text)
    - `contact_email` (text)
    - `contact_phone` (text, nullable)
    - `consultation_preference` (text, nullable)
    - `status` (text, default 'pending_intake')
    - `created_at` (timestamptz)

2. Security
  - RLS enabled on all tables.
  - `wellness_catalog`: anon + authenticated can SELECT active items only; admin full CRUD via service role.
  - `wellness_requests`: anon + authenticated can INSERT; no public SELECT/UPDATE/DELETE.
  - `hrt_assessments`: anon + authenticated can INSERT; no public SELECT/UPDATE/DELETE.

3. Notes
  - All catalog items default to hidden (is_active = false) until admin approves.
  - Requests only collect basic admin info; no medical details stored publicly.
  - No sensitive health data in these tables.
*/

-- Wellness Catalog
CREATE TABLE IF NOT EXISTS wellness_catalog (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  why_ask text NOT NULL DEFAULT '',
  available_forms text[] DEFAULT '{}',
  starting_consultation_price numeric,
  medication_price_visible boolean NOT NULL DEFAULT false,
  labs_required boolean NOT NULL DEFAULT false,
  labs_separate_pricing boolean NOT NULL DEFAULT false,
  secure_intake_link text,
  payment_link text,
  state_availability text[],
  disclaimer text,
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT false,
  approved_clinical boolean NOT NULL DEFAULT false,
  approved_pharmacy boolean NOT NULL DEFAULT false,
  approved_merchant boolean NOT NULL DEFAULT false,
  legal_review_status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE wellness_catalog ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_active_catalog" ON wellness_catalog;
CREATE POLICY "anon_select_active_catalog" ON wellness_catalog FOR SELECT
  TO anon, authenticated USING (is_active = true);

DROP POLICY IF EXISTS "service_role_all_catalog" ON wellness_catalog;
CREATE POLICY "service_role_all_catalog" ON wellness_catalog FOR ALL
  TO service_role USING (true) WITH CHECK (true);

-- Wellness Requests
CREATE TABLE IF NOT EXISTS wellness_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text,
  requested_items jsonb NOT NULL DEFAULT '[]',
  wellness_goals text,
  consultation_preference text,
  status text NOT NULL DEFAULT 'secure_intake_required',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE wellness_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_requests" ON wellness_requests;
CREATE POLICY "anon_insert_requests" ON wellness_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_requests" ON wellness_requests;
CREATE POLICY "anon_select_requests" ON wellness_requests FOR SELECT
  TO anon, authenticated USING (false);

DROP POLICY IF EXISTS "anon_update_requests" ON wellness_requests;
CREATE POLICY "anon_update_requests" ON wellness_requests FOR UPDATE
  TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_requests" ON wellness_requests;
CREATE POLICY "anon_delete_requests" ON wellness_requests FOR DELETE
  TO anon, authenticated USING (false);

-- HRT Assessments
CREATE TABLE IF NOT EXISTS hrt_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  life_stage text NOT NULL,
  goal_categories text[] NOT NULL DEFAULT '{}',
  preferred_format text,
  already_know_what_you_want boolean NOT NULL DEFAULT false,
  hormone_interests text[] NOT NULL DEFAULT '{}',
  delivery_preference text,
  state_of_residence text NOT NULL,
  contact_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  consultation_preference text,
  status text NOT NULL DEFAULT 'pending_intake',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE hrt_assessments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_hrt" ON hrt_assessments;
CREATE POLICY "anon_insert_hrt" ON hrt_assessments FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_hrt" ON hrt_assessments;
CREATE POLICY "anon_select_hrt" ON hrt_assessments FOR SELECT
  TO anon, authenticated USING (false);

DROP POLICY IF EXISTS "anon_update_hrt" ON hrt_assessments;
CREATE POLICY "anon_update_hrt" ON hrt_assessments FOR UPDATE
  TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_hrt" ON hrt_assessments;
CREATE POLICY "anon_delete_hrt" ON hrt_assessments FOR DELETE
  TO anon, authenticated USING (false);

-- Index for catalog browsing
CREATE INDEX IF NOT EXISTS idx_wellness_catalog_category ON wellness_catalog(category);
CREATE INDEX IF NOT EXISTS idx_wellness_catalog_active ON wellness_catalog(is_active) WHERE is_active = true;
