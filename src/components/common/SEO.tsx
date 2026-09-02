import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title = 'Jasa Kontraktor Pabrik, Civil Engineering & Industrial Painting — PT. TOTO SUKSES ABADI',
  description = 'PT. TOTO SUKSES ABADI (TOSA) adalah perusahaan jasa kontraktor spesialis Civil Engineering, Industrial Painting, Epoxy Flooring, Steel Construction, dan MEP untuk pabrik manufaktur di Cikarang, Karawang, Bekasi & seluruh Indonesia.',
  keywords = 'jasa kontraktor, jasa kontraktor pabrik, jasa kontraktor cikarang, jasa kontraktor bekasi, kontraktor civil engineering, jasa epoxy lantai pabrik, industrial painting, protective coating, steel construction, PT Toto Sukses Abadi',
  canonical,
  ogType = 'website',
  ogImage = 'https://totosuksesabadi.co.id/Logo-tosa.png',
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://totosuksesabadi.co.id${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 4. Update OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Update Twitter Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 7. Inject Breadcrumb Schema for subpages
    if (location.pathname !== '/') {
      const pageNames: Record<string, string> = {
        '/layanan': 'Layanan Kontraktor',
        '/portofolio': 'Portofolio Proyek',
        '/tentang-kami': 'Tentang Kami',
        '/kontak': 'Kontak & Penawaran',
      };

      const pageName = pageNames[location.pathname] || location.pathname
        .replace('/', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://totosuksesabadi.co.id/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': pageName,
            'item': currentUrl,
          },
        ],
      };

      let scriptTag = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'breadcrumb-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(breadcrumbData);
    } else {
      const scriptTag = document.getElementById('breadcrumb-schema');
      if (scriptTag) scriptTag.remove();
    }

    // 8. Inject Custom Page Structured Data (e.g. Service, FAQPage, etc.)
    const customSchemaId = 'page-specific-schema';
    if (structuredData) {
      let customScript = document.getElementById(customSchemaId) as HTMLScriptElement | null;
      if (!customScript) {
        customScript = document.createElement('script');
        customScript.id = customSchemaId;
        customScript.type = 'application/ld+json';
        document.head.appendChild(customScript);
      }
      customScript.textContent = JSON.stringify(structuredData);
    } else {
      const customScript = document.getElementById(customSchemaId);
      if (customScript) customScript.remove();
    }

    return () => {
      const customScript = document.getElementById(customSchemaId);
      if (customScript) customScript.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData, location.pathname]);

  return null;
}
