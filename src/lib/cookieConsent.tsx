import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type CookiePreferences = {
  strictly_necessary: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
  affiliate_attribution: boolean;
};

const DEFAULT_PREFS: CookiePreferences = {
  strictly_necessary: true,
  functional: false,
  analytics: false,
  advertising: false,
  affiliate_attribution: false,
};

const STORAGE_KEY = 'bare-method-cookie-prefs';

type CookieContextValue = {
  preferences: CookiePreferences;
  setPreferences: (p: CookiePreferences) => void;
  hasConsented: boolean;
  showBanner: boolean;
  setShowBanner: (s: boolean) => void;
};

const CookieContext = createContext<CookieContextValue | undefined>(undefined);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFS);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPrefs({ ...DEFAULT_PREFS, ...parsed });
        setHasConsented(true);
      } else {
        setShowBanner(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const setPreferences = (p: CookiePreferences) => {
    const final = { ...p, strictly_necessary: true };
    setPrefs(final);
    setHasConsented(true);
    setShowBanner(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(final));
    } catch {
      // ignore
    }
  };

  return (
    <CookieContext.Provider value={{ preferences, setPreferences, hasConsented, showBanner, setShowBanner }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieProvider');
  return ctx;
}

