
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  image: string;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  ctaKey?: string;
}

const ProjectCard = ({ image, categoryKey, titleKey, descriptionKey, link, ctaKey = 'common.viewProject' }: ProjectCardProps) => {
  const { t } = useTranslation();
  
  // Check if titleKey and descriptionKey are translation keys or direct text
  const isTranslationKey = (key: string) => key.includes('.');
  const title = isTranslationKey(titleKey) ? t(titleKey) : titleKey;
  const description = isTranslationKey(descriptionKey) ? t(descriptionKey) : descriptionKey;
  
  return (
    <Link to={link} className="block group">
      <div className="overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="mb-3">
            <span className="badge">{t(categoryKey)}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="inline-flex items-center text-primary font-medium">
            {t(ctaKey)} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
