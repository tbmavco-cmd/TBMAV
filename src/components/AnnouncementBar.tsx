import { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export type Announcement = {
  id: string;
  headline: string;
  link: string | null;
  cta_text: string | null;
  audience: string;
  priority: number;
};

const ROTATION_INTERVAL = 4500;
const SESSION_KEY = 'bare-method-announcements-dismissed';

const fallbackAnnouncements: Announcement[] = [
  {
    id: 'first-spa-50',
    headline: 'Now offering IPL photofacials & SHR light-pulse hair reduction',
    link: '/esthetics',
    cta_text: 'Book Now',
    audience: 'all',
    priority: 5,
  },
  {
    id: 'wellness-mybaremethod',
    headline: 'Provider-Led Wellness Now at My Bare Method',
    link: 'https://MyBareMethod.com',
    cta_text: 'Visit',
    audience: 'all',
    priority: 4,
  },
  {
    id: 'memberships-explore',
    headline: 'Explore Esthetic Memberships & Packages',
    link: '/memberships',
    cta_text: 'View Plans',
    audience: 'all',
    priority: 3,
  },
  {
    id: 'limited-specials',
    headline: 'Limited-Time Esthetics Specials',
    link: '/esthetics',
    cta_text: 'See Offers',
    audience: 'all',
    priority: 2,
  },
  {
    id: 'mybaremethod-wellness-2',
    headline: 'Weight, Hormones, Longevity & More — My Bare Method',
    link: 'https://MyBareMethod.com',
    cta_text: 'Learn More',
    audience: 'all',
    priority: 1,
  },
];

export default function AnnouncementBar() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([fallbackAnnouncements[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const isPaused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (dismissed === 'true') {
      setVisible(false);
      return;
    }

    supabase
      .from('announcements')
      .select('id, headline, link, cta_text, audience, priority')
      .eq('is_active', true)
      .lte('starts_at', new Date().toISOString())
      .or(`ends_at.is.null,ends_at.gt.${new Date().toISOString()}`)
      .order('priority', { ascending: false })
      .limit(3)
      .then(({ data }) => {
        const items: Announcement[] = data && data.length > 0 ? data : fallbackAnnouncements;
        // Keep the current service announcement first and suppress retired-service promotions.
        const currentItems = items.filter(item => !/\bE[M]S\b|Sculpt\s*&\s*Glow|50% Off First Spa/i.test(item.headline));
        setAnnouncements([fallbackAnnouncements[0], ...currentItems.filter(item => item.id !== fallbackAnnouncements[0].id)]);
      });
  }, []);

  const advance = useCallback(
    (direction: 1 | -1) => {
      if (announcements.length <= 1) return;
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + direction + announcements.length) % announcements.length);
        setFading(false);
      }, 300);
    },
    [announcements.length]
  );

  useEffect(() => {
    if (announcements.length <= 1) return;

    timerRef.current = setInterval(() => {
      if (!isPaused.current) advance(1);
    }, ROTATION_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [announcements.length, advance]);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, 'true');
  };

  if (!visible || announcements.length === 0) return null;

  const current = announcements[currentIndex];
  const hasLink = !!current.link;

  const content = (
    <span className="inline-flex items-center gap-2 text-center text-xs sm:text-sm font-medium leading-snug">
      <span>{current.headline}</span>
      {current.cta_text && (
        <span className="hidden sm:inline whitespace-nowrap underline underline-offset-2 decoration-[#c6a15b]/60 font-semibold">
          {current.cta_text}
        </span>
      )}
    </span>
  );

  return (
    <div
      className="relative z-50 flex items-center justify-center bg-ink-900 text-white select-none"
      style={{ minHeight: '40px' }}
      role="region"
      aria-label="Announcements"
      aria-live="polite"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      onFocus={() => { isPaused.current = true; }}
      onBlur={() => { isPaused.current = false; }}
    >
      {/* Previous button */}
      {announcements.length > 1 && (
        <button
          onClick={() => advance(-1)}
          className="absolute left-2 sm:left-4 flex items-center justify-center w-6 h-6 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center px-10 sm:px-14 py-2.5 sm:py-2 overflow-hidden">
        <div
          className={`transition-opacity duration-300 ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          {hasLink ? (
            <a
              href={current.link!}
              {...(current.link!.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-white hover:text-[#c6a15b] transition-colors"
            >
              {content}
            </a>
          ) : (
            content
          )}
        </div>
      </div>

      {/* Next button */}
      {announcements.length > 1 && (
        <button
          onClick={() => advance(1)}
          className="absolute right-10 sm:right-12 flex items-center justify-center w-6 h-6 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Next announcement"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Close button */}
      <button
        onClick={handleDismiss}
        className="absolute right-2 sm:right-4 flex items-center justify-center w-6 h-6 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Dismiss announcements"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

