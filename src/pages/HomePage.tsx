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
import { siteConfig, BOOKING_URL } from '@/config/site';
import { estheticFocusAreas } from '@/data/estheticServices';
import { testimonials } from '@/data/testimonials';
import { results } from '@/data/testimonials';

const trustLine = 'Private suite \u00B7 Customized care \u00B7 Advanced Practice Esthetician \u00B7 Burnsville';
const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

function BookEstheticsButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-gold ${className}`}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Esthetics
    </a>
  );
}

function TrustLine() {
  return (
    <p className="text-xs sm:text-sm font-medium text-muted-500/80 tracking-wide">
      {trustLine}
    </p>
  );
}

export function HomePage() {
  const topResults = results;

  return (
    <>
      <Seo
        title="Waxing, Facials & Body Contouring in Burnsville, MN | The Bare Method"
        description="Private-suite esthetics in Burnsville: Brazilian waxing, vajacials, dermaplaning, microneedling and 4-in-1 body contouring by an Advanced Practice Esthetician. Book online."
        path="/"
      />

      {/* ====== HERO — INTRODUCTORY OFFER ABOVE THE FOLD ====== */}
      <section className="relative overflow-hidden bg-black text-white dark-band">
        <div className="container-bare grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <p className="eyebrow mb-4">The Bare Method · Burnsville, Minnesota</p>
            <h1 className="heading-display text-4xl text-ink-900 sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] text-balance">
              Private-Suite Waxing, Facials & Body Contouring in Burnsville
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700 text-balance">
              Specialized care for the concerns you do not always talk about. Elevated skincare and body treatments designed to restore confidence in every stage of your journey.
            </p>

            {/* Offer callout */}
            <div className="mt-7 rounded-2xl border border-[#c6a15b]/30 bg-white/5 backdrop-blur-sm p-5 max-w-lg">
              <p className="text-sm font-semibold text-[#c6a15b] uppercase tracking-wide mb-1">NEW CLIENT OFFER</p>
              <p className="text-ink-900 font-display text-lg sm:text-xl font-medium">
                Ultimate Glow Up
              </p>
              <p className="mt-1 text-sm text-white/80">IPL photofacial + salmon DNA (PDRN) microneedling</p>
              <p className="mt-3 flex items-baseline gap-3"><span className="font-display text-3xl text-gold-300">$349</span><del className="text-white/60">$595</del></p>
              <ul className="mt-3 space-y-1 text-sm text-white/80"><li>Brightens sun spots &amp; redness</li><li>Smooths texture &amp; fine lines</li></ul>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookEstheticsButton />
              <a
                href={MYBAREMETHOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <HeartPulse className="mr-2 h-4 w-4" />
                Explore Wellness
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-4">
              <TrustLine />
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="/images/studio/suite-treatment-room.jpg"
              fetchPriority="high" width={1600} height={1196}
              alt="Private treatment suite at The Bare Method, Burnsville"
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
                src="/images/studio/studio-lounge-mural.jpg"
                alt="Esthetics"
                loading="lazy"
                width={1070}
                height={1650}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blush-100 text-gold-500">
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
                src="/images/studio/studio-wide-private-suite.jpg"
                alt="Wellness"
                loading="lazy"
                width={1600}
                height={1206}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blush-50 text-gold-700">
                  <HeartPulse className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-medium text-ink-900">Provider-Led Wellness</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  Provider-led programs supporting weight, metabolism, hormones, longevity, recovery, and ongoing care — offered through My Bare Method, a separate company.
                </p>
                <div className="mt-6">
                  <a
                    href={MYBAREMETHOD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-1.5"
                  >
                    <HeartPulse className="mr-2 h-4 w-4" />
                    Visit MyBareMethod.com
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-2 text-[11px] text-muted-500">
                  My Bare Method is a separate company with its own providers, policies, and patient portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ESTHETICS SPECIALTIES (brief) ====== */}
      <section className="section bg-blush-100">
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blush-100 text-gold-500 shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink-900">{area.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{area.description}</p>
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

      <section className="section bg-blush-100"><div className="container-bare grid items-center gap-10 lg:grid-cols-2"><div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"><img src="/images/studio/neon-what-happens.jpg" alt="What happens in the salon stays in the salon" loading="lazy" width={1100} height={1650} className="absolute left-1/2 top-0 h-auto w-[120%] max-w-none -translate-x-1/2" /></div><div><p className="eyebrow">Your comfort comes first</p><h2 className="heading-display mt-4 text-3xl sm:text-4xl">What happens in the salon stays in the salon</h2><div className="divider-gold" /><p className="mt-6 text-muted-500">Private, respectful care for the concerns you do not always talk about. Every appointment starts with your comfort and your goals.</p></div></div></section>

      {/* ====== RESULTS — 3 STRONGEST EXAMPLES ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Results"
            title="Results"
            subtitle="Before & after photos from real clients, shared with their permission."
          />
          
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topResults.map((r) => (
              <div key={r.id} className="card overflow-hidden">
                {r.image && (
                  <img src={r.image} alt={r.title} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-contain bg-blush-100" />
                )}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-ink-900">{r.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-500">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-500">
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
      <section className="section bg-blush-100">
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
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="mt-10 rounded-2xl border border-blush-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <GoogleLogo className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-900">5.0 on Google · 15 reviews</span>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-ink-700">
                Rated by real clients in Burnsville and the surrounding communities.
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

      {/* ====== ULTIMATE GLOW UP OFFER ====== */}
      <section className="section bg-blush-100">
        <div className="container-bare">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-3xl border border-gold-300 p-8 text-center sm:p-12 lg:p-16">
            <p className="eyebrow mb-4">NEW CLIENT OFFER</p>
            <h2 className="heading-display text-4xl sm:text-6xl">Ultimate <span className="italic">Glow Up</span></h2>
            <div className="divider-gold" aria-hidden="true" />
            <p className="mt-6 text-lg text-ink-700">IPL photofacial + salmon DNA (PDRN) microneedling</p>
            <p className="mt-6 flex items-baseline justify-center gap-4"><span className="font-display text-5xl sm:text-6xl">$349</span><del className="text-2xl text-muted-500">$595</del></p>
            <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
              <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-gold-700" />Brightens sun spots &amp; redness</li>
              <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-gold-700" />Smooths texture &amp; fine lines</li>
            </ul>
            <div className="mt-8"><BookEstheticsButton /></div>
            <p className="mt-4 text-xs text-muted-500">{trustLine}</p>
          </div>
          <video autoPlay muted loop playsInline preload="metadata" poster="/videos/glow-up-reel-19588-poster.jpg" className="mx-auto aspect-[9/16] max-h-[640px] w-full rounded-3xl bg-black object-contain"><source src="/videos/glow-up-reel-19588.mp4" type="video/mp4" /></video>
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
            title="Find Us in Burnsville"
            subtitle="Serving Burnsville, Apple Valley, Lakeville, Rosemount, Eagan, and the greater South Minneapolis–Saint Paul metro."
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

      <section className="section bg-blush-100"><div className="container-bare"><SectionHeading eyebrow="A space for you" title="Inside the suite" /><div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">{[{file:'bubbly-bar',alt:'The bubbly bar in the private suite'},{file:'retail-shelf',alt:'Skincare retail shelf'},{file:'wax-station',alt:'The waxing station'},{file:'facial-cart-detail',alt:'Facial treatment cart'}].map(item => <img key={item.file} src={`/images/studio/${item.file}.jpg`} alt={item.alt} loading="lazy" width={900} height={1200} className="aspect-[3/4] w-full rounded-2xl object-cover" />)}</div></div></section>

      {/* ====== FINAL BOOKING CTA ====== */}
      <section className="section bg-blush-100">
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
              className="btn-outline inline-flex items-center gap-1.5"
            >
              <HeartPulse className="mr-2 h-4 w-4" />
              Explore Wellness at MyBareMethod.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-500">{trustLine}</p>
        </div>
      </section>
    </>
  );
}

