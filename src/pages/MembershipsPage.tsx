import { Check, Star, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { PageHeader, SectionHeading } from '@/components/SectionHeading';
import { FinalCTA } from '@/components/FinalCTA';
import { siteConfig } from '@/config/site';
import { memberships } from '@/data/memberships';

export function MembershipsPage() {
  const estheticMemberships = memberships.filter(
    (m) => m.division === 'esthetics' && m.active,
  );

  return (
    <>
      <Seo
        title="Esthetics Memberships | The Bare Method"
        description="Save on the treatments you love with monthly membership credits, priority booking, and exclusive perks at The Bare Method."
        path="/memberships"
      />

      <PageHeader
        eyebrow="Memberships"
        title="Invest in Your Skin"
        subtitle="Monthly credits, priority booking, and exclusive perks — designed for clients who are serious about results."
      />

      {/* ====== MEMBERSHIP CARDS ====== */}
      <section className="section">
        <div className="container-bare">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {estheticMemberships.map((membership) => (
              <div
                key={membership.slug}
                className="card flex flex-col overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-sm"
              >
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink-900">
                        {membership.name}
                      </h3>
                      <p className="text-sm text-ink-600 mt-1">{membership.tagline}</p>
                    </div>
                    <Star className="h-5 w-5 flex-shrink-0 text-gold-500 mt-1" strokeWidth={1.5} />
                  </div>

                  <p className="text-2xl font-display font-medium text-ink-900 mb-6">
                    {membership.price}
                  </p>

                  <ul className="space-y-2.5 flex-1">
                    {membership.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <Check className="h-4 w-4 flex-shrink-0 text-gold-500 mt-0.5" strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {membership.note && (
                    <p className="mt-4 text-xs text-ink-500 leading-relaxed border-t border-ink-900/5 pt-4">
                      {membership.note}
                    </p>
                  )}

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="btn-gold w-full"
                    >
                      Contact for Information
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="section bg-cream-100">
        <div className="container-bare">
          <SectionHeading
            eyebrow="How It Works"
            title="Membership Benefits"
            subtitle="Simple, flexible, and designed to help you get the most from every visit."
          />
          <div className="mt-12 mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            {[
              {
                step: 1,
                title: 'Choose Your Level',
                desc: 'Select the membership tier that fits your treatment goals and budget.',
              },
              {
                step: 2,
                title: 'Earn Monthly Credits',
                desc: 'Your credits reload each month and can be applied toward any esthetic service.',
              },
              {
                step: 3,
                title: 'Enjoy Perks',
                desc: 'Priority booking, member-exclusive pricing, seasonal promotions, and product savings.',
              },
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

      {/* ====== GIFT CARDS ====== */}
      <section className="section">
        <div className="container-bare text-center">
          <Gift className="mx-auto h-10 w-10 text-gold-500 mb-4" strokeWidth={1.5} />
          <h2 className="font-display text-2xl font-medium text-ink-900 mb-3">
            Gift Cards Available
          </h2>
          <p className="text-sm text-ink-700 max-w-lg mx-auto mb-6">
            Give the gift of professional skin care. The Bare Method gift cards can be used toward any esthetic service or membership.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2"
          >
            Contact for Gift Cards
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
