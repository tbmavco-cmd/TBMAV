import { Calendar, HeartPulse, MessageCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

const MYBAREMETHOD_URL = 'https://MyBareMethod.com';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="border-t border-ink-900/10 bg-nude-50/95 backdrop-blur-md px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(26,22,20,0.08)]">
        <div className="grid grid-cols-3 gap-1.5">
          <a
            href={siteConfig.salonLofts.servicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-ink-900 hover:bg-ink-900/5 transition-colors"
          >
            <Calendar className="h-5 w-5 text-gold-500" />
            <span className="text-[11px] font-medium leading-tight text-center">Book Esthetics</span>
          </a>
          <a
            href={MYBAREMETHOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-ink-900 hover:bg-ink-900/5 transition-colors"
          >
            <HeartPulse className="h-5 w-5 text-emerald-600" />
            <span className="text-[11px] font-medium leading-tight text-center">Wellness</span>
          </a>
          <a
            href={siteConfig.business.smsHref}
            className="flex flex-col items-center gap-1 rounded-xl bg-ink-900 px-2 py-2 text-cream-50 transition-colors hover:bg-ink-800"
          >
            <MessageCircle className="h-5 w-5 text-gold-300" />
            <span className="text-[11px] font-medium leading-tight text-center">Text Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
