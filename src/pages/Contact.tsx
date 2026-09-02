import { ExternalLink, MapPin } from 'lucide-react';
import SEO from '../components/common/SEO';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import FAQSection from '../components/common/FAQSection';
import { COMPANY, FAQS } from '../data/content';
import styles from './Contact.module.css';

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: 'Kontak & Penawaran Jasa Kontraktor — PT. TOTO SUKSES ABADI',
        description: 'Hubungi tim teknis PT. TOTO SUKSES ABADI untuk konsultasi proyek, estimasi anggaran RAB, dan survei lokasi.',
        mainEntity: {
          '@type': 'GeneralContractor',
          name: COMPANY.name,
          telephone: COMPANY.phoneWA,
          email: COMPANY.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kawasan Industri, Cikarang',
            addressLocality: 'Bekasi',
            addressRegion: 'Jawa Barat',
            postalCode: '17530',
            addressCountry: 'ID',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className={styles.main}>
      <SEO
        title="Kontak & Penawaran Jasa Kontraktor — PT. TOTO SUKSES ABADI"
        description="Hubungi tim teknis PT. TOTO SUKSES ABADI untuk konsultasi proyek, penawaran harga (RAB), jadwal survei area pabrik, atau konsultasi spesifikasi epoxy dan konstruksi baja via WhatsApp & Email."
        keywords="kontak kontraktor tosa, nomor telepon kontraktor cikarang, konsultasi jasa kontraktor pabrik, alamat kantor tosa cikarang, penawaran harga kontraktor rab"
        structuredData={contactSchema}
      />
      <section className={styles.heroSection}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <p className={styles.eyebrow}>KONTAK &amp; PENAWARAN PROYEK</p>
            <h1 className={styles.title}>
              Mau Memulai Projek?<br />
              <span className={styles.titleBlue}>Hubungi Kami Sekarang Juga.</span>
            </h1>
            <p className={styles.subtitle}>
              Tim teknis kami siap memberikan estimasi anggaran biaya (RAB), konsultasi spesifikasi material, dan survei lapangan tanpa biaya komitmen awal.
            </p>
          </div>

          {/* 2-Column Info & Form Grid */}
          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <ContactInfo />
            </div>
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Formulir Pengajuan Proyek</h3>
                <p className={styles.formSubtitle}>
                  Isi data di bawah ini untuk terhubung langsung dengan representatif kami via WhatsApp resmi.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Section */}
          <div className={styles.mapSection}>
            <div className={styles.mapHeader}>
              <div className={styles.mapTitleGroup}>
                <div className={styles.mapIconBox}>
                  <MapPin size={22} />
                </div>
                <div>
                  <span className={styles.mapEyebrow}>LOKASI WORKSHOP &amp; KANTOR OPERASIONAL</span>
                  <h2 className={styles.mapTitle}>{COMPANY.address}</h2>
                </div>
              </div>

              <a
                href={COMPANY.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapDirectBtn}
              >
                <span>Buka Petunjuk Arah Google Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>

            <div className={styles.mapFrameWrapper}>
              <iframe
                title="Google Maps Lokasi PT. TOTO SUKSES ABADI"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0488563800113!2d107.11629227453341!3d-6.387697062477977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6999e95fbd847b%3A0x542adacc577d7906!2sPT.Toto%20Sukses%20Abadi%2CCikarang!5e0!3m2!1sid!2sid!4v1788242052212!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className={styles.mapIframe}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="INFORMASI & KONSULTASI PROYEK"
        title="FAQ Seputar Kerjasama & Penawaran RAB"
        subtitle="Pertanyaan seputar alur pengajuan tender, survei lapangan gratis, surat penawaran harga, dan syarat kerja sama."
      />
    </main>
  );
}
