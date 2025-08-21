import HeroSection from '../components/home/HeroSection';
import { lazy, Suspense } from 'react';
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const ProductsSection = lazy(() => import('../components/home/ProductsSection'));
const ProjectsSection = lazy(() => import('../components/home/ProjectsSection'));
const BenefitsSection = lazy(() => import('../components/home/BenefitsSection'));
const CtaSection = lazy(() => import('../components/home/CtaSection'));
import { useTranslation } from 'react-i18next';


const Index = () => {
  const { t } = useTranslation();
  
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Suspense fallback={null}><AboutSection /></Suspense>
      <Suspense fallback={null}><ServicesSection /></Suspense>
      <Suspense fallback={null}><ProductsSection /></Suspense>
      <Suspense fallback={null}><ProjectsSection /></Suspense>
      <Suspense fallback={null}><BenefitsSection /></Suspense>

      <div className="bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-heading mb-8">
              Certificates & Awards
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-4 max-w-full">
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/05822799-e8e6-4cc1-86b8-838ca2484eed.png"
                  alt="Specialized SME Enterprise Certificate"
                  className="w-20 h-16 object-contain"
                />
              </div>
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/36b7d319-c20d-4b3e-83fd-dbbc9703c1ba.png"
                  alt="Advanced Enterprise Award"
                  className="w-20 h-16 object-contain"
                />
              </div>
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/2aed2729-a216-4776-94a9-0588d6cbd476.png"
                  alt="Advanced Unit Certificate"
                  className="w-20 h-16 object-contain"
                />
              </div>
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/9520725d-3f76-44d6-a272-2c2ba6bb4623.png"
                  alt="High-Tech Enterprise Certificate"
                  className="w-20 h-16 object-contain"
                />
              </div>
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/ebfb769c-bdd5-4212-bed7-a28d13bf686b.png"
                  alt="Shandong Province Enterprise Certificate"
                  className="w-20 h-16 object-contain"
                />
              </div>
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/lovable-uploads/7f93e562-d838-4501-8fd4-69fb4ca90289.png"
                  alt="Technical Research Center Certificate"
                  className="w-20 h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={null}><CtaSection /></Suspense>
    </main>
  );
};

export default Index;
