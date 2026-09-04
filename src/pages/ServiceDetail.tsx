import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Calendar,
  Wrench,
  Clock,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { SERVICE_DETAILS } from '../data/serviceDetailsData';
import { REAL_PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { COMPANY } from '../data/content';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!slug || !SERVICE_DETAILS[slug]) {
    return <Navigate to="/layanan" replace />;
  }

  const service = SERVICE_DETAILS[slug];
  const relevantProjects = REAL_PORTFOLIO_PROJECTS.filter(p => 
    service.relevantProjectIds.includes(p.id)
  );

  // Structured Data Schema khusus halaman layanan ini
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': service.title,
        'description': service.metaDescription,
        'provider': {
          '@type': 'GeneralContractor',
          'name': 'PT. TOTO SUKSES ABADI',
          'url': 'https://totosuksesabadi.co.id',
          'telephone': COMPANY.phoneWA,
          'image': 'https://totosuksesabadi.co.id/Logo-tosa.png',
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Indonesia',
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': service.title,
          'itemListElement': service.solutions.map(sol => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': sol.title,
              'description': sol.desc,
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': service.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      },
    ],
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <main className={styles.main}>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
        structuredData={serviceSchema}
      />

      {/* ── 1. Hero Section Problem-Solution ── */}
      <section className={styles.heroSection}>
        {service.heroImage && (
          <div className={styles.heroBgWrapper} aria-hidden="true">
            <img
              src={service.heroImage}
              alt=""
              className={styles.heroBgImg}
              fetchPriority="high"
              decoding="async"
              width="1400"
              height="600"
            />
            <div className={styles.heroBgOverlay} />
          </div>
        )}
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link to="/" className={styles.breadLink}>Beranda</Link>
            <ChevronRight size={14} className={styles.breadSep} />
            <Link to="/layanan" className={styles.breadLink}>Layanan</Link>
            <ChevronRight size={14} className={styles.breadSep} />
            <span className={styles.breadCurrent}>{service.shortTitle}</span>
          </nav>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{service.heroBadge}</span>
            <h1 className={styles.heroTitle}>{service.heroTitle}</h1>
            <p className={styles.heroSubtitle}>{service.heroSubtitle}</p>

            <div className={styles.heroCtas}>
              <Link to="/kontak" className={`${styles.btn} ${styles.btnPrimary}`}>
                <FileText size={16} />
                <span>Minta Penawaran RAB &amp; Site Survey</span>
              </Link>
              <a 
                href={`https://wa.me/6281218351002?text=Halo%20Tim%20TOSA%2C%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(service.title)}.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.btn} ${styles.btnWA}`}
              >
                <span>Konsultasi WhatsApp Cepat</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <ShieldCheck size={16} color="#22c55e" />
                <span>Garansi Resmi Tertulis</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} color="#22c55e" />
                <span>Bebas Biaya Site Survey Lapangan</span>
              </div>
              <div className={styles.trustItem}>
                <Calendar size={16} color="#22c55e" />
                <span>Fleksibel Jadwal Factory Shutdown</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem-Based Analysis Section ── */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.taglineRed}>
              <AlertTriangle size={14} />
              IDENTIFIKASI MASALAH INDUSTRI
            </span>
            <h2 className={styles.sectionTitle}>{service.problemSectionTitle}</h2>
            <p className={styles.sectionSubtitle}>{service.problemSectionSubtitle}</p>
          </div>

          <div className={styles.problemGrid}>
            {service.problems.map((prob, idx) => (
              <div key={idx} className={styles.problemCard}>
                <div className={styles.probBadge}>Masalah 0{idx + 1}</div>
                <h3 className={styles.probTitle}>{prob.title}</h3>
                <p className={styles.probDesc}>{prob.desc}</p>
                <div className={styles.probImpact}>
                  <strong>Dampak Kerugian:</strong> {prob.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Solutions & Technical Capabilities ── */}
      <section className={styles.solutionSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.taglineBlue}>
              <Sparkles size={14} />
              SOLUSI TEKNIS TOSA
            </span>
            <h2 className={styles.sectionTitle}>Metode Rekayasa &amp; Standar Pengerjaan</h2>
            <p className={styles.sectionSubtitle}>
              Dirancang untuk mengatasi akar masalah secara permanen dengan material bermutu tinggi dan kepatuhan metode kerja presisi.
            </p>
          </div>

          <div className={styles.solutionGrid}>
            {service.solutions.map((sol, idx) => (
              <div key={idx} className={styles.solutionCard}>
                <div className={styles.solHeader}>
                  <span className={styles.solNumber}>0{idx + 1}</span>
                  <h3 className={styles.solTitle}>{sol.title}</h3>
                </div>
                <p className={styles.solDesc}>{sol.desc}</p>
                <ul className={styles.featureList}>
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Technical Specifications Table ── */}
      <section className={styles.specSection}>
        <div className={styles.container}>
          <div className={styles.specCard}>
            <div className={styles.specHeader}>
              <Wrench size={20} color="#0066cc" />
              <h2 className={styles.specTitle}>Spesifikasi Teknis &amp; Standar Mutu</h2>
            </div>
            <div className={styles.specGrid}>
              {service.specifications.map((spec, sIdx) => (
                <div key={sIdx} className={styles.specItem}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Relevant Portfolio Projects ── */}
      {relevantProjects.length > 0 && (
        <section className={styles.portfolioSection}>
          <div className={styles.container}>
            <div className={styles.portfolioHeader}>
              <div>
                <span className={styles.taglineBlue}>REKAM JEJAK NYATA</span>
                <h2 className={styles.sectionTitle}>Dokumentasi Pekerjaan Terkait</h2>
                <p className={styles.sectionSubtitle}>
                  Contoh nyata pengerjaan {service.shortTitle} yang telah selesai diserahterimakan kepada klien industri.
                </p>
              </div>
              <Link to="/portofolio" className={styles.viewAllPorto}>
                <span>Lihat Semua 27 Proyek</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.projectsGrid}>
              {relevantProjects.map((proj) => (
                <div key={proj.id} className={styles.projectCard}>
                  <div className={styles.projImgBox}>
                    <img 
                      src={proj.coverImage} 
                      alt={proj.title}
                      className={styles.projImg}
                      loading="lazy"
                      decoding="async"
                      width="380"
                      height="220"
                    />
                    <span className={styles.projBadge}>{proj.category}</span>
                  </div>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>{proj.title}</h3>
                    <p className={styles.projDesc}>{proj.description}</p>
                    <div className={styles.projFooter}>
                      <CheckCircle2 size={14} color="#22c55e" />
                      <span>Selesai &amp; Bergaransi Resmi</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Workflow / SOP Pelaksanaan ── */}
      <section className={styles.workflowSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.taglineBlue}>
              <Clock size={14} />
              SOP PELAKSANAAN KERJA
            </span>
            <h2 className={styles.sectionTitle}>Tahapan Eksekusi Proyek yang Terstruktur</h2>
            <p className={styles.sectionSubtitle}>
              Setiap tahapan dikontrol dengan ketat sesuai standar PDCA (Plan-Do-Check-Act) untuk menjamin ketepatan waktu dan zero accident.
            </p>
          </div>

          <div className={styles.workflowGrid}>
            {service.workflow.map((wf) => (
              <div key={wf.step} className={styles.workflowCard}>
                <div className={styles.wfStep}>{wf.step}</div>
                <h3 className={styles.wfTitle}>{wf.title}</h3>
                <p className={styles.wfDesc}>{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ Khusus Layanan ── */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.taglineBlue}>TANYA JAWAB TEKNIS</span>
            <h2 className={styles.sectionTitle}>Pertanyaan yang Sering Diajukan</h2>
            <p className={styles.sectionSubtitle}>
              Jawaban atas pertanyaan umum seputar teknis pengerjaan, durasi, dan garansi {service.shortTitle}.
            </p>
          </div>

          <div className={styles.faqList}>
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div key={fIdx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                  <button 
                    type="button" 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`} />
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. Bottom CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>KONSULTASI TEKNIS &amp; PENAWARAN</span>
              <h2 className={styles.ctaTitle}>
                Siap Mengoptimalkan Fasilitas Pabrik Anda?
              </h2>
              <p className={styles.ctaSubtitle}>
                Dapatkan estimasi Rencana Anggaran Biaya (RAB) transparan dan jadwal survei lapangan gratis dari tim spesialis PT. TOTO SUKSES ABADI.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/kontak" className={`${styles.btn} ${styles.btnPrimaryLg}`}>
                <span>Ajukan Penawaran RAB</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href={`https://wa.me/6281218351002?text=Halo%20Tim%20TOSA%2C%20saya%20ingin%20jadwal%20site%20survey%20untuk%20${encodeURIComponent(service.title)}.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.btn} ${styles.btnGhostLg}`}
              >
                <span>Chat Tim WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
