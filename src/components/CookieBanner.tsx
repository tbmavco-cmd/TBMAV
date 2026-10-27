import { useState } from 'react';
import { Cookie, Check, X, Settings } from 'lucide-react';
import { useCookieConsent, type CookiePreferences } from '@/lib/cookieConsent';
import { Link } from 'react-router-dom';

const categories: { key: keyof CookiePreferences; label: string; description: string; alwaysOn?: boolean }[] = [
  { key: 'strictly_necessary', label: 'Strictly Necessary', description: 'Required for the website to function. Cannot be disabled.', alwaysOn: true },
  { key: 'functional', label: 'Functional', description: 'Enable enhanced features like saved preferences.' },
  { key: 'analytics', label: 'Analytics', description: 'Help us understand how visitors use the website. Events use neutral names and never include health information.' },
  { key: 'advertising', label: 'Advertising', description: 'Used to deliver relevant ads. Not loaded on clinical or patient-portal pages.' },
  { key: 'affiliate_attribution', label: 'Affiliate Attribution', description: 'Track referrals from affiliate partners.' },
];

export function CookieBanner() {
  const { showBanner, setShowBanner, preferences, setPreferences } = useCookieConsent();
  const [customizing, setCustomizing] = useState(false);
  const [draft, setDraft] = useState<CookiePreferences>(preferences);

  if (!showBanner) return null;

  const acceptAll = () => {
    setPreferences({
      strictly_necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
      affiliate_attribution: true,
    });
  };

  const rejectNonessential = () => {
    setPreferences({
      strictly_necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
      affiliate_attribution: false,
    });
  };

  const saveCustom = () => {
    setPreferences(draft);
    setCustomizing(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blush-200 bg-ink-900 text-white shadow-2xl">
      <div className="container-bare py-6">
        <div className="flex items-start gap-4">
          <Cookie className="mt-1 h-6 w-6 shrink-0 text-gold-400" />
          <div className="flex-1">
            <h2 className="font-display text-lg font-medium text-white">Cookie Preferences</h2>
            <p className="mt-1 text-sm text-white/80">
              We use cookies to operate the website, understand usage, and — where enabled — deliver
              relevant ads and track affiliate referrals. You can accept all, reject nonessential, or
              customize. See our{' '}
              <Link to="/legal/cookie-notice" className="text-gold-400 underline">Cookie Notice</Link>.
            </p>

            {customizing && (
              <div className="mt-4 space-y-3">
                {categories.map((cat) => (
                  <label key={cat.key} className="flex items-start gap-3 rounded-lg bg-blush-50/5 p-3">
                    <input
                      type="checkbox"
                      disabled={cat.alwaysOn}
                      checked={cat.alwaysOn ? true : draft[cat.key]}
                      onChange={(e) => setDraft({ ...draft, [cat.key]: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-blush-200 text-gold-500 disabled:opacity-50"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">{cat.label}</p>
                      <p className="text-xs text-white/70">{cat.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              {!customizing ? (
                <>
                  <button onClick={acceptAll} className="btn-gold text-sm">
                    <Check className="h-4 w-4" /> Accept All
                  </button>
                  <button onClick={rejectNonessential} className="btn-outline border-blush-200/30 text-white hover:bg-blush-50/10 text-sm">
                    <X className="h-4 w-4" /> Reject Nonessential
                  </button>
                  <button onClick={() => { setDraft(preferences); setCustomizing(true); }} className="text-sm text-gold-400 underline">
                    <Settings className="h-4 w-4" /> Customize
                  </button>
                </>
              ) : (
                <>
                  <button onClick={saveCustom} className="btn-gold text-sm">Save Preferences</button>
                  <button onClick={() => setCustomizing(false)} className="text-sm text-white/70 underline">Cancel</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

