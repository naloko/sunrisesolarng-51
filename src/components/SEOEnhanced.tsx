import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOEnhancedProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'organization';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: any;
}

const SEOEnhanced = ({
  title,
  description,
  keywords,
  image = '/og-image.png',
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  jsonLd
}: SEOEnhancedProps) => {
  const { t, i18n } = useTranslation();
  
  const defaultTitle = t('seo.title', 'Sunrise Solar - Premium Solar Solutions in China');
  const defaultDescription = t('seo.description', 'Leading solar energy solutions provider in China. Premium solar panels, professional installation, and comprehensive maintenance services for residential and commercial projects.');
  const defaultKeywords = t('seo.keywords', 'solar panels, solar energy, renewable energy, China solar, solar installation, solar maintenance, photovoltaic, green energy, sustainable power');
  
  const siteUrl = process.env.VITE_SITE_URL || 'https://sunrisesolar.lovable.app';
  const currentUrl = url || siteUrl;
  const fullTitle = title ? `${title} | Sunrise Solar` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;

  // Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sunrise Solar",
    "url": siteUrl,
    "logo": `${siteUrl}/og-image.png`,
    "description": fullDescription,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN",
      "addressRegion": "Shandong Province"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-xxx-xxxx-xxxx",
      "contactType": "customer service",
      "availableLanguage": ["Chinese", "English"]
    },
    "sameAs": []
  };

  const structuredData = jsonLd || organizationJsonLd;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author || "Sunrise Solar"} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={i18n.language} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Sunrise Solar" />
      <meta property="og:locale" content={i18n.language === 'zh' ? 'zh_CN' : 'en_US'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:site" content="@SunriseSolar" />
      <meta name="twitter:creator" content="@SunriseSolar" />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={currentUrl.replace('/zh/', '/en/')} />
      <link rel="alternate" hrefLang="zh" href={currentUrl.replace('/en/', '/zh/')} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Performance and Security */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#e6b323" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOEnhanced;