import { Link } from 'react-router-dom';
import {
  Sparkles,
  HeartPulse,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';
import { GoogleLogo } from '@/components/GoogleLogo';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { siteConfig } from '@/config/site';
import { estheticFocusAreas } from '@/data/estheticServices';
import { testimonials } from '@/data/testimonials';
import { results } from '@/data/testimonials';

const trustLine = 'Private suite \u00B7 Customized care \u00B7 Advanced Practice Esthetician \u00B7 Apple Valley';
const MYBAREMETHOD_URL = siteConfig.myBareMethodUrl;

function BookEstheticsButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={siteConfig.vagaro.servicesUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-gold ${className}`}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Esthetics via Vagaro
    </a>
  );
}

function TrustLine() {
  return (
    <p className="text-xs sm:text-sm font-medium text-ink-600/80 tracking-wide">
      {trustLine}
    </p>
  );
}

export function HomePage() {
  const topResults = results.slice(0, 3);

  return (
    <>
      <Seo
        title="The Bare Method | Luxury Esthetics in Apple Valley, MN"
        description="The Bare Method brings local esthetics in Apple Valley together with a clear path to My Bare Method, a separate provider-guided wellness experience."
        path="/"
      />

      {/* ====== HERO — INTRODUCTORY OFFER ABOVE THE FOLD ====== */}
      <section className="relative overflow-hidden bg-cream-100">
        <div className="container-bare grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <p className="eyebrow mb-4">The Bare Method · Apple Valley, Minnesota</p>
            <h1 className="heading-display text-4xl text-ink-900 sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] text-balance">
              Specialized care for the concerns you do not always talk about.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700 text-balance">
              Elevated skincare and body treatments designed to restore confidence in every stage of your journey.
            </p>

            {/* Offer callout */}
            <div className="mt-7 rounded-2xl border border-[#c9a96e]/30 bg-white/70 backdrop-blur-sm p-5 max-w-lg">
              <p className="text-sm font-semibold text-[#c9a96e] uppercase tracking-wide mb-1">New Client Exclusive Offer</p>
              <p className="text-ink-900 font-display text-lg sm:text-xl font-medium">
                Sculpt & Glow 4-in-1 — Just $149
              </p>
              <p className="mt-1 text-sm text-ink-700">EMS Sculpt + RF Skin Tightening + Hydrofacial + Red Light Therapy</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookEstheticsButton />
              <a
                href={MYBAREMETHOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <HeartPulse className="mr-2 h-4 w-4" />
                Explore My Bare Method
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-4">
              <TrustLine />
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="/images/ChatGPT_Image_Jul_25,_2026,_10_54_04_PM_(3).png"
              alt="A confident, warm esthetic environment at The Bare Method"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ====== TWO CHOICES: ESTHETICS / WELLNESS ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Your Path"
            title="Two Ways to Start"
            subtitle="Choose the experience that is right for you."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Esthetics card */}
            <div className="card card-hover group flex flex-col overflow-hidden">
              <img
                src="/images/ChatGPT_Image_Jul_25,_2026,_10_54_03_PM_(1).png"
                alt="Esthetics"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100 text-gold-500">
                  <Sparkles className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-medium text-ink-900">Esthetics</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  Specialized head-to-toe skin care for intimate-area concerns, waxing, texture, discoloration, ingrown hairs, skin laxity, body contouring, and advanced rejuvenation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <BookEstheticsButton />
                </div>
                <div className="mt-3">
                  <TrustLine />
                </div>
              </div>
            </div>

            {/* Wellness card */}
            <div className="card card-hover group flex flex-col overflow-hidden">
              <img
                src="/images/ChatGPT_Image_Jul_25,_2026,_10_54_05_PM_(4).png"
                alt="Wellness"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <HeartPulse className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-medium text-ink-900">My Bare Method Wellness</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  Explore a separate provider-guided wellness experience through My Bare Method. Services, customer care, and policies are handled on its own website.
                </p>
                <div className="mt-6">
                  <a
                    href={MYBAREMETHOD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green inline-flex items-center gap-1.5"
                  >
                    <HeartPulse className="mr-2 h-4 w-4" />
                    Explore My Bare Method
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-2 text-[11px] text-ink-500">
                  My Bare Method is separate from The Bare Method esthetics services and operates its own website, team, policies, and customer journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ESTHETICS SPECIALTIES (brief) ====== */}
      <section className="section bg-cream-100">
        <div className="container-bare">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              center={false}
              eyebrow="Esthetics"
              title="Care for the Concerns You Do Not Always Talk About"
              subtitle="Head-to-toe skin treatments, intimate-area care, advanced microneedling, and confidence-focused body contouring."
            />
            <Link to="/esthetics" className="hidden shrink-0 btn-outline sm:inline-flex">
              View All Services
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {estheticFocusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.slug} className="card flex flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100 text-gold-500 shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink-900">{area.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700 line-clamp-3">{area.description}</p>
                  <Link to="/esthetics" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/esthetics" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ====== RESULTS — 3 STRONGEST EXAMPLES ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Results"
            title="Real Transformations"
            subtitle="A glimpse of what consistent, personalized care can achieve."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {topResults.map((r) => (
              <div key={r.id} className="card overflow-hidden">
                {r.image && (
                  <img src={r.image} alt={r.title} className="aspect-[4/5] w-full object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-ink-900">{r.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ink-500">
            Individual results vary. Images shown with client consent and are not a guarantee of a specific outcome.
          </p>
          <div className="mt-6 text-center">
            <Link to="/results" className="btn-outline">
              View Full Results Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ====== MEET RINA + FOUNDER PHOTO ====== */}
      <section className="section bg-cream-100">
        <div className="container-bare grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/ChatGPT_Image_Jul_25,_2026,_09_00_20_PM copy.png"
            alt="Carina Rina Hebert, founder of The Bare Method"
            className="rounded-3xl shadow-lg order-2 lg:order-1 w-full aspect-[4/5] object-cover object-top"
          />
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Meet Rina</p>
            <h2 className="heading-display text-3xl text-ink-900 sm:text-4xl">
              Carina "Rina" Hebert
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-600">
              Founder &middot; Advanced Practice Esthetician
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
                wellness goals.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookEstheticsButton />
            </div>
            <div className="mt-3">
              <TrustLine />
            </div>
          </div>
        </div>
      </section>

      {/* ====== REVIEWS / TESTIMONIALS ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Client Love"
            title="What Our Clients Say"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.name} className="card p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink-700">"{t.text}"</p>
                <p className="mt-4 text-sm font-medium text-ink-900">
                  {t.name} <span className="text-ink-700/60">&middot; {t.location}</span>
                </p>
                <p className="text-xs text-gold-600">{t.service}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-500">{t.brand}</p>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="mt-10 rounded-2xl border border-cream-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <GoogleLogo className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-900">5.0 on Google</span>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-ink-700">
                Rated by real clients in Apple Valley and the surrounding communities.
              </p>
            </div>
            <a
              href={siteConfig.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline whitespace-nowrap"
            >
              Read Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ====== SCULPT & GLOW OFFER SECTION ====== */}
      <section className="section bg-ink-900 overflow-hidden">
        <div className="container-bare">
          <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-nude-100 via-cream-100 to-nude-200 p-8 sm:p-12 lg:p-16 relative">
            {/* Decorative leaf accents */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-gold-400 opacity-60">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="mx-auto">
                <path d="M20 0c-4 6-12 10-20 12 8 2 16 6 20 12 4-6 12-10 20-12-8-2-16-6-20-12z" fill="currentColor" />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">New Client Exclusive Offer</p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-ink-900 leading-[1.05] tracking-tightest">
                Sculpt<br /><span className="text-gold-500">&</span> Glow
              </h2>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gold-400/50"></span>
                <p className="text-lg sm:text-xl font-medium text-ink-800">4-in-1 Just</p>
                <span className="h-px w-8 bg-gold-400/50"></span>
              </div>
              <p className="mt-2 font-display text-5xl sm:text-6xl font-semibold text-ink-900">$149</p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
              {/* Treatments included */}
              <div className="rounded-2xl border border-gold-400/30 bg-white/80 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-900 mb-4">4 Treatments Included</p>
                <ul className="space-y-3">
                  {[
                    { icon: 'Zap', label: 'EMS Sculpt' },
                    { icon: 'Waves', label: 'RF Skin Tightening' },
                    { icon: 'Droplets', label: 'Hydrofacial' },
                    { icon: 'Sun', label: 'Red Light Therapy' },
                  ].map((t) => (
                    <li key={t.label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-200 text-gold-500">
                        <span className="h-4 w-4 rounded-full bg-gold-400/30"></span>
                      </span>
                      <span className="text-sm font-medium text-ink-800">{t.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="flex flex-col justify-center space-y-4">
                {[
                  { bold: 'ZERO', rest: 'Downtime' },
                  { bold: 'Lose Inches', rest: 'FAST' },
                  { bold: 'Non-Surgical', rest: 'Alternative' },
                ].map((b) => (
                  <div key={b.bold} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm text-ink-800">
                      <span className="font-bold">{b.bold}</span>{' '}{b.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <BookEstheticsButton />
              <p className="mt-3 text-xs text-ink-700/60">{trustLine}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <WhyChooseSection />

      {/* ====== LOCATION ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find Us in Apple Valley"
            subtitle="Serving Apple Valley, Lakeville, Rosemount, Burnsville, Eagan, and the greater South Minneapolis\u2013Saint Paul metro."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="card overflow-hidden">
              <iframe
                title="The Bare Method location map"
                src={siteConfig.maps.embedSrc}
                className="h-full min-h-[300px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="card p-8 flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-medium text-ink-900">The Bare Method</h3>
                  <p className="text-sm text-ink-700">
                    {siteConfig.business.address.line1}
                    <br />
                    {siteConfig.business.address.city}, {siteConfig.business.address.state}{' '}
                    {siteConfig.business.address.zip}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-sm font-medium text-ink-900">Hours</p>
                  <p className="text-sm text-ink-700">Tue–Fri 9–6, Sat 9–4 &middot; By appointment</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={siteConfig.maps.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Get Directions
                </a>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FINAL BOOKING CTA ====== */}
      <section className="section bg-cream-100">
        <div className="container-bare text-center">
          <h2 className="heading-display mx-auto max-w-2xl text-3xl text-ink-900 sm:text-4xl text-balance">
            Ready to Begin?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-700 text-balance">
            Whether you are here for skin confidence or total wellness — your path starts here.
          </p>
          <div className="mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookEstheticsButton />
            <a
              href={MYBAREMETHOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-1.5"
            >
              <HeartPulse className="mr-2 h-4 w-4" />
              Explore My Bare Method
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-500">{trustLine}</p>
        </div>
      </section>
    </>
  );
}
