import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { WORK_PRINCIPLES, WORK_METHODOLOGY } from '../../data/content';
import styles from './WorkflowStepper.module.css';

export default function WorkflowStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const total = WORK_METHODOLOGY.length;
  const current = WORK_METHODOLOGY[activeStep];

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ============================================================
            1. PRINSIP DASAR KERJA PT. TOTO SUKSES ABADI
            ============================================================ */}
        <div className={styles.block}>
          <div className={styles.blockHeader}>
            <span className={styles.eyebrow}>FUNDAMENTAL COMMITMENT</span>
            <h2 className={styles.title}>Prinsip Dasar Kerja PT. Toto Sukses Abadi</h2>
            <p className={styles.subtitle}>
              Tiga pilar utama yang menjadi pedoman komitmen kami dalam melayani setiap proyek industri.
            </p>
          </div>

          <div className={styles.principlesGrid}>
            {WORK_PRINCIPLES.map((item, idx) => (
              <div key={item.code} className={styles.principleCard}>
                <div className={styles.principleHeader}>
                  <div className={styles.circleBadge}>
                    <span className={styles.circleText}>{item.code}</span>
                  </div>
                  <div className={styles.arrowIconWrap} aria-hidden="true">
                    <ArrowRight size={20} className={styles.arrowIcon} />
                  </div>
                </div>
                <div className={styles.principleContent}>
                  <span className={styles.principleIndex}>PILAR 0{idx + 1}</span>
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                  <p className={styles.principleDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            2. METODE KERJA PT. TOTO SUKSES ABADI — Interactive Stepper
            ============================================================ */}
        <div className={`${styles.block} ${styles.blockDark}`}>
          <div className={styles.blockHeader}>
            <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>STANDAR OPERASIONAL</span>
            <h2 className={`${styles.title} ${styles.titleLight}`}>Metode Kerja PT. Toto Sukses Abadi</h2>
            <p className={`${styles.subtitle} ${styles.subtitleLight}`}>
              Siklus kerja terstruktur Check – Plan – Do – Act untuk menjamin ketepatan eksekusi dan mutu hasil akhir.
            </p>
          </div>

          {/* Step Checklist Timeline */}
          <div className={styles.stepperTrack}>
            {WORK_METHODOLOGY.map((item, idx) => {
              const isDone = idx <= activeStep;
              const isActive = idx === activeStep;
              return (
                <button
                  key={item.code}
                  type="button"
                  className={`${styles.stepDot} ${isDone ? styles.stepDone : ''} ${isActive ? styles.stepActive : ''}`}
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Langkah ${item.step}: ${item.title}`}
                >
                  {isDone ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <Circle size={18} />
                  )}
                  <span className={styles.stepDotLabel}>{item.code}</span>
                </button>
              );
            })}
            <div className={styles.stepTrackBar}>
              <div
                className={styles.stepTrackFill}
                style={{ width: `${(activeStep / (total - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Active Panel */}
          <div className={styles.stepPanel} key={activeStep}>
            <div className={styles.stepPanelLeft}>
              <div className={styles.stepCircleLarge}>
                <span className={styles.stepCircleCode}>{current.code}</span>
              </div>
            </div>

            <div className={styles.stepPanelRight}>
              <span className={styles.stepTag}>TAHAP {current.step} / {String(total).padStart(2, '0')}</span>
              <h3 className={styles.stepTitle}>{current.title}</h3>
              <p className={styles.stepDesc}>{current.desc}</p>

              <div className={styles.stepChecklist}>
                {WORK_METHODOLOGY.map((item, idx) => {
                  const isDone = idx <= activeStep;
                  const isActive = idx === activeStep;
                  return (
                    <div
                      key={item.code}
                      className={`${styles.checkItem} ${isDone ? styles.checkItemDone : ''} ${isActive ? styles.checkItemActive : ''}`}
                    >
                      <CheckCircle2 size={16} className={styles.checkItemIcon} />
                      <span>{item.code} — {item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className={styles.stepNav}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => setActiveStep(s => Math.max(0, s - 1))}
              disabled={activeStep === 0}
            >
              <ArrowLeft size={18} />
              <span>Sebelumnya</span>
            </button>

            <div className={styles.stepCounter}>
              {WORK_METHODOLOGY.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.pip} ${idx === activeStep ? styles.pipActive : ''} ${idx < activeStep ? styles.pipDone : ''}`}
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Langkah ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.navBtnNext}`}
              onClick={() => setActiveStep(s => Math.min(total - 1, s + 1))}
              disabled={activeStep === total - 1}
            >
              <span>Selanjutnya</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
