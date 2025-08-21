import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { ProductCategory } from '@/config/productCatalog';
import { BROCHURES } from '@/config/brochures';
import { prefetchRoute } from '@/lib/prefetchRoutes';

interface ProductsByCategoryRowProps {
  category: ProductCategory;
}

const ProductsByCategoryRow = ({ category }: ProductsByCategoryRowProps) => {
  const handleMouseEnter = (categorySlug: string, productSlug: string) => {
    prefetchRoute(`/products/${categorySlug}/${productSlug}`);
  };

  return (
    <section className="py-12" id={category.slug}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <AnimatedSection key={product.id} animation="slide-up">
              <Link
                to={`/products/${category.slug}/${product.slug}`}
                onMouseEnter={() => handleMouseEnter(category.slug, product.slug)}
                className="group block bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div className="aspect-[4/3] w-full bg-gray-50 rounded-t-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  {product.specs && product.specs.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.slice(0, 2).map((spec, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                        >
                          {spec.label}: {spec.value}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary font-medium text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                    {product.brochureId && (() => {
                      const brochure = BROCHURES.find(b => b.id === product.brochureId);
                      return brochure ? (
                        <a
                          href={`/brochures/${brochure.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center text-gray-600 hover:text-primary text-sm font-medium transition-colors"
                          title="Download Brochure"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      ) : null;
                    })()}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Section-level download button for High Voltage Energy Storage */}
        {category.slug === 'high-voltage-energy-storage' && (
          <AnimatedSection animation="slide-up">
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  // Download Sunrise PV & ESS Solutions
                  const link1 = document.createElement('a');
                  link1.href = '/brochures/Sunrise PV & ESS Solutions.pdf';
                  link1.download = 'Sunrise PV & ESS Solutions.pdf';
                  link1.click();
                  
                  // Download Solar Water Heater brochure
                  setTimeout(() => {
                    const link2 = document.createElement('a');
                    link2.href = '/brochures/solar water heater.pdf';
                    link2.download = 'solar water heater.pdf';
                    link2.click();
                  }, 100);
                }}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Product Brochures
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default ProductsByCategoryRow;