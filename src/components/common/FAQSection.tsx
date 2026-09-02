import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/content';
import styles from './FAQSection.module.css';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function FAQSection({
  title = 'Pertanyaan yang Sering Diajukan',
  subtitle = 'Informasi penting seputar layanan kontraktor, jangkauan kawasan industri, komitmen K3, dan prosedur kerja PT. TOTO SUKSES ABADI.',
  eyebrow = 'FAQ & INFORMASI KONTRAKTOR',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.section} id="faq" aria-label="Frequently Asked Questions">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>
            {title.split(' ')[0]} <span className={styles.titleAccent}>{title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.list}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.summary}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className={`${styles.iconWrapper} ${isOpen ? styles.iconRotated : ''}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={styles.answerWrapper}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
