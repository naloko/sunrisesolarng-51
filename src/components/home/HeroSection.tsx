import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedCounter from '../AnimatedCounter';
import AnimatedSection from '../AnimatedSection';


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
          srcSet="/lovable-uploads/95f9c830-1b3f-44e1-9815-b1fe6a0ec80e.png 1920w"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <AnimatedSection animation="slide-up" delay={200}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              <AnimatedSection animation="slide-in-left" delay={400}>
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('hero.oneStop')}
                </span>
              </AnimatedSection>
              <br />
              <AnimatedSection animation="slide-in-right" delay={600}>
                <span className="block mt-2">{t('hero.solarSolutions')}</span>
              </AnimatedSection>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={800}>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-3xl font-light mt-6">
              {t('hero.description')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 min-h-[48px] sm:min-h-auto"
              >
                {t('hero.getStarted')}
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                to="/about" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 min-h-[48px] sm:min-h-auto"
              >
                {t('hero.learnMore')}
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {/* Trust indicators and stats */}
          <AnimatedSection animation="slide-up" delay={1200}>
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 sm:items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 sm:px-4 sm:py-2 border border-white/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left">
                  <AnimatedCounter 
                    end={500} 
                    suffix="+" 
                    className="text-lg sm:text-2xl font-bold text-white"
                  />
                  <span className="text-white/80 text-xs sm:text-sm">Projects</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 sm:px-4 sm:py-2 border border-white/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left">
                  <AnimatedCounter 
                    end={15} 
                    suffix=" Years" 
                    className="text-lg sm:text-2xl font-bold text-white"
                  />
                  <span className="text-white/80 text-xs sm:text-sm">Experience</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 sm:px-4 sm:py-2 border border-white/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left">
                  <AnimatedCounter 
                    end={99} 
                    suffix="%" 
                    className="text-lg sm:text-2xl font-bold text-white"
                  />
                  <span className="text-white/80 text-xs sm:text-sm">Satisfaction</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Trust logos */}
          <AnimatedSection animation="fade-in" delay={1400}>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap gap-4 opacity-60">
                <img src="/lovable-uploads/05822799-e8e6-4cc1-86b8-838ca2484eed.png" alt="Trust logo" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
                <img src="/lovable-uploads/36b7d319-c20d-4b3e-83fd-dbbc9703c1ba.png" alt="Trust logo" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
                <img src="/lovable-uploads/2aed2729-a216-4776-94a9-0588d6cbd476.png" alt="Trust logo" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <AnimatedSection animation="fade-in" delay={1600}>
          <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
    </section>
  );
};
export default HeroSection;