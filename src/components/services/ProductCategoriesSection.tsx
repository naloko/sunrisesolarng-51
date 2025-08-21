import React from 'react';
import ModelChip from './ModelChip';

interface ProductCategoriesSectionProps {
  title?: string;
}

const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({ 
  title = "Product Categories" 
}) => {
  const singlePhaseModels = [
    'S6-EH1P3K-L-PLUS', 'S6-EH1P3.6K-L-PLUS', 'S6-EH1P4.6K-L-PLUS', 
    'S6-EH1P5K-L-PLUS', 'S6-EH1P6K-L-PLUS', 'S6-EH1P8K-L-PLUS',
    'S6-EH1P(12-16)K03-NV-YD-L'
  ];
  
  const threePhaseModels = [
    'S6-EH3P8K02-NV-YD-L', 'S6-EH3P10K02-NV-YD-L', 
    'S6-EH3P12K02-NV-YD-L', 'S6-EH3P15K02-NV-YD-L'
  ];

  const batteryTypes = [
    {
      name: 'Stack Type',
      description: 'Modular expandable system for flexible capacity growth',
      image: '/lovable-uploads/fe865009-8ef8-4482-9f03-025d7b0bbe65.png',
      features: ['Overcharge protection', 'Overvoltage protection', 'Overcurrent protection', 'Recycling capability', 'Low self-discharge', 'Stable performance']
    },
    {
      name: 'Rack Type', 
      description: 'Data center style installation for professional applications',
      image: '/lovable-uploads/a5eb7998-5d89-4941-9fe8-af8dc0a25024.png',
      features: ['High energy density', 'Long cycle life', 'Fast charging', 'Professional mounting', 'Efficient cooling', 'Reliable operation']
    },
    {
      name: 'Wall-Mounted',
      description: 'Space-saving residential option with 48V/51.2V LiFePO4',
      image: '/lovable-uploads/858eba73-a44f-4610-b8b5-fdebedf62d57.png',
      features: ['Space saving design', 'Easy installation', 'Home integration', 'Safety focused', 'Long lifespan', 'Maintenance free']
    },
    {
      name: 'Vertical Type',
      description: 'Mobile 15kWh system with wheels for flexible placement',
      image: '/lovable-uploads/77d8f05c-07e1-41f2-9463-07744cde539e.png',
      features: ['15kWh capacity', 'Mobile design', 'Four-wheel system', 'Emergency power', 'Workshop ready', 'Portable solution']
    }
  ];

  return (
    <section id="categories" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">{title}</h2>
        
        {/* Single Phase Inverters */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Single Phase Low Voltage Inverters</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  New PLUS model provides solutions for demanding power scenarios with advanced features and reliable performance.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Automatic switchover time &lt; 4ms for seamless transitions
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    200% overload capability for 10 seconds
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Maximum input current of 20A for high-power PV modules
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Battery DC side up to 290A charge/discharge current
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Available Models</h4>
                <div className="flex flex-wrap gap-2">
                  {singlePhaseModels.map(model => (
                    <ModelChip key={model} label={model} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <img 
                src="/lovable-uploads/fc4ab4eb-8224-4075-ae05-ec9663522f53.png" 
                alt="Single phase low voltage energy storage inverter"
                className="w-full max-w-xs h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
              <img 
                src="/lovable-uploads/98708db8-79a8-4c51-a89d-c6cd7c49dc4c.png" 
                alt="Single phase low voltage energy storage inverter - NEW model"
                className="w-full max-w-xs h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Three Phase Inverters */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img 
                src="/lovable-uploads/e7c89906-1b1e-48fa-93b4-62d1496c4f2d.png" 
                alt="Three phase low voltage energy storage inverter"
                className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Three Phase Low Voltage Inverters</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Advanced three-phase systems supporting unbalanced and half-wave loads on both grid and backup ports.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Advanced Features</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Supports unbalanced and half-wave loads on both ports
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Maximum 20A PV input current for all high-power modules
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Battery DC side handles up to 290A charge/discharge
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    Excellent stability with weak grids or generator supply
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Available Models</h4>
                <div className="flex flex-wrap gap-2">
                  {threePhaseModels.map(model => (
                    <ModelChip key={model} label={model} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Battery Storage Systems */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Battery Storage Systems</h3>
            <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Complete range of LiFePO4 battery systems designed for safety, longevity, and flexible capacity expansion.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {batteryTypes.map((battery, index) => (
              <article key={index} className="rounded-xl border border-border bg-card/50 p-6 text-center">
                <div className="mb-4">
                  <img 
                    src={battery.image} 
                    alt={`${battery.name} battery storage system`}
                    className="w-full h-32 object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{battery.name}</h4>
                <p className="text-sm text-foreground/70 mb-4">{battery.description}</p>
                <div className="text-xs text-foreground/60">
                  <ul className="space-y-1">
                    {battery.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;