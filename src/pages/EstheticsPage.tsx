import { Check, ArrowRight, ShieldCheck, Lock, Heart, Clock, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Seo } from '@/components/Seo';
import { PageHeader, SectionHeading } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { siteConfig } from '@/config/site';
import { estheticFocusAreas, type EstheticFocus } from '@/data/estheticServices';

function FocusAreaCard({ area }: { area: EstheticFocus }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = area.icon;
  const d = area.details;

  return (
    <div className="card flex flex-col p-8">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-gold-500 shadow-sm">
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </div>
      <p className="eyebrow mb-2">{area.eyebrow}</p>
      <h3 className="font-display text-2xl font-medium text-ink-900">{area.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-700">{area.description}</p>

      <div className="mt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-gold-600">
          Common Concerns Addressed
        </h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {area.concerns.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-ink-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-gold-600">
          Techniques & Technologies
        </h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {area.techniques.map((t) => (
            <li
              key={t}
              className="rounded-full bg-white border border-ink-900/10 px-3 py-1.5 text-xs font-medium text-ink-700"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Treatment Details - Expandable */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
      >
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        Treatment Details
      </button>

      {expanded && (
        <div className="mt-4 space-y-4 rounded-2xl bg-cream-100 p-6 animate-fade-in">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">Best For</h5>
            <p className="mt-1 text-sm text-ink-700">{d.bestFor}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">Benefits</h5>
            <ul className="mt-2 space-y-1">
              {d.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">Treatment Time</h5>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-700">
                <Clock className="h-4 w-4 text-gold-500" /> {d.treatmentTime}
              </p>
            </div>
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">Downtime</h5>
              <p className="mt-1 text-sm text-ink-700">{d.downtime}</p>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">Recommended Series</h5>
            <p className="mt-1 text-sm text-ink-700">{d.recommendedSeries}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">FAQ</h5>
            <dl className="mt-2 space-y-3">
              {d.faq.map((item) => (
                <div key={item.q}>
                  <dt className="text-sm font-medium text-ink-900">{item.q}</dt>
                  <dd className="mt-0.5 text-sm text-ink-700">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          {d.membershipCredits && (
            <p className="flex items-center gap-2 text-sm font-medium text-gold-600">
              <Zap className="h-4 w-4" /> Membership credits accepted
            </p>
          )}
        </div>
      )}

      <div className="mt-6 rounded-2xl bg-cream-100 p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">
          May Be Ideal For
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{area.idealFor}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={siteConfig.salonLofts.servicesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Book This Service
        </a>
        <span className="inline-flex items-center gap-1.5 text-sm text-ink-700/70">
          <ArrowRight className="h-4 w-4 text-gold-500" />
          Suitability determined during consultation
        </span>
      </div>
    </div>
  );
}

export function EstheticsPage() {
  return (
    <>
      <Seo
        title="Esthetics | The Bare Method — Burnsville, MN"
        description="The Bare Method specializes in head-to-toe skin treatments, intimate-area care, advanced microneedling, and confidence-focused body contouring in Burnsville, Minnesota. Private, personalized, and never judged."
        path="/esthetics"
      />
      <PageHeader
        eyebrow="The Bare Method Esthetics"
        title="Care for the Concerns You Do Not Always Talk About"
        subtitle="The Bare Method specializes in head-to-toe skin treatments, intimate-area care, advanced rejuvenation, and confidence-focused treatments for the concerns that are often hidden, overlooked, or difficult to discuss. Every service is personalized, respectful, and designed to help you feel more comfortable in your skin."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={siteConfig.salonLofts.servicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Esthetics
          </a>
          <Link
            to="/contact"
            className="btn-outline"
          >
            Gift Cards
          </Link>
          <Link
            to="/memberships"
            className="btn-outline"
          >
            Memberships
          </Link>
        </div>
      </PageHeader>

      {/* TRUST SECTION */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Our Approach"
            title="Private. Personalized. Never Judged."
            subtitle="We understand that skin and intimate-area concerns can feel deeply personal. Our approach is discreet, educational, and tailored to your comfort, goals, and skin needs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Lock, title: 'Private & Discreet', text: 'A calm, confidential space where your concerns are heard and respected.' },
              { icon: Heart, title: 'Personalized Care', text: 'Every plan is tailored to your goals, comfort, and skin needs.' },
              { icon: ShieldCheck, title: 'Never Judged', text: 'Warm, inclusive, and educational — never shame-based or clinical.' },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="card flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 text-gold-500">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink-900">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUR FOCUS AREAS */}
      <section className="section bg-cream-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Specialized Focus Areas"
            title="What The Bare Method Treats"
            subtitle="Not a generic facial studio. A specialized destination for the concerns clients may not feel comfortable discussing elsewhere."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {estheticFocusAreas.map((area) => (
              <FocusAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* CAREFUL WORDING NOTE */}
      <section className="section">
        <div className="container-bare">
          <div className="mx-auto max-w-3xl rounded-2xl bg-cream-100 p-8 text-center">
            <h3 className="font-display text-xl font-medium text-ink-900">
              Individual Results Vary
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Services are designed to support your goals and may improve the appearance of skin and
              body concerns. Treatments are customized based on your skin and body goals, and
              suitability is determined during consultation. The Bare Method does not guarantee
              inches lost, weight loss, fat loss, or permanent results.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section bg-cream-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Booking & Payments"
            title="Esthetic Booking Through Salon Lofts"
            subtitle="All esthetic bookings and payments are handled securely through Salon Lofts."
          />
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white p-6 text-center">
            <p className="text-sm leading-relaxed text-ink-700">
              We use Salon Lofts for esthetic scheduling and payments. This keeps your esthetic experience seamless and secure.
            </p>
            <a
              href={siteConfig.salonLofts.servicesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 btn-gold"
            >
              Book Esthetics
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
