
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { navLinks, languages } from './navbar/navData';
import NavLink from './navbar/NavLink';
import LanguageSelector from './navbar/LanguageSelector';
import MobileMenu from './navbar/MobileMenu';
import HamburgerButton from './navbar/HamburgerButton';
import ProcessedLogo from './ProcessedLogo';
import { ChevronDown } from 'lucide-react';
import { prefetchRoute } from '@/lib/prefetchRoutes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language || 'en');
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // This ensures the state is in sync with i18n's language
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const changeLanguage = (langCode: string) => {
    if (langCode === currentLanguage) return; // Don't change if already selected
    
    i18n.changeLanguage(langCode)
      .then(() => {
        setCurrentLanguage(langCode);
        document.documentElement.lang = langCode;
      })
      .catch(error => console.error("Language change failed:", error));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ProcessedLogo src="/lovable-uploads/f4673dff-58c3-4f1e-8a9e-54618abf63f1.png" alt="Sunrise Solar logo" className="h-8 w-auto" loading="eager" decoding="async" />
            <span className={`text-xl font-bold ${isScrolled || isMenuOpen ? 'text-foreground gradient-text' : 'text-white gradient-text'}`}>
              SUNRISE
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path === '/projects' ? (
                <div key="projects-and-services" className="flex items-center space-x-6">
                  <NavLink
                    path={link.path}
                    translationKey={link.translationKey}
                    isScrolled={isScrolled}
                    isActive={location.pathname === link.path}
                  />

                  {/* Services dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`text-sm font-medium inline-flex items-center transition-colors ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary`}
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                    >
                      {t('navigation.services')}
                      <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                    </button>
                    {/* Menu panel */}
                    <div 
                      className={`absolute left-0 top-full w-64 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-[60] transition-opacity ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                    >
                      <div className="py-2">
                        <Link to="/services/residential" onMouseEnter={() => prefetchRoute('/services/residential')} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                          {t('services.menu.residential')}
                        </Link>
                        <Link to="/services/commercial" onMouseEnter={() => prefetchRoute('/services/commercial')} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                          {t('services.menu.commercial')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  path={link.path}
                  translationKey={link.translationKey}
                  isScrolled={isScrolled}
                  isActive={location.pathname === link.path}
                />
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'glass-button'}
              `}
            >
              {t('cta.quote')}
            </Link>
            
            <LanguageSelector 
              languages={languages}
              currentLanguage={currentLanguage}
              changeLanguage={changeLanguage}
            />
          </div>

          <HamburgerButton 
            isOpen={isMenuOpen}
            isScrolled={isScrolled}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        navLinks={navLinks}
        currentPath={location.pathname}
        languages={languages}
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
      />
    </header>
  );
};

export default Navbar;
