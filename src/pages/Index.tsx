import HeroSection from '../components/home/HeroSection';
import { lazy, Suspense } from 'react';
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const ProductsSection = lazy(() => import('../components/home/ProductsSection'));
const ProjectsSection = lazy(() => import('../components/home/ProjectsSection'));
const BenefitsSection = lazy(() => import('../components/home/BenefitsSection'));
const CtaSection = lazy(() => import('../components/home/CtaSection'));
import LogoCloudMarquee from '../components/LogoCloudMarquee';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import SkeletonLoader from '../components/SkeletonLoader';
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
      <Suspense fallback={<SkeletonLoader type="card" count={3} className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 py-16" />}><BenefitsSection /></Suspense>

      <LogoCloudMarquee />
      
      <TestimonialsCarousel />

      <Suspense fallback={null}><CtaSection /></Suspense>
    </main>
  );
};

export default Index;
