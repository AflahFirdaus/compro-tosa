// ============================================================
// TOSA Content Data Layer — Centralized content for easy updates
// ============================================================

export const COMPANY = {
  name: 'PT. TOTO SUKSES ABADI',
  shortName: 'TOSA',
  tagline: 'Civil Engineering & Industrial Painting Services',
  subTagline: 'PT. TOTO SUKSES ABADI adalah perusahaan yang bergerak dalam bidang Civil Engineering, Industrial Painting, Supplier, dan Contractor. Berkompeten dalam bisnis, konsisten dan loyal dalam berkarya.',
  email: 'sales@totosuksesabadi.co.id',
  phoneWA: '+62 812-1835-1002',
  phoneOffice: '+62 (021) 89282124',
  hours: 'Senin – Jumat, 08.00 – 17.00 WIB',
  address: 'Kawasan Industri, Cikarang, Bekasi, Jawa Barat',
  waLink: 'https://wa.me/6281218351002?text=Halo%20Tim%20TOSA%2C%20saya%20ingin%20konsultasi%20mengenai%20proyek.',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=PT.+Toto+Sukses+Abadi,+Cikarang',
};

export const STATS = [
  { value: 87, suffix: '+', label: 'Proyek Selesai' },
  { value: 45, suffix: '+', label: 'Perusahaan Klien' },
  { value: 98, suffix: '%', label: 'Zero Accident Record' },
  { value: 100, suffix: '%', label: 'Kepatuhan Regulasi & K3' },
  { value: 95, suffix: '%', label: 'Tingkat Retensi Klien' },
  { value: 93, suffix: '%', label: 'Pencapaian Target PDCA' },
];

export const CLIENTS = [
  'PT. Panasonic Manufacturing',
  'Astra Daihatsu Motor',
  'Takenaka Corporation',
  'Jaya Obayashi',
  'Toyota Motor Manufacturing',
  'Honda Prospect Motor',
  'Daikin Airconditioning',
  'Sharp Electronics Indonesia',
  'Bridgestone Tire Indonesia',
  'Yamaha Motor',
  'Suzuki Motor Indonesia',
  'Mitsubishi Motors',
  'Nissan Motor Indonesia',
  'Isuzu Astra Motor',
  'Hino Motors Manufacturing',
  'PT. Unilever Indonesia',
  'Kalbe Farma',
  'Indofood CBP',
  'Sinar Mas Group',
  'Charoen Pokphand Indonesia',
];

export const TESTIMONIALS = [
  {
    quote: 'TOSA adalah mitra kontraktor yang sangat andal. Pekerjaan mereka di area produksi kami selalu selesai tepat waktu dengan kualitas yang melampaui ekspektasi. Zero accident record mereka bukan sekadar klaim — kami menyaksikan sendiri.',
    author: 'Aditya Aji W.',
    role: 'Plan Manager',
    company: '',
  },
  {
    quote: 'Dari sisi HRD, kami sangat mengapresiasi komitmen TOSA terhadap keselamatan kerja. Setiap pekerja mereka datang dengan APD lengkap, terlatih, dan mengikuti prosedur K3 dengan ketat. Ini sangat penting bagi kami.',
    author: 'Rifki Dwi Anjani',
    role: 'HRD',
    company: '',
  },
  {
    quote: 'Tim TOSA memahami kebutuhan produksi kami. Pekerjaan epoxy lantai di area assembly line diselesaikan di luar jam produksi tanpa gangguan operasional sama sekali. Profesionalisme tingkat tinggi.',
    author: 'Ibrahim',
    role: 'Production Manager',
    company: '',
  },
];

