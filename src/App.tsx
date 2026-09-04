import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWA from './components/layout/FloatingWA';
import PageLoader from './components/common/PageLoader';

// ── Route-based Code Splitting ────────────────────────────────────────────────
// Setiap halaman hanya di-download ketika user navigasi ke sana,
// bukan saat pertama kali buka website. Ini memangkas JS bundle initial load
// secara signifikan.
const Home          = lazy(() => import('./pages/Home'));
const About         = lazy(() => import('./pages/About'));
const Services      = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Portfolio     = lazy(() => import('./pages/Portfolio'));
const Contact       = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound      = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/tentang-kami"      element={<About />} />
          <Route path="/layanan"           element={<Services />} />
          <Route path="/layanan/:slug"     element={<ServiceDetail />} />
          <Route path="/portofolio"        element={<Portfolio />} />
          <Route path="/kontak"            element={<Contact />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
          <Route path="*"                  element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingWA />
    </BrowserRouter>
  );
}
