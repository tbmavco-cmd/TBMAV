/*
# Simplify Wellness Request Statuses

1. Purpose
   Simplifies the wellness_requests status values to match the DIY phased
   build requirement: Awaiting Review, Invoice Sent, Paid, Intake Required,
   Cancelled. Removes the intermediate statuses (invoice_ready,
   follow_up_required, medical_intake_required renamed to intake_required).

2. Changes
   - Drops the old CHECK constraint on wellness_requests.status
   - Adds a new CHECK constraint with the simplified status list
   - Migrates any existing rows: invoice_ready → invoice_sent,
     medical_intake_required → intake_required, follow_up_required → paid

3. Security
   No RLS policy changes. Existing policies remain in effect.
*/

ALTER TABLE wellness_requests DROP CONSTRAINT IF EXISTS wellness_requests_status_check;

UPDATE wellness_requests
  SET status = 'invoice_sent'
  WHERE status = 'invoice_ready';

UPDATE wellness_requests
  SET status = 'intake_required'
  WHERE status = 'medical_intake_required';

UPDATE wellness_requests
  SET status = 'paid'
  WHERE status = 'follow_up_required';

ALTER TABLE wellness_requests
  ADD CONSTRAINT wellness_requests_status_check
  CHECK (status IN ('awaiting_review','intake_required','invoice_sent','paid','cancelled'));
