import { ArrowRight, Shield, HeartPulse, Leaf, Activity, Brain, ExternalLink } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';

const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

const wellnessServices = [
  { icon: Activity, title: 'Weight & Metabolic Health', desc: 'Provider-led programs supporting sustainable weight management and metabolic optimization.' },
  { icon: Brain, title: 'Hormone Wellness', desc: 'Individualized hormone evaluation and management guided by licensed providers.' },
  { icon: Leaf, title: 'Longevity & Recovery', desc: 'Regenerative protocols and recovery support under clinical supervision.' },
  { icon: HeartPulse, title: 'Telehealth & Ongoing Care', desc: 'Convenient virtual follow-ups and continuous provider support from anywhere.' },
  { icon: Shield, title: 'Lab Work & Diagnostics', desc: 'Comprehensive lab panels to inform clinical decisions and track progress.' },
];

export function WellnessPage() {
  return (
    <>
      <Seo
        title="Wellness Referrals | The Bare Method"
        description="Provider-led wellness services are offered through My Bare Method (MyBareMethod.com), a separate company."
        path="/wellness"
        noindex
      />

      {/* ====== HERO ====== */}
      <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/0 via-ink-900/60 to-ink-900" />
        <div className="container-bare relative text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-5">
            Provider-Led Wellness
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight text-balance">
            Your Wellness Journey,<br className="hidden sm:block" /> Guided by Experts
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 text-balance">
            Provider-led wellness services — including weight management, hormone therapy, and telehealth — are offered through My Bare Method, a separate company at MyBareMethod.com.
          </p>
          <div className="mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={MYBAREMETHOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Visit MyBareMethod.com
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60 max-w-xl mx-auto">
            You will be leaving TheBareMethodMN.com. MyBareMethod.com is a separate company with its own providers, policies, and patient portal.
          </p>
        </div>
      </section>

      {/* ====== ABOUT WELLNESS SERVICES ====== */}
      <section className="section bg-blush-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Provider-Led Wellness"
            subtitle="Our wellness services are delivered by licensed providers through a dedicated clinical platform — separate from our esthetics practice."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wellnessServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="card p-6 flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blush-50 text-gold-700">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Started Is Simple"
            subtitle="All wellness services are managed through My Bare Method (MyBareMethod.com) — a separate company with its own providers and patient portal."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Visit MyBareMethod.com', desc: 'Head to the dedicated wellness platform to explore available services and programs.' },
              { step: 2, title: 'Complete Your Intake', desc: 'Create an account and complete your medical intake through the secure patient portal.' },
              { step: 3, title: 'Provider Review & Care', desc: 'A licensed provider reviews your information and guides your personalized wellness plan.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white font-display text-lg font-medium">
                  {s.step}
                </div>
                <h3 className="mt-4 font-display text-base font-medium text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== IMPORTANT NOTICE ====== */}
      <section className="section bg-blush-100">
        <div className="container-bare">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-gold-400/30 bg-white p-8 sm:p-10 text-center">
              <Shield className="mx-auto h-10 w-10 text-gold-500 mb-4" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-medium text-ink-900 mb-4">Important Information</h2>
              <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                <p>
                  Provider-led wellness services are offered through <strong className="text-ink-900">My Bare Method</strong> (MyBareMethod.com), which operates as a separate company with its own licensed providers, clinical policies, privacy practices, and patient portal.
                </p>
                <p>
                  TheBareMethodMN.com (this website) is the home of The Bare Method esthetics practice. When you visit MyBareMethod.com for wellness services, you are leaving this website and entering a different company's platform.
                </p>
                <p>
                  No medical intake, telehealth, prescriptions, or patient records are handled through this website.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={MYBAREMETHOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Visit MyBareMethod.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-500">
                You will be leaving TheBareMethodMN.com for a separate website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="section bg-ink-900">
        <div className="container-bare text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
            Ready to Start?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-white leading-tight text-balance">
            Begin Your Wellness Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-balance">
            Visit MyBareMethod.com to explore provider-led wellness options, create your account, and get started with a licensed provider.
          </p>
          <div className="mt-8">
            <a
              href={MYBAREMETHOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Visit MyBareMethod.com
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/50 max-w-lg mx-auto">
            My Bare Method (MyBareMethod.com) is a separate company. Its providers, policies, and patient portal are independent from The Bare Method esthetics services.
          </p>
        </div>
      </section>
    </>
  );
}

