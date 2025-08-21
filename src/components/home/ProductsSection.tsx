import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProductCard from './ProductCard';
const ProductsSection = () => {
  const { t } = useTranslation();
  
  const productCategories = [
    {
      image: "/lovable-uploads/62bfdc70-0d42-4629-a77e-1cce0abacee9.png",
      titleKey: "products.heater.title",
      descriptionKey: "products.heater.description",
      link: "/products#solar-water-heater"
    },
    {
      image: "/lovable-uploads/96506ab6-7564-4dea-b1cb-385e84b56d19.png",
      titleKey: "products.lvInverter.title",
      descriptionKey: "products.lvInverter.description",
      link: "/products#low-voltage-battery"
    },
    {
      image: "/lovable-uploads/54c8ad97-76a2-45ca-a2c4-ca58b282e0d5.png",
      titleKey: "products.hvInverter.title",
      descriptionKey: "products.hvInverter.description",
      link: "/products#high-voltage-energy-storage"
    },
    {
      image: "/lovable-uploads/be0620a9-b789-464b-b554-66d4c2376130.png",
      titleKey: "products.panel.title",
      descriptionKey: "products.panel.description",
      link: "/products"
    }
  ];
  return <section className="py-16 bg-white">
      <div className="section-container">
        <div className="section-header">
          <AnimatedSection animation="fade-in">
            
            <h2 className="section-heading text-yellow-500">
              {t('sections.products.title')}
            </h2>
            <p className="section-description mx-auto">
              {t('sections.products.description')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((product, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={200 + index * 100}>
              <ProductCard 
                image={product.image} 
                titleKey={product.titleKey} 
                descriptionKey={product.descriptionKey} 
                link={product.link} 
              />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90">
            {t('sections.products.viewAll')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default ProductsSection;