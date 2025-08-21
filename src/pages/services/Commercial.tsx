import React from 'react';
import SEO from '@/components/SEO';
import ServiceHero from '@/components/services/ServiceHero';
import OverviewSection from '@/components/services/OverviewSection';
import KeyBenefits from '@/components/services/KeyBenefits';
import ProductCategoriesSection from '@/components/services/ProductCategoriesSection';
import SystemConfigurationsSection from '@/components/services/SystemConfigurationsSection';
import ModelChip from '@/components/services/ModelChip';
import { ShieldCheck, TrendingDown, Factory, Settings, Layers, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnchorNav from '@/components/services/AnchorNav';

import PackagesGrid from '@/components/services/PackagesGrid';
import FaqList from '@/components/services/FaqList';
import DownloadsStrip from '@/components/services/DownloadsStrip';
import CertificationsStrip from '@/components/about/sections/CertificationsStrip';
import ProductGallery from '@/components/products/ProductGallery';

const Commercial: React.FC = () => {
  return (
    <main>
      <SEO
        title="Commercial & Industrial Solutions | Sunrise Solar"
        description="Reliable commercial and industrial solar PV and energy storage solutions for businesses - retail, factories, offices, warehouses, and hospitals."
        canonicalPath="/services/commercial"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Commercial & Industrial Solar Energy Solutions',
          serviceType: 'C&I solar + storage',
          provider: { '@type': 'Organization', name: 'Sunrise Solar' },
          areaServed: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'NG' } }
        }}
      />

      <ServiceHero
        title="Commercial & Industrial Solutions"
        subtitle="Reliable backup, lower electricity costs, and intelligent energy management for businesses."
        imageSrc="/lovable-uploads/6570ad01-9978-4879-af90-acb6fa9f62e4.png"
        imageAlt="Aerial view of commercial solar facility with panels and wind turbines"
        ctaText="Speak with an Expert"
        ctaLink="/contact"
      />

      <AnchorNav
        items={[
          { href: '#overview', label: 'Overview' },
          { href: '#benefits', label: 'Benefits' },
          { href: '#solutions', label: 'Solutions' },
          { href: '#categories', label: 'Product Categories' },
          { href: '#models', label: 'Models' },
          { href: '#packages', label: 'Packages' },
          { href: '#faqs', label: 'FAQs' },
          { href: '#downloads', label: 'Downloads' }
        ]}
      />

      {/* Overview */}
      <section id="overview" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-8">Commercial & Industrial Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Reliable C&I Solar + Storage Solutions
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Sunrise Solar provides reliable commercial and industrial (C&I) solar PV and energy storage solutions, ideal for a variety of businesses, including retail stores, factories, offices, warehouses, and hospitals, etc.
                </p>
              </div>
              
              <div>
                <p className="text-foreground/80 leading-relaxed">
                  Our tailored systems ensure uninterrupted power supply, optimize energy usage, and significantly reduce operational costs. With a focus on long term growth and energy resilience, Sunrise Solar is your trusted partner for efficient and sustainable energy solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 rounded-lg border border-border bg-card/50">
                  <div className="text-2xl font-bold text-primary">≤ 10ms</div>
                  <div className="text-sm text-foreground/70 mt-1">Emergency switchover</div>
                </div>
                <div className="text-center p-4 rounded-lg border border-border bg-card/50">
                  <div className="text-2xl font-bold text-primary">200%</div>
                  <div className="text-sm text-foreground/70 mt-1">DC/AC oversizing ratio</div>
                </div>
              </div>
            </div>
            
            {/* Right side - System Diagram */}
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <img 
                  src="/lovable-uploads/8af8f7a5-7abc-4a8b-aa47-8e4f81dd11a7.png" 
                  alt="Comprehensive C&I solar system diagram showing PV, battery, inverter and grid connections"
                  className="w-full h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* System Configurations */}
      <section id="configurations" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-8">System Configurations</h2>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Scalable hybrid photovoltaic and energy storage systems for commercial and industrial applications from 30kW to 1000kW with battery storage.
              </p>
            </div>
            
            <div className="bg-card/50 rounded-xl border border-border overflow-hidden">
              <img 
                src="/lovable-uploads/b1a3174d-e7d1-4249-bed4-d7d4478e80f0.png" 
                alt="C&I hybrid system configurations from 30kW to 1000kW with battery storage"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-lg font-bold text-primary">30K+86KWH</div>
                <div className="text-sm text-foreground/70 mt-1">Small commercial</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-lg font-bold text-primary">500K+860KWH</div>
                <div className="text-sm text-foreground/70 mt-1">Medium industrial</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-lg font-bold text-primary">50K+100KWH</div>
                <div className="text-sm text-foreground/70 mt-1">Large commercial</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-lg font-bold text-primary">1000K+2408KWH</div>
                <div className="text-sm text-foreground/70 mt-1">Industrial complex</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Product Categories</h2>
          <p className="text-center text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-16">
            Comprehensive range of commercial and industrial energy solutions.
          </p>
          
          {/* Three Phase High Voltage Energy Storage Inverters */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Three Phase High Voltage Energy Storage Inverters</h3>
                  <h4 className="text-lg text-primary mb-4">S6-EH3P (29.9-50) K-H</h4>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Advanced three-phase inverter systems with 160% overload capability and intelligent management features.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      2 seconds of 160% overload capability
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Supports a maximum input current of 20A for all high-power PV modules
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Real-time battery monitoring, remote upgrade, and battery healing function
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Battery charging/discharging current 140A/70A+70A (280Ah cell standard)
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/82092270-a4ad-4fb2-8b12-026b4c5d3273.png" 
                  alt="Three phase high voltage energy storage inverter unit"
                  className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* MPS Microgrid Hybrid Inverter */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <img 
                  src="/lovable-uploads/d2dcb5e9-f305-4a44-8d39-0c1e60036808.png" 
                  alt="MPS microgrid hybrid inverter cabinet system"
                  className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">MPS Microgrid Hybrid Inverter</h3>
                  <h4 className="text-lg text-primary mb-4">For Off-grid Applications</h4>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Integrated solution for off-grid environments with flexible control strategies and generator integration.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Strengths</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Integrated PV/MPPT module/transformer/STS and maintenance bypass
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Support 100% unbalance and parallel connection
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Support DG load rate control to improve fuel economy
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Off-grid mine', 'Off-grid island', 'Nomadic farm', 'Villages without electricity'].map(app => (
                      <span key={app} className="badge">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rack Module High Voltage ESS */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Rack Module High Voltage ESS</h3>
                  <h4 className="text-lg text-primary mb-4">TS-HV100R / TS-HV280R / TS-HV314R</h4>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Compact high-density battery storage with expandable modular design and comprehensive protection.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Features</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Smaller footprint with higher energy density from latest LFP technology
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Expandable module design, Maximum 5.12kWh *12S*10P
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Real-time monitoring, online system updates and maintenance
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Complete protection suite including temperature and short-circuit protection
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/c248fcc7-721d-4c7d-9d66-c08df786ee82.png" 
                  alt="Rack mounted high voltage ESS battery system with display"
                  className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* All-in-one Hybrid Energy Storage System */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <img 
                  src="/lovable-uploads/7984cb3d-6c82-45ba-acbf-c8e0ff196451.png" 
                  alt="All-in-one hybrid energy storage system with multiple battery modules"
                  className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">All-in-one Hybrid Energy Storage System</h3>
                  <h4 className="text-lg text-primary mb-4">Complete Integrated Solution</h4>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Air cooling energy storage system designed for various scenarios including charging stations, supermarkets, farms and factories.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Complete Solution</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      EMS, hybrid inverter and BMS integration technology
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Support for black start function and off-grid operation
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Aerosol fire suppression and comprehensive safety protection
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Flexible extension: capacity expandable to megawatts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* On-grid Solar Solutions */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">On-grid Solar Solutions</h3>
                  <h4 className="text-lg text-primary mb-4">Grid-Connected Systems</h4>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Connected to the utility grid for continuous power access with net metering benefits and lower initial costs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Benefits</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Lower initial costs without expensive battery storage
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Access to unlimited power through grid connection
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Net metering benefits and financial incentives
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Low maintenance requirements and high reliability
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/068dfc73-a478-42f9-bf45-dc9b9e6d6f4f.png" 
                  alt="Large-scale on-grid solar installation with multiple panel arrays"
                  className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-12" id="models">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Models</h2>
          <p className="section-description mt-2">High-voltage inverter and ESS modules for C&I deployments.</p>
          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-3 font-semibold text-lg">Three Phase HV Inverters</div>
              <div className="flex flex-wrap gap-2">
                {['S6-EH3P(29.9-50)K-H'].map(m => <ModelChip key={m} label={m} />)}
              </div>
            </div>
            <div>
              <div className="mb-3 font-semibold text-lg">HV ESS Rack Modules</div>
              <div className="flex flex-wrap gap-2">
                {['TS-HV100R','TS-HV280R','TS-HV314R'].map(m => <ModelChip key={m} label={m} />)}
              </div>
            </div>
            <div>
              <div className="mb-3 font-semibold text-lg">Microgrid Systems</div>
              <div className="flex flex-wrap gap-2">
                {['MPS Hybrid Inverter'].map(m => <ModelChip key={m} label={m} />)}
              </div>
            </div>
            <div>
              <div className="mb-3 font-semibold text-lg">All-in-one Systems</div>
              <div className="flex flex-wrap gap-2">
                {['Hybrid ESS Cabinet'].map(m => <ModelChip key={m} label={m} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits">
        <KeyBenefits
          items={[
            {
              icon: <ShieldCheck className="w-6 h-6" />, 
              title: 'Reliable Backup Power',
              description: 'Ensure seamless operations during power outages with a swift 10ms switch to emergency power, preventing costly disruptions.'
            },
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: 'Lower Electricity Bills',
              description: 'The SUNRISE SOLAR C&I solution leverages dynamic pricing, allowing the system to charge during off-peak periods and discharge during peak times, optimizing energy costs.'
            },
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: 'Save on Operating Costs',
              description: 'By storing energy during off-peak hours and using it during peak demand, businesses can significantly reduce operating expenses.'
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: 'Intelligent Management',
              description: 'Smart schedule, smart scene and 24/7 TOU for optimal energy management and efficiency.'
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: 'Flexible Operation',
              description: 'Compatible with micro-grids for integration with diverse energy systems. Seamless switching between grid-tied and off-grid modes. Support diesel generator integration, offering flexible power operations.'
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: 'Easy Installation',
              description: 'Scalable design, customizable to meet specific energy needs with modular components.'
            }
          ]}
        />
      </section>

      {/* Packages */}
      <PackagesGrid
        title="Recommended C&I packages"
        description="Typical commercial setups; final design depends on your load profile and site requirements."
        packages={[
          {
            name: 'Peak Shaving Starter',
            power: '30–50 kW',
            storage: '40–100 kWh',
            models: ['S6-EH3P(29.9-50)K-H','TS-HV100R'],
            description: 'Reduce demand charges by discharging during peaks; charge off-peak for significant savings.'
          },
          {
            name: 'UPS-grade Backup',
            power: '50–100 kW',
            storage: '100–300 kWh',
            models: ['MPS Hybrid Inverter','TS-HV280R'],
            description: '≤10 ms switchover keeps critical processes online; supports unbalanced three-phase loads.'
          },
          {
            name: 'Microgrid Cluster',
            power: '100 kW–1 MW',
            storage: '300 kWh–1+ MWh',
            models: ['All-in-one ESS Cabinet'],
            description: 'Islandable microgrid for campuses, factories, and remote sites with DG integration.'
          }
        ]}
      />

      {/* Recent Installations Gallery */}
      <section id="gallery" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Recent installations</h2>
          <p className="section-description mt-2">Commercial and industrial projects delivering reliable energy solutions.</p>
          <div className="mt-6">
            <ProductGallery
              images={[
                {
                  src: '/lovable-uploads/7987b07c-8660-4bb8-90b1-c97781a31474.png',
                  alt: 'Retail Complex commercial solar installation in Kano State, Nigeria with 17.64kW Solar PV and 16kW/51.2kWh Battery Energy Storage System',
                  caption: 'Retail Complex, Kano State, Nigeria — 17.64kW Solar PV + 16kW/51.2kWh Battery Energy Storage System (BESS). Daily Power Generation: 88kWh. Solution: Reliable off-grid power ensuring uninterrupted business operations.'
                },
                {
                  src: '/lovable-uploads/1c9d6049-4032-4ba8-be6c-34f6e65024e7.png',
                  alt: 'Government Building commercial solar installation in Democratic Republic of Congo with 130.5kW Solar PV and 150kW/174kWh Battery Storage System',
                  caption: 'Government Building, Democratic Republic of Congo — 130.5kW Solar PV + 150kW/174kWh Battery Storage System (BESS). Daily Power Generation: 650kWh. Solution: Ensures mission critical power continuity for administrative operations, enhancing reliability in critical government functions.'
                },
                {
                  src: '/lovable-uploads/f8cd7e6e-9f8e-454a-b58a-60a3f366c03c.png',
                  alt: 'Luxury Resort commercial solar installation in Palau with 500kW Solar PV and 500kW PCS/600kWh Battery Storage',
                  caption: 'Luxury Resort, Palau — 500kW Solar PV + 500kW PCS/600kWh Battery Storage. Daily Generation: 2,500 kWh. Solution: Integrated solar-storage system ensuring energy independence for remote island operations.'
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <CertificationsStrip />

      {/* FAQs */}
      <FaqList
        title="C&I FAQs"
        description="Common questions about commercial solar + storage systems."
        items={[
          { 
            q: 'Can the system keep critical loads running during outages?', 
            a: 'Yes. With hybrid inverters and batteries, critical circuits switch to backup power within ~10 ms, ensuring business continuity.' 
          },
          { 
            q: 'How do we size storage for peak shaving?', 
            a: 'We analyze your load profiles and peak demand patterns to determine optimal battery capacity for maximum cost savings and efficiency.' 
          },
          { 
            q: 'Can we scale the system as our operations grow?', 
            a: 'Absolutely. Our systems are modular and can scale from tens of kW to MW-class microgrids to match your business growth.' 
          },
          { 
            q: 'Do you support generator integration?', 
            a: 'Yes. Our microgrid-ready controllers coordinate PV, batteries, and diesel generators with flexible control strategies for optimal performance.' 
          },
          {
            q: 'What industries do you serve?',
            a: 'We provide solutions for retail stores, factories, offices, warehouses, hospitals, schools, and other commercial and industrial facilities.'
          },
          {
            q: 'What are the maintenance requirements?',
            a: 'Our systems feature real-time monitoring, remote diagnostics, and minimal maintenance requirements. Most components have 10+ year warranties.'
          }
        ]}
      />

      {/* Downloads */}
      <DownloadsStrip description="Datasheets and brochures for commercial and industrial energy products." />

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Explore a tailored C&I system</h3>
            <p className="text-gray-600">We design custom solutions for retail, factories, offices, warehouses, hospitals, and more.</p>
          </div>
          <Button asChild>
            <Link to="/contact">Request Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Commercial;