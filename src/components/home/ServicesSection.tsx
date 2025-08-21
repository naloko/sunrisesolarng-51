import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
const ServicesSection = () => {
  const {
    t
  } = useTranslation();
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-heading text-yellow-500">{t('common.ourServices')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              {t('services.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-in" delay={100}>
            <Link to="/services/residential" className="group relative block rounded-xl overflow-hidden">
              <img src="/lovable-uploads/3d0d2bd7-3c44-405c-8551-3fb6a83a3b5a.png" alt="Residential solutions" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold text-amber-400">{t('footer.residential')}</h3>
                <p className="mt-2 text-white/90">{t('services.residential.description')}</p>
                <span className="inline-flex items-center mt-3 font-medium">{t('common.viewDetails')} <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <Link to="/services/commercial" className="group relative block rounded-xl overflow-hidden">
              <img src="/lovable-uploads/54962123-de4d-433b-be8b-6d55426d4143.png" alt="Commercial & industrial solutions" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold text-amber-400">{t('footer.commercial')}</h3>
                <p className="mt-2 text-white/90">{t('services.commercial.description')}</p>
                <span className="inline-flex items-center mt-3 font-medium">{t('common.viewDetails')} <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default ServicesSection;