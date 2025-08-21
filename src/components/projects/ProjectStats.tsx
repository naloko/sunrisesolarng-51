import { Building2, Zap, Leaf, Globe } from 'lucide-react';
import { projectStats } from '../../config/projectCatalog';
import AnimatedSection from '../AnimatedSection';
import AnimatedCounter from '../AnimatedCounter';

const ProjectStats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving sustainable energy adoption across multiple markets with measurable results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={projectStats.completedProjects} />
                </div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={Math.round(projectStats.totalCapacity)} suffix="MW" />
                </div>
                <p className="text-gray-600 text-sm">Total Capacity Installed</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300}>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={Math.round(projectStats.totalCO2Savings / 1000)} suffix="K" />
                </div>
                <p className="text-gray-600 text-sm">Tons CO₂ Saved Annually</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={400}>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={projectStats.countries.length} />
                </div>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;