import { useCountUp } from '../../hooks/useCountUp';
import { STATS } from '../../data/content';
import styles from './TrustBar.module.css';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div className={styles.stat}>
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className={styles.statNum}
      >
        {count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>KREDIBILITAS &amp; STANDAR OPERASIONAL</p>
          <h2 className={styles.title}>
            Data Kinerja &amp; Standar Mutu<br />
            <span className={styles.titleBlue}>PT. TOTO SUKSES ABADI</span>
          </h2>
          <p className={styles.subtitle}>
            Penerapan standar ISO 9001:2015 dan komitmen keselamatan kerja (K3) Zero Accident di seluruh fasilitas klien.
          </p>
        </div>

        <div className={styles.grid}>
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
