import { CLIENTS } from '../../data/content';
import styles from './ClientMarquee.module.css';

// Duplicate for seamless infinite loop
const CLIENTS_DOUBLED = [...CLIENTS, ...CLIENTS];
const CLIENTS_ROW2 = [...CLIENTS.slice(10), ...CLIENTS.slice(0, 10), ...CLIENTS.slice(10), ...CLIENTS.slice(0, 10)];

export default function ClientMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Dipercaya Oleh</p>
        <h2 className={styles.title}>Klien Kami</h2>
        <p className={styles.subtitle}>
          Melayani perusahaan manufaktur terkemuka, dari otomotif hingga elektronik dan FMCG.
        </p>
      </div>

      {/* Row 1 — left to right */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeMaskLeft} aria-hidden="true" />
        <div className={styles.fadeMaskRight} aria-hidden="true" />
        <div className={`${styles.marqueeTrack} ${styles.marqueeForward}`}>
          {CLIENTS_DOUBLED.map((client, i) => (
            <div key={`r1-${i}`} className={styles.chip}>
              <span className={styles.chipDot} aria-hidden="true" />
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeMaskLeft} aria-hidden="true" />
        <div className={styles.fadeMaskRight} aria-hidden="true" />
        <div className={`${styles.marqueeTrack} ${styles.marqueeReverse}`}>
          {CLIENTS_ROW2.map((client, i) => (
            <div key={`r2-${i}`} className={styles.chip}>
              <span className={styles.chipDot} aria-hidden="true" />
              {client}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>dan banyak perusahaan manufaktur lainnya.</p>
      </div>
    </section>
  );
}
