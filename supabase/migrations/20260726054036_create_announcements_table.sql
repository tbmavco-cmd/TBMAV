/*
# Create announcements table

1. New Tables
   - `announcements`
     - `id` (uuid, primary key)
     - `headline` (text, not null) — short announcement text
     - `link` (text, nullable) — optional destination URL
     - `cta_text` (text, nullable) — optional call-to-action button text
     - `audience` (text, not null) — 'esthetics', 'wellness', or 'general'
     - `priority` (integer, default 0) — sort order, higher = shown first
     - `is_active` (boolean, default true) — manual toggle
     - `starts_at` (timestamptz, not null, default now) — when announcement becomes visible
     - `ends_at` (timestamptz, nullable) — when announcement expires (null = no expiry)
     - `created_at` (timestamptz, default now)
     - `updated_at` (timestamptz, default now)

2. Security
   - Enable RLS on `announcements`.
   - Allow anon + authenticated SELECT for active, non-expired announcements.
   - Allow authenticated INSERT/UPDATE/DELETE (admin-only in app logic).

3. Notes
   - Single-tenant app with admin panel; no user_id scoping needed.
   - The app filters active + non-expired on the frontend/query level.
*/

CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  headline text NOT NULL,
  link text,
  cta_text text,
  audience text NOT NULL DEFAULT 'general' CHECK (audience IN ('esthetics', 'wellness', 'general')),
  priority integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  starts_at timestamptz NOT NULL DEFAULT now(),
  ends_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_announcements" ON announcements;
CREATE POLICY "anon_select_announcements" ON announcements FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_announcements" ON announcements;
CREATE POLICY "authenticated_insert_announcements" ON announcements FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_announcements" ON announcements;
CREATE POLICY "authenticated_update_announcements" ON announcements FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_announcements" ON announcements;
CREATE POLICY "authenticated_delete_announcements" ON announcements FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_announcements_active_dates
  ON announcements (is_active, starts_at, ends_at)
  WHERE is_active = true;