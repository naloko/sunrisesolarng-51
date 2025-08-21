
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../../components/AnimatedSection';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[60vh] flex items-center">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          <source src="https://www.pexels.com/video/solar-panel-farm-use-for-energy-production-4324109/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-gradient-to-r from-gray-900/95 to-gray-900/80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection animation="fade-in">
            <span className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t('about.aboutUs')}
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {t('about.title')} <span className="text-gradient">{t('about.sunrise')}</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 mb-8 max-w-2xl">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
