import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { legalEntitySettings } from '@/config/legalEntity';

const membershipOptions = [
  'Bare Glow Membership',
  'Bare Elite Membership',
  'Other',
];

export function MembershipCancellationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    membership: '',
    requested_date: '',
    reason: '',
    terms_acknowledged: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.terms_acknowledged) {
      setError('Please acknowledge the cancellation terms.');
      return;
    }
    const { error: dbError } = await supabase.from('membership_cancellations').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      membership: form.membership,
      requested_date: form.requested_date,
      reason: form.reason || null,
      terms_acknowledged: form.terms_acknowledged,
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
        title="Cancel Membership — The Bare Method"
        description="Cancel your The Bare Method membership online."
        path="/cancel-membership"
        noindex
      />
      <div className="border-b border-ink-900/5 bg-blush-100">
        <div className="container-bare py-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-gold-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="mt-4 heading-display text-3xl text-ink-900 sm:text-4xl">Cancel Your Membership</h1>
          <p className="mt-2 text-sm text-ink-700">
            We're sorry to see you go. You can cancel your membership using the form below — no phone call required.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-bare max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-gold-300 bg-blush-50 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-gold-700" />
              <h2 className="mt-4 font-display text-2xl text-ink-900">Cancellation Request Received</h2>
              <p className="mt-2 text-ink-700">
                Your cancellation request has been received and is pending verification. A confirmation
                email has been sent to the address you provided. Your expected cancellation effective date
                is <strong>{form.requested_date}</strong>. Membership benefits remain available through the
                end of the paid billing period unless otherwise stated.
              </p>
              <p className="mt-4 text-sm text-ink-700/70">
                Questions? Contact {legalEntitySettings.membershipCancellationEmail}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Membership *</label>
                  <select required value={form.membership} onChange={(e) => setForm({ ...form, membership: e.target.value })} className="input-bare">
                    <option value="">Select…</option>
                    {membershipOptions.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-900">Requested Cancellation Date *</label>
                <input type="date" required value={form.requested_date} onChange={(e) => setForm({ ...form, requested_date: e.target.value })} className="input-bare" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-900">Reason (optional)</label>
                <textarea rows={3} value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} className="input-bare" />
              </div>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={form.terms_acknowledged} onChange={(e) => setForm({ ...form, terms_acknowledged: e.target.checked })} className="mt-1 h-4 w-4 rounded border-blush-200 text-gold-500" />
                <span className="text-sm text-ink-700">
                  I understand that cancellation will prevent future renewal charges after the cancellation
                  becomes effective. Membership benefits remain available through the end of the paid billing
                  period unless otherwise stated. I have reviewed the{' '}
                  <Link to="/legal/membership-terms" className="text-gold-600 underline">Membership Terms</Link>.
                </span>
              </label>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" className="btn-gold">Submit Cancellation Request</button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

