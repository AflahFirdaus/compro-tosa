import { useState } from 'react';
import { Send, CheckCircle, ShieldCheck } from 'lucide-react';
import styles from './ContactForm.module.css';
import { trackEvent } from '../../utils/analytics';

const SERVICES = [
  'Steel Construction & Fabrikasi Baja',
  'Epoxy Floor Coating Industri',
  'Industrial & Protective Anti-Corrosion Coating',
  'Sistem MEP (Mekanikal, Elektrikal & Plumbing)',
  'Piping System Industri & Boiler',
  'Waterproofing Dak & Fasilitas Pabrik',
  'Concrete Polishing (Poles Lantai Beton)',
  'Civil Renovation & Maintenance Pabrik',
  'Lainnya / Konsultasi Tender & RAB',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
    // Honeypot field (hidden from real users, caught if filled by bots)
    website_trap: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Nama lengkap wajib diisi';
    if (!form.company.trim()) errs.company = 'Nama perusahaan wajib diisi';
    if (!form.email.trim()) {
      errs.email = 'Email perusahaan / kerja wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Format alamat email tidak valid';
    }
    if (!form.service) errs.service = 'Pilih salah satu kategori layanan';
    if (!form.message.trim()) errs.message = 'Deskripsi kebutuhan proyek wajib diisi';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-Spam Bot Trap: If honeypot field is filled, silently ignore
    if (form.website_trap) {
      setSubmitted(true);
      return;
    }

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // 2. Track Google Ads / GA4 Conversion
    trackEvent('generate_lead', {
      event_category: 'Lead',
      event_label: form.service,
      company: form.company,
      method: 'whatsapp_rfq_form',
    });

    // 3. Build Safe WhatsApp URL with email included
    const sanitizedName = form.name.trim();
    const sanitizedCompany = form.company.trim();
    const sanitizedEmail = form.email.trim();
    const sanitizedService = form.service;
    const sanitizedMsg = form.message.trim();

    const waText = encodeURIComponent(
      `Halo Tim Teknis PT. TOTO SUKSES ABADI,\n\nSaya ingin mengajukan penawaran / konsultasi proyek:\n\n` +
      `• *Nama:* ${sanitizedName}\n` +
      `• *Perusahaan:* ${sanitizedCompany}\n` +
      `• *Email Perusahaan:* ${sanitizedEmail}\n` +
      `• *Layanan:* ${sanitizedService}\n\n` +
      `*Rincian Kebutuhan & Lokasi Proyek:*\n${sanitizedMsg}\n\n` +
      `Mohon informasi estimasi Rencana Anggaran Biaya (RAB) dan jadwal survei lapangan. Dokumen resmi dapat dikirimkan ke email kami di atas. Terima kasih.`
    );

    // 4. Safe Window Open with noopener,noreferrer
    const targetUrl = `https://wa.me/6281218351002?text=${waText}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const e = { ...prev };
        delete e[field];
        return e;
      });
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <CheckCircle size={52} className={styles.successIcon} />
        <h3 className={styles.successTitle}>Permintaan Terkirim!</h3>
        <p className={styles.successText}>
          Terima kasih. Anda telah diarahkan ke WhatsApp resmi PT. TOTO SUKSES ABADI. Tim estimator kami siap merespons estimasi dan jadwal survei Anda.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', company: '', email: '', service: '', message: '', website_trap: '' });
          }}
        >
          Kirim Formulir Lain
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Honeypot Trap - Invisible to humans, catches spambots */}
      <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="website_trap">Leave this field blank</label>
        <input
          type="text"
          id="website_trap"
          name="website_trap"
          tabIndex={-1}
          autoComplete="off"
          value={form.website_trap}
          onChange={e => handleChange('website_trap', e.target.value)}
        />
      </div>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Nama Lengkap *</label>
          <input
            id="name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Contoh: Budi Santoso"
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
          />
          {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="company">Nama Perusahaan / Pabrik *</label>
          <input
            id="company"
            type="text"
            className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
            placeholder="Contoh: PT. Manufaktur Indonesia"
            value={form.company}
            onChange={e => handleChange('company', e.target.value)}
          />
          {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email Perusahaan / Kerja *</label>
        <input
          id="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          placeholder="Contoh: procurement@perusahaan.co.id"
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
        />
        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="service">Kategori Layanan *</label>
        <select
          id="service"
          className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
          value={form.service}
          onChange={e => handleChange('service', e.target.value)}
        >
          <option value="">-- Pilih Kategori Pekerjaan --</option>
          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <span className={styles.errorMsg}>{errors.service}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Rincian Kebutuhan &amp; Lokasi Proyek *</label>
        <textarea
          id="message"
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Sebutkan detail pekerjaan, perkiraan luas area (m²), lokasi kawasan industri (misal: MM2100 / GIIC / KIIC), dan target jadwal pengerjaan..."
          rows={4}
          value={form.message}
          onChange={e => handleChange('message', e.target.value)}
        />
        {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>
        <Send size={18} />
        Kirim Permintaan Penawaran RAB
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#64748b' }}>
        <ShieldCheck size={14} color="#16a34a" />
        <span>Data Anda terenkripsi aman &amp; dilindungi Kebijakan Privasi Resmi TOSA.</span>
      </div>
    </form>
  );
}
