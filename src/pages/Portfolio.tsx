import SEO from '../components/common/SEO';
import ProjectGallery from '../components/portfolio/ProjectGallery';
import { REAL_PORTFOLIO_PROJECTS } from '../data/portfolioData';

export default function Portfolio() {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portofolio Proyek Jasa Kontraktor & Pengecatan Industri — TOSA',
    description: 'Dokumentasi proyek kontraktor civil engineering dan industrial painting PT. TOTO SUKSES ABADI.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: REAL_PORTFOLIO_PROJECTS.map((proj, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: proj.title,
        description: `Kategori: ${proj.category}. ${proj.description || ''}`,
      })),
    },
  };

  return (
    <main style={{ paddingTop: '60px', background: 'var(--clr-night-soft, #0a0a0a)' }}>
      <SEO
        title="Portofolio Proyek Jasa Kontraktor & Pengecatan Industri — TOSA"
        description="Dokumentasi 27+ rekam jejak proyek nyata jasa kontraktor civil engineering dan industrial painting PT. TOTO SUKSES ABADI untuk fasilitas pabrik, gudang, dan industri di Cikarang, Karawang, Bekasi & seluruh Indonesia."
        keywords="portofolio kontraktor tosa, foto proyek kontraktor pabrik, hasil kerja epoxy lantai cikarang, proyek konstruksi baja warehouse, rekam jejak civil engineering pabrik"
        structuredData={portfolioSchema}
      />
      <ProjectGallery />
    </main>
  );
}
