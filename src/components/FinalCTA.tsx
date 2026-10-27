import { Calendar, HeartPulse, ExternalLink } from 'lucide-react';
import { siteConfig, BOOKING_URL } from '@/config/site';

const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

export function FinalCTA() {
  return (
    <section className="section bg-ink-900 dark-band">
      <div className="container-bare text-center">
        <h2 className="heading-display mx-auto max-w-2xl text-3xl text-white sm:text-4xl lg:text-5xl text-balance">
          Which Experience Is Right for You?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70 text-balance">
          The Bare Method for luxury esthetics. My Bare Method for provider-led wellness.
        </p>
        <div className="mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full max-w-xs sm:w-auto"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Esthetics
          </a>
          <a
            href={MYBAREMETHOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex w-full max-w-xs items-center gap-2 whitespace-nowrap sm:w-auto"
          >
            <HeartPulse className="mr-2 h-4 w-4" />
            My Bare Method
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mt-4 text-xs text-white/70 max-w-sm mx-auto">
          MyBareMethod.com is a separate company with its own providers, policies, and patient portal.
        </p>
      </div>
    </section>
  );
}

