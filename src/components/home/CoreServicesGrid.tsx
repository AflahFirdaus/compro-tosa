import { Link } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Flame, 
  Hammer, 
  ArrowRight 
} from 'lucide-react';
import styles from './CoreServicesGrid.module.css';

const SERVICES_DATA = [
  {
    icon: Building2,
    title: 'Steel Construction & Structure',
    desc: 'Fabrikasi dan ereksi konstruksi baja berat untuk bangunan pabrik, gudang logistik, mezzanine, dan pipe rack berstandar AISC.',
    points: ['Struktur Baja WF/H-Beam Presisi', 'Ereksi Rangka Atap & Truss Pabrik', 'Analisa Beban & Sertifikasi K3'],
    link: '/layanan',
  },
  {
    icon: Layers,
    title: 'Epoxy Floor Coating Industri',
    desc: 'Aplikasi pelapisan lantai epoxy self-leveling dan mortar tahan beban berat (forklift/AGV), anti debu, tahan zat kimia, dan standar GMP cleanroom.',
    points: ['Epoxy Self-Leveling & Heavy Duty Mortar', 'Anti-Static / ESD Flooring System', 'Food Grade & Pharmaceutical Cleanroom'],
    link: '/layanan',
  },
  {
    icon: ShieldCheck,
    title: 'Industrial & Protective Coating',
    desc: 'Proteksi anti-korosi mutakhir untuk struktur baja pabrik, tangki kimia, cerobong (chimney), dan intumescent cat tahan api pasif.',
    points: ['Anti-Corrosion Marine & Heavy Industrial', 'Intumescent Fireproof Coating', 'Surface Preparation Sandblasting SA 2.5'],
    link: '/layanan',
  },
  {
    icon: Zap,
    title: 'Sistem MEP (Mekanikal, Elektrikal & Plumbing)',
    desc: 'Instalasi terintegrasi daya kelistrikan industri, panel distribusi, sistem tata udara (HVAC), penerangan pabrik, dan instalasi utilitas.',
    points: ['Panel Distribusi Daya & Trafo', 'Industrial HVAC & Ducting Air Handling', 'Sistem Grounding & Proteksi Petir'],
    link: '/layanan',
  },
  {
    icon: Flame,
    title: 'Piping System & Boiler Installation',
    desc: 'Instalasi sistem perpipaan bertekanan tinggi (compressed air, steam, chilled water, chemical) dan instalasi boiler standar ASME.',
    points: ['Pipa Steam & Compressed Air Bertekanan', 'Pemasangan & Commissioning Boiler', 'Hydrotest & Sertifikasi Layak Operasi'],
    link: '/layanan',
  },
  {
    icon: Hammer,
    title: 'Waterproofing & Civil Renovation',
    desc: 'Perbaikan struktural komprehensif, injeksi beton retak, dak atap anti bocor, concrete polishing, dan renovasi area fasilitas manufaktur.',
    points: ['Waterproofing Membrane & Coating Dak', 'Concrete Polishing Diamond Grinding', 'Renovasi Lantai & Dinding Area Produksi'],
    link: '/layanan',
  },
];

export default function CoreServicesGrid() {
  return (
    <section className={styles.section} id="layanan-utama">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>PILAR LAYANAN SPESIALIS</p>
          <h2 className={styles.title}>
            Layanan Unggulan untuk <br />
            <span className={styles.titleBlue}>Fasilitas Manufaktur Skala Besar</span>
          </h2>
          <p className={styles.subtitle}>
            Didukung tenaga ahli bersertifikat K3, peralatan modern, dan kepatuhan metode teknis berstandar mutu ISO 9001:2015.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES_DATA.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.title} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={26} />
                </div>
                <h3 className={styles.cardTitle}>{srv.title}</h3>
                <p className={styles.cardDesc}>{srv.desc}</p>
                
                <ul className={styles.pointsList}>
                  {srv.points.map((pt) => (
                    <li key={pt} className={styles.pointItem}>
                      <span className={styles.pointBullet} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <Link to={srv.link} className={styles.cardLink}>
                  <span>Pelajari Spesifikasi Layanan</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className={styles.bottomBar}>
          <Link to="/layanan" className={styles.viewAllBtn}>
            <span>Lihat Rincian Seluruh Layanan &amp; Alur Kerja</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
