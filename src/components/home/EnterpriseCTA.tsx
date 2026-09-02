import { Link } from 'react-router-dom';
import { MessageSquare, Check, FileText } from 'lucide-react';
import { COMPANY } from '../../data/content';
import { trackEvent } from '../../utils/analytics';
import styles from './EnterpriseCTA.module.css';

export default function EnterpriseCTA() {
  const handleWAClick = () => {
    trackEvent('click_whatsapp', {
      source: 'enterprise_cta_banner',
      page: 'home',
    });
  };

  return (
    <section className={styles.section} id="cta-konsultasi">
      <div className={styles.container}>
        <p className={styles.eyebrow}>KONSULTASI &amp; ESTIMASI ANGGARAN</p>
        <h2 className={styles.title}>
          Siap Meningkatkan Standar &amp; Ketahanan <br />
          <span className={styles.titleBlue}>Fasilitas Pabrik Manufaktur Anda?</span>
        </h2>
        <p className={styles.subtitle}>
          Diskusikan rencana proyek, kebutuhan spesifikasi material, dan jadwal survei lapangan langsung dengan tim teknis &amp; estimator berpengalaman kami.
        </p>

        <div className={styles.actions}>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWAClick}
            className={styles.btnPrimary}
          >
            <MessageSquare size={18} />
            <span>Chat Langsung via WhatsApp</span>
          </a>
          <Link to="/kontak" className={styles.btnSecondary}>
            <FileText size={18} />
            <span>Kirim Form Permintaan Penawaran RAB</span>
          </Link>
        </div>

        <div className={styles.perksGrid}>
          <div className={styles.perkItem}>
            <Check size={16} className={styles.perkIcon} />
            <span>Survei Lapangan &amp; Konsultasi Bebas Biaya Awal</span>
          </div>
          <div className={styles.perkItem}>
            <Check size={16} className={styles.perkIcon} />
            <span>Penyusunan RAB Rinci &amp; Spesifikasi Teknis Cepat</span>
          </div>
          <div className={styles.perkItem}>
            <Check size={16} className={styles.perkIcon} />
            <span>Hotline Resmi: {COMPANY.phoneOffice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
