import { Link } from 'react-router-dom';
import {
  Sparkles,
  HeartPulse,
  Award,
  Users,
  ShieldCheck,
  Lock,
  Star,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader, SectionHeading } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { siteConfig } from '@/config/site';
import { testimonials } from '@/data/testimonials';

const pathways = [
  {
    icon: Sparkles,
    name: 'Esthetics',
    description: 'Head-to-toe skin treatments, intimate-area care, waxing, body contouring, and advanced rejuvenation.',
  },
  {
    icon: HeartPulse,
    name: 'Provider-Led Wellness',
    description: 'Weight management, hormones, and telehealth — offered through My Bare Method (MyBareMethod.com).',
  },
];

const values = [
  { icon: Award, title: 'Ethics & Integrity', text: 'We grow through ethics, education, and collaboration — not unnecessary competition.' },
  { icon: Users, title: 'Inclusive & Welcoming', text: 'A luxury experience that is warm and approachable for everyone.' },
  { icon: HeartPulse, title: 'Results-Focused', text: 'Personalized plans designed for real, lasting results.' },
  { icon: ShieldCheck, title: 'Privacy First', text: 'Esthetic and medical records kept separate and secure.' },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Rina | Advanced Practice Esthetician in Burnsville, MN"
        description={'Meet Carina "Rina" Hebert, Advanced Practice Esthetician and founder of The Bare Method, Burnsville\'s private-suite studio for intimate and body skin care.'}
        path="/about"
      />
      <PageHeader
        eyebrow="About The Bare Method"
        title="Your Skin. Your Wellness. Your Method."
        subtitle="The Bare Method combines specialized body and intimate-area Esthetics and personalized provider-led Wellness in a private and supportive environment."
      />

      {/* Founder */}
      <section className="section">
        <div className="container-bare grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/studio/studio-lounge-mural.jpg"
            alt="The private studio lounge at The Bare Method"
            loading="lazy"
            width={1070}
            height={1650}
            className="rounded-3xl shadow-lg order-2 lg:order-1 w-full aspect-[4/5] object-cover object-top"
          />
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Meet Rina</p>
            <h2 className="heading-display text-3xl text-ink-900 sm:text-4xl">
              Carina "Rina" Hebert
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-600">
              Founder
            </p>
            <p className="mt-2 text-sm text-ink-700/80">
              Advanced Practice Esthetician — Minnesota &nbsp;|&nbsp; Master Esthetician — California
            </p>
            <div className="mt-5 space-y-4 text-ink-700 leading-relaxed">
              <p>
                With nearly a decade of experience in the beauty industry, Rina specializes in
                advanced skin rejuvenation, head-to-toe skin concerns, intimate-area care, waxing, body
                contouring, and customized treatments for the insecurities clients do not always
                feel comfortable discussing.
              </p>
              <p>
                She created The Bare Method to provide a private, elevated, and judgment-free
                experience where clients feel seen, respected, and supported in their skin and
                Wellness goals.
              </p>
              <p className="text-sm text-ink-700/80">
                Rina provides Esthetics services within her qualifications and scope. Medical
                evaluations, clinical care, and prescribing decisions are
                performed by appropriately licensed medical professionals.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/esthetics" className="btn-outline">
                Explore Esthetics
              </Link>
              <a
                href={siteConfig.salonLofts.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Book with Rina
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="section bg-blush-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="One Brand, Two Pathways"
            title="Specialized Esthetics and Personalized Wellness"
            subtitle="Two connected service pathways under one elevated experience — each with its own booking, intake, and clinical process where required."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.name} className="card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-500">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink-900">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-blush-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Believe"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-500">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="section">
        <div className="container-bare">
          <div className="rounded-2xl bg-blush-100 p-6">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
              <p className="text-sm leading-relaxed text-ink-700">
                Please do not submit medical history, diagnoses, medication details, allergies,
                pregnancy information, laboratory results, photographs, or other sensitive health
                information through this website. Medical information must be submitted through the
                designated secure patient portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-blush-100">
        <div className="container-bare">
          <SectionHeading eyebrow="Client Love" title="What Our Clients Say" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink-700">"{t.text}"</p>
                <p className="mt-4 text-sm font-medium text-ink-900">
                  {t.name} <span className="text-ink-700/60">· {t.location}</span>
                </p>
                <p className="text-xs text-gold-600">{t.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blush-100"><div className="container-bare grid items-center gap-10 lg:grid-cols-2"><img src="/images/studio/confidence-client-mural.jpg" alt="Client beside the studio confidence mural" loading="lazy" width={1400} height={1120} className="mx-auto max-h-[600px] rounded-3xl object-contain" /><div><p className="eyebrow">The Bare Method</p><h2 className="heading-display mt-4 text-4xl">Confidence in every stage</h2><div className="divider-gold" /><p className="mt-6 text-muted-500">Personalized care in a private space, focused on how you feel in your skin and your body.</p></div></div></section>
      <FinalCTA />
    </>
  );
}

