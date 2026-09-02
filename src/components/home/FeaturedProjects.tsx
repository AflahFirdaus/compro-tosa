import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { REAL_PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import styles from './FeaturedProjects.module.css';

// Select 4 representative projects across civil and painting
const FEATURED_IDS = [1, 2, 3, 4]; // Epoxy Self-Leveling, Warehouse Expansion, Lab Cikarang, Painting Baja & Cerobong
const FEATURED_PROJECTS = REAL_PORTFOLIO_PROJECTS.filter(p => FEATURED_IDS.includes(p.id));

export default function FeaturedProjects() {
  return (
    <section className={styles.section} id="proyek-unggulan">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>REKAM JEJAK PEKERJAAN</p>
            <h2 className={styles.title}>
              Cuplikan Proyek <span className={styles.titleBlue}>Fasilitas Industri</span>
            </h2>
            <p className={styles.subtitle}>
              Dokumentasi nyata pekerjaan Civil Engineering dan Industrial Painting dengan standar mutu presisi dan kepatuhan K3.
            </p>
          </div>

          <Link to="/portofolio" className={styles.headerLink}>
            <span>Lihat Semua 27 Proyek Lengkap</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {FEATURED_PROJECTS.map((item) => (
            <Link to="/portofolio" key={item.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <span className={styles.badge}>{item.category === 'Civil Engineering' ? 'Civil' : 'Painting'}</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.categoryTag}>{item.category}</span>
                <h3 className={styles.projectTitle}>{item.title}</h3>
                
                <div className={styles.tag}>
                  <CheckCircle2 size={13} color="#22c55e" />
                  <span>Selesai &amp; Bergaransi</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
