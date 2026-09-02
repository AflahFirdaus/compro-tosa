import { Link } from 'react-router-dom';
import { Home, ArrowRight, MessageSquare } from 'lucide-react';
import SEO from '../components/common/SEO';
import { COMPANY } from '../data/content';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <SEO
        title="404 — Halaman Tidak Ditemukan | PT. TOTO SUKSES ABADI"
        description="Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan."
      />

      <div className={styles.container}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Halaman Tidak Ditemukan</h1>
        <p className={styles.desc}>
          Mohon maaf, tautan yang Anda tuju mungkin salah ketik atau telah dipindahkan. Silakan kembali ke beranda atau hubungi representatif kami.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            <Home size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link to="/layanan" className={styles.btnSecondary}>
            <span>Lihat Layanan Kami</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <MessageSquare size={16} />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
