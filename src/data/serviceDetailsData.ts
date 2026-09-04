export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Civil Engineering' | 'Industrial Painting';
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  problemSectionTitle: string;
  problemSectionSubtitle: string;
  problems: {
    title: string;
    desc: string;
    impact: string;
  }[];
  solutions: {
    title: string;
    desc: string;
    features: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  workflow: {
    step: string;
    title: string;
    desc: string;
  }[];
  relevantProjectIds: number[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'arsitektur-perencanaan-desain-pabrik': {
    slug: 'arsitektur-perencanaan-desain-pabrik',
    title: 'Arsitektur, Perencanaan & Desain Fasilitas Pabrik',
    shortTitle: 'Arsitektur & Planning',
    category: 'Civil Engineering',
    heroBadge: 'CIVIL ARCHITECTS & MASTER PLANNERS',
    heroTitle: 'Jasa Arsitektur, Desain 3D & Perencanaan Tata Letak Bangunan Pabrik',
    heroSubtitle: 'Rancang bangun fasilitas manufaktur presisi, kalkulasi beban struktural, visualisasi 3D realistis, dan penyusunan RAB transparan sesuai standar industri & K3.',
    heroImage: '/arsitektur-planning-hero.webp?v=2',
    metaTitle: 'Jasa Arsitektur Pabrik, 3D Design & Perencanaan Struktur — TOSA',
    metaDescription: 'Jasa arsitektur pabrik, perencanaan tata letak gudang, 3D design fasilitas industri, kalkulasi struktur bangunan, dan penyusunan RAB teknis terpercaya di Cikarang & Karawang.',
    metaKeywords: 'jasa arsitektur pabrik, perencanaan bangunan pabrik, 3D design pabrik industri, konsultan sipil pabrik cikarang, arsitek gudang manufaktur, penyusunan RAB pabrik',
    problemSectionTitle: 'Tantangan Perencanaan Fasilitas Industri',
    problemSectionSubtitle: 'Kesalahan pada tahap desain awal dapat menyebabkan biaya pembongkaran tinggi dan alur operasional pabrik yang tidak efisien.',
    problems: [
      {
        title: 'Alur Produksi & Logistik Tidak Efisien (Bottleneck)',
        desc: 'Tata letak ruang produksi, gudang material, dan loading dock yang tidak terencana dengan matang sering menghambat mobilitas forklift dan pekerja.',
        impact: 'Waktu siklus produksi meningkat dan biaya operasional membengkak.',
      },
      {
        title: 'Ketidakpastian Anggaran (Cost Overrun)',
        desc: 'Penyusunan Rencana Anggaran Biaya (RAB) yang kurang terperinci sering menimbulkan pembengkakan biaya tak terduga di tengah proyek.',
        impact: 'Proyek terancam mangkrak atau kualitas material terpaksa dikurangi.',
      },
      {
        title: 'Kelemahan Kalkulasi Beban Struktur & Perizinan',
        desc: 'Desain yang tidak mengacu pada standar SNI/AISC berisiko gagal uji beban mesin berat dan sulit lolos audit keselamatan kerja K3 serta PBG/SLF.',
        impact: 'Risiko struktural fatal dan kendala izin operasional kawasan industri.',
      },
    ],
    solutions: [
      {
        title: 'Architectural 3D Modeling & Layout Simulation',
        desc: 'Pemodelan 3D visual detail untuk mensimulasikan alur material, penempatan mesin berat, dan ventilasi udara alami sebelum konstruksi fisik dimulai.',
        features: ['Gambar Kerja DED (Detail Engineering Design)', 'Simulasi Sirkulasi Forklift & Manusia', 'Rendering Visual Realistis untuk Presentasi Manajemen'],
      },
      {
        title: 'Kalkulasi Analisis Struktur Gedung & Beban Mesin',
        desc: 'Perhitungan struktur beton bertulang dan rangka baja dengan software rekayasa sipil berstandar SNI dan regulasi ketahanan gempa.',
        features: ['Analisa Beban Dinamis Mesin & Crane', 'Optimasi Dimensi Profil Baja & Pondasi', 'Laporan Sertifikasi Kelayakan Struktur'],
      },
      {
        title: 'Penyusunan Bill of Quantities (BOQ) & Estimasi RAB Akurat',
        desc: 'Perhitungan volume material dan upah kerja transparan tanpa biaya tersembunyi dengan acuan harga pasar terkini kawasan industri.',
        features: ['Spesifikasi Teknis Material Terbuka', 'Timeline Pelaksanaan (Master Schedule)', 'Efisiensi Anggaran Tanpa Menurunkan Standar'],
      },
    ],
    specifications: [
      { label: 'Standar Perancangan', value: 'SNI Gedung Industri, AISC & Tata Ruang Kawasan' },
      { label: 'Output Dokumen', value: 'DED Lengkap, Gambar 3D Visual, BOQ, RAB & Timeline Gantt Chart' },
      { label: 'Lingkup Perencanaan', value: 'Bangunan Utama Pabrik, Warehouse, Mezzanine, Gedung Lab, Kantor & Utilitas' },
      { label: 'Kepatuhan Regulasi', value: 'Standar K3 Industri, Analisis AMDAL/Saluran & Kesiapan PBG/SLF' },
    ],
    workflow: [
      { step: '01', title: 'Site Survey & Brief Kebutuhan', desc: 'Pengukuran lahan eksisting, analisa kontur tanah, dan diskusi detail alur operasional bisnis Anda.' },
      { step: '02', title: 'Konsep Desain & Tata Letak Awal', desc: 'Pembuatan sketsa denah alur kerja (zoning produksi, gudang, kantor) untuk persetujuan manajemen.' },
      { step: '03', title: 'Pengembangan Gambar DED & Struktur', desc: 'Penyusunan gambar teknis arsitektur, struktur, elektrikal, perpipaan, dan visualisasi 3D.' },
      { step: '04', title: 'Finalisasi RAB & Dokumen Tender', desc: 'Penyerahan dokumen lengkap siap bangun beserta rincian biaya dan jadwal eksekusi bertahap.' },
    ],
    relevantProjectIds: [3, 5, 12, 26],
    faqs: [
      {
        question: 'Apakah TOSA menyediakan gambar 3D sebelum pelaksanaan konstruksi?',
        answer: 'Ya, kami menyediakan visualisasi 3D lengkap bersama gambar kerja DED (Detail Engineering Design) agar Anda dan tim manajemen dapat melihat simulasi fasilitas secara nyata sebelum proses konstruksi dimulai.',
      },
      {
        question: 'Apakah perencanaan mencakup pengurusan perizinan kawasan industri?',
        answer: 'Dokumen teknis dan kalkulasi struktur yang kami buat sudah memenuhi standar regulasi pengelola kawasan industri (GIIC, EJIP, MM2100, Jababeka, KIIC, Suryacipta) serta persyaratan teknis perizinan gedung.',
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan untuk proses desain dan penyusunan RAB?',
        answer: 'Tergantung luas dan kompleksitas fasilitas pabrik, umumnya perencanaan konseptual hingga dokumen DED & RAB siap dalam 2 hingga 4 minggu.',
      },
    ],
  },

  'konstruksi-baja-struktur-gudang': {
    slug: 'konstruksi-baja-struktur-gudang',
    title: 'Konstruksi Baja Berat & Struktur Gudang Pabrik',
    shortTitle: 'Konstruksi Baja',
    category: 'Civil Engineering',
    heroBadge: 'HEAVY STEEL STRUCTURE & WAREHOUSE',
    heroTitle: 'Jasa Fabrikasi & Ereksi Konstruksi Baja Berat untuk Pabrik dan Gudang',
    heroSubtitle: 'Solusi konstruksi rangka baja WF, H-Beam, perluasan gudang logistik, mezzanine bertingkat, dan pipe rack berstandar AISC dengan sertifikasi K3 Zero Accident.',
    heroImage: '/asset_porto/PERLUASAN AREA WAREHOUSE.webp',
    metaTitle: 'Jasa Konstruksi Baja Pabrik & Gudang Warehouse — TOSA',
    metaDescription: 'Kontraktor spesialis konstruksi baja WF, H-Beam, perluasan gudang, pabrikasi rangka atap, mezzanine industri di Cikarang, Karawang, Bekasi bergaransi resmi.',
    metaKeywords: 'jasa konstruksi baja pabrik, kontraktor struktur baja cikarang, fabrikasi rangka baja WF, ereksi baja h-beam, perluasan warehouse pabrik, kontraktor gudang baja karawang',
    problemSectionTitle: 'Masalah Kritis pada Konstruksi Baja Pabrik',
    problemSectionSubtitle: 'Pengelasan tidak presisi atau pemilihan mutu baja yang salah berisiko terhadap lendutan dan bahaya keselamatan kerja.',
    problems: [
      {
        title: 'Kapasitas Ruang Penyimpanan Tidak Mencukupi',
        desc: 'Peningkatan volume produksi sering terhambat oleh keterbatasan luas lantai gudang eksisting tanpa adanya opsi penambahan mezzanine atau perluasan bentang.',
        impact: 'Stok barang menumpuk di area produksi dan menurunkan produktivitas.',
      },
      {
        title: 'Penyimpangan Presisi Fabrikasi & Ereksi di Lapangan',
        desc: 'Pemotongan dan pengelasan baja di lokasi tanpa kontrol mutu pabrikasi sering menghasilkan sambungan baut yang tidak pas dan struktur melengkung.',
        impact: 'Kelemahan struktural jangka panjang dan getaran berlebih saat operasional.',
      },
      {
        title: 'Gangguan Operasional Selama Pekerjaan Ereksi',
        desc: 'Pekerjaan pengangkatan crane dan pengelasan berisiko tinggi terhadap keselamatan pekerja dan aset pabrik jika kontraktor tidak berpengalaman dalam K3.',
        impact: 'Risiko kecelakaan kerja (LTI) dan potensi penghentian operasional pabrik.',
      },
    ],
    solutions: [
      {
        title: 'Fabrikasi Presisi Profil Baja WF, H-Beam & Honeycomb',
        desc: 'Fabrikasi di workshop terstandarisasi dengan pemotongan mesin CNC, pengelasan bersertifikat AWS, dan pengecatan primer anti-karat sebelum dikirim ke lokasi.',
        features: ['Baja Mutu Tinggi SS400 / ASTM A36', 'Uji Non-Destructive Testing (NDT) Sambungan Las', 'Toleransi Dimensi Sangat Ketat'],
      },
      {
        title: 'Ereksi Rangka Baja Cepat & Aman (Safe Lifting Procedure)',
        desc: 'Proses perakitan dan pengangkatan rangka baja menggunakan mobile crane dengan metode rigging bersertifikat dan safety officer dedicated.',
        features: ['Fleksibel Jadwal Factory Shutdown', 'Sistem Sambungan Baut Mutu Tinggi (High-Tensile A325)', 'Metode Kerja Terencana Zero Incident'],
      },
      {
        title: 'Pembangunan Mezzanine & Perluasan Gudang Logistik',
        desc: 'Penambahan lantai kerja mezzanine baja dan pelebaran bentang atap gudang untuk memaksimalkan kapasitas penyimpanan vertikal.',
        features: ['Plat Lantai Bordes / Bondek Cor Beton', 'Kapasitas Beban Racking 500–2000 kg/m²', 'Railing & Tangga Akses Standar Keselamatan'],
      },
    ],
    specifications: [
      { label: 'Material Baja Utama', value: 'Wide Flange (WF), H-Beam, CNP, Plat Baja ASTM A36 / SS400' },
      { label: 'Metode Pengelasan', value: 'SMAW / GMAW bersertifikat juru las migas/Depnaker' },
      { label: 'Sistem Sambungan', value: 'High Strength Bolt Grade 8.8 / A325 & Full Penetration Welding' },
      { label: 'Proteksi Awal', value: 'Zinc Chromate Primer / Sandblasting SA 2.5 Standar Industri' },
    ],
    workflow: [
      { step: '01', title: 'Survey Lapangan & Soil Test', desc: 'Pengecekan titik koordinat pondasi, kondisi tanah eksisting, dan clearance area manuver crane.' },
      { step: '02', title: 'Fabrikasi Workshop & Quality Control', desc: 'Pemotongan, perakitan, pengelasan, dan pelapisan cat dasar anti karat di fasilitas workshop.' },
      { step: '03', title: 'Ereksi di Lokasi dengan Crane', desc: 'Pemasangan kolom, balok rafter, tie beam, dan bracing secara bertahap dengan pengawasan K3 ketat.' },
      { step: '04', title: 'Pemasangan Atap, Cladding & Handover', desc: 'Pemasangan penutup atap zincalume, insulasi, talang air, serta uji beban akhir bergaransi tertulis.' },
    ],
    relevantProjectIds: [2, 5, 7, 26],
    faqs: [
      {
        question: 'Apakah TOSA bisa mengerjakan konstruksi baja saat pabrik tetap beroperasi?',
        answer: 'Bisa. Kami memiliki SOP K3 ketat dengan barikade proteksi, jaring pengaman (safety net), serta opsi pengerjaan pada shift malam atau jadwal libur (factory shutdown) agar proses produksi tidak terganggu.',
      },
      {
        question: 'Apakah proyek konstruksi baja TOSA bergaransi resmi?',
        answer: 'Ya, seluruh pekerjaan struktur baja kami disertai garansi resmi tertulis untuk kekuatan sambungan las, kestabilan struktur, dan kebocoran atap.',
      },
      {
        question: 'Material baja apa saja yang digunakan?',
        answer: 'Kami hanya menggunakan profil baja standar SNI bersertifikat resmi pabrik (Krakatau Steel, Gunung Garuda, dsb.) dengan uji tarik dan sertifikat material (mill certificate).',
      },
    ],
  },

  'epoxy-lantai-industri': {
    slug: 'epoxy-lantai-industri',
    title: 'Jasa Epoxy Lantai Pabrik & Epoxy Floor Coating',
    shortTitle: 'Epoxy Lantai',
    category: 'Industrial Painting',
    heroBadge: 'INDUSTRIAL EPOXY FLOORING SPECIALIST',
    heroTitle: 'Aplikasi Pelapisan Epoxy Lantai Industri Bebas Debu, Kuat & Standar GMP',
    heroSubtitle: 'Spesialis Epoxy Self-Leveling, Heavy Duty Mortar, Food Grade Cleanroom, Anti-Static ESD, dan Chemical Resistance untuk fasilitas manufaktur, gudang & farmasi.',
    heroImage: '/asset_porto/EPOXY SELF LEVELING FLOOR.webp',
    metaTitle: 'Jasa Epoxy Lantai Pabrik & Gudang Bergaransi — TOSA',
    metaDescription: 'Kontraktor jasa epoxy lantai industri cikarang, bekasi, karawang: self-leveling, heavy duty mortar tahan forklift, food grade GMP cleanroom bergaransi resmi.',
    metaKeywords: 'jasa epoxy lantai pabrik, epoxy self leveling cikarang, epoxy lantai gudang karawang, epoxy food grade gmp, epoxy anti static esd, kontraktor epoxy lantai bekasi',
    problemSectionTitle: 'Masalah Lantai Pabrik yang Merugikan',
    problemSectionSubtitle: 'Lantai beton biasa tanpa pelapisan pelindung akan cepat aus, berdebu, dan tidak lolos audit kebersihan industri.',
    problems: [
      {
        title: 'Debu Semen Mengotori Mesin Presisi & Produk Jadi',
        desc: 'Lantai beton yang tidak terlapisi terus melepaskan partikel debu halus akibat gesekan roda, mengontaminasi komponen elektronik atau makanan.',
        impact: 'Tingkat produk cacat (reject) meningkat dan mesin rentan rusak.',
      },
      {
        title: 'Keretakan & Gompal Akibat Beban Forklift Berat',
        desc: 'Lalu lintas forklift bertonase tinggi dan roda keras menghancurkan permukaan beton standar hingga berlubang dan membahayakan keselamatan.',
        impact: 'Manuver armada terhambat dan risiko barang terguling saat dipindahkan.',
      },
      {
        title: 'Tumpahan Kimia, Minyak & Oli Meresap ke Beton',
        desc: 'Cairan asam, pelarut, atau oli merembes ke pori-pori beton, menyebabkan degradasi struktur lantai dan lantai licin berbahaya.',
        impact: 'Lantai berbau, sulit dibersihkan, dan gagal audit standar 5S / ISO / GMP.',
      },
    ],
    solutions: [
      {
        title: 'Epoxy Self-Leveling & High Gloss Finishing',
        desc: 'Pelapisan resin epoxy murni dengan ketebalan 1000–3000 micron untuk hasil lantai mulus tanpa sambungan (seamless), mudah disterilkan, dan kilap elegan.',
        features: ['Standar Cleanroom Farmasi & Elektronik', 'Permukaan Sangat Higienis & Mudah Dibersihkan', 'Pilihan Warna Sesuai Zonasi Pabrik'],
      },
      {
        title: 'Heavy Duty Epoxy Mortar (Tahan Beban Forklift Ekstrem)',
        desc: 'Kombinasi resin epoxy dengan agregat silika khusus untuk mereparasi lantai rusak dan membentuk lapisan pelindung tahan benturan beban hingga 5–10 ton.',
        features: ['Kekuatan Tekan (Compressive Strength) Sangat Tinggi', 'Tahan Gesekan Roda Keras & Pallet Jack', 'Menutup Kerusakan Beton Permanen'],
      },
      {
        title: 'Food Grade & Anti-Chemical Epoxy Coating',
        desc: 'Formula bebas pelarut (100% Solid Solvent-Free) bersertifikasi aman kontak pangan, anti-bakteri, dan tahan tumpahan bahan kimia agresif.',
        features: ['Standar Sertifikasi BPOM, GMP & HACCP', 'Tahan Asam, Basa, Pelarut & Deterjen Industri', 'Tersedia Varian Anti-Static / ESD untuk Elektronik'],
      },
    ],
    specifications: [
      { label: 'Ketebalan Aplikasi', value: '500 Micron (Thin Coat) hingga 3000 Micron (Self-Leveling / Mortar)' },
      { label: 'Material Resin', value: 'High-Grade 100% Solid Epoxy Resin & Polyamide Hardener' },
      { label: 'Persiapan Permukaan', value: 'Diamond Grinding SA / Shot Blasting & Dustless Vacuum Cleaner' },
      { label: 'Waktu Kering (Curing)', value: 'Foot Traffic: 24 Jam | Heavy Forklift Traffic: 48–72 Jam' },
    ],
    workflow: [
      { step: '01', title: 'Grinding & Surface Preparation', desc: 'Pengupasan kerak semen lama dan membuka pori-pori beton dengan mesin diamond grinding berfilter HEPA.' },
      { step: '02', title: 'Epoxy Primer & Perbaikan Retak', desc: 'Aplikasi cat dasar penetrasi tinggi untuk daya rekat maksimal serta pengisian retakan dengan epoxy putty.' },
      { step: '03', title: 'Aplikasi Body Coat / Mortar Layer', desc: 'Pelapisan lapisan tengah epoxy untuk meratakan elevasi dan memberikan kekuatan mekanis ekstra.' },
      { step: '04', title: 'Top Coat Self-Leveling & Curing', desc: 'Finishing lapisan atas warna pilihan Anda dengan ketebalan presisi bergaransi tidak mengelupas.' },
    ],
    relevantProjectIds: [1, 6, 9, 15],
    faqs: [
      {
        question: 'Berapa lama waktu kering epoxy lantai hingga pabrik bisa beroperasi kembali?',
        answer: 'Lantai sudah dapat dilalui pejalan kaki dalam 24 jam setelah aplikasi top coat, dan dapat dilalui forklift atau beban berat setelah 48 hingga 72 jam masa curing sempurna.',
      },
      {
        question: 'Bagaimana cara TOSA mengatasi kelembapan lantai beton sebelum epoxy?',
        answer: 'Kami selalu melakukan pengukuran kadar kelembapan beton dengan moisture meter. Jika kelembapan melebihi batas, kami mengaplikasikan moisture barrier khusus terlebih dahulu agar epoxy tidak menggelembung di kemudian hari.',
      },
      {
        question: 'Apakah ada garansi ketahanan epoxy dari TOSA?',
        answer: 'Ya, seluruh pekerjaan epoxy lantai TOSA dilengkapi garansi tertulis resmi terhadap pengelupasan (delamination) dan cacat aplikasi.',
      },
    ],
  },

  'protective-coating-anti-karat': {
    slug: 'protective-coating-anti-karat',
    title: 'Protective Coating Anti-Karat & Roof Heat Reflective',
    shortTitle: 'Protective Coating',
    category: 'Industrial Painting',
    heroBadge: 'HEAVY CORROSION & THERMAL PROTECTION',
    heroTitle: 'Perlindungan Anti-Korosi Struktur Baja, Tangki Kimia & Pengecatan Atap Pabrik',
    heroSubtitle: 'Sistem pelapisan anti-karat heavy duty, sandblasting SA 2.5, intumescent fireproofing cat tahan api, dan cat penolak panas atap seng/zincalume.',
    heroImage: '/asset_porto/PAINTING BAJA, TANKI & CEROBONG.webp',
    metaTitle: 'Jasa Protective Coating Anti Karat & Sandblasting Pabrik — TOSA',
    metaDescription: 'Jasa protective coating anti korosi tangki kimia, cerobong pabrik, struktur baja, sandblasting SA 2.5, cat tahan api dan heat reflective coating cikarang karawang.',
    metaKeywords: 'jasa protective coating pabrik, cat anti karat struktur baja, jasa sandblasting cikarang, pengecatan tangki kimia, intumescent coating tahan api, cat peredam panas atap pabrik',
    problemSectionTitle: 'Bahaya Korosi & Suhu Panas Ruang Produksi',
    problemSectionSubtitle: 'Paparan uap kimia, kelembapan, dan terik matahari mendegradasi aset logam pabrik Anda secara signifikan.',
    problems: [
      {
        title: 'Korosi Menipiskan Ketebalan Baja Struktur & Tangki',
        desc: 'Karat yang dibiarkan pada struktur baja, pipa, dan tangki penyimpanan bahan kimia dapat memicu kebocoran berbahaya dan keruntuhan mendadak.',
        impact: 'Biaya penggantian aset sangat mahal dan risiko kecelakaan lingkungan.',
      },
      {
        title: 'Suhu Panas Ekstrem di Bawah Atap Pabrik',
        desc: 'Atap seng atau spandek menyerap panas matahari secara masif, membuat suhu dalam area produksi sangat panas dan membebani kinerja AC/exhaust.',
        impact: 'Kenyamanan kerja turun, kelelahan operator meningkat, dan tagihan listrik melonjak.',
      },
      {
        title: 'Persyaratan Kepatuhan K3 & Proteksi Bahaya Kebakaran',
        desc: 'Regulasi industri mewajibkan struktur baja memiliki ketahanan terhadap suhu tinggi saat terjadi kebakaran darurat agar gedung tidak runtuh seketika.',
        impact: 'Sanksi audit K3 dan potensi kerugian total saat insiden kebakaran.',
      },
    ],
    solutions: [
      {
        title: 'Surface Preparation Sandblasting Standar SA 2.5',
        desc: 'Pembersihan karat, mill scale, dan cat lama dengan teknologi sandblasting pasir silika/garnet untuk mencapai profil permukaan ideal daya rekat cat.',
        features: ['Standar Internasional ISO 8501-1 SA 2.5 / SSPC-SP 10', 'Daya Rekat Cat Meningkat Hingga 300%', 'Hasil Permukaan Bersih Sempurna'],
      },
      {
        title: 'Multi-Layer Epoxy & Polyurethane (PU) Anti-Corrosion',
        desc: 'Aplikasi cat primer kaya seng (Zinc Rich Primer), lapisan intermediate epoxy barrier, dan polyurethane top coat tahan cuaca sinar UV.',
        features: ['Ketahanan Korosi Atmosferik C4 & C5 Industrial', 'Tahan Percikan Asam, Basa & Uap Kimia', 'Warna Tahan Pudar Hingga Bertahun-tahun'],
      },
      {
        title: 'Heat-Reflective Roof Coating (Cat Penolak Panas Atap)',
        desc: 'Cat atap khusus berteknologi ceramic microsphere yang memantulkan hingga 90% sinar solar inframerah dan menurunkan suhu ruang kerja 4–8°C.',
        features: ['Menurunkan Suhu Permukaan Atap hingga 15–20°C', 'Mencegah Kebocoran Sekrup & Sambungan Seng', 'Menghemat Konsumsi Energi Pendingin Listrik'],
      },
    ],
    specifications: [
      { label: 'Metode Sandblasting', value: 'Dry Blasting Silica / Garnet Grit Standar SA 2.5' },
      { label: 'Sistem Pengecatan', value: 'Inorganic Zinc Rich Primer + Epoxy High Build + Polyurethane Top Coat' },
      { label: 'Ketebalan Cat (DFT)', value: '150 Micron hingga 350+ Micron Dry Film Thickness' },
      { label: 'Inspeksi Kualitas', value: 'WFT/DFT Gauge Testing, Cross-Hatch Adhesion Test & Holiday Detector' },
    ],
    workflow: [
      { step: '01', title: 'Inspeksi Korosi & Uji Ketebalan Baja', desc: 'Pengecekan tingkat korosi awal dan ketebalan plat baja eksisting dengan ultrasonic thickness gauge.' },
      { step: '02', title: 'Sandblasting SA 2.5 & Dust Removal', desc: 'Pembersihan karat total hingga permukaan baja berwarna abu-abu bersih bebas kontaminan.' },
      { step: '03', title: 'Aplikasi Primer & Intermediate Coat', desc: 'Pengecatan zinc primer anti-karat segera setelah blasting dilanjutkan lapisan penutup pori.' },
      { step: '04', title: 'Top Coat Finishing & Garansi', desc: 'Aplikasi cat akhir tahan UV/cuaca atau intumescent fireproofing bergaransi resmi tertulis.' },
    ],
    relevantProjectIds: [4, 11, 15, 27],
    faqs: [
      {
        question: 'Apakah sandblasting bisa dilakukan di dalam area pabrik yang sedang beroperasi?',
        answer: 'Bisa dengan metode isolasi enclosure terpal rapat dan dust collector, atau menggunakan metode alternatif power tool cleaning (St 3) jika area sekitar sangat sensitif debu.',
      },
      {
        question: 'Seberapa efektif cat penolak panas atap TOSA menurunkan suhu ruangan?',
        answer: 'Cat heat-reflective kami terbukti menurunkan suhu permukaan atap seng hingga 15-20°C, yang berdampak pada penurunan suhu ruangan di bawahnya rata-rata 4-8°C.',
      },
      {
        question: 'Berapa lama daya tahan proteksi anti-karat TOSA?',
        answer: 'Dengan persiapan sandblasting SA 2.5 dan sistem 3-layer PU coating, ketahanan proteksi anti-karat dapat bertahan 5 hingga 10+ tahun tergantung kondisi lingkungan sekitar.',
      },
    ],
  },

  'concrete-polishing-liquid-hardener': {
    slug: 'concrete-polishing-liquid-hardener',
    title: 'Concrete Polishing & Liquid Floor Hardener',
    shortTitle: 'Poles Beton & Hardener',
    category: 'Civil Engineering',
    heroBadge: 'DIAMOND GRINDING & CHEMICAL DENSIFIER',
    heroTitle: 'Jasa Poles Lantai Beton Kilap, Tahan Gesekan Beban & Bebas Debu Semen',
    heroSubtitle: 'Solusi lantai beton industri super glossy, padat anti gores, tahan tumpahan minyak, dan minim biaya perawatan jangka panjang dengan teknologi liquid hardener.',
    heroImage: '/asset_porto/POLESHING CONCRETE.webp',
    metaTitle: 'Jasa Poles Lantai Beton Pabrik & Liquid Hardener — TOSA',
    metaDescription: 'Jasa concrete polishing poles lantai beton pabrik cikarang karawang: diamond grinding bertingkat, chemical densifier liquid hardener kilap tahan lama.',
    metaKeywords: 'jasa poles lantai beton pabrik, concrete polishing cikarang, liquid floor hardener bekasi, poles beton industri karawang, lantai beton anti debu, jasa diamond grinding beton',
    problemSectionTitle: 'Masalah Lantai Beton Tanpa Perawatan Polishing',
    problemSectionSubtitle: 'Lantai beton non-treated rentan mengalami dusting (berdebu terus menerus) dan menyerap noda oli permanen.',
    problems: [
      {
        title: 'Lantai Terus Mengeluarkan Debu Semen (Concrete Dusting)',
        desc: 'Reaksi gesekan roda pada lantai beton mentah menghasilkan partikel semen mikro yang beterbangan dan mengotori lingkungan kerja.',
        impact: 'Menurunkan kualitas udara pabrik dan mengganggu kesehatan pekerja.',
      },
      {
        title: 'Noda Oli & Cairan Kimia Meresap Permanen',
        desc: 'Pori-pori beton yang terbuka menyerap tumpahan minyak mesin, oli hidrolik, dan kotoran hingga membekas hitam dan licin berbahaya.',
        impact: 'Lantai tampak kumuh, licin, dan tidak bisa dibersihkan dengan pel biasa.',
      },
      {
        title: 'Biaya Perawatan Lantai yang Boros Setiap Tahun',
        desc: 'Cat lantai biasa yang mudah mengelupas menuntut pengeluaran biaya perbaikan berulang kali setiap beberapa bulan.',
        impact: 'Pemborosan anggaran pemeliharaan gedung pabrik (maintenance cost).',
      },
    ],
    solutions: [
      {
        title: 'Multi-Stage Diamond Grinding & Honing',
        desc: 'Pengikisan bertingkat menggunakan pad intan (grit 30 hingga 3000) untuk membuka permukaan padat beton dan menciptakan kilau alami tanpa lapisan film yang bisa mengelupas.',
        features: ['Hasil Kilap Natural Glossy Cermin', 'Tidak Akan Mengelupas (No Peeling Risk)', 'Permukaan Rata Presisi Nyaman untuk Forklift'],
      },
      {
        title: 'Aplikasi Chemical Liquid Lithium / Sodium Densifier',
        desc: 'Bahan kimia pengeras beton yang bereaksi dengan kalsium hidroksida bebas untuk memadatkan pori-pori mikro beton menjadi kristal keras permanen.',
        features: ['Kekerasan Lantai Meningkat Signifikan (Mohs Scale 7–8)', 'Menutup Pori-Pori Anti Rembesan Cairan', 'Perlindungan Permanen Seumur Beton'],
      },
      {
        title: 'Concrete Sealing & High-Speed Burnishing',
        desc: 'Finishing sealer pelindung anti noda dan pemolesan putaran tinggi (burnishing) untuk kilau refleksi cahaya maksimal dan kemudahan pembersihan.',
        features: ['Tahan Tumpahan Oli, Minyak & Kimia Ringan', 'Memantulkan Cahaya Lampu (Hemat Energi Listrik)', 'Cukup Dibersihkan dengan Air & Sabun Biasa'],
      },
    ],
    specifications: [
      { label: 'Tahapan Polishing', value: 'Grinding Grit 30, 50, 100, 200, 400, 800, 1500 hingga 3000' },
      { label: 'Chemical Hardener', value: 'Lithium Silicate / Sodium Silicate Densifier Konsentrasi Tinggi' },
      { label: 'Tingkat Kilau (Gloss)', value: 'Matte, Semi-Gloss, hingga High-Gloss Reflektif Kaca' },
      { label: 'Ketahanan Beban', value: 'Mampu menahan beban lalu lintas forklift 10+ Ton tanpa gores' },
    ],
    workflow: [
      { step: '01', title: 'Coarse Grinding Awal', desc: 'Perataan permukaan beton dan penghilangan lapisan semen rapuh (laitance) dengan diamond pad metal.' },
      { step: '02', title: 'Aplikasi Liquid Densifier', desc: 'Penuangan chemical pengeras cairan lithium/sodium agar meresap ke dalam pori-pori kristal beton.' },
      { step: '03', title: 'Fine Honing & Polishing Bertingkat', desc: 'Pemolesan resin diamond bertahap dari grit sedang hingga grit halus untuk memunculkan kilap kilau.' },
      { step: '04', title: 'Sealer & Burnishing Finishing', desc: 'Pelapisan pelindung noda dan pemadatan kilau akhir siap pakai tanpa waktu tunggu lama.' },
    ],
    relevantProjectIds: [10, 1, 8, 14],
    faqs: [
      {
        question: 'Apa keunggulan Concrete Polishing dibanding Epoxy Lantai?',
        answer: 'Concrete Polishing memoles struktur beton itu sendiri dan mengeras secara kimiawi, sehingga 100% bebas risiko mengelupas dan memiliki usia pakai seumur bangunan dengan biaya perawatan yang jauh lebih hemat.',
      },
      {
        question: 'Apakah lantai beton lama yang sudah rusak bisa di-polish?',
        answer: 'Bisa. Kami akan melakukan penambalan lubang (grouting/patching) dengan material mortar berkekuatan tinggi sebelum proses grinding bertingkat dimulai.',
      },
      {
        question: 'Apakah lantai poles beton menjadi licin saat basah?',
        answer: 'Meskipun tampak mengkilap seperti kaca, concrete polishing memiliki koefisien gesek (COF) yang memenuhi standar keselamatan kerja K3 (tidak licin/anti-slip saat kering).',
      },
    ],
  },

  'waterproofing-frp-lining': {
    slug: 'waterproofing-frp-lining',
    title: 'Waterproofing System & FRP Lining Kimia Pabrik',
    shortTitle: 'Waterproofing & FRP',
    category: 'Industrial Painting',
    heroBadge: 'CHEMICAL & WATER INFILTRATION BARRIER',
    heroTitle: 'Solusi Total Anti Bocor Dak Beton Pabrik & Pelapisan FRP Lining Bak Kimia',
    heroSubtitle: 'Aplikasi waterproofing membran bakar, coating polyurethane elastis dak atap, serta pelapisan fiberglass (FRP) tahan asam-basa untuk bak penampungan limbah WWTP/STP.',
    heroImage: '/asset_porto/PEMASANGAN DINDING CLADING DAN ROOF CLADING.webp',
    metaTitle: 'Jasa Waterproofing Dak Pabrik & FRP Lining Bak Kimia — TOSA',
    metaDescription: 'Kontraktor jasa waterproofing membran bakar dak beton pabrik, polyurethane coating anti bocor, dan FRP lining bak kimia WWTP/STP bergaransi resmi cikarang.',
    metaKeywords: 'jasa waterproofing dak pabrik, waterproofing membran bakar cikarang, jasa FRP lining kimia, pelapisan fiberglass bak limbah wwtp, waterproofing atap beton karawang',
    problemSectionTitle: 'Ancaman Kerusakan Akibat Kebocoran & Korosi Kimia',
    problemSectionSubtitle: 'Rembesan air hujan ke area produksi dan kebocoran limbah kimia dapat menghentikan operasional pabrik Anda.',
    problems: [
      {
        title: 'Kebocoran Dak Beton Menetes ke Mesin & Area Produksi',
        desc: 'Retak rambut pada dak beton atap membiarkan air hujan merembes dan menetes langsung ke jalur perakitan, mesin listrik, atau gudang barang jadi.',
        impact: 'Kerusakan mesin mahal, bahaya korsleting listrik, dan barang siap kirim rusak.',
      },
      {
        title: 'Bak Penampungan Limbah Kimia Bocor & Merusak Tanah',
        desc: 'Bak beton pengolahan air limbah (WWTP/STP) yang terkikis zat kimia asam/basa merembes ke tanah sekitar dan melanggar aturan baku mutu lingkungan.',
        impact: 'Sanksi berat dari dinas lingkungan hidup dan biaya denda pencemaran.',
      },
      {
        title: 'Waterproofing Lama Mengelupas dalam Hitungan Bulan',
        desc: 'Penggunaan material cat waterproof murahan tanpa serat penguat dan persiapan beton yang buruk membuat lapisan pelindung cepat robek terpapar panas UV.',
        impact: 'Kebocoran terulang kembali setiap musim hujan tiba.',
      },
    ],
    solutions: [
      {
        title: 'Waterproofing Membran Bakar Torching & Liquid Polyurethane',
        desc: 'Pemasangan lembaran bitumen elastis tebal 3mm berpemanas api atau cairan polyurethane elastomeric yang menjembatani retakan beton dak secara permanen.',
        features: ['Elastisitas Tinggi Tahan Muai-Susut Beton', 'Tahan Genangan Air & Sinar Panas UV Ekstrem', 'Garansi Kebocoran Resmi Tertulis'],
      },
      {
        title: 'FRP (Fiberglass Reinforced Plastic) Lining Bak Kimia',
        desc: 'Pelapisan multi-layer resin vinyl ester / isophthalic diperkuat serat kaca (chopped strand mat) untuk proteksi mutlak bak beton dari zat kimia korosif.',
        features: ['Tahan Asam Sulfat, Klorida, Basa & Limbah Industri', 'Membentuk Lapisan Monolitik Kedap Tanpa Celah', 'Kekuatan Mekanis Sangat Tinggi Tahan Tekanan Air'],
      },
      {
        title: 'Injeksi Polyurethane (PU Grouting) Beton Retak',
        desc: 'Teknologi injeksi tekanan tinggi untuk menghentikan kebocoran aktif dari celah retakan beton basement atau bak air seketika dalam hitungan menit.',
        features: ['Menghentikan Kebocoran Seketika Tanpa Bongkar Beton', 'Material Mengembang 20x Mengisi Seluruh Rongga', 'Solusi Darurat Cepat Saat Musim Hujan'],
      },
    ],
    specifications: [
      { label: 'Jenis Waterproofing', value: 'Membran Bakar 3mm Sand/Granule, Polyurethane Liquid, Cementitious 2K' },
      { label: 'Spesifikasi FRP', value: 'Resin Vinyl Ester / Epoxy Novolac + Fibermat 300/450 3–5 Layer' },
      { label: 'Uji Kelayakan', value: 'Water Ponding Test (Uji Rendam Air 24–48 Jam) Sebelum Serah Terima' },
      { label: 'Area Aplikasi', value: 'Dak Atap Beton, Basement, Talang Air, Bak WWTP/STP, Gutter & Pit Room' },
    ],
    workflow: [
      { step: '01', title: 'Survey Titik Kebocoran & Uji Lembap', desc: 'Pemetaan seluruh titik rembesan, retakan beton, dan pembersihan permukaan dak dari lumut/debu.' },
      { step: '02', title: 'Perbaikan Retak & Chamfering Sudut', desc: 'Injeksi retakan beton dan pembuatan plint lengkung (chamfer) di setiap sudut pertemuan lantai-dinding.' },
      { step: '03', title: 'Aplikasi Primer & Lapisan Waterproof / FRP', desc: 'Pemasangan lapisan membran bakar atau laminasi serat fiberglass dengan resin kimia secara merata.' },
      { step: '04', title: 'Uji Rendam Air (Ponding Test) & Serah Terima', desc: 'Penggenangan air selama 48 jam untuk memastikan 100% tidak ada rembesan sebelum serah terima.' },
    ],
    relevantProjectIds: [13, 19, 22, 25],
    faqs: [
      {
        question: 'Apakah TOSA melakukan uji rendam air setelah pekerjaan waterproofing?',
        answer: 'Wajib. Kami selalu melakukan Water Ponding Test (uji rendam genangan air) selama minimal 24 hingga 48 jam untuk membuktikan secara nyata bahwa area dak beton sudah 100% kedap air.',
      },
      {
        question: 'Apakah FRP lining tahan terhadap zat kimia asam pekat?',
        answer: 'Ya, dengan penggunaan resin khusus jenis Vinyl Ester atau Epoxy Novolac, pelapisan FRP kami tahan terhadap asam kuat, alkali basa, pelarut organik, dan cairan limbah industri agresif.',
      },
      {
        question: 'Berapa lama garansi anti-bocor yang diberikan TOSA?',
        answer: 'Kami memberikan garansi resmi tertulis 3 hingga 5 tahun untuk pekerjaan waterproofing sistem membran dan FRP lining.',
      },
    ],
  },

  'renovasi-sipil-infrastruktur-pabrik': {
    slug: 'renovasi-sipil-infrastruktur-pabrik',
    title: 'Renovasi Sipil, Rigid Pavement & Infrastruktur Pabrik',
    shortTitle: 'Renovasi Sipil & Infrastruktur',
    category: 'Civil Engineering',
    heroBadge: 'CIVIL INFRASTRUCTURE & INDUSTRIAL RENOVATION',
    heroTitle: 'Jasa Pengecoran Jalan Rigid Pabrik, Drainase U-Ditch & Renovasi Gedung',
    heroSubtitle: 'Kontraktor perbaikan rigid pavement jalan beton K-350, saluran air U-ditch anti banjir, sumur resapan AMDAL, pemasangan dinding cladding, dan loading dock.',
    heroImage: '/asset_porto/PEMBUATAN GEDUNG LABORATORIUM CIKARANG.webp',
    metaTitle: 'Jasa Renovasi Pabrik, Jalan Beton & Drainase U-Ditch — TOSA',
    metaDescription: 'Kontraktor sipil renovasi pabrik cikarang karawang: perbaikan jalan beton rigid mutu K-350, drainase u-ditch, sumur resapan, cladding dan perbaikan loading dock.',
    metaKeywords: 'jasa renovasi pabrik cikarang, kontraktor jalan beton pabrik, rigid pavement k-350, pasang drainase u ditch pabrik, perbaikan loading dock, pasang cladding pabrik karawang',
    problemSectionTitle: 'Infrastruktur Rusak Mengganggu Rantai Pasok',
    problemSectionSubtitle: 'Akses jalan ambles dan saluran air tersumbat dapat melumpuhkan distribusi truk kontainer pabrik Anda.',
    problems: [
      {
        title: 'Jalan Akses Pabrik Ambles & Rusak Dihantam Truk Berat',
        desc: 'Jalan aspal atau beton mutu rendah cepat bergelombang dan patah akibat lintasan harian truk kontainer tronton 30–40 ton.',
        impact: 'Armada logistik rusak, risiko truk amblas, dan pengiriman barang tertunda.',
      },
      {
        title: 'Genangan Banjir di Halaman Pabrik Saat Hujan Deras',
        desc: 'Saluran drainase yang sempit dan minim sumur resapan menyebabkan air hujan meluap masuk ke area gudang penyimpanan produk.',
        impact: 'Kerusakan stok barang di gudang dan pelanggaran baku mutu AMDAL kawasan.',
      },
      {
        title: 'Bibir Loading Dock Rusak & Cladding Bocor',
        desc: 'Benturan kontainer saat mundur meremukkan beton bibir loading dock, dan cladding dinding yang karat membiarkan air masuk ke gedung produksi.',
        impact: 'Proses bongkar muat terhambat dan risiko kerusakan dinding struktural.',
      },
    ],
    solutions: [
      {
        title: 'Pengecoran Ulang Jalan Rigid Pavement Mutu K-350 / FS-45',
        desc: 'Pembongkaran beton lama, pemadatan base course, pembesian dowel tie bar, dan pengecoran beton mutu tinggi menggunakan jidar vibrator screed.',
        features: ['Kapasitas Beban Truk Tronton Kontainer 40 Ton', 'Beton Cepat Kering (Fast Track 3 Hari Buka Jalur)', 'Tahan Beban Geser & Tidak Bergelombang'],
      },
      {
        title: 'Pemasangan Drainase Beton Precast U-Ditch & Cover Heavy Duty',
        desc: 'Instalasi saluran beton pracetak U-Ditch lengkap dengan tutup grill besi/beton heavy duty yang mampu dilintasi kendaraan berat.',
        features: ['Aliran Air Hujan Lancar Bebas Banjir', 'Pemasangan Cepat Tanpa Mengotori Area Sekitar', 'Dilengkapi Bak Kontrol & Sumur Resapan Standar Lingkungan'],
      },
      {
        title: 'Renovasi Gedung, Pemasangan Cladding Metal & Loading Dock',
        desc: 'Penggantian cladding dinding zincalume anti karat, partisi ruang kantor PPIC/lab, perbaikan plat bibir loading dock, dan paving block K-300.',
        features: ['Fit-out Ruang Kantor, Plafon Gypsum & Ruang Kontrol', 'Dock Bumper Rubber & Plat Leveler Heavy Duty', 'Dinding Cladding Rapi, Tahan Cuaca & Estetis'],
      },
    ],
    specifications: [
      { label: 'Mutu Beton Jalan', value: 'Ready Mix K-350 / K-400 / Flexural Strength FS-45 dengan Wiremesh M8/M10' },
      { label: 'Saluran Drainase', value: 'Precast U-Ditch 40x40 hingga 120x120 + Heavy Duty Reinforced Cover' },
      { label: 'Material Cladding', value: 'Zincalume / Colorbond 0.40–0.50mm BMT Anti Korosi' },
      { label: 'Perkerasan Halaman', value: 'Paving Block Mutu K-300 / K-400 Press Hidrolik Tebal 8cm' },
    ],
    workflow: [
      { step: '01', title: 'Topografi, Elevasi & Traffic Plan', desc: 'Pengukuran kemiringan saluran air waterpass dan pengaturan rekayasa buka-tutup jalur kendaraan.' },
      { step: '02', title: 'Demolisi & Pemadatan Sub-Grade', desc: 'Pembongkaran beton lama dengan breaker dan pemadatan tanah dasar menggunakan vibro roller.' },
      { step: '03', title: 'Pembesian & Pengecoran Rigid', desc: 'Pemasangan plastik cor, wiremesh bertulang, dowel joint, dan pengecoran beton ready mix.' },
      { step: '04', title: 'Curing, Cutting Joint & Sealant', desc: 'Pemotongan dilatasi beton (grooving) dan pengisian mastic sealant untuk mencegah retak acak.' },
    ],
    relevantProjectIds: [11, 8, 20, 21, 23, 24],
    faqs: [
      {
        question: 'Apakah pengecoran jalan pabrik bisa menggunakan beton cepat kering (Fast Track)?',
        answer: 'Bisa. Kami menyediakan opsi beton Ready Mix Fast Track dengan admixture khusus yang dapat dibuka untuk lintasan truk kontainer dalam waktu 3 hari setelah pengecoran.',
      },
      {
        question: 'Bagaimana TOSA mengatur alur lalu lintas pabrik selama pekerjaan jalan berlangsung?',
        answer: 'Kami menerapkan metode pengerjaan separuh badan jalan (sistem buka-tutup) dengan penempatan rambu lalu lintas K3 dan petugas pengatur lalu lintas, sehingga aktivitas keluar-masuk kendaraan pabrik tetap berjalan lancar.',
      },
      {
        question: 'Apakah TOSA juga melayani perbaikan interior kantor pabrik (fit-out)?',
        answer: 'Ya, kami melayani renovasi menyeluruh mulai dari partisi kedap suara, plafon gypsum, pengecatan kantor, hingga perataan plat lantai mezzanine.',
      },
    ],
  },

  'mep-piping-boiler-industri': {
    slug: 'mep-piping-boiler-industri',
    title: 'Sistem MEP, Piping Bertekanan & Boiler Industri',
    shortTitle: 'MEP, Piping & Boiler',
    category: 'Civil Engineering',
    heroBadge: 'ELECTROMECHANICAL & PROCESS PIPING',
    heroTitle: 'Instalasi Mekanikal Elektrikal, Perpipaan Pabrik & Boiler Standar ASME',
    heroSubtitle: 'Solusi terintegrasi instalasi panel distribusi daya, trafo, industrial HVAC ducting, perpipaan bertekanan steam/compressed air, dan boiler bersertifikat laik operasi.',
    heroImage: '/asset_porto/PEMASANGAN PIPA PUMP ROOM &  REPAIR SISTEM FLOW PUMP ROOM.webp',
    metaTitle: 'Kontraktor MEP Pabrik, Piping System & Boiler — TOSA',
    metaDescription: 'Jasa instalasi MEP industri, perpipaan steam bertekanan, compressed air, industrial ducting HVAC, dan pemasangan boiler standar ASME cikarang karawang.',
    metaKeywords: 'kontraktor MEP pabrik, instalasi piping steam cikarang, jasa pasang boiler industri, perpipaan compressed air pabrik, industrial ducting hvac bekasi, panel listrik pabrik',
    problemSectionTitle: 'Risiko Kegagalan Sistem Utilitas Pabrik',
    problemSectionSubtitle: 'Kebocoran jalur perpipaan bertekanan tinggi dan instalasi listrik yang buruk berisiko fatal bagi keselamatan operasional pabrik.',
    problems: [
      {
        title: 'Kebocoran Tekanan Angin (Pressure Drop) & Steam Bocor',
        desc: 'Pemasangan pipa compressed air atau steam yang tidak presisi menyebabkan penurunan tekanan drastis, pemborosan energi kompresor, dan bahaya semburan uap panas.',
        impact: 'Mesin pneumatik gagal fungsi dan tagihan listrik energi kompresor melonjak.',
      },
      {
        title: 'Suhu Udara Panas & Sirkulasi Udara Buruk di Pabrik',
        desc: 'Sistem ducting ventilasi dan exhaust fan yang tidak seimbang membuat hawa panas mesin terperangkap di dalam ruangan kerja.',
        impact: 'Kenyamanan operator turun dan mesin elektronik rentan mengalami overheating.',
      },
      {
        title: 'Ketidaksesuaian Standar Kelayakan Boiler & Kelistrikan',
        desc: 'Instalasi boiler dan panel listrik yang tidak mengacu pada standar regulasi keselamatan berisiko gagal uji hydrotest dan tidak lolos izin Disnaker.',
        impact: 'Bahaya ledakan bejana tekan dan penolakan sertifikat laik operasi.',
      },
    ],
    solutions: [
      {
        title: 'Instalasi Sistem Perpipaan Industri (Process Piping ASME B31.3)',
        desc: 'Fabrikasi dan ereksi jalur pipa bertekanan steam, compressed air, chilled water, pipa hidran pemadam, dan pipa kimia menggunakan material seamless sch 40/80.',
        features: ['Pengelasan Juru Las Bersertifikat Migas / Depnaker', 'Uji Tekan Hydrotest Berita Acara Resmi', 'Insulasi Panas Rockwool + Aluminium Cladding'],
      },
      {
        title: 'Pemasangan, Relokasi & Commissioning Boiler Pabrik',
        desc: 'Instalasi boiler pipa api (fire tube) dan pipa air (water tube) lengkap dengan header distribusi uap, tangki deaerator, feed water pump, dan cerobong.',
        features: ['Kepatuhan Standar Bejana Tekan ASME Boiler Code', 'Uji Commissioning Kelayakan Operasional', 'Pendampingan Uji Riksa Sertifikasi Disnaker'],
      },
      {
        title: 'Sistem Kelistrikan Panel Distribusi & HVAC Ducting',
        desc: 'Penataan panel LVMDP/Capacitor Bank, penarikan kabel power tray, sistem grounding proteksi petir, serta fabrikasi ducting BJLS tata udara pabrik.',
        features: ['Keseimbangan Beban Listrik (Load Balancing)', 'Sistem Sirkulasi Udara Sejuk Sesuai Baku Mutu K3', 'Pencahayaan LED Industri Standar Lux Produksi'],
      },
    ],
    specifications: [
      { label: 'Material Perpipaan', value: 'Carbon Steel Seamless ASTM A106 Gr. B Sch 40/80, Stainless Steel 304/316, PPR' },
      { label: 'Standar Pengelasan', value: 'ASME Section IX / AWS D1.1 Full Penetration GTAW + SMAW' },
      { label: 'Uji Tekanan Pipa', value: 'Hydrostatic Pressure Test 1.5x Working Pressure dengan Chart Recorder' },
      { label: 'Material Ducting', value: 'Seng BJLS Lokfom 0.50–1.00mm + Glasswool Insulation 24–32 kg/m³' },
    ],
    workflow: [
      { step: '01', title: 'P&ID & Routing Line Engineering', desc: 'Peninjauan diagram alir instrumen (P&ID), routing jalur pipa/kabel, dan kalkulasi drop pressure.' },
      { step: '02', title: 'Pabrikasi Spool & Erection Support', desc: 'Pemotongan, pengelasan pipa di workshop, serta pemasangan hanger support gantungan baja.' },
      { step: '03', title: 'Fitting, Pengelasan & NDT Test', desc: 'Perakitan jalur pipa di lokasi, pengetukan flange, dan uji penetrant / radiography sambungan las.' },
      { step: '04', title: 'Hydrotest, Insulasi & Commissioning', desc: 'Uji tekan air bertekanan, pembungkusan insulasi peredam panas, dan uji operasional bersama.' },
    ],
    relevantProjectIds: [14, 13, 8, 4],
    faqs: [
      {
        question: 'Apakah TOSA menyediakan laporan resmi hasil uji hydrotest pipa?',
        answer: 'Ya, seluruh pekerjaan instalasi pipa bertekanan kami lengkapi dengan Berita Acara Hydrostatic Test resmi yang mencatat grafik tekanan (pressure chart) dan waktu uji.',
      },
      {
        question: 'Apakah juru las (welder) TOSA memiliki sertifikasi resmi?',
        answer: 'Seluruh welder kami memiliki sertifikat keahlian resmi (6G / 4G) dari Depnaker / Migas untuk menjamin kualitas sambungan pipa bertekanan tinggi.',
      },
      {
        question: 'Apakah TOSA bisa membantu pengurusan izin bejana tekan / boiler ke Disnaker?',
        answer: 'Bisa, kami mendampingi proses inspeksi teknis pengujian berkala (uji riksa) dengan pengawas Disnaker hingga terbit Sertifikat Laik Operasi (SLO).',
      },
    ],
  },

  'marka-jalan-rambu-k3-pabrik': {
    slug: 'marka-jalan-rambu-k3-pabrik',
    title: 'Marka Jalan, Rambu K3 & Pembersihan Lantai Pabrik',
    shortTitle: 'Marka Jalan & K3',
    category: 'Industrial Painting',
    heroBadge: 'TRAFFIC SAFETY & 5S FACTORY COMPLIANCE',
    heroTitle: 'Pengecatan Marka Jalur Forklift, Pedestrian K3 & Floor Deep Cleaning',
    heroSubtitle: 'Wujudkan kepatuhan standar keselamatan kerja K3 dan 5S di pabrik Anda dengan marka lantai presisi tahan gesekan, rambu keselamatan, dan deep cleaning kerak oli.',
    heroImage: '/asset_porto/LINE MARKING & RAMBU-RAMBU.webp',
    metaTitle: 'Jasa Marka Jalan Pabrik, Jalur Forklift & Rambu K3 — TOSA',
    metaDescription: 'Jasa pengecatan marka jalan pabrik, marka jalur forklift, jalur pedestrian K3, garis batas area aman, dan concrete floor waxing cikarang karawang bekasi.',
    metaKeywords: 'jasa marka jalan pabrik, cat marka jalur forklift, marka pedestrian k3 pabrik, garis batas zonasi 5S, jasa floor cleaning pabrik cikarang, thermoplastic road marking',
    problemSectionTitle: 'Tantangan Keselamatan & Kebersihan 5S di Pabrik',
    problemSectionSubtitle: 'Ketiadaan zonasi jalur yang jelas meningkatkan risiko tabrakan forklift dan kegagalan audit keselamatan kerja.',
    problems: [
      {
        title: 'Risiko Tabrakan Forklift dengan Pejalan Kaki (Pedestrian)',
        desc: 'Tidak adanya batas jalur visual yang jelas antara lintasan armada angkut material dan rute jalan kaki pekerja memicu potensi kecelakaan kerja fatal.',
        impact: 'Kecelakaan kerja (LTI), investigasi K3, dan penurunan reputasi perusahaan.',
      },
      {
        title: 'Garis Marka Cepat Pudar & Terkelupas dalam Hitungan Minggu',
        desc: 'Penggunaan cat minyak biasa tanpa primer dan tanpa persiapan lantai membuat garis marka cepat terhapus oleh gesekan roda forklift.',
        impact: 'Pabrik tampak tidak teratur dan harus berulang kali mengecat ulang.',
      },
      {
        title: 'Kerak Oli Menumpuk Membuat Lantai Licin Berbahaya',
        desc: 'Tumpahan oli dan residu kotoran industri yang mengering membentuk kerak tebal yang licin dan berisiko membuat pekerja terpeleset.',
        impact: 'Bahaya cedera kerja (slip & fall) dan ketidaksesuaian standar audit 5S.',
      },
    ],
    solutions: [
      {
        title: 'Pengecatan Marka Garis Jalur Forklift & Pedestrian Presisi',
        desc: 'Aplikasi cat marka heavy duty (Epoxy Line Marking / Polyurethane / Cold Plastic) dengan kelurusan presisi laser dan ketahanan gesekan tinggi.',
        features: ['Warna Standar Internasional K3 (Kuning, Putih, Hijau, Merah)', 'Garis Tepi Tajam Tanpa Bleeding', 'Tahan Lindasan Roda Keras & Tumpahan Minyak'],
      },
      {
        title: 'Penandaan Simbol Zonasi K3 & Rambu Keselamatan Visual',
        desc: 'Pengecatan simbol pedestrian walk, zebra cross dalam pabrik, tanda stop, zona dilarang melintas, dan rambu arah jalur evakuasi darurat.',
        features: ['Memenuhi Standar Kepatuhan Audit K3 / OHSAS / ISO 45001', 'Cat Glow-in-the-Dark (Photoluminescent) untuk Jalur Darurat', 'Meningkatkan Kesadaran Safety Seluruh Karyawan'],
      },
      {
        title: 'Deep Cleaning, Degreasing Kerak Oli & Floor Waxing',
        desc: 'Pembersihan kerak oli membandel menggunakan mesin scrubber putaran tinggi dan chemical degreaser food-safe dilanjutkan lapisan wax pengkilap lantai.',
        features: ['Menghilangkan Kerak Minyak & Bekas Ban Hitam', 'Lantai Bersih Kesat Tidak Licin', 'Program Maintenance Kebersihan Rutin Pabrik'],
      },
    ],
    specifications: [
      { label: 'Jenis Cat Marka', value: 'Two-Pack Epoxy Line Paint, Polyurethane Traffic, atau Cold Plastic' },
      { label: 'Lebar Standar Garis', value: 'Garis Pembatas: 5cm / 10cm | Jalur Pedestrian: 100cm–120cm' },
      { label: 'Ketahanan Gesekan', value: 'Tahan lintasan harian forklift 5 ton dan roda polyurethane AGV' },
      { label: 'Waktu Kering', value: 'Kering Sentuh: 30 Menit | Siap Dilintasi: 4–6 Jam' },
    ],
    workflow: [
      { step: '01', title: 'Layouting & Laser Line Marking', desc: 'Penentuan jalur sesuai master plan 5S dan penarikan garis lurus menggunakan panduan sinar laser.' },
      { step: '02', title: 'Masking Tape & Surface Preparation', desc: 'Pembersihan minyak di titik garis dan penempelan masking tape khusus untuk batas garis sangat rapi.' },
      { step: '03', title: 'Aplikasi Cat Marka Heavy Duty', desc: 'Pengecatan 2 lapis cat khusus marka dengan daya rekat tinggi dan daya tutup solid.' },
      { step: '04', title: 'Peeling Tape & Quality Check', desc: 'Pelepasan masking tape saat cat setengah kering dan inspeksi kelurusan garis sebelum diserahterimakan.' },
    ],
    relevantProjectIds: [6, 1, 9, 10],
    faqs: [
      {
        question: 'Berapa lama cat marka jalan TOSA bisa kering agar tidak mengganggu shift kerja?',
        answer: 'Kami menggunakan formulasi cat fast-curing yang kering sentuh dalam 30 menit dan sudah dapat dilalui forklift secara normal dalam 4 hingga 6 jam, sangat ideal dikerjakan saat pergantian shift atau akhir pekan.',
      },
      {
        question: 'Apakah TOSA bisa membuat simbol K3 khusus (stencil logo)?',
        answer: 'Bisa. Kami memiliki cetakan stencil presisi untuk berbagai simbol K3 seperti lambang pejalan kaki, tanda panah forklift, zona APD wajib, dan nomor racking gudang.',
      },
      {
        question: 'Apakah layanan deep cleaning bisa membersihkan noda oli yang sudah tahunan?',
        answer: 'Bisa. Kami menggunakan chemical industrial heavy-duty degreaser yang melarutkan ikatan minyak tua pada beton tanpa merusak struktur lantai.',
      },
    ],
  },
};