export const CIVIL_SERVICES = [
  {
    step: '01',
    slug: 'arsitektur-perencanaan-desain-pabrik',
    title: 'Civil Engineering, Architects & Planners',
    desc: 'Perencanaan arsitektur terpadu, master planning tata letak fasilitas pabrik, kalkulasi beban struktural, dan rekayasa sipil bangunan industri.',
    subItems: [
      'Architectural Design & 3D Planning',
      'Struktur Gedung & Fasilitas Pabrik',
      'Penyusunan RAB & Gambar Kerja Teknis',
    ],
  },
  {
    step: '02',
    slug: 'concrete-polishing-liquid-hardener',
    title: 'Concrete Polishing (Poles Beton & Liquid Hardener)',
    desc: 'Poles lantai beton menggunakan teknologi diamond grinding dengan aplikasi chemical liquid hardener untuk lantai kilap, keras, dan bebas debu.',
    subItems: [
      'Diamond Grinding Polishing Tahap Bertingkat',
      'Aplikasi Chemical Liquid Floor Hardener',
      'Lantai Kilap Glossy, Tahan Beban & Anti Debu',
    ],
  },
  {
    step: '03',
    slug: 'renovasi-sipil-infrastruktur-pabrik',
    title: 'Civil Renovation & Infrastruktur Pabrik',
    desc: 'Renovasi fasilitas produksi, rigid pavement jalan pabrik, drainase U-ditch, sumur resapan, paving block, cladding, dan loading dock.',
    subItems: [
      'Re-Concrete & Pengecoran Jalan Utama Pabrik',
      'Drainase U-Ditch & Pembuatan Sumur Resapan',
      'Pemasangan Cladding Dinding, Atap & Gypsum',
    ],
  },
  {
    step: '04',
    slug: 'konstruksi-baja-struktur-gudang',
    title: 'Konstruksi Baja Berat & Struktur Gudang',
    desc: 'Fabrikasi dan ereksi rangka baja WF/H-beam, perluasan gudang logistik, mezzanine bertingkat, dan pipe rack berstandar AISC.',
    subItems: [
      'Struktur Baja WF & H-Beam Mutu Tinggi',
      'Perluasan Warehouse & Mezzanine Bertingkat',
      'Sertifikasi Pengelasan & K3 Zero Accident',
    ],
  },
  {
    step: '05',
    slug: 'mep-piping-boiler-industri',
    title: 'Sistem MEP, Piping Bertekanan & Boiler',
    desc: 'Instalasi panel distribusi listrik pabrik, tata udara ducting HVAC, perpipaan steam/compressed air, dan instalasi boiler standar ASME.',
    subItems: [
      'Panel Daya Listrik & Industrial HVAC Ducting',
      'Perpipaan Steam & Compressed Air Bertekanan',
      'Instalasi Boiler & Sertifikasi Laik Operasi',
    ],
  },
];

export const PAINTING_SERVICES = [
  {
    step: '01',
    slug: 'epoxy-lantai-industri',
    title: 'Epoxy Floor Coating / Epoxy Lantai',
    desc: 'Pelapisan lantai epoxy bermutu tinggi untuk lantai area produksi manufaktur, warehouse logistik, cleanroom farmasi, dan laboratorium.',
    subItems: [
      'Epoxy Coating & Roll System',
      'Epoxy Self-Leveling & Heavy Duty Mortar',
      'Food Grade (Anti-Bakteri Standar GMP & HACCP)',
      'Chemical Resistance (Kuat Bahan Kimia, Asam & Basa)',
    ],
  },
  {
    step: '02',
    slug: 'protective-coating-anti-karat',
    title: 'Protective Coating & Roof Coating',
    desc: 'Sistem pelapisan pelindung anti-karat untuk struktur baja, tangki kimia, cerobong, dan cat penolak panas atap pabrik.',
    subItems: [
      'Maintenance & Anti-Corrosion (Baja, Tangki & Pipa)',
      'Roof Coating Peredam Panas (Heat-Reflective & Anti Bocor)',
      'Intumescent Fireproof Coating (Cat Tahan Api Pasif)',
    ],
  },
  {
    step: '03',
    slug: 'waterproofing-frp-lining',
    title: 'Waterproofing System (FRP, Membran & Coating)',
    desc: 'Sistem kedap air komprehensif untuk atap dak beton, talang, basement, serta pelapisan FRP lining untuk bak penampungan cairan kimia.',
    subItems: [
      'FRP Lining Bak Kimia & Kolam STP/WWTP',
      'Waterproofing Membran Bakar & Membran Cair',
      'Proteksi Kebocoran Dak Beton & Talang Pabrik',
    ],
  },
  {
    step: '04',
    slug: 'marka-jalan-rambu-k3-pabrik',
    title: 'Road Marking / Marka Jalan, Rambu K3 & Floor Cleaning',
    desc: 'Pengecatan marka jalan pabrik, lintasan forklift/AGV, jalur pedestrian pejalan kaki, rambu keselamatan K3, dan deep cleaning lantai.',
    subItems: [
      'Marka Jalur Forklift & Jalur Pejalan Kaki (Pedestrian)',
      'Zonasi Area Aman & Penandaan Standar K3',
      'Deep Cleaning Kerak Oli & Concrete Floor Waxing',
    ],
  },
];

