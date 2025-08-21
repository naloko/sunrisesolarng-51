import AnimatedSection from '../../AnimatedSection';
import AnimatedCounter from '../../AnimatedCounter';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Zap, Users, Leaf, Award, Globe, Clock, Shield } from 'lucide-react';

const StatsSection = () => {
  const { t } = useTranslation();

  const primaryStats = [
    { 
      icon: Award, 
      value: 10, 
      suffix: '+', 
      label: t('about.stats.experience'),
      description: 'Years of Excellence',
      color: 'text-text-blue'
    },
    { 
      icon: TrendingUp, 
      value: 250, 
      suffix: '+', 
      label: t('about.stats.projects'),
      description: 'Successful Installations',
      color: 'text-text-orange'
    },
    { 
      icon: Users, 
      value: 50, 
      suffix: '+', 
      label: t('about.stats.team'),
      description: 'Expert Professionals',
      color: 'text-text-purple'
    },
    { 
      icon: Leaf, 
      value: 5000, 
      suffix: '+', 
      label: t('about.stats.co2'),
      description: 'Carbon Footprint Reduced',
      color: 'text-text-green'
    },
  ];

  const additionalStats = [
    { icon: Zap, value: '15', suffix: 'MW+', label: 'Total Capacity Installed' },
    { icon: Globe, value: '3', suffix: '+', label: 'Countries Served' },
    { icon: Clock, value: '24/7', suffix: '', label: 'Customer Support' },
    { icon: Shield, value: '25', suffix: 'Y', label: 'Warranty Coverage' },
  ];

  return (
    <section aria-label="Company statistics" className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 border border-primary/20 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Numbers That Matter
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every project we complete and every client we serve.
            </p>
          </div>
        </AnimatedSection>

        {/* Primary Stats Grid */}
        <AnimatedSection animation="slide-up" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {primaryStats.map(({ icon: Icon, value, suffix, label, description, color }, index) => (
              <div 
                key={label}
                className="group relative bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                
                {/* Counter */}
                <AnimatedCounter 
                  end={value} 
                  suffix={suffix}
                  duration={2000 + index * 200}
                  className={`text-4xl sm:text-5xl font-bold ${color} mb-2`}
                />
                
                {/* Labels */}
                <h3 className="font-bold text-foreground mb-1">{label}</h3>
                <p className="text-foreground/60 text-sm">{description}</p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Stats Row */}
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {additionalStats.map(({ icon: Icon, value, suffix, label }, index) => (
                <div key={label} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{value}{suffix}</div>
                  <div className="text-foreground/70 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
