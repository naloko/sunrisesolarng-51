import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Zap, Leaf, Building, Users, Target } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import { projectCatalog, type Project } from '../config/projectCatalog';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  const project = projectCatalog.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'planned':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Commercial':
        return Building;
      case 'Utility-scale':
        return Target;
      case 'Community':
        return Users;
      default:
        return Building;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "location": {
      "@type": "Place",
      "name": project.location
    },
    "dateCompleted": `${project.completionYear}-12-31`,
    "image": project.image,
    "provider": {
      "@type": "Organization",
      "name": "Sunrise Solar"
    }
  };

  return (
    <main>
      <SEO 
        title={`${project.title} | Solar Project Case Study | Sunrise Solar`}
        description={`Learn about our ${project.capacity} ${project.category.toLowerCase()} solar project in ${project.location}. ${project.description}`}
        canonicalPath={`/projects/${project.id}`}
        structuredData={structuredData}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-400">{project.category}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <AnimatedSection animation="fade-in">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </AnimatedSection>

            {/* Project Info */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                {/* Category & Status */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full">
                    <CategoryIcon className="w-4 h-4 mr-2" />
                    {project.category}
                  </span>
                  <span className={`inline-block text-xs font-medium py-1 px-3 rounded-full capitalize ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Zap className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-gray-700">Capacity</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{project.capacity}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-gray-700">Location</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{project.location}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-gray-700">Completed</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{project.completionYear}</p>
                  </div>

                  {project.co2Savings && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Leaf className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">CO₂ Savings</span>
                      </div>
                      <p className="text-lg font-semibold text-green-700">{project.co2Savings}</p>
                    </div>
                  )}
                </div>

                {/* Client Info */}
                {project.client && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Client</h3>
                    <p className="text-lg font-semibold text-blue-700">{project.client}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {project.specifications && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Technical Specifications
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {project.specifications.panelType && (
                <AnimatedSection animation="scale-in" delay={100}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Panel Type</h3>
                    <p className="text-gray-600">{project.specifications.panelType}</p>
                  </div>
                </AnimatedSection>
              )}

              {project.specifications.inverterType && (
                <AnimatedSection animation="scale-in" delay={200}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Inverter Type</h3>
                    <p className="text-gray-600">{project.specifications.inverterType}</p>
                  </div>
                </AnimatedSection>
              )}

              {project.specifications.mountingSystem && (
                <AnimatedSection animation="scale-in" delay={300}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Mounting System</h3>
                    <p className="text-gray-600">{project.specifications.mountingSystem}</p>
                  </div>
                </AnimatedSection>
              )}

              {project.specifications.annualYield && (
                <AnimatedSection animation="scale-in" delay={400}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Annual Yield</h3>
                    <p className="text-gray-600">{project.specifications.annualYield}</p>
                  </div>
                </AnimatedSection>
              )}

              {project.specifications.roi && (
                <AnimatedSection animation="scale-in" delay={500}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">ROI</h3>
                    <p className="text-gray-600">{project.specifications.roi}</p>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Start Your Solar Project?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Let's discuss how we can help you achieve similar results with a custom solar solution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/projects" 
                  className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-medium transition-all hover:bg-gray-50"
                >
                  View More Projects
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;