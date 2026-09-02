import { CIVIL_SERVICES, PAINTING_SERVICES } from '../../data/content';
import styles from './ServicePillars.module.css';

export default function ServicePillars() {
  return (
    <div className={styles.wrapper}>
      {/* Pillar 1: Civil Engineering — Clean White Canvas */}
      <section className={styles.pillarSectionWhite}>
        <div className={styles.container}>
          <div className={styles.pillarHeader}>
            <span className={styles.eyebrow}>PILAR LAYANAN 01</span>
            <h2 className={styles.title}>Civil Engineering</h2>
            <p className={styles.subtitle}>
              Konstruksi dan infrastruktur industri yang dibangun dengan presisi teknis, ketahanan struktural tinggi, dan kepatuhan penuh terhadap standar keselamatan K3.
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2: Industrial Painting — Clean Parchment Canvas */}
      <section className={styles.pillarSectionParchment}>
        <div className={styles.container}>
          <div className={styles.pillarHeader}>
            <span className={styles.eyebrow}>PILAR LAYANAN 02</span>
            <h2 className={styles.title}>Industrial Painting</h2>
            <p className={styles.subtitle}>
              Sistem pelapisan pelindung dan epoxy lantai industri yang melindungi aset fasilitas pabrik dari korosi kimia, abrasi mekanis, kelembapan, dan bahaya api.
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
