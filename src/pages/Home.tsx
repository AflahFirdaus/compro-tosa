import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ClientMarquee from '../components/home/ClientMarquee';
import CoreServicesGrid from '../components/home/CoreServicesGrid';
import B2BValueProps from '../components/home/B2BValueProps';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/common/FAQSection';
import EnterpriseCTA from '../components/home/EnterpriseCTA';
import { FAQS } from '../data/content';

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <SEO
        title="Jasa Kontraktor Pabrik, Civil Engineering & Industrial Painting — PT. TOTO SUKSES ABADI"
        description="PT. TOTO SUKSES ABADI (TOSA) adalah perusahaan jasa kontraktor spesialis Civil Engineering, Industrial Painting, Epoxy Flooring, Steel Construction, dan MEP untuk pabrik manufaktur di Cikarang, Karawang, Bekasi & seluruh Indonesia."
        keywords="jasa kontraktor, jasa kontraktor pabrik, jasa kontraktor cikarang, jasa kontraktor bekasi, jasa kontraktor karawang, kontraktor civil engineering, jasa epoxy lantai, jasa epoxy lantai pabrik, industrial painting, protective coating, steel construction, jasa renovasi pabrik, kontraktor mep, piping system pabrik, waterproofing pabrik, boiler installation, kontraktor kawasan industri ejip mm2100 giic jababeka kiic suryacipta, PT Toto Sukses Abadi, TOSA"
        structuredData={faqSchema}
      />
      <HeroSection />
      <TrustBar />
      <ClientMarquee />
      <CoreServicesGrid />
      <B2BValueProps />
      <FeaturedProjects />
      <Testimonials />
      <FAQSection />
      <EnterpriseCTA />
    </main>
  );
}
