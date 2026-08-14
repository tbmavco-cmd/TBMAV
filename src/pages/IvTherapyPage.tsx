import { Droplets, Zap, Brain, Heart, Shield, Leaf, Sun, Activity, ExternalLink } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader, SectionHeading } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { siteConfig } from '@/config/site';

const categories = [
  {
    icon: Zap,
    name: 'Energy & Performance',
    description: 'Combat fatigue and support sustained energy with high-dose B-vitamins, amino acids, and essential co-factors.',
    popular: ['Myers Cocktail', 'B12 Boost', 'Energy Drip'],
  },
  {
    icon: Droplets,
    name: 'Hydration & Recovery',
    description: 'Rapid rehydration with electrolytes and vitamins — ideal after travel, workouts, or illness recovery.',
    popular: ['Hydration Drip', 'Post-Workout Recovery', 'Jet Lag Reset'],
  },
  {
    icon: Shield,
    name: 'Immune Support',
    description: 'High-dose Vitamin C, zinc, and immune-boosting nutrients to help your body defend and recover.',
    popular: ['Immune Drip', 'Vitamin C Infusion', 'Cold & Flu Support'],
  },
  {
    icon: Sun,
    name: 'Glow & Beauty',
    description: 'Biotin, glutathione, and antioxidants designed to support radiant skin, healthy hair, and strong nails.',
    popular: ['Glutathione Glow', 'Beauty Drip', 'Skin Radiance'],
  },
  {
    icon: Brain,
    name: 'Cognitive & Focus',
    description: 'Targeted nutrients supporting mental clarity, focus, and brain function for demanding days.',
    popular: ['Brain Boost', 'Focus Drip', 'NAD+ Infusion'],
  },
  {
    icon: Activity,
    name: 'Weight & Metabolism',
    description: 'Lipotropic blends and metabolic co-factors to complement your weight wellness goals.',
    popular: ['Slim Drip', 'Lipotropic Infusion', 'Metabolism Support'],
  },
  {
    icon: Heart,
    name: 'Anti-Aging & Longevity',
    description: 'NAD+, antioxidants, and regenerative nutrients supporting cellular health and vitality.',
    popular: ['NAD+ Therapy', 'Longevity Drip', 'Antioxidant Infusion'],
  },
  {
    icon: Leaf,
    name: 'Detox & Cleanse',
    description: 'Support your body\'s natural detoxification pathways with glutathione and liver-supporting nutrients.',
    popular: ['Detox Drip', 'Glutathione Push', 'Liver Support'],
  },
];

export function IvTherapyPage() {
  return (
    <>
      <Seo
        title="IV Therapy | The Bare Method"
        description="IV vitamin and nutrient infusions in Apple Valley, MN. Hydration, energy, immune support, beauty, and recovery drips administered by qualified personnel."
        path="/iv-therapy"
      />

      <PageHeader
        eyebrow="IV Therapy"
        title="Nourish from Within"
        subtitle="Vitamin and nutrient infusions administered by qualified clinical personnel — supporting energy, immunity, beauty, recovery, and beyond."
      />

      {/* ====== CATEGORIES ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Popular Categories"
            title="Find Your Drip"
            subtitle="Explore our most popular IV therapy categories. Book directly through our scheduling platform."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="card group flex flex-col rounded-2xl border border-ink-900/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10 text-gold-600 group-hover:bg-gold-400/20 transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink-900">{cat.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{cat.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.popular.map((item) => (
                      <span
                        key={item}
                        className="inline-block rounded-full bg-cream-100 px-2.5 py-0.5 text-[11px] font-medium text-ink-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== BOOK NOW ====== */}
      <section className="section bg-cream-100">
        <div className="container-bare text-center">
          <SectionHeading
            eyebrow="Ready to Book?"
            title="Schedule Your IV Session"
            subtitle="All IV therapy sessions are booked through our scheduling platform. Select your preferred drip and choose a time that works for you."
          />
          <div className="mt-8">
            <a
              href={siteConfig.vagaro.servicesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Book IV Therapy
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-500 max-w-md mx-auto">
            Availability varies. IV therapy is administered by qualified clinical personnel in a private setting.
          </p>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="section">
        <div className="container-bare">
          <SectionHeading
            eyebrow="What to Expect"
            title="How IV Therapy Works"
            subtitle="A seamless experience from booking to recovery."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { step: 1, title: 'Book Online', desc: 'Choose your drip category and select an available appointment time.' },
              { step: 2, title: 'Arrive & Relax', desc: 'Check in at our private Apple Valley suite and get comfortable.' },
              { step: 3, title: 'Infusion', desc: 'Your IV is administered by qualified clinical personnel. Most sessions take 30–60 minutes.' },
              { step: 4, title: 'Feel the Difference', desc: 'Leave feeling refreshed, hydrated, and replenished. Results are often felt the same day.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-cream-50 font-display text-base font-medium">
                  {s.step}
                </div>
                <h3 className="mt-3 font-display text-sm font-medium text-ink-900">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="section bg-cream-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="Questions?"
            title="IV Therapy FAQs"
          />
          <div className="mt-10 mx-auto max-w-3xl space-y-6">
            {[
              { q: 'Who administers the IV?', a: 'All IV infusions are administered by qualified clinical personnel, including Registered Nurses, in a private setting.' },
              { q: 'How long does a session take?', a: 'Most sessions take 30–60 minutes depending on the drip selected. Plan for about 75 minutes total including check-in.' },
              { q: 'Is there any downtime?', a: 'No downtime. Most clients feel energized immediately and can return to normal activities right away.' },
              { q: 'How often can I get an IV?', a: 'Frequency depends on your goals. Many clients come weekly or bi-weekly; others come monthly or as-needed for recovery and immune support.' },
              { q: 'Can I combine IV therapy with esthetics?', a: 'Yes! Many clients pair their IV session with an esthetic treatment for the ultimate self-care visit.' },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white border border-ink-900/5 p-5">
                <h3 className="font-display text-sm font-medium text-ink-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
