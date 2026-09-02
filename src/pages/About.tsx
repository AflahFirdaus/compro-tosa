import SEO from '../components/common/SEO';
import CompanyOverview from '../components/about/CompanyOverview';
import PolicyBento from '../components/about/PolicyBento';
import { COMPANY } from '../data/content';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY.name,
      legalName: COMPANY.name,
      url: 'https://totosuksesabadi.co.id',
      logo: 'https://totosuksesabadi.co.id/Logo-tosa.png',
      description: COMPANY.subTagline,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kawasan Industri, Cikarang',
        addressLocality: 'Bekasi',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
    },
  };

  return (
    <main style={{ paddingTop: '60px' }}>
      <SEO
        title="Tentang Kami — Profil Perusahaan Kontraktor PT. TOTO SUKSES ABADI"
        description="Profil resmi PT. TOTO SUKSES ABADI (TOSA) — Perusahaan kontraktor civil engineering dan industrial painting terpercaya di Indonesia dengan komitmen Zero Accident K3 dan standar mutu ISO 9001:2015."
        keywords="profil PT Toto Sukses Abadi, profil kontraktor tosa, kontraktor terpercaya cikarang, kontraktor standar k3 iso 9001, visi misi kontraktor tosa"
        structuredData={aboutSchema}
      />
      <CompanyOverview />
      <PolicyBento />
    </main>
  );
}
