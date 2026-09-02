import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWA from './components/layout/FloatingWA';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/portofolio" element={<Portfolio />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWA />
    </BrowserRouter>
  );
}
