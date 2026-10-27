import { useEffect, useRef, useState } from 'react';
import { X, Sparkles, HeartPulse, ExternalLink } from 'lucide-react';
import { siteConfig, BOOKING_URL } from '@/config/site';

const STORAGE_KEY = 'bare-method-welcome-popup-ts';
const DISMISS_KEY = 'bare-method-welcome-dismissed';
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const INITIAL_DELAY = 10_000;
const RETRY_DELAY = 3 * 60 * 1000;
const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

export default function OfferPopup() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissCountRef = useRef(0);

  const isWithinCooldown = () => {
    const ts = localStorage.getItem(STORAGE_KEY);
    if (!ts) return false;
    return Date.now() - parseInt(ts, 10) < TWENTY_FOUR_HOURS;
  };

  const openPopup = () => {
    setShow(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  };

  useEffect(() => {
    if (isWithinCooldown()) return;

    const sessionDismissed = sessionStorage.getItem(DISMISS_KEY);
    if (sessionDismissed === '2') return;

    dismissCountRef.current = sessionDismissed ? parseInt(sessionDismissed, 10) : 0;

    const delay = dismissCountRef.current === 0 ? INITIAL_DELAY : RETRY_DELAY;

    timerRef.current = setTimeout(() => {
      if (!isWithinCooldown()) openPopup();
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const hide = () => {
    setVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  const handleButtonClick = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    sessionStorage.setItem(DISMISS_KEY, '2');
    hide();
  };

  const handleDismiss = () => {
    dismissCountRef.current += 1;
    sessionStorage.setItem(DISMISS_KEY, dismissCountRef.current.toString());

    if (dismissCountRef.current >= 2) {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }

    hide();

    if (dismissCountRef.current === 1 && !isWithinCooldown()) {
      timerRef.current = setTimeout(() => {
        if (!isWithinCooldown()) openPopup();
      }, RETRY_DELAY);
    }
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      <div
        className={`relative w-full max-w-md rounded-2xl bg-ink-900 border border-gold-400/30 shadow-2xl p-8 transition-all duration-300 ${
          visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
            Welcome to The Bare Method
          </h2>
          <p className="text-white/70 text-sm">
            Choose your experience.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
            className="flex items-center gap-4 w-full rounded-xl border border-gold-400/20 bg-ink-900/80 p-4 hover:border-gold-400/50 transition-colors group"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/10 group-hover:bg-gold-400/20 transition-colors">
              <Sparkles className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <span className="block font-display text-base text-white">Book Esthetics</span>
              <span className="block text-white/50 text-xs mt-0.5">Salon Lofts scheduling</span>
            </div>
          </a>

          <a
            href={MYBAREMETHOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
            className="flex items-center gap-4 w-full rounded-xl border border-gold-400/20 bg-ink-900/80 p-4 hover:border-gold-300/50 transition-colors group"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-200/10 group-hover:bg-blush-200/20 transition-colors">
              <HeartPulse className="h-5 w-5 text-gold-700" strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <span className="block font-display text-base text-white">My Bare Method</span>
              <span className="inline-flex items-center gap-1 text-white/50 text-xs mt-0.5">
                MyBareMethod.com <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </a>
        </div>

        <p className="text-center text-white/40 text-[11px] leading-relaxed max-w-xs mx-auto">
          Provider-led wellness services are provided through a separate website with its own providers, policies, and patient portal.
        </p>
      </div>
    </div>
  );
}