export const WORK_PRINCIPLES = [
  {
    code: 'COST',
    title: 'Harga Kompetitif',
    desc: 'Penetapan harga yang efisien, transparan, dan kompetitif melalui optimalisasi rantai pasok material tanpa mengorbankan kualitas maupun standar keselamatan kerja.',
  },
  {
    code: 'QUALITY',
    title: 'Jaminan Mutu Sesuai Kontrak',
    desc: 'Selalu menjaga mutu kerja yang unggul, presisi teknis terukur, dan kepatuhan penuh terhadap standar spesifikasi teknis yang tertuang dalam kontrak kerja.',
  },
  {
    code: 'DELIVERY',
    title: 'Ketepatan Waktu & Target Kerja',
    desc: 'Bekerja secara disiplin sesuai target milestone yang telah ditetapkan untuk memastikan penyelesaian dan serah terima proyek tepat waktu (zero delay).',
  },
];

export const WORK_METHODOLOGY = [
  {
    step: '01',
    code: 'CHECK',
    title: 'Pengecekan Lokasi / Survei Area Kerja',
    desc: 'Lakukan pengecekan lokasi / survei area kerja secara menyeluruh untuk mengidentifikasi kondisi eksisting dan analisa teknis lapangan.',
  },
  {
    step: '02',
    code: 'PLAN',
    title: 'Membuat Perencanaan Kerja',
    desc: 'Menyusun perencanaan kerja terpadu meliputi metode teknis, jadwal pelaksanaan (timeline), alokasi tenaga ahli, dan izin kerja aman.',
  },
  {
    step: '03',
    code: 'DO',
    title: 'Bekerja Sesuai Perencanaan',
    desc: 'Melaksanakan pekerjaan secara disiplin dan presisi sesuai dengan perencanaan teknis yang telah disetujui bersama manajemen klien.',
  },
  {
    step: '04',
    code: 'ACT',
    title: 'Evaluasi Berkelanjutan untuk Menjaga Kualitas',
    desc: 'Melakukan evaluasi secara berkelanjutan (Quality Control & inspeksi teknis) untuk memastikan hasil kerja memenuhi standar kualitas prima.',
  },
];

export const PORTFOLIO_PROJECTS = [
  { id: 1, title: 'Epoxy Floor Coating Area Produksi', client: 'PT. Panasonic Manufacturing', category: 'Industrial Painting', color: '#1a2a4a' },
  { id: 2, title: 'Steel Structure Fabrication Gudang', client: 'Astra Daihatsu Motor', category: 'Civil Engineering', color: '#2a1a1a' },
  { id: 3, title: 'Protective Coating Struktur Baja', client: 'Takenaka Corporation', category: 'Industrial Painting', color: '#1a3a2a' },
  { id: 4, title: 'MEP System Pabrik Baru', client: 'Toyota Motor Manufacturing', category: 'Civil Engineering', color: '#2a2a1a' },
  { id: 5, title: 'Waterproofing Atap Pabrik', client: 'Honda Prospect Motor', category: 'Industrial Painting', color: '#1a1a3a' },
  { id: 6, title: 'Piping System Compressed Air', client: 'Daikin Airconditioning', category: 'Civil Engineering', color: '#2a1a3a' },
  { id: 7, title: 'Epoxy Cleanroom Pharmaceutical', client: 'Kalbe Farma', category: 'Industrial Painting', color: '#1a3a3a' },
  { id: 8, title: 'Boiler Installation & Commissioning', client: 'Sharp Electronics', category: 'Civil Engineering', color: '#3a1a1a' },
  { id: 9, title: 'Decorative Painting Lobby Kantor', client: 'Bridgestone Tire Indonesia', category: 'Industrial Painting', color: '#1a2a3a' },
  { id: 10, title: 'Concrete Polishing Area Assembly', client: 'Yamaha Motor', category: 'Civil Engineering', color: '#3a2a1a' },
  { id: 11, title: 'Anti-Karat Coating Tangki', client: 'Suzuki Motor Indonesia', category: 'Industrial Painting', color: '#2a3a1a' },
  { id: 12, title: 'Civil Renovation Fasilitas Produksi', client: 'Mitsubishi Motors', category: 'Civil Engineering', color: '#1a3a1a' },
  { id: 13, title: 'Intumescent Coating Struktur', client: 'Jaya Obayashi', category: 'Industrial Painting', color: '#3a1a2a' },
  { id: 14, title: 'Steel Construction Expansion Area', client: 'Nissan Motor Indonesia', category: 'Civil Engineering', color: '#2a2a3a' },
  { id: 15, title: 'Epoxy Floor Warehouse Logistik', client: 'Isuzu Astra Motor', category: 'Industrial Painting', color: '#1a2a2a' },
  { id: 16, title: 'Plumbing System Pabrik', client: 'Hino Motors Manufacturing', category: 'Civil Engineering', color: '#3a3a1a' },
  { id: 17, title: 'Industrial Painting Gedung Produksi', client: 'PT. Unilever Indonesia', category: 'Industrial Painting', color: '#2a1a2a' },
  { id: 18, title: 'Waterproofing Basement Pabrik', client: 'Indofood CBP', category: 'Industrial Painting', color: '#1a1a2a' },
];

