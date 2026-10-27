import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, AlertTriangle, Send, Check } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/config/site';

const areasOfInterest = [
  'Esthetic Services',
  'Wellness',
  'Shop & Products',
  'Memberships',
  'Education',
  'General Inquiry',
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    area_of_interest: '',
    preferred_contact_method: 'email',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const { error: insertError } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        area_of_interest: form.area_of_interest || null,
        preferred_contact_method: form.preferred_contact_method || null,
        message: form.message,
        status: 'new',
      });
      if (insertError) throw insertError;
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', area_of_interest: '', preferred_contact_method: 'email', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact & Hours | The Bare Method, Burnsville MN"
        description="Salon Lofts Burnsville, 14109 Irving Ave S Suite 6. Text 952-333-1202. Tue–Fri 9–6, Sat 9–4. Directions, booking and questions."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We would love to hear from you. Reach out with questions about esthetics, wellness, memberships, or education."
      />

      <section className="section">
        <div className="container-bare grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-700">Contact Information</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href={siteConfig.business.phoneHref} className="flex items-start gap-3 text-ink-700 hover:text-gold-600 transition-colors">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span>{siteConfig.business.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.business.email}`} className="flex items-start gap-3 text-ink-700 hover:text-gold-600 transition-colors">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span>{siteConfig.business.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-ink-700">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span>
                    {siteConfig.business.address.line1}
                    <br />
                    {siteConfig.business.address.city}, {siteConfig.business.address.state}{' '}
                    {siteConfig.business.address.zip}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-ink-700">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <div>
                    {siteConfig.business.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4 text-sm">
                        <span>{h.day}</span>
                        <span className="text-ink-700/70">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="card overflow-hidden">
              <iframe
                title="The Bare Method location"
                src={siteConfig.maps.embedSrc}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-700">Follow Us</h3>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-ink-700 hover:text-gold-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-gold-500" />
                {siteConfig.social.instagramHandle}
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/20">
                  <Check className="h-7 w-7 text-gold-600" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink-900">Message Sent</h3>
                <p className="mt-2 text-ink-700">
                  Thank you for reaching out. We will get back to you soon.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 btn-outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 space-y-5">
                <div className="rounded-xl border border-red-400/30 bg-red-50 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <p className="text-xs leading-relaxed text-red-900">
                      Please do not submit diagnoses, medication details, symptoms, laboratory reports,
                      photographs, or other sensitive health information through this form. Medical
                      information must be submitted through the secure patient portal.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="name">Name</label>
                  <input id="name" required className="input" value={form.name} onChange={(e) => update('name', e.target.value)} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="email">Email</label>
                    <input id="email" type="email" required className="input" value={form.email} onChange={(e) => update('email', e.target.value)} />
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" className="input" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="interest">Area of Interest</label>
                    <select id="interest" className="input" value={form.area_of_interest} onChange={(e) => update('area_of_interest', e.target.value)}>
                      <option value="">Select...</option>
                      {areasOfInterest.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label" htmlFor="contact_method">Preferred Contact Method</label>
                    <select id="contact_method" className="input" value={form.preferred_contact_method} onChange={(e) => update('preferred_contact_method', e.target.value)}>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="sms">SMS</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label" htmlFor="message">Message</label>
                  <textarea id="message" required rows={5} className="input" value={form.message} onChange={(e) => update('message', e.target.value)} />
                </div>

                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">{error}</div>
                )}

                <button type="submit" disabled={submitting} className="btn-gold w-full">
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && <Send className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

