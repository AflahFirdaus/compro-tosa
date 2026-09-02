import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ABOUT_POLICIES } from '../../data/content';
import styles from './PolicyBento.module.css';

export default function PolicyBento() {
  const [activeId, setActiveId] = useState(ABOUT_POLICIES[0].id);
  const activeIndex = ABOUT_POLICIES.findIndex(p => p.id === activeId);
  const activePolicy = ABOUT_POLICIES[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>SISTEM MANAJEMEN &amp; K3</p>
          <h2 className={styles.title}>Kebijakan Mutu, Keselamatan &amp; Lingkungan</h2>
          <p className={styles.subtitle}>
            Standar operasional baku yang diterapkan dalam setiap proyek konstruksi dan pengecatan industri.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Sidebar Numbered Tabs (Clean, Icon-Free) */}
          <nav className={styles.tabs} aria-label="Kebijakan perusahaan">
            {ABOUT_POLICIES.map((policy, i) => {
              const isActive = activeId === policy.id;
              const num = String(i + 1).padStart(2, '0');

              return (
                <button
                  key={policy.id}
                  type="button"
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActiveId(policy.id)}
                >
                  <span className={styles.tabNum}>{num}</span>
                  <span className={styles.tabLabel}>{policy.title}</span>
                  <ChevronRight size={16} className={styles.tabArrow} />
                </button>
              );
            })}
          </nav>

          {/* Content Display Panel */}
          <div className={styles.panel} key={activeId}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelSectionTag}>
                  DOKUMEN KEBIJAKAN · {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.panelTitle}>{activePolicy.title}</h3>
              </div>
            </div>

            {activePolicy.id === 'visi-misi' && (
              <div className={styles.panelContent}>
                <div className={styles.visiMisiGrid}>
                  <div className={styles.visiMisiCard}>
                    <h4 className={styles.visiMisiLabel}>Visi Perusahaan</h4>
                    <p className={styles.visiMisiText}>{activePolicy.content.visi as string}</p>
                  </div>
                  <div className={styles.visiMisiCard}>
                    <h4 className={styles.visiMisiLabel}>Misi Utama</h4>
                    <ul className={styles.pointList}>
                      {(activePolicy.content.misi as string[]).map((m, i) => (
                        <li key={i} className={styles.point}>
                          <span className={styles.pointIndex}>{i + 1}</span>
                          <span className={styles.pointText}>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activePolicy.id !== 'visi-misi' && (
              <div className={styles.panelContent}>
                <p className={styles.panelHeadline}>
                  {(activePolicy.content as { headline: string; points: string[] }).headline}
                </p>
                <ul className={styles.pointList}>
                  {((activePolicy.content as { headline: string; points: string[] }).points).map((point, i) => (
                    <li key={i} className={styles.point}>
                      <span className={styles.pointIndex}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.pointText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
