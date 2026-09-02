// Helper to resolve images from asset_porto using Vite's import.meta.glob
const imageModules = import.meta.glob<string>('../assets/asset_porto/*.png', {
  eager: true,
  import: 'default',
});

function getImg(filename: string): string {
  const path = `../assets/asset_porto/${filename}`;
  return imageModules[path] || '';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Civil Engineering' | 'Industrial Painting';
  tags: string[];
  coverImage: string;
  images: string[];
  description?: string;
}

export const REAL_PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Epoxy Self-Leveling Floor',
    category: 'Industrial Painting',
    tags: ['Epoxy Flooring', 'Self-Leveling', 'Cleanroom GMP'],
    coverImage: getImg('EPOXY SELF LEVELING FLOOR.png'),
    images: [
      getImg('EPOXY SELF LEVELING FLOOR.png'),
      getImg('EPOXY SELF LEVELING FLOOR (2).png'),
    ],
    description: 'Aplikasi pelapisan lantai epoxy self-leveling dan mortar heavy duty untuk ketahanan abrasi tinggi, beban forklift, dan standar kebersihan ruangan pabrik.',
  },
  {
    id: 2,
    title: 'Perluasan Area Warehouse',
    category: 'Civil Engineering',
    tags: ['Warehouse Expansion', 'Konstruksi Baja', 'Civil Structure'],
    coverImage: getImg('PERLUASAN AREA WAREHOUSE.png'),
    images: [
      getImg('PERLUASAN AREA WAREHOUSE.png'),
      getImg('PERLUASAN AREA WAREHOUSE (2).png'),
    ],
    description: 'Pekerjaan konstruksi sipil dan struktur baja untuk perluasan kapasitas gudang logistik pabrik.',
  },
  {
    id: 3,
    title: 'Pembuatan Gedung Laboratorium Cikarang',
    category: 'Civil Engineering',
    tags: ['Gedung Laboratorium', 'Civil Engineering', 'Cikarang Industrial'],
    coverImage: getImg('PEMBUATAN GEDUNG LABORATORIUM CIKARANG.png'),
    images: [
      getImg('PEMBUATAN GEDUNG LABORATORIUM CIKARANG.png'),
      getImg('PEMBUATAN GEDUNG LABORATORIUM CIKARANG (2).png'),
    ],
    description: 'Konstruksi gedung laboratorium pengujian industri lengkap dari struktur, partisi khusus, hingga instalasi utilitas.',
  },
  {
    id: 4,
    title: 'Painting Baja, Tangki & Cerobong Industri',
    category: 'Industrial Painting',
    tags: ['Protective Coating', 'Tangki Kimia', 'Cerobong Pabrik'],
    coverImage: getImg('PAINTING BAJA, TANKI & CEROBONG.png'),
    images: [
      getImg('PAINTING BAJA, TANKI & CEROBONG.png'),
    ],
    description: 'Pengecatan pelindung anti-karat (anti-corrosion) dan coating tahan panas untuk tangki penyimpanan, pipa, dan cerobong baja.',
  },
  {
    id: 5,
    title: 'Pembuatan Rental Factory',
    category: 'Civil Engineering',
    tags: ['Rental Factory', 'Struktur Baja WF', 'Kawasan Industri'],
    coverImage: getImg('PEMBUATAN RENTAL FACTORY.png'),
    images: [
      getImg('PEMBUATAN RENTAL FACTORY.png'),
      getImg('PEMBUATAN RENTAL FACTORY (2).png'),
    ],
    description: 'Pembangunan unit rental factory modern siap pakai untuk fasilitas manufaktur dan tenant kawasan industri.',
  },
  {
    id: 6,
    title: 'Line Marking & Rambu-Rambu Keselamatan Pabrik',
    category: 'Industrial Painting',
    tags: ['Line Marking', 'Zonasi Jalur K3', 'Rambu Pabrik'],
    coverImage: getImg('LINE MARKING & RAMBU-RAMBU.png'),
    images: [
      getImg('LINE MARKING & RAMBU-RAMBU.png'),
      getImg('LINE MARKING & RAMBU-RAMBU (2).png'),
    ],
    description: 'Pengecatan marka lantai jalur pedestrian, jalur forklift, zona aman K3, dan rambu keselamatan kerja standar industri.',
  },
  {
    id: 7,
    title: 'Pemasangan Dinding Cladding & Roof Cladding',
    category: 'Civil Engineering',
    tags: ['Roof & Wall Cladding', 'Insulasi Bangunan', 'Atap Pabrik'],
    coverImage: getImg('PEMASANGAN DINDING CLADING DAN ROOF CLADING.png'),
    images: [
      getImg('PEMASANGAN DINDING CLADING DAN ROOF CLADING.png'),
      getImg('PEMASANGAN DINDING CLADING DAN ROOF CLADING (2).png'),
    ],
    description: 'Pemasangan insulasi atap dan penutup dinding cladding zincalume/galvalume untuk ketahanan cuaca pabrik.',
  },
  {
    id: 8,
    title: 'Pembuatan Area Loading Dock',
    category: 'Civil Engineering',
    tags: ['Loading Dock', 'Beton Rigid', 'Logistik Pabrik'],
    coverImage: getImg('PEMBUATAN AREA LOADING DOCK.png'),
    images: [
      getImg('PEMBUATAN AREA LOADING DOCK.png'),
      getImg('PEMBUATAN AREA LOADING DOCK (2).png'),
    ],
    description: 'Konstruksi area bongkar muat kontainer dengan perkerasan beton bertulang heavy duty.',
  },
  {
    id: 9,
    title: 'Decorative Interior Painting',
    category: 'Industrial Painting',
    tags: ['Interior Painting', 'Office Pabrik', 'Lobi & Koridor'],
    coverImage: getImg('DECOTARIVE INTERIOR PAINTING.png'),
    images: [
      getImg('DECOTARIVE INTERIOR PAINTING.png'),
      getImg('DECOTARIVE INTERIOR PAINTING (2).png'),
      getImg('DECOTARIVE INTERIOR PAINTING (3).png'),
    ],
    description: 'Pengecatan estetis dinding interior, ruang meeting, koridor kantor manajemen pabrik dengan cat ramah lingkungan Low VOC.',
  },
  {
    id: 10,
    title: 'Polishing Concrete (Poles Lantai Beton)',
    category: 'Civil Engineering',
    tags: ['Concrete Polishing', 'Diamond Grinding', 'Anti Debu'],
    coverImage: getImg('POLESHING CONCRETE.png'),
    images: [
      getImg('POLESHING CONCRETE.png'),
    ],
    description: 'Poles lantai beton menggunakan teknologi diamond grinding untuk menghasilkan lantai glossy kilap, keras, dan bebas debu semen.',
  },
  {
    id: 11,
    title: 'Re-Concrete Main Road Jalan Akses Pabrik',
    category: 'Civil Engineering',
    tags: ['Rigid Pavement', 'Jalan Beton Pabrik', 'Heavy Duty Road'],
    coverImage: getImg('RECONCRETE MAIN ROAD.png'),
    images: [
      getImg('RECONCRETE MAIN ROAD.png'),
    ],
    description: 'Pembongkaran dan pengecoran ulang jalan akses utama pabrik dengan mutu beton K-350 / FS-45 untuk lintasan armada berat.',
  },
  {
    id: 12,
    title: 'Pembuatan Office Finish Good & PPIC Office',
    category: 'Civil Engineering',
    tags: ['Office PPIC', 'Partisi & Fit Out', 'Ruang Kontrol'],
    coverImage: getImg('PEMBUATAN OFFICE FINISH GOOD_PPIC OFFICE.png'),
    images: [
      getImg('PEMBUATAN OFFICE FINISH GOOD_PPIC OFFICE.png'),
      getImg('PEMBUATAN OFFICE FINISH GOOD_PPIC OFFICE (2).png'),
    ],
    description: 'Pembangunan dan fit-out interior kantor operasional PPIC serta pengawasan gudang finish good.',
  },
  {
    id: 13,
    title: 'Pemasangan Pipa Pump Room & Repair Sistem Flow',
    category: 'Civil Engineering',
    tags: ['Piping System', 'Pump Room', 'Sistem Pompa & Flow'],
    coverImage: getImg('PEMASANGAN PIPA PUMP ROOM &  REPAIR SISTEM FLOW PUMP ROOM.png'),
    images: [
      getImg('PEMASANGAN PIPA PUMP ROOM &  REPAIR SISTEM FLOW PUMP ROOM.png'),
    ],
    description: 'Instalasi header perpipaan pump room dan rekayasa flow perpipaan air utilitas pabrik.',
  },
  {
    id: 14,
    title: 'Instalasi Ducting Sistem & Tata Udara',
    category: 'Civil Engineering',
    tags: ['HVAC', 'Ducting System', 'Sirkulasi Udara'],
    coverImage: getImg('INSTALASI DUCTING SISTEM.png'),
    images: [
      getImg('INSTALASI DUCTING SISTEM.png'),
    ],
    description: 'Pabrikasi dan pemasangan ducting AC & exhaust udara industri untuk menjaga stabilitas suhu area produksi.',
  },
  {
    id: 15,
    title: 'Painting Atap & Fasilitas Pabrik',
    category: 'Industrial Painting',
    tags: ['Roof Painting', 'Protective Coating', 'Perawatan Atap'],
    coverImage: getImg('PAINTING ATAP.png'),
    images: [
      getImg('PAINTING ATAP.png'),
    ],
    description: 'Pelapisan cat pelindung atap seng dan talang untuk mencegah korosi serta kebocoran air hujan.',
  },
  {
    id: 16,
    title: 'Perbaikan Lantai Mezzanine',
    category: 'Civil Engineering',
    tags: ['Lantai Mezzanine', 'Perbaikan Struktur', 'Reinforcement'],
    coverImage: getImg('PERBAIKAN LANTAI MEZANINE.png'),
    images: [
      getImg('PERBAIKAN LANTAI MEZANINE.png'),
      getImg('PERBAIKAN LANTAI MEZANINE (2).png'),
    ],
    description: 'Perbaikan dan penguatan plat lantai mezzanine untuk menjamin keamanan kapasitas beban kerja operasional.',
  },
  {
    id: 17,
    title: 'Perataan & Pembongkaran Office Mezzanine',
    category: 'Civil Engineering',
    tags: ['Demolition', 'Perataan Mezzanine', 'Renovasi'],
    coverImage: getImg('PERATAAN_PEMBONGKARAN OFFICE MEZANINE.png'),
    images: [
      getImg('PERATAAN_PEMBONGKARAN OFFICE MEZANINE.png'),
      getImg('PERATAAN_PEMBONGKARAN OFFICE MEZANINE (2).png'),
    ],
    description: 'Pekerjaan pembongkaran aman struktur mezzanine lama dan penataan ulang elevasi lantai.',
  },
  {
    id: 18,
    title: 'Pembuatan Area Gudang Finish Good',
    category: 'Civil Engineering',
    tags: ['Gudang Finish Good', 'Konstruksi Sipil', 'Area Penyimpanan'],
    coverImage: getImg('PEMBUATAN AREA GUDANG FINISH GOOD.png'),
    images: [
      getImg('PEMBUATAN AREA GUDANG FINISH GOOD.png'),
    ],
    description: 'Pembangunan area gudang penyimpanan produk jadi berstandar keselamatan racking.',
  },
  {
    id: 19,
    title: 'Decorative Exterior Painting',
    category: 'Industrial Painting',
    tags: ['Exterior Painting', 'Cat Tahan Cuaca', 'Fasade Gedung'],
    coverImage: getImg('DECORATIVE EXTERIOR PAINTING.png'),
    images: [
      getImg('DECORATIVE EXTERIOR PAINTING.png'),
    ],
    description: 'Pengecatan dinding luar fasade gedung pabrik menggunakan cat weather-shield anti jamur dan anti UV.',
  },
  {
    id: 20,
    title: 'Pembuatan Drainase Saluran Air Pabrik',
    category: 'Civil Engineering',
    tags: ['Drainase Industri', 'U-Ditch & Box Culvert', 'Anti Banjir'],
    coverImage: getImg('PEMBUATAN DRAINASE.png'),
    images: [
      getImg('PEMBUATAN DRAINASE.png'),
    ],
    description: 'Pemasangan saluran drainase beton U-Ditch untuk kelancaran pembuangan air hujan di kawasan pabrik.',
  },
  {
    id: 21,
    title: 'Pembuatan & Pemasangan Paving Block',
    category: 'Civil Engineering',
    tags: ['Paving Block', 'Area Parkir & Manuver', 'K-300'],
    coverImage: getImg('PEMBUATAN PAVING BLOCK.png'),
    images: [
      getImg('PEMBUATAN PAVING BLOCK.png'),
    ],
    description: 'Pemasangan paving block mutu K-300 untuk area parkir kendaraan operasional dan pedestrian pabrik.',
  },
  {
    id: 22,
    title: 'Pembuatan Saluran & Sumur Resapan',
    category: 'Civil Engineering',
    tags: ['Sumur Resapan', 'AMDAL & Lingkungan', 'Saluran Resapan'],
    coverImage: getImg('PEMBUATAN SALURAN & SUMUR RESAPAN.png'),
    images: [
      getImg('PEMBUATAN SALURAN & SUMUR RESAPAN.png'),
    ],
    description: 'Pekerjaan sumur resapan dan saluran konservasi air sesuai regulasi lingkungan kawasan industri.',
  },
  {
    id: 23,
    title: 'Pemasangan Dinding Gypsum & Ceiling Office',
    category: 'Civil Engineering',
    tags: ['Plafon & Gypsum', 'Interior Office', 'Partisi Ruangan'],
    coverImage: getImg('PEMASANGAN DINDING GYPSUM & CEILING OFFICE.png'),
    images: [
      getImg('PEMASANGAN DINDING GYPSUM & CEILING OFFICE.png'),
    ],
    description: 'Instalasi plafon akustik / gypsum board dan partisi kedap suara untuk kenyamanan ruang kerja kantor pabrik.',
  },
  {
    id: 24,
    title: 'Pemasangan Cladding Dinding Bangunan',
    category: 'Civil Engineering',
    tags: ['Cladding Dinding', 'Spandek / Zincalume', 'Proteksi Dinding'],
    coverImage: getImg('PEMASANGAN CLADING.png'),
    images: [
      getImg('PEMASANGAN CLADING.png'),
    ],
    description: 'Pemasangan cladding lembaran metal tahan karat pada dinding samping pabrik.',
  },
  {
    id: 25,
    title: 'Maintenance & Perbaikan Loading Dock',
    category: 'Civil Engineering',
    tags: ['Dock Leveler Repair', 'Perbaikan Loading Dock', 'Maintenance'],
    coverImage: getImg('MAINTENANCE & PERBAIKAN LOADING DOCK.png'),
    images: [
      getImg('MAINTENANCE & PERBAIKAN LOADING DOCK.png'),
    ],
    description: 'Perawatan berkala dan perbaikan keretakan struktur beton di bibir loading dock bongkar muat.',
  },
  {
    id: 26,
    title: 'Meeting & Ground Breaking Perluasan Warehouse',
    category: 'Civil Engineering',
    tags: ['Kickoff Project', 'Ground Breaking', 'Safety Briefing'],
    coverImage: getImg('MEETING & GROUND BREAKING PEMBUATAN PERLUASAN WAREHOUSE.png'),
    images: [
      getImg('MEETING & GROUND BREAKING PEMBUATAN PERLUASAN WAREHOUSE.png'),
      getImg('MEETING & GROUND BREAKING PEMBUATAN PERLUASAN WAREHOUSE (2).png'),
    ],
    description: 'Pelaksanaan kick-off meeting teknis, safety induction awal, dan prosesi ground breaking perluasan warehouse.',
  },
  {
    id: 27,
    title: 'Konstruksi & Proteksi Refinery Factory Facility',
    category: 'Industrial Painting',
    tags: ['Refinery Factory', 'Heavy Industry', 'Protective Coating'],
    coverImage: getImg('Refinery Factory.png'),
    images: [
      getImg('Refinery Factory.png'),
    ],
    description: 'Pekerjaan sipil penunjang dan aplikasi cat pelindung pada fasilitas refinery pemrosesan industri.',
  },
];
