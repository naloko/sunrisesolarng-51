
import { 
  Leaf, 
  BarChart, 
  Battery, 
  Zap, 
  Wrench, 
  Users 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: <Leaf className="w-12 h-12 text-primary mb-4" />,
      titleKey: "benefits.eco.title",
      descriptionKey: "benefits.eco.description"
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary mb-4" />,
      titleKey: "benefits.savings.title",
      descriptionKey: "benefits.savings.description"
    },
    {
      icon: <Battery className="w-12 h-12 text-primary mb-4" />,
      titleKey: "benefits.independence.title",
      descriptionKey: "benefits.independence.description"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      titleKey: "benefits.power.title",
      descriptionKey: "benefits.power.description"
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
      titleKey: "benefits.maintenance.title",
      descriptionKey: "benefits.maintenance.description"
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      titleKey: "benefits.support.title",
      descriptionKey: "benefits.support.description"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm md:text-base uppercase tracking-wider font-medium mb-2">{t('sections.benefits.subtitle')}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t('sections.benefits.title')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              {t('sections.benefits.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={(index + 1) * 100}>
              <BenefitCard
                icon={benefit.icon}
                titleKey={benefit.titleKey}
                descriptionKey={benefit.descriptionKey}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
