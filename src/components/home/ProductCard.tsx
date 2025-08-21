
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  icon?: ReactNode;
  image?: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  ctaKey?: string;
}

const ProductCard = ({ icon, image, titleKey, descriptionKey, link, ctaKey = 'common.learnMore' }: ProductCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="product-card group flex flex-col h-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
      <div className="mb-4 w-full h-48 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-3">
        {image ? (
          <img 
            src={image} 
            alt={t(titleKey)} 
            loading="lazy"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-primary bg-primary/5 w-14 h-14 flex items-center justify-center rounded-lg">
            {icon}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{t(titleKey)}</h3>
      <p className="text-gray-600 mb-6 flex-grow">
        {t(descriptionKey)}
      </p>
      <Link to={link} className="inline-flex items-center text-primary font-medium mt-auto">
        {t(ctaKey)} <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ProductCard;
