import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../AnimatedSection';
import { ChevronRight, Home } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <header className="relative overflow-hidden">
      {/* Breadcrumb Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="flex items-center text-white/70 hover:text-white transition-colors">
              <Home className="w-4 h-4 mr-1" />
              {t('navigation.home')}
            </Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white font-medium">{t('navigation.about')}</span>
          </nav>
        </div>
      </div>

      <div className="relative h-[420px] sm:h-[520px] md:h-[620px]">
        <img
          src="/lovable-uploads/e98919f1-676b-4e7c-85df-877382b8999c.png"
          alt="Solar panels at sunset along water - Sunrise Renewables"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <AnimatedSection animation="fade-in" className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block text-primary bg-primary/20 backdrop-blur-sm border border-primary/30 px-6 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                {t('sections.about.subtitle')}
              </span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              {t('sections.about.title')}
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              {t('sections.about.description1')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {t('about.contactCta')}
              </Link>
              <Link 
                to="/projects" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/20"
              >
                {t('about.projectsCta')}
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
