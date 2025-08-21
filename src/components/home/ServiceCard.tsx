
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: ReactNode;
  titleKey: string;
  descriptionKey: string;
  link: string;
  ctaKey?: string;
}

const ServiceCard = ({ icon, titleKey, descriptionKey, link, ctaKey = 'common.viewDetails' }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="service-card">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
      <p className="text-gray-600 mb-4">
        {t(descriptionKey)}
      </p>
      <Link to={link} className="inline-flex items-center text-primary font-medium hover:underline">
        {t(ctaKey)} <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
