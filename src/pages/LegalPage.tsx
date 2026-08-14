import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Footer } from '@/components/Footer';
import { legalPages, footerDisclaimer } from '@/data/legal';
import { legalEntitySettings } from '@/config/legalEntity';

export function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = legalPages.find((p) => p.slug === slug);

  if (!page) return <Navigate to="/" replace />;

  const versionMeta = legalEntitySettings.policyVersions.find((v) => v.slug === page.slug);

  return (
    <>
      <Seo
        title={`${page.title} — The Bare Method`}
        description={page.sections[0]?.body ?? ''}
        path={`/legal/${page.slug}`}
      />
      <div className="border-b border-ink-900/5 bg-cream-100">
        <div className="container-bare py-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-gold-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="mt-4 heading-display text-3xl text-ink-900 sm:text-4xl">{page.title}</h1>
          <p className="mt-2 text-sm text-ink-700/60">
            Last updated: {page.lastUpdated}
            {versionMeta && versionMeta.version && ` · Version ${versionMeta.version}`}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-bare max-w-3xl">
          {page.draft && (
            <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="font-medium text-amber-900">Draft — Not Yet Effective</p>
                <p className="mt-1 text-sm text-amber-800">
                  This policy is a draft template and has not been published as an effective policy.
                  It must be reviewed by qualified Minnesota legal counsel before publication.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="heading-display text-xl text-ink-900">{s.heading}</h2>
                <p className="mt-3 whitespace-pre-line text-ink-700 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-cream-100 p-6">
            <p className="text-xs leading-relaxed text-ink-700/70">{footerDisclaimer}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/cancel-membership" className="text-sm text-gold-600 underline">Cancel Membership</Link>
            <Link to="/refund-request" className="text-sm text-gold-600 underline">Refund Request</Link>
            <Link to="/privacy-request" className="text-sm text-gold-600 underline">Privacy Request</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
