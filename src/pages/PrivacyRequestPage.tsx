import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { legalEntitySettings } from '@/config/legalEntity';

const requestTypes = [
  'Access my data',
  'Correct my data',
  'Delete my data',
  'Opt out of marketing',
  'Opt out of SMS',
  'Change cookie preferences',
  'General privacy inquiry',
];

export function PrivacyRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    request_type: '',
    details: '',
    no_medical_info_confirmed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.no_medical_info_confirmed) {
      setError('Please confirm that no medical information is included in your submission.');
      return;
    }
    const { error: dbError } = await supabase.from('privacy_requests').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      request_type: form.request_type,
      details: form.details || null,
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
        title="Privacy Request — The Bare Method"
        description="Submit a privacy request to access, correct, or delete your data."
        path="/privacy-request"
      />
      <div className="border-b border-ink-900/5 bg-cream-100">
        <div className="container-bare py-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-gold-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="mt-4 heading-display text-3xl text-ink-900 sm:text-4xl">Privacy Request</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-bare max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
              <h2 className="mt-4 font-display text-2xl text-ink-900">Request Received</h2>
              <p className="mt-2 text-ink-700">
                We will evaluate and respond to verified privacy requests as required by applicable law.
                We will contact you at the email address provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm text-amber-800">
                  Do not submit medical information through this form. Medical information must be
                  submitted through the secure patient portal.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-bare" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-bare" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-bare" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Request Type *</label>
                  <select required value={form.request_type} onChange={(e) => setForm({ ...form, request_type: e.target.value })} className="input-bare">
                    <option value="">Select…</option>
                    {requestTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-900">Details</label>
                <textarea rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="input-bare" />
              </div>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={form.no_medical_info_confirmed} onChange={(e) => setForm({ ...form, no_medical_info_confirmed: e.target.checked })} className="mt-1 h-4 w-4 rounded border-cream-300 text-gold-500" />
                <span className="text-sm text-ink-700">
                  I confirm that this submission does not include medical information.
                </span>
              </label>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" className="btn-gold">Submit Privacy Request</button>
              <p className="text-xs text-ink-700/60">
                We will evaluate and respond to verified privacy requests as required by applicable law.
                For questions, contact {legalEntitySettings.privacyEmail}.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
