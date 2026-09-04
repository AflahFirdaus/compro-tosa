import { useState, useEffect } from 'react';
import { 
  Images, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare 
} from 'lucide-react';
import { REAL_PORTFOLIO_PROJECTS, type PortfolioItem } from '../../data/portfolioData';
import { COMPANY } from '../../data/content';
import styles from './ProjectGallery.module.css';

const CATEGORIES = ['Semua', 'Civil Engineering', 'Industrial Painting'];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filtered = activeFilter === 'Semua'
    ? REAL_PORTFOLIO_PROJECTS
    : REAL_PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex(prev => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight' && selectedProject.images.length > 1) nextImage();
      if (e.key === 'ArrowLeft' && selectedProject.images.length > 1) prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>DOKUMENTASI REKAM JEJAK</p>
          <h1 className={styles.title}>Portofolio Proyek Nyata</h1>
          <p className={styles.subtitle}>
            Dokumentasi pekerjaan Civil Engineering dan Industrial Painting PT. TOTO SUKSES ABADI pada fasilitas pabrik, pergudangan, dan gedung industri di Indonesia.
          </p>

          {/* Filters */}
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat} {cat === 'Semua' ? `(${REAL_PORTFOLIO_PROJECTS.length})` : `(${REAL_PORTFOLIO_PROJECTS.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <div className={styles.grid}>
          {filtered.map(project => (
            <article
              key={project.id}
              className={styles.card}
              onClick={() => openModal(project)}
            >
              {/* Image Box */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className={styles.projectImg}
                  loading="lazy"
                />

                <span
                  className={`${styles.badgeCategory} ${
                    project.category === 'Civil Engineering'
                      ? styles.badgeCivil
                      : styles.badgePainting
                  }`}
                >
                  {project.category === 'Civil Engineering' ? 'Civil' : 'Painting'}
                </span>

                {project.images.length > 1 && (
                  <span className={styles.photoCountBadge}>
                    <Images size={13} />
                    <span>{project.images.length} Foto</span>
                  </span>
                )}
              </div>

              {/* Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.tagsWrapper}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tagItem}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className={styles.viewDetailAction}>
                  <span>Lihat Foto &amp; Detail</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className={styles.modalBackdrop} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeModal}
                aria-label="Tutup popup"
              >
                <X size={18} />
              </button>

              {/* Image Viewer */}
              <div className={styles.modalImageArea}>
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} - Foto ${activeImageIndex + 1}`}
                  className={styles.modalImg}
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className={`${styles.navArrow} ${styles.prevArrow}`}
                      onClick={prevImage}
                      aria-label="Foto sebelumnya"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      className={`${styles.navArrow} ${styles.nextArrow}`}
                      onClick={nextImage}
                      aria-label="Foto selanjutnya"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails if multiple images */}
              {selectedProject.images.length > 1 && (
                <div className={styles.thumbnailsBar}>
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`${styles.thumbBtn} ${activeImageIndex === idx ? styles.thumbBtnActive : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className={styles.thumbImg}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Details */}
              <div className={styles.modalInfo}>
                <p className={styles.modalCategory}>{selectedProject.category}</p>
                <h2 id="modal-project-title" className={styles.modalTitle}>
                  {selectedProject.title}
                </h2>
                <p className={styles.modalDesc}>{selectedProject.description}</p>

                <div className={styles.modalTags}>
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className={styles.modalTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.modalFooterActions}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                    Foto {activeImageIndex + 1} dari {selectedProject.images.length} • PT. TOTO SUKSES ABADI
                  </span>
                  <a
                    href={`${COMPANY.waLink}&text=Halo%20Tim%20TOSA%2C%20saya%20tertarik%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalCtaBtn}
                  >
                    <MessageSquare size={16} />
                    <span>Konsultasi Proyek Ini</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <h2 className={styles.bottomCtaText}>
            Ingin Fasilitas Pabrik Anda Dikerjakan dengan Standar Terbaik?
          </h2>
          <p className={styles.bottomCtaSubtitle}>
            Tim teknis dan estimator kami siap melakukan survei lokasi dan memberikan estimasi Rencana Anggaran Biaya (RAB) tanpa komitmen awal.
          </p>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomCtaBtn}
          >
            <MessageSquare size={18} />
            <span>Mulai Diskusi Proyek via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
