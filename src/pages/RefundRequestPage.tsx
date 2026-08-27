import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { legalEntitySettings } from '@/config/legalEntity';

const purchaseTypes = [
  'Esthetic service',
  'Membership',
  'Consultation',
  'Retail product',
  'Education',
  'Gift card',
  'Duplicate charge',
  'Billing error',
  'Other',
];

export function RefundRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    order_number: '',
    transaction_date: '',
    purchase_type: '',
    reason: '',
    requested_resolution: '',
    no_medical_info_confirmed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.no_medical_info_confirmed) {
      setError('Please confirm that no medical information is included in your submission.');
      return;
    }
    const { error: dbError } = await supabase.from('refund_requests').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      order_number: form.order_number || null,
      transaction_date: form.transaction_date || null,
      purchase_type: form.purchase_type,
      reason: form.reason || null,
      requested_resolution: form.requested_resolution || null,
      no_medical_info_confirmed: form.no_medical_info_confirmed,
    });
    if (dbError) {
      setError('Something went wrong. Please try again or contact us directly.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Refund Request — The Bare Method"
        description="Submit a refund or billing-review request."
        path="/refund-request"
      />
      <div className="border-b border-ink-900/5 bg-cream-100">
        <div className="container-bare py-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-gold-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="mt-4 heading-display text-3xl text-ink-900 sm:text-4xl">Refund or Billing Review Request</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-bare max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
              <h2 className="mt-4 font-display text-2xl text-ink-900">Request Received</h2>
              <p className="mt-2 text-ink-700">
                Your request has been received for review. Submission does not guarantee a refund.
                We will contact you at the email address provided.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <p className="text-sm text-amber-800">
                    Do not submit diagnoses, medication information, laboratory results or other
                    sensitive health information through this form. This request page is for website
                    and esthetics account matters only.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-bare"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-bare"
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-bare"
                    />
                  </Field>
                  <Field label="Order or Invoice Number">
                    <input
                      type="text"
                      value={form.order_number}
                      onChange={(e) => setForm({ ...form, order_number: e.target.value })}
                      className="input-bare"
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Transaction Date">
                    <input
                      type="date"
                      value={form.transaction_date}
                      onChange={(e) => setForm({ ...form, transaction_date: e.target.value })}
                      className="input-bare"
                    />
                  </Field>
                  <Field label="Type of Purchase" required>
                    <select
                      required
                      value={form.purchase_type}
                      onChange={(e) => setForm({ ...form, purchase_type: e.target.value })}
                      className="input-bare"
                    >
                      <option value="">Select…</option>
                      {purchaseTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Reason for Request">
                  <textarea
                    rows={3}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="input-bare"
                  />
                </Field>
                <Field label="Requested Resolution">
                  <textarea
                    rows={3}
                    value={form.requested_resolution}
                    onChange={(e) => setForm({ ...form, requested_resolution: e.target.value })}
                    className="input-bare"
                  />
                </Field>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.no_medical_info_confirmed}
                    onChange={(e) => setForm({ ...form, no_medical_info_confirmed: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-cream-300 text-gold-500"
                  />
                  <span className="text-sm text-ink-700">
                    I confirm that this submission does not include diagnoses, medication
                    information, laboratory results, or other medical information.
                  </span>
                </label>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" className="btn-gold">Submit Request</button>
              </form>
              <p className="mt-4 text-xs text-ink-700/60">
                Your request has been received for review. Submission does not guarantee a refund.
                For questions, contact {legalEntitySettings.customerServiceEmail}.
              </p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      {children}
    </div>
  );
}
