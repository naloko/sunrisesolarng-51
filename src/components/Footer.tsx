
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowRight,
  Clock
} from 'lucide-react';
import ProcessedLogo from './ProcessedLogo';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ProcessedLogo src="/lovable-uploads/f4673dff-58c3-4f1e-8a9e-54618abf63f1.png" alt="Sunrise Solar logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">SUNRISE</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.company')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('common.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.products')}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.caseStudies')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('common.ourServices')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/residential" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.residential')}
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.commercial')}
                </Link>
              </li>
              <li>
                <Link to="/services/panel-cleaning" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.cleaning')}
                </Link>
              </li>
              <li>
                <Link to="/services/power" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.power')}
                </Link>
              </li>
              <li>
                <Link to="/services/products" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('footer.sales')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('common.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Inuwa Wada Road, Fagge, Kano Nigeria.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:+8615964341134" className="hover:text-primary transition-colors">+8615964341134</a>
                  <span className="mx-2 text-gray-500">/</span>
                  <a href="tel:+2349098888119" className="hover:text-primary transition-colors">+234 9098888119</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:erin.xing@sunrisesolar.ng" className="text-gray-400 hover:text-primary text-sm">
                  erin.xing@sunrisesolar.ng
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {t('footer.workingHours')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sunrise New Energy Technology Co., Ltd. {t('common.allRightsReserved')}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  {t('common.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  {t('common.termsOfService')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
