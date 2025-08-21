
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import ProductsByCategoryRow from '../components/products/ProductsByCategoryRow';
import { PRODUCT_CATALOG } from '../config/productCatalog';

const Products = () => {
  return (
    <main>
      <SEO title="Solar Products | Water Heaters, Panels & Storage" description="Professional, minimalist solar products: water heaters, panels, and energy storage. Explore featured products and an interactive gallery." canonicalPath="/products" />
      {/* Hero Section */}
      <section data-dark-bg className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/77d8f05c-07e1-41f2-9463-07744cde539e.png"
            alt="Solar technician installing panels – products hero background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our <span className="text-primary">Solar</span> Products
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Explore our comprehensive range of solar energy products designed to provide efficient, 
                reliable, and sustainable power solutions for homes and businesses.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-heading">Our Products</h2>
              <p className="section-description mx-auto">Explore our comprehensive range of solar energy solutions.</p>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Product Categories */}
        <div className="divide-y divide-gray-100">
          {PRODUCT_CATALOG.map((category) => (
            <ProductsByCategoryRow key={category.id} category={category} />
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Harness the Power of the Sun?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Take the first step towards energy independence and sustainability. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Contact Us Now
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
