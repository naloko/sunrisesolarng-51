
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { LanguageOption } from './navData';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: Array<{ path: string; translationKey: string }>;
  currentPath: string;
  languages: LanguageOption[];
  currentLanguage: string;
  changeLanguage: (code: string) => void;
}

const MobileMenu = ({ 
  isOpen, 
  navLinks, 
  currentPath, 
  languages, 
  currentLanguage, 
  changeLanguage 
}: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <div 
      className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 ${
        isOpen ? 'max-h-screen py-4 pb-6 shadow-lg' : 'max-h-0 overflow-hidden'
      }`}
    >
      <nav className="container mx-auto px-4 flex flex-col space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block py-4 px-3 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
              currentPath === link.path 
                ? 'text-primary bg-primary/10 font-semibold' 
                : 'text-gray-700 hover:text-primary hover:bg-gray-50'
            }`}
          >
            {t(link.translationKey)}
          </Link>
        ))}
        {/* Services group */}
        <div className="mt-2">
          <p className="text-sm text-gray-500 mb-3 px-3 font-medium">{t('navigation.services')}</p>
          <div className="flex flex-col space-y-1">
            <Link
              to="/services/residential"
              className="block py-4 px-3 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {t('services.menu.residential')}
            </Link>
            <Link
              to="/services/commercial"
              className="block py-4 px-3 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {t('services.menu.commercial')}
            </Link>
          </div>
        </div>

        <Link
          to="/contact"
          className="bg-primary text-white rounded-lg py-4 px-4 text-center font-semibold mt-4 min-h-[52px] flex items-center justify-center shadow-sm hover:bg-primary/90 transition-colors"
        >
          {t('cta.quote')}
        </Link>
        
        <div className="pt-4 mt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3 px-3 flex items-center font-medium">
            <Globe className="h-4 w-4 mr-2" />
            {t('common.language')}
          </p>
          <div className="flex flex-col space-y-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`text-left py-4 px-3 rounded-lg transition-colors min-h-[44px] flex items-center font-medium ${
                  currentLanguage === lang.code 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t(lang.translationKey)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
