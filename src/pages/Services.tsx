import React from 'react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <main>
      <SEO
        title="Services | Residential & Commercial Solutions"
        description="Discover Tanso Solar services: residential and commercial energy storage and solar solutions tailored to your needs."
        canonicalPath="/services"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-10">
            <h1 className="section-heading">Our Services</h1>
            <p className="section-description mt-2">Choose the solution that matches your goals, from home energy independence to C&I efficiency.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Residential card */}
            <Link to="/services/residential" className="group relative rounded-xl overflow-hidden block">
              <img src="/lovable-uploads/3d0d2bd7-3c44-405c-8551-3fb6a83a3b5a.png" alt="Residential Solutions" className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-2xl font-semibold">Residential Solutions</h2>
                <p className="mt-2 text-white/90">All‑in‑one solar + storage systems for reliable, efficient home power.</p>
                <span className="inline-flex items-center mt-3 font-medium">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </Link>

            {/* Commercial card */}
            <Link to="/services/commercial" className="group relative rounded-xl overflow-hidden block">
              <img src="/lovable-uploads/54962123-de4d-433b-be8b-6d55426d4143.png" alt="Commercial & Industrial Solutions" className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-2xl font-semibold">Commercial & Industrial</h2>
                <p className="mt-2 text-white/90">C&I solar and storage for resilience and lower operating costs.</p>
                <span className="inline-flex items-center mt-3 font-medium">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
