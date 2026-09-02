import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '../../data/content';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Kontak', to: '/kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label={COMPANY.name}>
            <img
              src="/Logo-tosa.png"
              alt={COMPANY.name}
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.links}>
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`${styles.link} ${location.pathname === link.to ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className={styles.actions}>
            <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              Konsultasi Sekarang
              <ChevronRight size={14} />
            </a>
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={styles.drawerLink}>
                {link.label}
                <ChevronRight size={18} />
              </Link>
            </li>
          ))}
        </ul>
        <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className={styles.drawerCta}>
          Konsultasi via WhatsApp
        </a>
      </div>
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}
