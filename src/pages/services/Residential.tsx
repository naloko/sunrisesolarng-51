import React from 'react';
import SEO from '@/components/SEO';
import ServiceHero from '@/components/services/ServiceHero';
import KeyBenefits from '@/components/services/KeyBenefits';
import FeatureAccordion from '@/components/services/FeatureAccordion';
import { ShieldCheck, Zap, Layers, DollarSign, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnchorNav from '@/components/services/AnchorNav';
import OverviewSection from '@/components/services/OverviewSection';
import OffGridSolutions from '@/components/services/OffGridSolutions';
import SystemConfigurationsSection from '@/components/services/SystemConfigurationsSection';
import ProductCategoriesSection from '@/components/services/ProductCategoriesSection';
import PackagesGrid from '@/components/services/PackagesGrid';
import FaqList from '@/components/services/FaqList';
import DownloadsStrip from '@/components/services/DownloadsStrip';
import CertificationsStrip from '@/components/about/sections/CertificationsStrip';
import ProductGallery from '@/components/products/ProductGallery';
import FeaturedProductsCarousel from '@/components/products/FeaturedProductsCarousel';

const Residential: React.FC = () => {
  return (
    <main>
      <SEO
        title="Residential Solutions | Tanso Solar"
        description="Achieve energy independence with Tanso Home Solutions: reliable residential solar + storage with smart energy management."
        canonicalPath="/services/residential"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Residential Solar Energy Solutions',
          serviceType: 'Residential solar + storage',
          provider: { '@type': 'Organization', name: 'Tanso Solar' },
          areaServed: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Kano', addressCountry: 'NG' } }
        }}
      />

      <ServiceHero
        title="Residential Solutions"
        subtitle="Achieve energy independence with a smart, reliable all‑in‑one solar energy storage system."
        imageSrc="/lovable-uploads/3d0d2bd7-3c44-405c-8551-3fb6a83a3b5a.png"
        imageAlt="Residential solar energy storage system"
        ctaText="Request a Quote"
        ctaLink="/contact"
      />

      <AnchorNav
        items={[
          { href: '#overview', label: 'Overview' },
          { href: '#offgrid', label: 'Off-grid Solutions' },
          { href: '#configurations', label: 'System Configurations' },
          { href: '#categories', label: 'Product Categories' },
          { href: '#benefits', label: 'Benefits' },
          { href: '#packages', label: 'Packages' },
          { href: '#gallery', label: 'Installations' },
          { href: '#faqs', label: 'FAQs' },
          { href: '#downloads', label: 'Downloads' }
        ]}
      />

      {/* Overview Section with System Diagram */}
      <OverviewSection
        systemDiagramSrc="/lovable-uploads/36b7d319-c20d-4b3e-83fd-dbbc9703c1ba.png"
        systemDiagramAlt="Residential energy storage system architecture diagram"
      />

      {/* Off-grid Energy Storage Solutions */}
      <OffGridSolutions />

      {/* System Configurations */}
      <SystemConfigurationsSection />

      {/* Product Categories */}
      <ProductCategoriesSection />

      {/* Benefits */}
      <section id="benefits">
        <KeyBenefits
          items={[
            {
              icon: <ShieldCheck className="w-6 h-6" />, 
              title: 'Stable Power Supply',
              description: 'Ensures continuous, reliable power even during grid outages or instability, offering peace of mind for homeowners.'
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Energy Independence',
              description: 'By storing excess energy, homeowners can reduce their reliance on the grid, particularly during peak hours or power disruptions.'
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: 'Scalable Design',
              description: 'The modular architecture allows the system to be tailored to specific energy needs of any household with flexible capacity options.'
            },
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: 'Cost Savings',
              description: 'Optimize energy usage by storing cheaper, off-peak electricity and utilizing it during peak periods, significantly lowering energy bills.'
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              title: 'Smart Energy Management',
              description: 'Integrated with advanced monitoring software, enabling real-time data tracking and remote control for full visibility over energy usage.'
            }
          ]}
        />
      </section>

      {/* Technical Features */}
      <section id="features">
        <FeatureAccordion
          sections={[
            {
              title: 'System Architecture & Connectivity',
              content: (
                <div className="space-y-4">
                  <p>Comprehensive integration capabilities with generators, heat pumps, and EV chargers for a complete energy ecosystem.</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Seamless integration with existing electrical systems</li>
                    <li>Multiple inverters can operate together to form microgrids</li>
                    <li>Compatible with various battery chemistries and configurations</li>
                    <li>Supports both grid-tied and off-grid operation modes</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Smart Energy Management Features',
              content: (
                <div className="space-y-4">
                  <p>Advanced monitoring and control systems provide real-time visibility and optimization.</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Real-time energy monitoring and data tracking</li>
                    <li>Remote system control and configuration</li>
                    <li>Six different TOU (Time of Use) charging/discharging settings</li>
                    <li>Intelligent load management for critical and non-critical circuits</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Safety & Protection Systems',
              content: (
                <div className="space-y-4">
                  <p>Comprehensive protection features ensure safe and reliable operation under all conditions.</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>LiFePO4 chemistry for enhanced safety and longevity</li>
                    <li>Overcharge, overvoltage, and overcurrent protection</li>
                    <li>200% overload capability for 10 seconds</li>
                    <li>Automatic switchover in less than 4ms during outages</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Installation & Maintenance Benefits',
              content: (
                <div className="space-y-4">
                  <p>Designed for easy installation and minimal maintenance requirements.</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Modular design allows for easy system expansion</li>
                    <li>Multiple mounting options: wall, rack, stack, and mobile</li>
                    <li>Low self-discharge rates for extended storage capability</li>
                    <li>Professional installation and ongoing support available</li>
                  </ul>
                </div>
              )
            }
          ]}
        />
      </section>

      {/* Packages */}
      <PackagesGrid
        packages={[
          {
            name: 'Essential Backup',
            power: '3–5 kW',
            storage: '5–10 kWh',
            models: ['S6-EH1P3K-L-PLUS','S6-EH1P5K-L-PLUS'],
            description: 'Keeps critical loads on during outages (lighting, router, fridge).'
          },
          {
            name: 'Family Plus',
            power: '5–8 kW',
            storage: '10–20 kWh',
            models: ['S6-EH1P6K-L-PLUS','S6-EH1P8K-L-PLUS'],
            description: 'Comfortable daily self‑consumption with extended backup.'
          },
          {
            name: 'Whole‑Home',
            power: '10–15 kW',
            storage: '20–30 kWh',
            models: ['S6-EH1P(12-16)K03-NV-YD-L','S6-EH3P12K02-NV-YD-L'],
            description: 'Large homes or villas; supports heavier loads and three‑phase.'
          }
        ]}
      />

      {/* Trust strip */}
      <CertificationsStrip />

      {/* Gallery */}
      <section id="gallery" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Recent installations</h2>
          <p className="section-description mt-2">A glimpse of residential systems we deliver.</p>
          <div className="mt-6">
            <ProductGallery
              images={[
                {
                  src: '/lovable-uploads/9cdbafdc-f0ac-43c4-b5ad-53b098e4e4b6.png',
                  alt: 'Retail store off-grid solar PV and battery storage in Kano, Nigeria – 16 kW PV + 8 kW / 15 kWh BESS, daily generation 80 kWh',
                  caption: 'Retail Store, Kano State, Nigeria — 16 kW Solar PV + 8 kW / 15 kWh BESS. Daily generation: 80 kWh. Solution: Reliable off-grid power ensuring uninterrupted operations.'
                },
                {
                  src: '/lovable-uploads/412b7ab0-d860-400f-a41a-fdce856bdf2d.png',
                  alt: 'Premium hotel grid-tied solar PV with battery backup in Tashkent, Uzbekistan – 20 kW PV + 5 kW / 10 kWh BESS, daily generation 125 kWh',
                  caption: 'Premium Hotel, Tashkent, Uzbekistan — 20 kW Grid-tied Solar PV + 5 kW / 10 kWh BESS. Daily generation: 125 kWh. Solution: Energy cost reduction and grid backup.'
                },
                {
                  src: '/lovable-uploads/32fb7789-44da-4324-a888-fed42b5da73b.png',
                  alt: 'Kindergarten solar PV and battery storage in Dushanbe, Tajikistan — 5 kW PV + 5 kW / 19.2 kWh BESS, daily generation 20 kWh',
                  caption: 'Kindergarten, Dushanbe, Tajikistan — 5 kW Solar PV + 5 kW / 19.2 kWh BESS. Daily generation: 20 kWh. Solution: Energy security for educational facilities with extended backup.'
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqList
        items={[
          { q: 'Will solar work during grid outages?', a: 'Yes. With a hybrid inverter and batteries, critical circuits remain powered even when the grid is down.' },
          { q: 'How many batteries do I need?', a: 'It depends on daily consumption and desired backup time. We size storage after a quick load assessment.' },
          { q: 'Can I expand later?', a: 'Yes. The system is modular. You can add more batteries or upgrade inverter power as needs grow.' },
          { q: 'Do you offer monitoring?', a: 'Smart monitoring provides real‑time visibility and remote configuration for optimal performance.' }
        ]}
      />

      {/* Downloads */}
      <DownloadsStrip />

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready to design your home system?</h3>
            <p className="text-gray-600">Talk to our experts for a tailored residential solution.</p>
          </div>
          <Button asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Residential;
