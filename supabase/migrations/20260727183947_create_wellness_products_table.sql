/*
# Create wellness_products table for admin-managed product catalog

1. New Tables
   - `wellness_products` — admin-managed catalog of wellness products
     - `id` (uuid, primary key)
     - `name` (text, not null) — product display name
     - `slug` (text, unique) — URL-friendly identifier
     - `category` (text, not null) — category key for filtering
     - `category_label` (text) — display label for category
     - `format` (text) — product form/delivery method
     - `description` (text) — short plain-language description
     - `why_ask` (text) — why clients ask about this
     - `learn_more` (text) — additional information
     - `image_url` (text) — product image path
     - `labs_required` (boolean, default false)
     - `visible` (boolean, default false) — hidden until admin approves
     - `featured` (boolean, default false)
     - `sort_order` (int, default 0)
     - `clinical_approved` (boolean, default false)
     - `pharmacy_approved` (boolean, default false)
     - `merchant_approved` (boolean, default false)
     - `legal_reviewed` (boolean, default false)
     - `state_availability` (text) — comma-separated state codes or 'all'
     - `intake_url` (text) — secure intake URL
     - `created_at` (timestamptz)
     - `updated_at` (timestamptz)

2. Security
   - RLS enabled.
   - Public (anon + authenticated) can SELECT visible products.
   - Only authenticated admins (via is_admin() function) can INSERT/UPDATE/DELETE.
*/

CREATE TABLE IF NOT EXISTS wellness_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  category_label text,
  format text,
  description text,
  why_ask text,
  learn_more text,
  image_url text,
  labs_required boolean NOT NULL DEFAULT false,
  visible boolean NOT NULL DEFAULT false,
  featured boolean NOT NULL DEFAULT false,
  sort_order int NOT NULL DEFAULT 0,
  clinical_approved boolean NOT NULL DEFAULT false,
  pharmacy_approved boolean NOT NULL DEFAULT false,
  merchant_approved boolean NOT NULL DEFAULT false,
  legal_reviewed boolean NOT NULL DEFAULT false,
  state_availability text DEFAULT 'all',
  intake_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE wellness_products ENABLE ROW LEVEL SECURITY;

-- Public can read visible products
DROP POLICY IF EXISTS "anon_select_visible_products" ON wellness_products;
CREATE POLICY "anon_select_visible_products" ON wellness_products FOR SELECT
  TO anon, authenticated USING (visible = true);

-- Admin full access (is_admin() takes no args, reads from JWT)
DROP POLICY IF EXISTS "admin_select_all_products" ON wellness_products;
CREATE POLICY "admin_select_all_products" ON wellness_products FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "admin_insert_products" ON wellness_products;
CREATE POLICY "admin_insert_products" ON wellness_products FOR INSERT
  TO authenticated WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_update_products" ON wellness_products;
CREATE POLICY "admin_update_products" ON wellness_products FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_delete_products" ON wellness_products;
CREATE POLICY "admin_delete_products" ON wellness_products FOR DELETE
  TO authenticated USING (public.is_admin());
