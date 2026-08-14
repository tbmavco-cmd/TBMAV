import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';
import { CreditCard, Clock, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const CHERRY_URL = 'https://pay.withcherry.com/thebaremethod';

const benefits = [
  {
    icon: CreditCard,
    title: 'Up to 0% APR',
    description: 'Qualified applicants may receive promotional financing with zero interest.',
  },
  {
    icon: Clock,
    title: 'Up to 12 Months',
    description: 'Flexible plans that let you spread your investment over time.',
  },
  {
    icon: ShieldCheck,
    title: 'No Hard Credit Check',
    description: 'Pre-qualify in seconds with no impact to your credit score.',
  },
  {
    icon: Sparkles,
    title: 'Instant Approval',
    description: 'Apply before your appointment and know your budget upfront.',
  },
];

const steps = [
  { number: '01', title: 'Apply Online', description: 'Quick application — results in seconds.' },
  { number: '02', title: 'Get Approved', description: 'See your available amount instantly.' },
  { number: '03', title: 'Book & Enjoy', description: 'Use your approval at checkout.' },
];

export function FinancingPage() {
  return (
    <>
      <Seo
        title="Beauty Investment Plans | The Bare Method"
        description="Flexible beauty investment plans — up to 0% APR for up to 12 months through Cherry. Invest in your confidence with monthly payments."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent" />
        <div className="container-bare relative text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-6">
            Flexible Beauty Investment Plans Available
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-cream-50 leading-tight tracking-tight">
            Invest in Your Confidence<br />
            <span className="text-gold-400">with Flexible Monthly Payments</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-cream-200/80">
            Up to 0% financing for up to 12 months through Cherry. No hard credit check required.
          </p>
          <div className="mt-10">
            <a
              href={CHERRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base inline-flex items-center gap-2 px-8 py-4"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-nude-50">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Why Cherry"
            title="Beautiful Treatments, Beautiful Terms"
            subtitle="Flexible financing designed for self-care investments."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-gold-400/20 bg-white p-6 transition-all hover:border-gold-400/50 hover:shadow-lg hover:shadow-gold-400/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-500 transition-colors group-hover:bg-gold-400/20">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-700/80 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-cream-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="How It Works"
            title="Three Simple Steps"
            subtitle="From application to appointment in minutes."
          />
          <div className="mt-14 mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent hidden sm:block" />
              <div className="space-y-10">
                {steps.map((s) => (
                  <div key={s.number} className="relative flex gap-6 items-start">
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-gold-400 font-display text-xl font-semibold shadow-lg">
                      {s.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-xl font-semibold text-ink-900">{s.title}</h3>
                      <p className="mt-1 text-ink-700/80">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink-900">
        <div className="container-bare text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
              Ready to Get Started?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-cream-50">
              See What You Qualify For
            </h2>
            <p className="mt-4 text-cream-200/70 max-w-md mx-auto">
              Pre-qualify in seconds with no impact to your credit score. Know your budget before your first visit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CHERRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base inline-flex items-center gap-2 px-8 py-4"
              >
                Apply with Cherry
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`sms:${siteConfig.business.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream-200/30 px-8 py-4 text-base font-medium text-cream-50 transition-colors hover:bg-cream-50/10"
              >
                <MessageCircle className="h-4 w-4" />
                Text the Team
              </a>
            </div>
            <p className="mt-6 text-xs text-cream-200/50">
              Financing provided by Cherry Technologies, Inc. Subject to credit approval. Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
