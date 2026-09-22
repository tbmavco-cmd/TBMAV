import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Clock, ExternalLink, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerDisclaimer, legalPages } from '@/data/legal';

const exploreLinks = [
  { to: '/esthetics', label: 'Esthetics' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/results', label: 'Results' },
  { to: '/memberships', label: 'Memberships' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const clientAccess = [
  { label: 'Book Esthetics', href: siteConfig.salonLofts.servicesUrl, external: true },
  { label: 'Provider-Led Wellness', href: 'https://MyBareMethod.com', external: true },
  { label: 'Memberships & Gift Cards', to: '/contact', external: false },
];

const footerLegalGroups: { heading: string; category: string }[] = [
  { heading: 'Legal', category: 'legal' },
  { heading: 'Services', category: 'services' },
  { heading: 'Commerce', category: 'commerce' },
  { heading: 'Disclosures', category: 'disclosures' },
];

const formsLinks = [
  { to: '/cancel-membership', label: 'Cancel Membership' },
  { to: '/refund-request', label: 'Refund Request' },
  { to: '/privacy-request', label: 'Privacy Request' },
];

export function Footer() {
  const { business, social } = siteConfig;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`
  )}`;

  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="container-bare py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* BUSINESS */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-medium text-cream-50">The Bare Method</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
              Your Skin. Your Wellness. Your Method. A private, personalized destination for
              specialized esthetics and provider-led wellness in Burnsville, Minnesota.
            </p>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-cream-200/70">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-300" />
                <span>
                  {business.address.line1}
                  <br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </span>
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-gold-300" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-gold-300" />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                >
                  <Instagram className="h-4.5 w-4.5 shrink-0 text-gold-300" />
                  {social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                >
                  <Star className="h-4.5 w-4.5 shrink-0 fill-gold-300 text-gold-300" />
                  Google Reviews
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-200/70">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-300" />
                <span>Tue–Sat by appointment</span>
              </li>
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 hover:text-gold-200 transition-colors"
                >
                  Get Directions <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CLIENT ACCESS */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Client Access
            </h4>
            <ul className="mt-4 space-y-2.5">
              {clientAccess.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                    >
                      {l.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={l.to!}
                      className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Forms
            </h4>
            <ul className="mt-4 space-y-2.5">
              {formsLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              {legalPages
                .filter((p) => p.category === 'legal')
                .map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/legal/${p.slug}`}
                      className="text-xs text-cream-200/60 hover:text-cream-50 transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Organized legal link categories */}
        <div className="mt-12 grid gap-8 border-t border-cream-200/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerLegalGroups.map((group) => (
            <div key={group.category}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                {group.heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {legalPages
                  .filter((p) => p.category === group.category)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/legal/${p.slug}`}
                        className="text-xs text-cream-200/60 hover:text-cream-50 transition-colors"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-cream-200/10 pt-8">
          <p className="text-xs leading-relaxed text-cream-200/50">
            The Bare Method offers luxury esthetics and provider-led wellness services in Burnsville, Minnesota. Provider-led wellness services (weight management, hormones, telehealth) are offered through My Bare Method (MyBareMethod.com) — a separate company with its own providers, policies, and patient portal. Individual results vary.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <Link
              to="/legal/medical-disclaimer"
              className="text-xs text-gold-300/70 hover:text-gold-300 transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              to="/legal/privacy-policy"
              className="text-xs text-gold-300/70 hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/notice-of-privacy-practices"
              className="text-xs text-gold-300/70 hover:text-gold-300 transition-colors"
            >
              Notice of Privacy Practices
            </Link>
            <Link
              to="/legal/affiliate-disclosure"
              className="text-xs text-gold-300/70 hover:text-gold-300 transition-colors"
            >
              Affiliate Disclosure
            </Link>
            <Link
              to="/legal/membership-terms"
              className="text-xs text-gold-300/70 hover:text-gold-300 transition-colors"
            >
              Membership Terms
            </Link>
            <Link
              to="/legal/refund-policy"
              className="text-xs text-gold-300/70 hover:text-gold-300 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-cream-200/40">
              © {new Date().getFullYear()} The Bare Method. All rights reserved. Individual results
              vary.
            </p>
            <Link
              to="/admin"
              className="text-xs text-cream-200/40 hover:text-gold-300 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
