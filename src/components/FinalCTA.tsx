import { Calendar, HeartPulse, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

export function FinalCTA() {
  return (
    <section className="section bg-ink-900">
      <div className="container-bare text-center">
        <h2 className="heading-display mx-auto max-w-2xl text-3xl text-cream-50 sm:text-4xl lg:text-5xl text-balance">
          Which Experience Is Right for You?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream-200/70 text-balance">
          The Bare Method for luxury esthetics. My Bare Method for provider-led wellness.
        </p>
        <div className="mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.salonLofts.servicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Esthetics
          </a>
          <a
            href={MYBAREMETHOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-flex items-center gap-1.5"
          >
            <HeartPulse className="mr-2 h-4 w-4" />
            Provider-Led Wellness
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mt-4 text-xs text-cream-200/40 max-w-sm mx-auto">
          MyBareMethod.com is a separate company with its own providers, policies, and patient portal.
        </p>
      </div>
    </section>
  );
}
