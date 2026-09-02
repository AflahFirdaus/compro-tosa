import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HERO_IMG = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop';

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Natural Industrial Background Photo */}
      <div className={styles.bgWrapper} aria-hidden="true">
        <img
          src={HERO_IMG}
          alt="Civil Engineering & Industrial Painting Facility - PT Toto Sukses Abadi"
          className={styles.bgImage}
        />
        <div className={styles.lightOverlay} />
      </div>

      {/* Content Container */}
      <div className={styles.container}>
        <div ref={contentRef} className={styles.content}>
          {/* Eyebrow badge */}
          <div className={styles.eyebrow}>
            ISO 9001:2015 &amp; ZERO ACCIDENT K3 CERTIFIED
          </div>

          {/* Main Headline */}
          <h1 className={styles.title}>
            Solusi Kontraktor Pabrik, Civil Engineering &amp; Industrial Painting Terpercaya
          </h1>

          {/* Concise Subtitle */}
          <p className={styles.subtitle}>
            PT. TOTO SUKSES ABADI adalah mitra kontraktor spesialis fasilitas manufaktur di Indonesia. Berkompeten, disiplin mutu ISO, dan konsisten menghadirkan standar pengerjaan bergaransi resmi.
          </p>

          {/* Clean Action Buttons */}
          <div className={styles.ctas}>
            <Link to="/kontak" className={`${styles.btn} ${styles.btnPrimary}`}>
              <FileText size={16} />
              <span>Minta Penawaran RAB &amp; Survei</span>
            </Link>
            <Link to="/layanan" className={`${styles.btn} ${styles.btnGhost}`}>
              <span>Eksplorasi Layanan</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Trust Mini Highlights */}
          <div className={styles.trustBadges}>
            <div className={styles.trustBadgeItem}>
              <CheckCircle size={15} className={styles.trustIcon} />
              <span>Garansi Resmi Tertulis</span>
            </div>
            <div className={styles.trustBadgeItem}>
              <CheckCircle size={15} className={styles.trustIcon} />
              <span>Rekam Jejak Zero Accident</span>
            </div>
            <div className={styles.trustBadgeItem}>
              <CheckCircle size={15} className={styles.trustIcon} />
              <span>Fleksibel Jadwal Factory Shutdown</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <ChevronDown size={22} className={styles.scrollChevron} />
      </div>
    </section>
  );
}
