import { useState } from 'react';
import { Star, Info } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { results, resultCategories, resultsDisclaimer } from '@/data/testimonials';

export function ResultsPage() {
  const [filter, setFilter] = useState<string>('All');
  const filtered =
    filter === 'All' ? results : results.filter((r) => r.category === filter);

  return (
    <>
      <Seo
        title="Results | Before & After Gallery — The Bare Method"
        description="See real before and after transformations from The Bare Method in Apple Valley, MN. Head-to-toe skin treatments, intimate skin care, waxing and ingrown-hair care, body contouring, microneedling, and skin rejuvenation."
        path="/results"
      />
      <PageHeader
        eyebrow="Results"
        title="Real Transformations"
        subtitle="A glimpse of what consistent, personalized care can achieve. Individual results vary."
      />

      <section className="section">
        <div className="container-bare">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {resultCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? 'bg-ink-900 text-cream-50'
                    : 'border border-ink-900/15 text-ink-700 hover:border-ink-900/30 hover:bg-ink-900/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Before/After grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <div key={r.id} className="card card-hover overflow-hidden">
                {r.image ? (
                  <div className="relative bg-ink-900/5">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-900">
                      Before & After
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <PlaceholderImage
                        query={`spa ${r.category.toLowerCase()} before treatment`}
                        alt={`${r.title} — before`}
                        aspect="aspect-[3/4]"
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-ink-900/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
                        Before
                      </span>
                    </div>
                    <div className="relative">
                      <PlaceholderImage
                        query={`spa ${r.category.toLowerCase()} after results glowing`}
                        alt={`${r.title} — after`}
                        aspect="aspect-[3/4]"
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-900">
                        After
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {r.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-medium text-ink-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{r.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-ink-700/60">
              No results in this category yet. Check back soon.
            </p>
          )}

          {/* Disclaimer */}
          <div className="mt-10 rounded-2xl border border-gold-400/30 bg-cream-50 p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
              <p className="text-sm leading-relaxed text-ink-700/80">{resultsDisclaimer}</p>
            </div>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-700/70">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            <span>Images shared with client consent. Individual results vary and are not guaranteed.</span>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
