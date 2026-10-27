import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    storageKey: 'bare-method-auth',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
  global: {
    headers: { 'x-application-name': 'the-bare-method' },
  },
});

export type WellnessRequestRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  state_of_residence: string;
  preferred_contact_method: string;
  selected_program: string;
  consultation_format: string;
  scheduling_preference: string | null;
  admin_message: string | null;
  consent_email: boolean;
  consent_sms: boolean;
  status: string;
  invoice_link: string | null;
  invoice_total_cents: number | null;
  created_at: string;
  updated_at: string;
};

export type ContactSubmissionRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  area_of_interest: string | null;
  preferred_contact_method: string | null;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type RequestNoteRow = {
  id: string;
  request_type: 'wellness' | 'contact';
  request_id: string;
  note_body: string;
  created_by_email: string | null;
  created_at: string;
};

export type RequestStatusHistoryRow = {
  id: string;
  request_type: 'wellness' | 'contact';
  request_id: string;
  previous_status: string | null;
  new_status: string;
  changed_by_email: string | null;
  changed_at: string;
};

// These are the 5 simplified statuses for the DIY phased build.
// Each wellness request starts as 'awaiting_review' and moves through these.
export const wellnessStatuses = [
  'awaiting_review',
  'intake_required',
  'invoice_sent',
  'paid',
  'cancelled',
] as const;

export const contactStatuses = ['new', 'reviewed', 'responded', 'archived'] as const;

export const wellnessStatusLabels: Record<string, string> = {
  awaiting_review: 'Awaiting Review',
  intake_required: 'Intake Required',
  invoice_sent: 'Invoice Sent',
  paid: 'Paid',
  cancelled: 'Cancelled',
};

export const contactStatusLabels: Record<string, string> = {
  new: 'New',
  reviewed: 'Reviewed',
  responded: 'Responded',
  archived: 'Archived',
};

