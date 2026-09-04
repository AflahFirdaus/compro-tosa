import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Building2, Paintbrush, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '../../data/content';
import styles from './Navbar.module.css';

const CIVIL_DROPDOWN_LINKS = [
  { label: 'Arsitektur & Planning 3D', to: '/layanan/arsitektur-perencanaan-desain-pabrik' },
  { label: 'Konstruksi Baja & Gudang', to: '/layanan/konstruksi-baja-struktur-gudang' },
  { label: 'Poles Beton & Liquid Hardener', to: '/layanan/concrete-polishing-liquid-hardener' },
  { label: 'Renovasi Sipil & Jalan Rigid', to: '/layanan/renovasi-sipil-infrastruktur-pabrik' },
  { label: 'MEP, Piping & Boiler Pabrik', to: '/layanan/mep-piping-boiler-industri' },
];

const PAINTING_DROPDOWN_LINKS = [
  { label: 'Epoxy Lantai Industri', to: '/layanan/epoxy-lantai-industri' },
  { label: 'Protective Coating Anti-Karat', to: '/layanan/protective-coating-anti-karat' },
  { label: 'Waterproofing & FRP Lining', to: '/layanan/waterproofing-frp-lining' },
  { label: 'Marka Jalan & Rambu K3', to: '/layanan/marka-jalan-rambu-k3-pabrik' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Handle Mouse Enter dengan pembatalan timeout
  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  // Handle Mouse Leave dengan delay 250ms agar transisi mouse ke dropdown sangat nyaman & tidak sensitif
  const handleDropdownMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      closeTimeoutRef.current = null;
    }, 250);
  };

  // Tutup dropdown desktop saat klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLayananActive = location.pathname.startsWith('/layanan');

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label={COMPANY.name}>
            <img
              src="/Logo-tosa.webp"
              alt={COMPANY.name}
              className={styles.logoImg}
              width="150"
              height="42"
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.links}>
            <li>
              <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami" className={`${styles.link} ${location.pathname === '/tentang-kami' ? styles.active : ''}`}>
                Tentang Kami
              </Link>
            </li>

            {/* Dropdown Menu Layanan dengan Bridge Buffer */}
            <li 
              ref={dropdownRef}
              className={styles.dropdownContainer}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button 
                type="button"
                className={`${styles.link} ${styles.dropdownTrigger} ${isLayananActive ? styles.active : ''}`}
                onClick={() => setIsServicesOpen(prev => !prev)}
                aria-expanded={isServicesOpen}
              >
                <span>Layanan</span>
                <ChevronDown size={14} className={`${styles.chevron} ${isServicesOpen ? styles.chevronRotated : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              <div 
                className={`${styles.megaDropdown} ${isServicesOpen ? styles.megaDropdownOpen : ''}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className={styles.megaInner}>
                  <div className={styles.megaHeader}>
                    <div>
                      <span className={styles.megaTag}>1-STOP CONTRACTOR SOLUTION</span>
                      <h4 className={styles.megaTitle}>Spesialisasi Fasilitas Industri</h4>
                    </div>
                    <Link to="/layanan" className={styles.megaViewAll} onClick={() => setIsServicesOpen(false)}>
                      <span>Lihat Semua Layanan (Overview)</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <div className={styles.megaColumns}>
                    {/* Column 1: Civil Engineering */}
                    <div className={styles.megaCol}>
                      <div className={styles.colHeader}>
                        <Building2 size={16} color="#0066cc" />
                        <span>Civil Engineering &amp; Struktur</span>
                      </div>
                      <ul className={styles.colList}>
                        {CIVIL_DROPDOWN_LINKS.map(item => (
                          <li key={item.to}>
                            <Link 
                              to={item.to} 
                              className={`${styles.megaItem} ${location.pathname === item.to ? styles.megaItemActive : ''}`}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span>{item.label}</span>
                              <ChevronRight size={12} className={styles.itemArrow} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Industrial Painting */}
                    <div className={styles.megaCol}>
                      <div className={styles.colHeader}>
                        <Paintbrush size={16} color="#0066cc" />
                        <span>Industrial Painting &amp; Coating</span>
                      </div>
                      <ul className={styles.colList}>
                        {PAINTING_DROPDOWN_LINKS.map(item => (
                          <li key={item.to}>
                            <Link 
                              to={item.to} 
                              className={`${styles.megaItem} ${location.pathname === item.to ? styles.megaItemActive : ''}`}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span>{item.label}</span>
                              <ChevronRight size={12} className={styles.itemArrow} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/portofolio" className={`${styles.link} ${location.pathname === '/portofolio' ? styles.active : ''}`}>
                Portofolio
              </Link>
            </li>
            <li>
              <Link to="/kontak" className={`${styles.link} ${location.pathname === '/kontak' ? styles.active : ''}`}>
                Kontak
              </Link>
            </li>
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
          <li>
            <Link to="/" className={styles.drawerLink}>
              <span>Beranda</span>
              <ChevronRight size={18} />
            </Link>
          </li>
          <li>
            <Link to="/tentang-kami" className={styles.drawerLink}>
              <span>Tentang Kami</span>
              <ChevronRight size={18} />
            </Link>
          </li>

          {/* Mobile Accordion Layanan */}
          <li>
            <button
              type="button"
              className={styles.drawerAccordionBtn}
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Layanan Spesifik</span>
              <ChevronDown size={18} className={`${styles.drawerChevron} ${isMobileServicesOpen ? styles.drawerChevronRotated : ''}`} />
            </button>
            {isMobileServicesOpen && (
              <div className={styles.drawerSubMenu}>
                <Link to="/layanan" className={styles.drawerSubItemPrimary}>
                  <span>👉 Lihat Semua Layanan (Overview)</span>
                </Link>
                <div className={styles.drawerCategoryLabel}>Civil Engineering</div>
                {CIVIL_DROPDOWN_LINKS.map(item => (
                  <Link key={item.to} to={item.to} className={styles.drawerSubItem}>
                    {item.label}
                  </Link>
                ))}
                <div className={styles.drawerCategoryLabel}>Industrial Painting</div>
                {PAINTING_DROPDOWN_LINKS.map(item => (
                  <Link key={item.to} to={item.to} className={styles.drawerSubItem}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/portofolio" className={styles.drawerLink}>
              <span>Portofolio</span>
              <ChevronRight size={18} />
            </Link>
          </li>
          <li>
            <Link to="/kontak" className={styles.drawerLink}>
              <span>Kontak</span>
              <ChevronRight size={18} />
            </Link>
          </li>
        </ul>
        <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className={styles.drawerCta}>
          Konsultasi via WhatsApp
        </a>
      </div>
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}
