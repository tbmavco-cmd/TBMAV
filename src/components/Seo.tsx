import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  faqSchema?: { q: string; a: string }[];
  serviceSchema?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
  };
};

const BASE_URL = 'https://thebaremethodmn.com';

export function Seo({ title, description, path = '', ogImage, faqSchema, serviceSchema }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const url = `${BASE_URL}${path}`;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    if (ogImage) setMeta('og:image', ogImage, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (ogImage) setMeta('twitter:image', ogImage);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    const schemas: Record<string, unknown>[] = [];
    if (faqSchema && faqSchema.length) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSchema.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
    }
    if (serviceSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceSchema.name,
        description: serviceSchema.description,
        provider: { '@type': 'HealthAndBeautyBusiness', name: serviceSchema.provider },
        areaServed: serviceSchema.areaServed,
      });
    }

    const existing = document.querySelectorAll('script[data-dynamic-schema]');
    existing.forEach((e) => e.remove());

    schemas.forEach((s) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-schema', 'true');
      script.textContent = JSON.stringify(s);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-dynamic-schema]').forEach((e) => e.remove());
    };
  }, [title, description, path, ogImage, faqSchema, serviceSchema]);

  return null;
}
