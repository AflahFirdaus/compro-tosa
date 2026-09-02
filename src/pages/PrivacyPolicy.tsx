import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';
import { COMPANY } from '../data/content';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <SEO
        title="Kebijakan Privasi & Perlindungan Data — PT. TOTO SUKSES ABADI"
        description="Kebijakan privasi resmi PT. TOTO SUKSES ABADI mengenai pengelolaan, perlindungan data pribadi dan data korporasi klien sesuai regulasi perlindungan data di Indonesia."
        keywords="kebijakan privasi tosa, privacy policy pt toto sukses abadi, perlindungan data klien kontraktor"
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>KEBIJAKAN RESMI PERUSAHAAN</p>
          <h1 className={styles.title}>Kebijakan Privasi (Privacy Policy)</h1>
          <p className={styles.updated}>Pembaruan Terakhir: 2 September 2026</p>
        </div>

        <div className={styles.content}>
          <div className={styles.sectionBlock}>
            <p>
              Selamat datang di website resmi <strong>{COMPANY.name}</strong> (selanjutnya disebut "TOSA" atau "Kami"). Kami berkomitmen penuh untuk melindungi privasi, kerahasiaan, dan keamanan data pribadi maupun data operasional korporasi yang Anda berikan kepada kami melalui website ini sesuai dengan peraturan perundang-undangan yang berlaku di Republik Indonesia (termasuk Undang-Undang Perlindungan Data Pribadi / UU PDP).
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2>1. Data yang Kami Kumpulkan</h2>
            <p>Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela saat mengisi formulir penawaran, meminta jadwal survei, atau menghubungi tim teknis kami, meliputi:</p>
            <ul className={styles.list}>
              <li>Nama lengkap dan jabatan representatif perusahaan.</li>
              <li>Nama perusahaan / entitas manufaktur.</li>
              <li>Nomor telepon / kontak WhatsApp dan alamat email resmi.</li>
              <li>Detail spesifikasi proyek, lokasi fasilitas pabrik, dan Rencana Anggaran Biaya (RAB) yang diajukan.</li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2>2. Penggunaan Informasi</h2>
            <p>Informasi yang terkumpul digunakan secara eksklusif untuk tujuan profesional B2B, antara lain:</p>
            <ul className={styles.list}>
              <li>Menghubungi Anda guna menindaklanjuti permintaan penawaran harga (RAB) dan konsultasi teknis.</li>
              <li>Mengatur jadwal survei area kerja / fasilitas pabrik secara langsung.</li>
              <li>Menyiapkan dokumen administrasi pra-kualifikasi vendor (CSMS, tender, dan kontrak kerja sama).</li>
              <li>Menganalisis performa website dan efektivitas kampanye informasi layanan.</li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2>3. Kerahasiaan &amp; Jaminan Tidak Memperjualbelikan Data</h2>
            <p>
              Kami <strong>tidak pernah dan tidak akan menjual, menyewakan, membagikan, atau menyebarluaskan data pribadi atau data proyek Anda</strong> kepada pihak ketiga mana pun untuk tujuan komersial di luar lingkup kerja sama resmi dengan {COMPANY.name}.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2>4. Keamanan Data</h2>
            <p>
              Kami menerapkan standar pengamanan teknis dan organisasi yang memadai guna melindungi informasi Anda dari akses tanpa izin, perubahan, pengungkapan, atau perusakan yang melanggar hukum.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2>5. Penggunaan Cookies &amp; Analitik Iklan</h2>
            <p>
              Website kami dapat menggunakan cookies dan teknologi analitik (seperti Google Analytics / Google Ads Tags) untuk memahami interaksi pengunjung dan meningkatkan relevansi layanan. Anda berhak menonaktifkan cookies melalui pengaturan peramban (browser) Anda setiap saat.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2>6. Kontak Layanan Pelanggan &amp; Privasi</h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin memperbarui informasi data Anda, silakan hubungi kami di:
            </p>
            <ul className={styles.list}>
              <li><strong>Email:</strong> {COMPANY.email}</li>
              <li><strong>WhatsApp Hotline:</strong> {COMPANY.phoneWA}</li>
              <li><strong>Telepon Kantor:</strong> {COMPANY.phoneOffice}</li>
              <li><strong>Alamat Kantor &amp; Workshop:</strong> {COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <Link to="/" className={styles.backBtn}>
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
