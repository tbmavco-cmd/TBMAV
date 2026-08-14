/*
# Add category column to wellness_requests

1. Modified Tables
   - `wellness_requests`
     - Added `category` (text, nullable) — the wellness category selected by the client.
     - Made several columns nullable that are no longer required by the simplified form
       (last_name, state_of_residence, preferred_contact_method, selected_program,
       consultation_format, scheduling_preference).
2. Notes
   - Existing rows are not affected; new column defaults to NULL.
*/

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'wellness_requests'
      AND column_name = 'category'
  ) THEN
    ALTER TABLE wellness_requests ADD COLUMN category text;
  END IF;
END $$;

-- Make previously-required fields nullable for the simplified form
ALTER TABLE wellness_requests ALTER COLUMN last_name DROP NOT NULL;
ALTER TABLE wellness_requests ALTER COLUMN state_of_residence DROP NOT NULL;
ALTER TABLE wellness_requests ALTER COLUMN preferred_contact_method DROP NOT NULL;
ALTER TABLE wellness_requests ALTER COLUMN selected_program DROP NOT NULL;
ALTER TABLE wellness_requests ALTER COLUMN consultation_format DROP NOT NULL;
ALTER TABLE wellness_requests ALTER COLUMN scheduling_preference DROP NOT NULL;
