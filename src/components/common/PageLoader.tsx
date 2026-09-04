import styles from './PageLoader.module.css';

/**
 * Modern Skeleton Shimmer Loader
 * Menggantikan spinner biasa dengan representasi kerangka halaman (Hero & Grid)
 * untuk memberikan perceived performance cepat dan pengalaman pengguna kelas atas (B2B).
 */
export default function PageLoader() {
  return (
    <div className={styles.skeletonContainer} aria-label="Memuat halaman..." aria-busy="true">
      {/* ── Hero Skeleton Banner (Dark Slate Theme) ── */}
      <div className={styles.heroSkeleton}>
        <div className={styles.container}>
          {/* Breadcrumb Skeleton */}
          <div className={styles.breadcrumbSkeleton}>
            <div className={`${styles.bone} ${styles.boneShort}`} />
            <div className={`${styles.bone} ${styles.boneDot}`} />
            <div className={`${styles.bone} ${styles.boneMedium}`} />
          </div>

          {/* Eyebrow Pill */}
          <div className={`${styles.bone} ${styles.boneBadge}`} />

          {/* Title (2 Baris) */}
          <div className={`${styles.bone} ${styles.boneTitleLg}`} />
          <div className={`${styles.bone} ${styles.boneTitleMd}`} />

          {/* Subtitle */}
          <div className={`${styles.bone} ${styles.boneSubtitle}`} />
          <div className={`${styles.bone} ${styles.boneSubtitleShort}`} />

          {/* CTA Buttons Skeleton */}
          <div className={styles.buttonRow}>
            <div className={`${styles.bone} ${styles.boneButtonPrimary}`} />
            <div className={`${styles.bone} ${styles.boneButtonSecondary}`} />
          </div>

          {/* Trust Highlights */}
          <div className={styles.trustRow}>
            <div className={`${styles.bone} ${styles.boneTrustItem}`} />
            <div className={`${styles.bone} ${styles.boneTrustItem}`} />
            <div className={`${styles.bone} ${styles.boneTrustItem}`} />
          </div>
        </div>
      </div>

      {/* ── Content Grid Skeleton (White Canvas) ── */}
      <div className={styles.contentSkeleton}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={`${styles.bone} ${styles.boneBadgeLight}`} />
            <div className={`${styles.bone} ${styles.boneHeading}`} />
            <div className={`${styles.bone} ${styles.boneSubheading}`} />
          </div>

          {/* 3 Column Grid Cards */}
          <div className={styles.cardsGrid}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.cardSkeleton}>
                <div className={`${styles.bone} ${styles.boneCardBadge}`} />
                <div className={`${styles.bone} ${styles.boneCardTitle}`} />
                <div className={`${styles.bone} ${styles.boneCardText}`} />
                <div className={`${styles.bone} ${styles.boneCardText}`} />
                <div className={`${styles.bone} ${styles.boneCardTextShort}`} />
                <div className={styles.cardFooter}>
                  <div className={`${styles.bone} ${styles.boneCardButton}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
