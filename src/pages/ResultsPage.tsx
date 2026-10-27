import { ResultComparison } from '@/components/ResultComparison';
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
        title="Before & After Results | The Bare Method Burnsville"
        description="Before & after photos from real clients at The Bare Method in Burnsville."
        path="/results"
      />
      <PageHeader
        eyebrow="Results"
        title="Results"
        subtitle="Before & after photos from real clients, shared with their permission."
      />

      
      <section className="section">
        <div className="container-bare">
          
          <div className="mb-8 flex flex-wrap gap-2">
            {resultCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? 'bg-ink-900 text-white'
                    : 'border border-ink-900/15 text-ink-700 hover:border-ink-900/30 hover:bg-ink-900/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filtered.map((r) => (
              <div key={r.id} className="card card-hover overflow-hidden">
                <ResultComparison result={r} />
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

          
          <div className="mt-10 rounded-2xl border border-gold-400/30 bg-blush-50 p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
              <p className="text-sm leading-relaxed text-ink-700/80">{resultsDisclaimer}</p>
            </div>
          </div>

          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-700/70">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            <span>Images shared with client consent. Individual results vary and are not guaranteed.</span>
          </div>
        </div>
      </section>



      <section className="section bg-blush-100"><div className="container-bare"><h2 className="heading-display text-center text-4xl">Glow Up reels</h2><div className="divider-gold" /><div className="mt-10 grid gap-6 sm:grid-cols-3">{['19587', '19592', '19593'].map(id => <figure key={id}><video controls playsInline preload="none" poster={`/videos/glow-up-reel-${id}-poster.jpg`} className="mx-auto aspect-[9/16] max-h-[640px] w-full rounded-2xl bg-black object-contain"><source src={`/videos/glow-up-reel-${id}.mp4`} type="video/mp4" /></video><figcaption className="mt-3 text-xs text-muted-500">Individual results vary. Shared with client consent.</figcaption></figure>)}</div></div></section>
      <FinalCTA />
    </>
  );
}

