import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "advokát, právník, právo, Brno, blog, právní rady", 
  image,
  type = 'website',
  schema 
}) => {
  useEffect(() => {
    // 1. Update Title
    const previousTitle = document.title;
    document.title = `${title} | AK Hora`;

    // 2. Update Meta Tags helper
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Description and Keywords
    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph tags for social sharing
    const updateOG = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', property);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:type', type);
    if (image) updateOG('og:image', image);

    // 3. Update Structured Data (JSON-LD)
    const scriptId = 'structured-data-jsonld';
    let script = document.getElementById(scriptId);
    
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      // Remove schema if not provided for current view
      script.textContent = '';
    }

    // Cleanup function
    return () => {
      document.title = previousTitle;
      // We intentionally don't remove meta tags to avoid flickering, 
      // the next mount will overwrite them.
    };
  }, [title, description, keywords, image, type, schema]);

  return null;
};

export default SEO;