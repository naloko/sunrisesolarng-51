import { ArrowRight, MapPin, Calendar, Zap, Leaf } from 'lucide-react';
import { type Project } from '../../config/projectCatalog';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-medium py-1 px-3 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">
          {project.description}
        </p>

        {/* Key Metrics */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="font-medium">{project.capacity}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{project.completionYear}</span>
          </div>
          {project.co2Savings && (
            <div className="flex items-center text-sm text-gray-600">
              <Leaf className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-green-600 font-medium">{project.co2Savings} CO₂ saved</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <button className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group">
          View Case Study
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;