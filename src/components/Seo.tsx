import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  canonical?: string;
  noindex?: boolean;
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

export function Seo({ title, description, path = '', canonical, noindex, ogImage, faqSchema, serviceSchema }: SeoProps) {
  const canonicalUrl = canonical ?? `${BASE_URL}${path}`;

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
      provider: { '@type': 'BeautySalon', name: serviceSchema.provider },
      areaServed: serviceSchema.areaServed,
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

