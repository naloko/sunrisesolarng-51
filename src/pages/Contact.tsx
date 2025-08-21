
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ModernContactForm from '../components/contact/ModernContactForm';
import ContactMap from '../components/contact/ContactMap';
import ContactFAQ from '../components/contact/ContactFAQ';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - Sunrise Solar Nigeria | Get Your Free Solar Quote"
        description="Contact Sunrise Solar Nigeria for professional solar installation services. Get your free consultation and quote for residential and commercial solar solutions in Kano."
        canonicalPath="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Sunrise Solar Nigeria",
          "description": "Professional solar installation services in Kano, Nigeria",
          "provider": {
            "@type": "Organization",
            "name": "Sunrise Solar Nigeria",
            "telephone": "+234-909-888-8119",
            "email": "erin.xing@sunrisesolar.ng",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Inuwa Wada Road",
              "addressLocality": "Fagge",
              "addressRegion": "Kano State",
              "addressCountry": "Nigeria"
            }
          }
        }}
      />
      
      <main>
        <ContactHero />
        <ContactInfo />
        <div id="contact-form">
          <ModernContactForm />
        </div>
        <ContactMap />
        <ContactFAQ />
      </main>
    </>
  );
};

export default Contact;