export const ABOUT_POLICIES = [
  {
    id: 'visi-misi',
    title: 'Visi & Misi',
    color: '#0066cc',
    content: {
      visi: 'Menjadi perusahaan jasa konstruksi sipil dan pengecatan industri terdepan di Indonesia yang dikenal atas integritas teknis, standar keselamatan tinggi, dan kepuasan klien berkelanjutan.',
      misi: [
        'Memberikan layanan konstruksi dan pengecatan industri berkualitas prima sesuai spesifikasi teknis dan standar mutu yang terukur.',
        'Mengutamakan Keselamatan dan Kesehatan Kerja (K3) serta pelestarian lingkungan dalam setiap tahapan operasional.',
        'Membangun kemitraan strategis jangka panjang dengan pelaku industri manufaktur melalui transparansi dan ketepatan waktu.',
        'Menerapkan inovasi metode kerja, peralatan modern, dan material berstandar mutu tinggi untuk efisiensi maksimal.',
        'Mengembangkan kompetensi dan profesionalisme sumber daya manusia secara berkesinambungan.',
      ],
    },
  },
  {
    id: 'k3',
    title: 'Kebijakan K3',
    color: '#0066cc',
    content: {
      headline: 'Komitmen Zero Accident dalam seluruh aktivitas operasional.',
      points: [
        'Kepatuhan mutlak terhadap penggunaan Alat Pelindung Diri (APD) lengkap sesuai standar bahaya area kerja.',
        'Pelaksanaan Safety Induction, Tool Box Meeting, dan Job Safety Analysis (JSA) sebelum memulai pekerjaan.',
        'Identifikasi Bahaya, Penilaian, dan Pengendalian Risiko (HIRADC) secara berkala di setiap lokasi proyek.',
        'Pelaporan dan penanganan cepat terhadap potensi bahaya (near miss) dan insiden kerja.',
        'Pelatihan dan sertifikasi K3 berkelanjutan bagi seluruh personel dan pengawas lapangan.',
      ],
    },
  },
  {
    id: 'mutu',
    title: 'Kebijakan Mutu',
    color: '#0066cc',
    content: {
      headline: 'Standar mutu terukur yang dijaga melalui prosedur Quality Control pada setiap tahap pengerjaan.',
      points: [
        'Penerapan prosedur Quality Control (QC) bertahap dari penerimaan material hingga serah terima akhir.',
        'Penggunaan material konstruksi dan cat industri original bersertifikat dari pabrikan resmi.',
        'Pemeriksaan teknis berkala meliputi uji ketebalan lapisan (DFT test), uji adhesi, dan kerataan permukaan.',
        'Dokumentasi progress harian dan pelaporan berkala yang transparan kepada manajemen klien.',
        'Jaminan garansi tertulis dan layanan purna jual yang responsif terhadap kebutuhan evaluasi klien.',
      ],
    },
  },
  {
    id: 'ikrar',
    title: 'Ikrar Keselamatan',
    color: '#0066cc',
    content: {
      headline: 'Komitmen integritas keselamatan kerja seluruh tim TOSA:',
      points: [
        'Mengutamakan keselamatan dan kesehatan diri sendiri serta rekan kerja di atas target produksi.',
        'Hanya bekerja setelah memiliki Izin Kerja Aman (Work Permit) yang disetujui pihak berwenang.',
        'Berhak dan berkewajiban menghentikan pekerjaan (Stop Work Authority) jika menemukan kondisi tidak aman.',
        'Mematuhi seluruh peraturan keselamatan yang berlaku di kawasan pabrik klien tanpa pengecualian.',
        'Menjaga kebersihan, kerapian, dan keamanan area kerja (5S/5R) setiap saat.',
      ],
    },
  },
  {
    id: 'lingkungan',
    title: 'Kebijakan Lingkungan',
    color: '#0066cc',
    content: {
      headline: 'Tanggung jawab terhadap kelestarian lingkungan dan kepatuhan regulasi limbah.',
      points: [
        'Pengelolaan dan penanganan limbah Bahan Berbahaya dan Beracun (B3) sesuai regulasi Kementerian LHK.',
        'Memprioritaskan penggunaan produk cat ramah lingkungan (Low VOC / Water-Based) bila memungkinkan.',
        'Pencegahan pencemaran tanah, air, dan udara di sekitar fasilitas pabrik selama proses kerja berlangsung.',
        'Pembersihan menyeluruh area kerja (housekeeping) dan pemilahan sampah sisa material secara bertanggung jawab.',
        'Penyediaan data keselamatan bahan (MSDS/TDS) lengkap untuk setiap material kimia yang digunakan.',
      ],
    },
  },
];

export const FAQS = [
  {
    question: 'Layanan kontraktor apa saja yang disediakan oleh PT. TOTO SUKSES ABADI?',
    answer: 'PT. TOTO SUKSES ABADI (TOSA) menyediakan 1-Stop Solution kontraktor industri spesialis: Konstruksi Baja (Steel Construction), Epoxy Floor Coating, Protective & Industrial Painting, Sistem MEP (Mekanikal, Elektrikal & Plumbing), Piping System industri, Boiler Installation, Concrete Polishing, Waterproofing Pabrik, dan Civil Renovation.',
  },
  {
    question: 'Di kawasan industri mana saja cakupan area operasional PT. TOTO SUKSES ABADI?',
    answer: 'Kami melayani proyek fasilitas manufaktur di seluruh kawasan industri utama, khususnya Kawasan Industri GIIC Deltamas, EJIP, MM2100 Cikarang Barat, Jababeka I-VII, KIIC Karawang, Suryacipta, Pupuk Kujang Cikampek, Modern Cikande Banten, Jabodetabek, hingga seluruh wilayah Indonesia.',
  },
  {
    question: 'Bagaimana komitmen standar K3 dan keselamatan kerja TOSA di area pabrik?',
    answer: 'TOSA memegang rekam jejak Zero Accident Record (Nir-Kecelakaan Kerja) dengan kepatuhan penuh terhadap SMK3 dan sertifikasi K3. Setiap pekerjaan didahului oleh Safety Induction, Tool Box Meeting, penyusunan Job Safety Analysis (JSA / HIRADC), dan kewajiban APD berstandar internasional.',
  },
  {
    question: 'Apakah pekerjaan proyek dapat dilaksanakan di luar jam kerja agar tidak mengganggu produksi?',
    answer: 'Ya. Kami menyediakan fleksibilitas jadwal pengerjaan termasuk shift malam, akhir pekan (weekend), maupun saat periode factory shutdown / maintenance libur nasional guna memastikan kesinambungan operasional produksi manufaktur Anda tetap berjalan lancar.',
  },
  {
    question: 'Bagaimana prosedur survei lokasi dan estimasi Rencana Anggaran Biaya (RAB)?',
    answer: 'Anda dapat menghubungi tim sales & teknis kami via WhatsApp (+62 812-1835-1002) atau formulir online. Tim estimator kami siap melakukan survei lapangan, konsultasi spesifikasi teknis material, dan pembuatan RAB resmi tanpa biaya komitmen awal (Free Consultation & Survey).',
  },
  {
    question: 'Apakah hasil pekerjaan dan material yang digunakan memiliki jaminan garansi resmi?',
    answer: 'Ya, seluruh pekerjaan yang kami selesaikan dilengkapi dengan surat jaminan garansi resmi (after-sales warranty) dan jaminan penggunaan material original bersertifikat langsung dari prinsipal pabrikan terkemuka lengkap dengan Technical Data Sheet (TDS) dan MSDS.',
  },
];

