
import AnimatedSection from '../../components/AnimatedSection';
import AnimatedCounter from '../../components/AnimatedCounter';
import { useTranslation } from 'react-i18next';
import { Award, Users, Zap, Leaf } from 'lucide-react';

const CompanyOverviewSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, value: 10, suffix: '+', label: t('about.stats.experience'), color: 'text-text-blue' },
    { icon: Zap, value: 500, suffix: '+', label: t('about.stats.projects'), color: 'text-text-orange' },
    { icon: Users, value: 50, suffix: '+', label: t('about.stats.team'), color: 'text-text-purple' },
    { icon: Leaf, value: 10, suffix: 'k+', label: t('about.stats.co2'), color: 'text-text-green' },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-8">
                <div>
                  <span className="inline-block bg-primary/10 border border-primary/20 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                    {t('sections.about.subtitle')}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                    {t('sections.about.title')}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                    {t('sections.about.description1')}
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {t('sections.about.description2')}
                  </p>
                </div>
                
                {/* Timeline or milestones */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-foreground/80 font-medium">Founded in Nigeria, expanding globally</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-foreground/80 font-medium">Partnership with Shandong Longguang Tianxu Solar</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-foreground/80 font-medium">Leading solar solutions across West Africa</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ icon: Icon, value, suffix, label, color }, index) => (
                  <div 
                    key={label}
                    className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                      <Icon className={`w-8 h-8 ${color}`} />
                    </div>
                    <div className="space-y-2">
                      <AnimatedCounter 
                        end={value} 
                        suffix={suffix}
                        duration={1800 + index * 200}
                        className={`text-4xl font-bold ${color}`}
                      />
                      <p className="text-foreground/80 font-medium text-sm leading-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
