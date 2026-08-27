import { ExternalLink } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/SectionHeading';
import { siteConfig } from '@/config/site';

export function IvTherapyPage() {
  return (
    <>
      <Seo
        title="Wellness Services | My Bare Method"
        description="Wellness services are handled through the separate My Bare Method experience."
        path="/iv-therapy"
      />
      <PageHeader
        eyebrow="My Bare Method"
        title="Continue to My Bare Method"
        subtitle="This experience is not booked or managed on The Bare Method esthetics website."
      />
      <section className="section">
        <div className="container-bare mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-ink-700">
            Visit My Bare Method for its separate wellness services, customer onboarding, and support.
            The Bare Method remains the local home for esthetic services in Apple Valley.
          </p>
          <a href={siteConfig.myBareMethodUrl} target="_blank" rel="noopener noreferrer" className="btn-green mt-8 inline-flex items-center gap-2">
            Continue to My Bare Method
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
