import { type ReactNode } from 'react';
import AnnouncementBar from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileActionBar } from './MobileActionBar';
import OfferPopup from './OfferPopup';
import { useScrollToTop } from '@/lib/useScrollToTop';

export function Layout({ children }: { children: ReactNode }) {
  useScrollToTop();
  return (
    <div className="flex min-h-screen flex-col bg-nude-50">
      <AnnouncementBar />
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <MobileActionBar />
      <OfferPopup />
    </div>
  );
}
