import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, HeartPulse } from 'lucide-react';
import { Seo } from '@/components/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found — The Bare Method" description="The page you are looking for could not be found." noindex />
      <section className="section">
        <div className="container-bare max-w-2xl text-center">
          <p className="font-display text-8xl sm:text-9xl font-medium text-gold-400/30">404</p>
          <h1 className="mt-4 heading-display text-3xl text-ink-900 sm:text-4xl">
            This page could not be found
          </h1>
          <p className="mt-4 text-ink-700 max-w-md mx-auto">
            The page you are looking for may have moved or no longer exists. Here are some places to start instead.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-outline">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link to="/esthetics" className="btn-gold">
              <Sparkles className="h-4 w-4" />
              Esthetics
            </Link>
            <Link to="/wellness" className="btn-outline">
              <HeartPulse className="h-4 w-4" />
              Wellness
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

