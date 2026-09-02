import { Link } from 'react-router-dom';
import styles from './CompanyOverview.module.css';
import { CheckCircle, Wrench, Zap, Package } from 'lucide-react';

const SOLUTION_PILLARS = [
  { icon: Wrench, title: 'Maintenance', desc: 'Perawatan rutin dan preventif untuk fasilitas pabrik agar operasional tetap berjalan optimal tanpa downtime.' },
  { icon: Zap, title: 'Trouble Shooting', desc: 'Respons cepat terhadap masalah struktural, kebocoran, atau kerusakan cat yang membutuhkan penanganan segera.' },
  { icon: Package, title: 'Material Supply', desc: 'Penyediaan material konstruksi dan cat industri berkualitas tinggi dari supplier terpercaya dengan harga kompetitif.' },
];

export default function CompanyOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>PROFIL PERUSAHAAN</p>
          <h1 className={styles.title}>
            Kapabilitas Teknis &amp; Rekam Jejak Industri<br />
            <span className={styles.titleBlue}>PT. TOTO SUKSES ABADI</span>
          </h1>
        </div>

        {/* Two-column overview */}
        <div className={styles.overview}>
          <div className={styles.overviewText}>
            <p className={styles.lead}>
              PT. TOTO SUKSES ABADI (TOSA) berdiri sebagai mitra kontraktor terpercaya untuk industri manufaktur besar di Indonesia. Dengan pengalaman lebih dari dua dekade, kami telah menjadi pilihan utama bagi perusahaan-perusahaan kelas dunia dalam hal Civil Engineering dan Industrial Painting.
            </p>
            <p className={styles.body}>
              Kami memahami bahwa setiap menit downtime di lantai produksi berarti kerugian bagi klien. Itulah mengapa kami beroperasi dengan disiplin militer — jadwal ketat, komunikasi transparan, dan standar keselamatan kerja (K3) yang tidak dapat dikompromikan.
            </p>
            <p className={styles.body}>
              Dengan tim tenaga ahli bersertifikat, peralatan modern, dan rekam jejak zero accident, TOSA siap menjadi mitra jangka panjang untuk semua kebutuhan konstruksi dan perawatan pabrik Anda.
            </p>

            <ul className={styles.highlights}>
              {[
                'Tenaga ahli bersertifikat nasional & internasional',
                'Sistem Manajemen K3 terstandarisasi',
                'Penggunaan material premium (Jotun, Nippon, Sika)',
                'Rekam jejak Zero Accident selama operasional',
                'Jangkauan kerja seluruh wilayah Indonesia',
              ].map(h => (
                <li key={h} className={styles.highlight}>
                  <CheckCircle size={18} className={styles.highlightIcon} />
                  {h}
                </li>
              ))}
            </ul>

            <Link to="/kontak" className={styles.cta}>
              Diskusikan Kebutuhan Anda
            </Link>
          </div>

          {/* Stats card */}
          <div className={styles.overviewAside}>
            <div className={styles.asideCard}>
              <div className={styles.asideCardHeader}>
                <span className={styles.asideCardIcon}>🏆</span>
                <h3 className={styles.asideCardTitle}>20+ Tahun Pengalaman</h3>
              </div>
              <p className={styles.asideCardDesc}>
                Berdiri sejak 2005, kami telah melewati berbagai siklus ekonomi dan terus tumbuh bersama klien kami.
              </p>
            </div>
            <div className={styles.asideCard}>
              <div className={styles.asideCardHeader}>
                <span className={styles.asideCardIcon}>🛡️</span>
                <h3 className={styles.asideCardTitle}>ISO 9001 Certified</h3>
              </div>
              <p className={styles.asideCardDesc}>
                Sistem manajemen mutu kami bersertifikat ISO 9001 — jaminan proses yang konsisten dan terukur.
              </p>
            </div>
            <div className={styles.asideCard}>
              <div className={styles.asideCardHeader}>
                <span className={styles.asideCardIcon}>📍</span>
                <h3 className={styles.asideCardTitle}>Nasional Coverage</h3>
              </div>
              <p className={styles.asideCardDesc}>
                Beroperasi di Jawa, Sumatera, Kalimantan, dan Sulawesi. Tim kami siap bergerak ke mana klien membutuhkan.
              </p>
            </div>
          </div>
        </div>

        {/* 1-Stop Solution */}
        <div className={styles.solution}>
          <div className={styles.solutionHeader}>
            <p className={styles.eyebrow}>Pendekatan Kami</p>
            <h2 className={styles.solutionTitle}>1-Stop Solution untuk Industri</h2>
            <p className={styles.solutionSubtitle}>
              Tidak perlu berkoordinasi dengan banyak vendor. TOSA hadir sebagai satu pintu untuk semua kebutuhan konstruksi dan perawatan fasilitas pabrik Anda.
            </p>
          </div>
          <div className={styles.pillars}>
            {SOLUTION_PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className={styles.pillarTitle}>{title}</h3>
                <p className={styles.pillarDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
