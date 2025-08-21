import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g., "/services/residential"
  structuredData?: Record<string, any> | Record<string, any>[];
};

const ensureTag = (selector: string, create: () => HTMLElement) => {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const SEO = ({ title, description, canonicalPath, structuredData }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    if (description) {
      const meta = ensureTag('meta[name="description"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        return m;
      }) as HTMLMetaElement;
      meta.setAttribute('content', description);
    }

    // Canonical link
    if (canonicalPath) {
      const canonical = ensureTag('link[rel="canonical"]', () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      }) as HTMLLinkElement;
      const base = window.location.origin;
      canonical.href = base + canonicalPath;
    }

    // JSON-LD structured data
    const existingLd = document.querySelector('script#seo-ld[type="application/ld+json"]');
    if (structuredData) {
      const ld = (existingLd as HTMLScriptElement) ?? (() => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.id = 'seo-ld';
        document.head.appendChild(s);
        return s;
      })();
      try {
        ld.textContent = JSON.stringify(structuredData);
      } catch (e) {
        // ignore JSON errors silently
      }
    } else if (existingLd) {
      existingLd.remove();
    }

    // Language
    document.documentElement.setAttribute('lang', document.documentElement.lang || 'en');
  }, [title, description, canonicalPath, structuredData]);

  return null;
};

export default SEO;
