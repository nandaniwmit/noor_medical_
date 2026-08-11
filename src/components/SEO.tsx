import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  schemaType?: 'LocalBusiness' | 'FAQPage' | 'WebSite' | 'BreadcrumbList';
  extraSchema?: object;
}

export default function SEO({
  title,
  description,
  keywords = 'pharmacy Gaya, Noor Medical, medical store Gaya, medicine delivery Gaya, chemist Gaya, AP Colony pharmacy',
  path,
  schemaType = 'LocalBusiness',
  extraSchema,
}: SEOProps) {
  const siteUrl = 'https://noor-medical-alpha.vercel.app'; // Vercel production site URL
  const fullUrl = `${siteUrl}${path}`;

  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Noor Medical - Gaya, Bihar`;

    // 2. Helper to set/update meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow');

    // Open Graph
    setMetaTag('property', 'og:title', `${title} | Noor Medical`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', `${siteUrl}/images/og-image.jpg`);
    setMetaTag('property', 'og:site_name', 'Noor Medical');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${title} | Noor Medical`);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', `${siteUrl}/images/og-image.jpg`);

    // 3. Update/Create Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 4. Set JSON-LD Schema
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schemas: any[] = [];

    // Always include Local Business Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${siteUrl}/#organization`,
      'name': 'Noor Medical',
      'url': siteUrl,
      'logo': `${siteUrl}/logo.png`,
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
      'telephone': '+9109304311038',
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'A P Colony',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '823001',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '24.7955',
        'longitude': '84.9994', // Gaya coordinates
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '08:00',
          'closes': '14:00',
        },
      ],
      'sameAs': [
        'https://facebook.com/noormedicalgaya',
        'https://instagram.com/noormedicalgaya',
      ],
    };

    schemas.push(localBusinessSchema);

    // Breadcrumb Schema
    const segments = path.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': siteUrl,
      },
    ];

    segments.forEach((seg, index) => {
      const pageName = seg.charAt(0).toUpperCase() + seg.slice(1);
      const itemUrl = `${siteUrl}/${segments.slice(0, index + 1).join('/')}`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        'position': index + 2,
        'name': pageName,
        'item': itemUrl,
      });
    });

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems,
    };
    schemas.push(breadcrumbSchema);

    // Add extra custom schema (e.g., FAQ schema) if provided
    if (extraSchema) {
      schemas.push(extraSchema);
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      const scriptToRemove = document.getElementById('json-ld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, path, schemaType, extraSchema, fullUrl]);

  return null;
}
