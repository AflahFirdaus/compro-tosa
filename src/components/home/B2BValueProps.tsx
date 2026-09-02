import { FileCheck, ShieldAlert, Clock, Award } from 'lucide-react';
import styles from './B2BValueProps.module.css';

const VALUE_PROPS = [
  {
    icon: FileCheck,
    title: 'Legalitas PT, PKP & Dokumen Tender Lengkap',
    desc: 'Memenuhi seluruh kualifikasi administratif pengadaan korporasi: Berbadan hukum PT resmi, NPWP, PKP, SBU Konstruksi, NIB, faktur pajak valid, dan siap mengikuti proses Prakualifikasi Vendor (CSMS / Vendor Listing).',
  },
  {
    icon: ShieldAlert,
    title: 'Komitmen Zero Accident & Kepatuhan K3',
    desc: 'Prioritas mutlak keselamatan kerja melalui implementasi SOP HIRADC, Job Safety Analysis (JSA), Safety Induction harian, kelengkapan APD standar internasional, serta pengawas K3 bersertifikasi Kemenaker RI.',
  },
  {
    icon: Clock,
    title: 'Fleksibilitas Operasional (Zero Factory Downtime)',
    desc: 'Kami memahami ritme produksi pabrik Anda. Tim kami siap melaksanakan pengerjaan saat periode Factory Shutdown, shift malam, maupun akhir pekan tanpa mengganggu kontinuitas jalur produksi manufaktur.',
  },
  {
    icon: Award,
    title: 'Garansi Resmi Tertulis & Material Original',
    desc: 'Jaminan kepastian mutu melalui sertifikat garansi purna jual tertulis dan penggunaan material original langsung dari distributor pabrikan terkemuka lengkap dengan Technical Data Sheet (TDS) dan MSDS.',
  },
];

export default function B2BValueProps() {
  return (
    <section className={styles.section} id="keunggulan-b2b">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>KEUNGGULAN PENGADAAN B2B</p>
          <h2 className={styles.title}>
            Mengapa Manajemen Pabrik &amp; Tim Procurement <br />
            <span className={styles.titleAccent}>Mempercayakan Proyek Kepada TOSA?</span>
          </h2>
          <p className={styles.subtitle}>
            Standar integritas teknis, transparansi anggaran, dan kepatuhan regulasi industri yang memudahkan proses pengadaan proyek Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {VALUE_PROPS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon size={26} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
