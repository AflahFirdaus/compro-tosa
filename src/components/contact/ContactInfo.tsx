import { Mail, Phone, Clock, MapPin, ShieldCheck, Award } from 'lucide-react';
import { COMPANY } from '../../data/content';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>Informasi Kontak Resmi</h3>
        <p className={styles.desc}>
          Hubungi tim representatif B2B kami untuk konsultasi teknis, penawaran harga (RAB), atau jadwal site survey.
        </p>

        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <Mail size={20} />
            </div>
            <div>
              <span className={styles.label}>Email Bisnis</span>
              <a href={`mailto:${COMPANY.email}`} className={styles.valueLink}>
                {COMPANY.email}
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <Phone size={20} />
            </div>
            <div>
              <span className={styles.label}>WhatsApp Official / Hotline</span>
              <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className={styles.valueLink}>
                {COMPANY.phoneWA}
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <Phone size={20} />
            </div>
            <div>
              <span className={styles.label}>Telepon Kantor</span>
              <span className={styles.value}>{COMPANY.phoneOffice}</span>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <Clock size={20} />
            </div>
            <div>
              <span className={styles.label}>Jam Operasional</span>
              <span className={styles.value}>{COMPANY.hours}</span>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <MapPin size={20} />
            </div>
            <div>
              <span className={styles.label}>Kantor & Workshop</span>
              <a
                href={COMPANY.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.valueLink}
              >
                {COMPANY.address} ↗
              </a>
            </div>
          </div>
        </div>

        <div className={styles.badges}>
          <div className={styles.badgeItem}>
            <ShieldCheck size={18} className={styles.badgeIcon} />
            <span>K3 & Zero Accident Standards</span>
          </div>
          <div className={styles.badgeItem}>
            <Award size={18} className={styles.badgeIcon} />
            <span>ISO 9001:2015 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
