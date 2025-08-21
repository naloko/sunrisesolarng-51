import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section data-dark-bg className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/95f9c830-1b3f-44e1-9815-b1fe6a0ec80e.png"
          alt="Rooftop solar panels at sunrise – home hero background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {t('hero.oneStop')}
              </span>
              <br />
              <span className="block mt-2">{t('hero.solarSolutions')}</span>
            </h1>
            
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                {t('hero.getStarted')}
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                to="/about" 
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300"
              >
                {t('hero.learnMore')}
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
export default HeroSection;