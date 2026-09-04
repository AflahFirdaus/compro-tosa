import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CIVIL_SERVICES, PAINTING_SERVICES } from '../../data/content';
import styles from './ServicePillars.module.css';

export default function ServicePillars() {
  return (
    <div className={styles.wrapper}>
      {/* Pillar 1: Civil Engineering & Supplier — Clean White Canvas */}
      <section className={styles.pillarSectionWhite}>
        <div className={styles.container}>
          <div className={styles.pillarHeader}>
            <span className={styles.eyebrow}>PILAR LAYANAN 01</span>
            <h2 className={styles.title}>Civil Engineering, Arsitektur &amp; Struktur</h2>
            <p className={styles.subtitle}>
              Layanan rekayasa konstruksi, perancangan arsitektur &amp; 3D planning, struktur baja berat, mekanikal elektrikal, perpipaan industri, dan renovasi infrastruktur pabrik manufaktur.
            </p>
          </div>

          <div className={styles.grid}>
            {CIVIL_SERVICES.map((service) => (
              <div key={service.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.stepBadge}>{service.step}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardDesc}>{service.desc}</p>

                {service.subItems && (
                  <ul className={styles.subList}>
                    {service.subItems.map((sub) => (
                      <li key={sub} className={styles.subItem}>
                        <span className={styles.subDot} aria-hidden="true" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.slug && (
                  <Link to={`/layanan/${service.slug}`} className={styles.cardDetailLink}>
                    <span>Pelajari Solusi &amp; Spesifikasi Lengkap</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2: Industrial Painting & Contractor — Clean Parchment Canvas */}
      <section className={styles.pillarSectionParchment}>
        <div className={styles.container}>
          <div className={styles.pillarHeader}>
            <span className={styles.eyebrow}>PILAR LAYANAN 02</span>
            <h2 className={styles.title}>Industrial Painting, Coating &amp; Maintenance</h2>
            <p className={styles.subtitle}>
              Spesialis pelapisan lantai epoxy self-leveling &amp; food grade GMP, protective coating anti-karat, cat atap penolak panas, waterproofing FRP membran, marka jalan K3, dan floor cleaning.
            </p>
          </div>

          <div className={styles.grid}>
            {PAINTING_SERVICES.map((service) => (
              <div key={service.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.stepBadge}>{service.step}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardDesc}>{service.desc}</p>

                {service.subItems && (
                  <ul className={styles.subList}>
                    {service.subItems.map((sub) => (
                      <li key={sub} className={styles.subItem}>
                        <span className={styles.subDot} aria-hidden="true" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.slug && (
                  <Link to={`/layanan/${service.slug}`} className={styles.cardDetailLink}>
                    <span>Pelajari Solusi &amp; Spesifikasi Lengkap</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
