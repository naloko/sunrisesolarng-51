
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
      className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isOpen ? 'max-h-screen py-4 shadow-lg' : 'max-h-0 overflow-hidden'
      }`}
    >
      <nav className="container mx-auto px-4 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              py-2 text-blue-600 text-base font-medium border-b border-gray-100
              ${currentPath === link.path ? 'text-primary' : ''}
            `}
          >
            {t(link.translationKey)}
          </Link>
        ))}
        {/* Services group */}
        <div className="pt-2">
          <p className="text-sm text-gray-500 mb-1">{t('navigation.services')}</p>
          <div className="flex flex-col">
            <Link
              to="/services/residential"
              className="py-2 text-blue-600 text-base font-medium border-b border-gray-100"
            >
              {t('services.menu.residential')}
            </Link>
            <Link
              to="/services/commercial"
              className="py-2 text-blue-600 text-base font-medium border-b border-gray-100"
            >
              {t('services.menu.commercial')}
            </Link>
          </div>
        </div>

        <Link
          to="/contact"
          className="bg-primary text-white rounded-lg py-3 px-4 text-center font-medium mt-2"
        >
          {t('cta.quote')}
        </Link>
        
        <div className="py-2 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2 flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            {t('common.language')}
          </p>
          <div className="flex flex-col space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`text-left py-2 px-3 rounded-md transition-colors ${
                  currentLanguage === lang.code 
                    ? 'bg-primary/10 text-primary font-medium' 
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
