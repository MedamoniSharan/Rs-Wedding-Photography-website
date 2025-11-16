import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = 'https://rangasurya.in/IMG_3061.JPG',
  url = 'https://rangasurya.in/',
  type = 'website'
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Ranga Surya Photography', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Cleanup function (optional - can be left empty)
    return () => {
      // You could reset to default if needed
    };
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;

