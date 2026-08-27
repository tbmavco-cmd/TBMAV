import { ExternalLink, HeartPulse, Sparkles } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/config/site';

export function WellnessPage() {
  return (
    <>
      <Seo
        title="My Bare Method Wellness | The Bare Method"
        description="Explore My Bare Method, the separate provider-guided wellness experience connected to The Bare Method parent brand."
        path="/wellness"
      />

      <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/0 via-ink-900/60 to-ink-900" />
        <div className="container-bare relative text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            The Bare Method parent brand
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
            Meet My Bare Method
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream-200/80">
            My Bare Method is our separate provider-guided wellness experience. It has its own website,
            team, policies, and customer journey.
          </p>
          <a href={siteConfig.myBareMethodUrl} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 inline-flex items-center gap-2">
            Explore My Bare Method
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="mx-auto mt-6 max-w-xl text-sm text-cream-200/60">
            This link leaves The Bare Method website and opens the separate My Bare Method experience.
          </p>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Two distinct experiences"
            title="One broader vision, two clear paths"
            subtitle="The Bare Method is your local destination for esthetics. My Bare Method is the separate destination for provider-guided wellness."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="card flex flex-col p-7">
              <Sparkles className="h-8 w-8 text-gold-500" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl font-medium text-ink-900">The Bare Method Esthetics</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                Local facials, corrective skincare, microneedling, body contouring, Brazilian waxing,
                intimate-area esthetics, memberships, and packages in Apple Valley.
              </p>
              <a href={siteConfig.vagaro.servicesUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 inline-flex w-fit items-center gap-2">
                Book Esthetic Services via Vagaro
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="card flex flex-col p-7">
              <HeartPulse className="h-8 w-8 text-emerald-600" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl font-medium text-ink-900">My Bare Method Wellness</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                Follow the separate My Bare Method website for wellness options, customer onboarding,
                account access, and ongoing support.
              </p>
              <a href={siteConfig.myBareMethodUrl} target="_blank" rel="noopener noreferrer" className="btn-green mt-6 inline-flex w-fit items-center gap-2">
                Continue to My Bare Method
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-bare text-center">
          <SectionHeading
            eyebrow="Clear customer journey"
            title="Start in the right place"
            subtitle="Use Vagaro for The Bare Method esthetic services. Use My Bare Method for its separate wellness experience."
          />
          <div className="mt-8">
            <a href={siteConfig.myBareMethodUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
              Explore My Bare Method
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
