import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProjectCard from './ProjectCard';
import { projectCatalog } from '../../config/projectCatalog';

const ProjectsSection = () => {
  const { t } = useTranslation();
  
  // Get first 3 projects from the catalog
  const featuredProjects = projectCatalog.slice(0, 3).map(project => ({
    image: project.image,
    categoryKey: `projects.categories.${project.category.toLowerCase()}`,
    titleKey: project.title, // Use direct title instead of translation key
    descriptionKey: project.description, // Use direct description instead of translation key
    link: `/projects/${project.id}`
  }));
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            
            <h2 className="section-heading text-yellow-500">{t('sections.projects.title')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              {t('sections.projects.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={(index + 1) * 100}>
              <ProjectCard 
                image={project.image} 
                categoryKey={project.categoryKey} 
                titleKey={project.titleKey} 
                descriptionKey={project.descriptionKey} 
                link={project.link} 
              />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90">
            {t('sections.projects.viewAll')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;