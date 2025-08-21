
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectStats from '../components/projects/ProjectStats';
import { projectCatalog } from '../config/projectCatalog';

const Projects = () => {
  const navigate = useNavigate();
  const [filteredProjects, setFilteredProjects] = useState(projectCatalog);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <main>
      <SEO 
        title="Solar Projects Portfolio | Sunrise Solar" 
        description="Explore our portfolio of successful commercial, utility-scale, and community solar installations across Nigeria and China." 
        canonicalPath="/projects" 
      />
      
      {/* Hero Section - Minimal & Professional */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                Project <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-white/90 text-lg mb-6">
                Delivering sustainable energy solutions across commercial, utility-scale, and community projects.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our diverse portfolio of successful solar installations, from rooftop systems to large-scale power stations.
              </p>
            </div>
          </AnimatedSection>

          {/* Filter Component */}
          <ProjectFilter 
            projects={projectCatalog} 
            onFilterChange={setFilteredProjects} 
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="scale-in" delay={(index % 9 + 1) * 50}>
                <ProjectCard 
                  project={project} 
                  onClick={() => handleProjectClick(project.id)} 
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Load More / Show Less */}
          {filteredProjects.length > 9 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90"
              >
                {showAll ? 'Show Less' : `Load More Projects (${filteredProjects.length - 9} remaining)`}
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <ProjectStats />

      {/* CTA Section - Minimal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Let's discuss how we can help you achieve your sustainable energy goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-medium transition-all hover:bg-gray-50"
                >
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
