import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <img
              src="/Logo-tosa.png"
              alt={COMPANY.name}
              className={styles.footerLogoImg}
            />
            <p className={styles.brandName}>{COMPANY.name}</p>
            <p className={styles.brandDesc}>
              1-Stop Solution untuk Civil Engineering, Industrial Painting, dan Jasa Kontraktor untuk pabrik manufaktur skala besar di Indonesia.
            </p>
            <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Layanan Kami</h4>
            <ul className={styles.colLinks}>
              {['Steel Construction', 'MEP System', 'Piping System', 'Epoxy Floor Coating', 'Protective Coating', 'Waterproofing'].map(s => (
                <li key={s}>
                  <Link to="/layanan" className={styles.colLink}>
                    <ChevronRight size={12} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigasi</h4>
            <ul className={styles.colLinks}>
              {[
                { label: 'Beranda', to: '/' },
                { label: 'Tentang Kami', to: '/tentang-kami' },
                { label: 'Layanan', to: '/layanan' },
                { label: 'Portofolio', to: '/portofolio' },
                { label: 'Kontak', to: '/kontak' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className={styles.colLink}>
                    <ChevronRight size={12} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Hubungi Kami</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={14} className={styles.contactIcon} />
                <a href={`mailto:${COMPANY.email}`} className={styles.colLink}>{COMPANY.email}</a>
              </li>
              <li>
                <Phone size={14} className={styles.contactIcon} />
                <a href={`tel:${COMPANY.phoneWA}`} className={styles.colLink}>{COMPANY.phoneWA}</a>
              </li>
              <li>
                <Phone size={14} className={styles.contactIcon} />
                <span className={styles.colText}>{COMPANY.phoneOffice}</span>
              </li>
              <li>
                <Clock size={14} className={styles.contactIcon} />
                <span className={styles.colText}>{COMPANY.hours}</span>
              </li>
              <li>
                <MapPin size={14} className={styles.contactIcon} />
                <a
                  href={COMPANY.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                >
                  {COMPANY.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <span>© {year} {COMPANY.name}. All rights reserved.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/kebijakan-privasi" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Kebijakan Privasi
            </Link>
            <span>·</span>
            <span>Izin Usaha Jasa Konstruksi · SIUJK Terdaftar · ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
