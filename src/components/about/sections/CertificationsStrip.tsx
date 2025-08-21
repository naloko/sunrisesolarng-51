import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, Zap, Leaf, CheckCircle, Star } from 'lucide-react';
import AnimatedSection from '../../AnimatedSection';

const CertificationsStrip = () => {
  const { t } = useTranslation();

  const certifications = [
    { 
      icon: ShieldCheck, 
      key: 'about.certifications.iso',
      color: 'text-text-blue',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      icon: Award, 
      key: 'about.certifications.warranty',
      color: 'text-text-orange',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    { 
      icon: Zap, 
      key: 'about.certifications.grid',
      color: 'text-text-purple',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    { 
      icon: Leaf, 
      key: 'about.certifications.safety',
      color: 'text-text-green',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
  ];

  return (
    <section aria-label={t('about.certifications.title')} className="py-16 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {t('about.certifications.title')}
              </span>
              <Star className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Trusted & Certified Excellence
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our certifications and standards ensure the highest quality in every solar installation
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map(({ icon: Icon, key, color, bgColor }) => (
              <div 
                key={key} 
                className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${color}`} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">
                  {t(key)}
                </h3>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Trust indicators */}
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center space-x-8 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>IEC Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>25-Year Warranty</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsStrip;
