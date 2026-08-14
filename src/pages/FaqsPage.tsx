import { useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { faqs } from '@/data/faqs';

const categories = ['All', 'Esthetics', 'Wellness', 'Shop', 'Memberships', 'Education', 'General'] as const;

export function FaqsPage() {
  const [category, setCategory] = useState<string>('All');
  const [query, setQuery] = useState('');

  const filtered = faqs.filter((f) => {
    const matchesCategory = category === 'All' || f.category === category;
    const matchesQuery =
      query === '' ||
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <Seo
        title="FAQs — The Bare Method"
        description="Frequently asked questions about esthetics, wellness, shop, memberships, and education at The Bare Method."
        path="/faqs"
        faqSchema={faqs.map((f) => ({ q: f.question, a: f.answer }))}
      />
      <PageHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Find answers about esthetics, wellness, shopping, memberships, and education."
      />

      <section className="section">
        <div className="container-bare max-w-3xl">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-700/40" />
            <input
              type="text"
              placeholder="Search questions..."
              className="input pl-12"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-ink-900 text-cream-50'
                    : 'border border-ink-900/15 text-ink-700 hover:border-ink-900/30 hover:bg-ink-900/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((f, i) => (
              <details key={i} className="card group p-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <h3 className="font-medium text-ink-900">{f.question}</h3>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {f.category}
                  </span>
                </summary>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-ink-700">{f.answer}</p>
              </details>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-ink-700/60">No questions match your search.</p>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
