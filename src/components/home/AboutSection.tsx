
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import AnimatedCounter from '../AnimatedCounter';

const AboutSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    { value: 10, suffix: '+', labelKey: 'about.stats.experience' },
    { value: 500, suffix: '+', labelKey: 'about.stats.projects' },
    { value: 50, suffix: '+', labelKey: 'about.stats.team' },
    { value: 10, suffix: 'k+', labelKey: 'about.stats.co2' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="section-header">
          <AnimatedSection animation="fade-in">
            <span className="section-badge">
              {t('sections.about.subtitle')}
            </span>
            <h2 className="section-heading">
              {t('sections.about.title')}
            </h2>
            <p className="section-description mx-auto">
              {t('sections.about.description2')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t('sections.about.description1')}
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
              >
                {t('sections.about.cta')} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    className="text-primary text-4xl font-bold mb-2"
                  />
                  <div className="text-gray-800 font-medium">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
