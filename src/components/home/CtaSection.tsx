
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';

const CtaSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t('sections.cta.title')}</h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('sections.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                {t('sections.cta.contact')}
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20"
              >
                {t('sections.cta.learnMore')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
