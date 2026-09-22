import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';

const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

const navLinks: { to?: string; href?: string; label: string; external?: boolean }[] = [
  { to: '/', label: 'Home' },
  { to: '/esthetics', label: 'Esthetics' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function MobileNavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
          isActive ? 'bg-gold-400/15 text-gold-600' : 'text-ink-800 hover:bg-ink-900/5'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function MobileExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-900/5 transition-colors"
    >
      {children}
      <ExternalLink className="h-3 w-3 text-ink-400" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-nude-50/95 backdrop-blur-md shadow-sm border-b border-ink-900/5'
            : 'bg-nude-50/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-bare flex h-18 items-center justify-between gap-4 py-3.5">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors text-ink-700 hover:text-ink-900 hover:bg-ink-900/5"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to!}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold-600'
                        : 'text-ink-700 hover:text-ink-900 hover:bg-ink-900/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={siteConfig.salonLofts.servicesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              Book Now
            </a>
            <a
              href={MYBAREMETHOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green text-sm inline-flex items-center gap-1.5"
            >
              Wellness
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="btn-ghost p-2"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-nude-50 shadow-2xl animate-slide-down flex flex-col">
            <div className="flex items-center justify-between border-b border-ink-900/10 px-5 py-4">
              <Logo />
              <button onClick={() => setOpen(false)} className="btn-ghost p-2" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              {/* EXPLORE */}
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-ink-400">Explore</p>
                <div className="space-y-0.5">
                  <MobileNavLink to="/esthetics">Esthetics</MobileNavLink>
                  <MobileNavLink to="/wellness">Provider-Led Wellness</MobileNavLink>
                  <MobileNavLink to="/results">Results</MobileNavLink>
                  <MobileNavLink to="/about">About</MobileNavLink>
                  <MobileNavLink to="/contact">Contact</MobileNavLink>
                </div>
              </div>

              {/* CLIENT ACCESS */}
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-ink-400">Client Access</p>
                <div className="space-y-0.5">
                  <MobileExtLink href={siteConfig.salonLofts.servicesUrl}>Book Esthetics</MobileExtLink>
                  <MobileExtLink href={MYBAREMETHOD_URL}>MyBareMethod.com</MobileExtLink>
                  <MobileNavLink to="/contact">Memberships & Gift Cards</MobileNavLink>
                </div>
              </div>

              {/* SUPPORT */}
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-ink-400">Support</p>
                <div className="space-y-0.5">
                  <MobileNavLink to="/membership-cancellation">Cancel Membership</MobileNavLink>
                  <MobileNavLink to="/refund-request">Refund Request</MobileNavLink>
                  <MobileNavLink to="/privacy-request">Privacy Request</MobileNavLink>
                </div>
              </div>

              {/* LEGAL */}
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-ink-400">Legal</p>
                <div className="space-y-0.5">
                  <MobileNavLink to="/legal/terms-of-use">Terms of Use</MobileNavLink>
                  <MobileNavLink to="/legal/privacy-policy">Privacy Policy</MobileNavLink>
                  <MobileNavLink to="/legal/accessibility-statement">Accessibility Statement</MobileNavLink>
                  <MobileNavLink to="/legal/consumer-health-data-notice">Consumer Health Data Notice</MobileNavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
