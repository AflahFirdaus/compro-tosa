import SEO from '../components/common/SEO';
import ServicePillars from '../components/services/ServicePillars';
import WorkflowStepper from '../components/services/WorkflowStepper';
import FAQSection from '../components/common/FAQSection';
import { CIVIL_SERVICES, PAINTING_SERVICES, FAQS } from '../data/content';

export default function Services() {
  const allServices = [...CIVIL_SERVICES, ...PAINTING_SERVICES];

  const serviceAndFaqSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...allServices.map(service => ({
        '@type': 'Service',
        name: service.title,
        description: service.desc,
        provider: {
          '@type': 'GeneralContractor',
          name: 'PT. TOTO SUKSES ABADI',
          url: 'https://totosuksesabadi.co.id',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
      })),
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main style={{ paddingTop: '60px' }}>
      <SEO
        title="Layanan Jasa Kontraktor Civil Engineering & Industrial Painting — TOSA"
        description="Layanan lengkap jasa kontraktor industri: Konstruksi Baja (Steel Structure), Epoxy Flooring, Protective Coating Anti-Karat, Sistem MEP & Piping, Boiler, Concrete Polishing, dan Waterproofing Pabrik."
        keywords="jasa kontraktor, layanan kontraktor pabrik, jasa konstruksi baja, jasa epoxy lantai cikarang, jasa protective coating, kontraktor mep pabrik, jasa instalasi piping industri, kontraktor boiler, jasa waterproofing dak pabrik, intumescent coating tahan api"
        structuredData={serviceAndFaqSchema}
      />
      <ServicePillars />
      <WorkflowStepper />
      <FAQSection
        eyebrow="TANYA JAWAB LAYANAN KONTRAKTOR"
        title="FAQ Seputar Layanan & Spesifikasi"
        subtitle="Pertanyaan teknis umum seputar metode kerja civil engineering, ketahanan epoxy lantai, dan kepatuhan K3 di pabrik Anda."
      />
    </main>
  );
}
