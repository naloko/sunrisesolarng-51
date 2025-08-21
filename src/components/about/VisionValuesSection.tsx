
import AnimatedSection from '../../components/AnimatedSection';
import { Eye, Heart, Lightbulb, Leaf, Users, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VisionValuesSection = () => {
  const { t } = useTranslation();

  const values = [
    { 
      icon: Star, 
      title: t('about.excellence'), 
      description: t('about.excellenceDesc'),
      color: 'text-text-orange',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    { 
      icon: Lightbulb, 
      title: t('about.innovation'), 
      description: t('about.innovationDesc'),
      color: 'text-text-purple',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    { 
      icon: Leaf, 
      title: t('about.sustainability'), 
      description: t('about.sustainabilityDesc'),
      color: 'text-text-green',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      icon: Users, 
      title: t('about.customer'), 
      description: t('about.customerDesc'),
      color: 'text-text-blue',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary/10 border border-primary/20 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              {t('about.coreValues')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.visionValues')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="max-w-3xl mx-auto text-foreground/80 text-lg">
              {t('about.valuesSubtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vision Section */}
            <AnimatedSection animation="slide-in-left" delay={100}>
              <div className="group relative bg-card border border-border rounded-3xl p-10 hover:shadow-xl transition-all duration-500">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <div className="pt-8">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">{t('about.ourVision')}</h3>
                  <div className="space-y-4 text-foreground/80">
                    <p className="text-lg leading-relaxed">{t('about.visionText1')}</p>
                    <p className="text-lg leading-relaxed">{t('about.visionText2')}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Values Grid */}
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{t('about.ourValues')}</h3>
                  <p className="text-foreground/70">The principles that guide everything we do</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {values.map(({ icon: Icon, title, description, color, bgColor }, index) => (
                    <div 
                      key={title}
                      className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${color}`} />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{title}</h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionValuesSection;
