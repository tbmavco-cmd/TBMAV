import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/lib/cart';
import { CookieProvider } from '@/lib/cookieConsent';
import { CookieBanner } from '@/components/CookieBanner';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { EstheticsPage } from '@/pages/EstheticsPage';
import { WellnessPage } from '@/pages/WellnessPage';
import { MembershipsPage } from '@/pages/MembershipsPage';
import { AboutPage } from '@/pages/AboutPage';
import { ResultsPage } from '@/pages/ResultsPage';
import { FaqsPage } from '@/pages/FaqsPage';
import { ContactPage } from '@/pages/ContactPage';
import { LegalPage } from '@/pages/LegalPage';
import { RefundRequestPage } from '@/pages/RefundRequestPage';
import { MembershipCancellationPage } from '@/pages/MembershipCancellationPage';
import { PrivacyRequestPage } from '@/pages/PrivacyRequestPage';
import { AdminPage } from '@/pages/AdminPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { FinancingPage } from '@/pages/FinancingPage';

function App() {
  return (
    <CartProvider>
      <CookieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/esthetics" element={<EstheticsPage />} />
                    <Route path="/wellness" element={<WellnessPage />} />
                    <Route path="/memberships" element={<MembershipsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/results" element={<ResultsPage />} />
                    <Route path="/faqs" element={<FaqsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/legal/:slug" element={<LegalPage />} />
                    <Route path="/refund-request" element={<RefundRequestPage />} />
                    <Route path="/cancel-membership" element={<MembershipCancellationPage />} />
                    <Route path="/privacy-request" element={<PrivacyRequestPage />} />
                    <Route path="/financing" element={<FinancingPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </CookieProvider>
    </CartProvider>
  );
}

export default App;
