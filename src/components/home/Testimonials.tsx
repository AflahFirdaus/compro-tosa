import { TESTIMONIALS } from '../../data/content';
import styles from './Testimonials.module.css';

const STARS = '★★★★★';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Testimoni Klien</p>
          <h2 className={styles.title}>
            Apa Kata Mereka<br />
            <span className={styles.titleAccent}>Tentang TOSA?</span>
          </h2>
          <p className={styles.subtitle}>
            Kepercayaan klien adalah aset terbesar kami.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.stars} aria-label="5 bintang">{STARS}</span>
                <svg className={styles.quoteIcon} width="32" height="24" viewBox="0 0 32 24" fill="none">
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C11.2 3.6 8.8 6.4 8 10.4H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0l1.6 2.4C28.8 3.6 26.4 6.4 25.6 10.4H32V24H17.6Z" fill="currentColor" opacity="0.12"/>
                </svg>
              </div>
              <blockquote className={styles.quote}>
                "{t.quote}"
              </blockquote>
              <footer className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                  <p className={styles.authorCompany}>{t.company}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
