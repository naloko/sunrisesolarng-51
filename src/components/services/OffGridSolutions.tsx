import React from 'react';
import ModelChip from './ModelChip';

interface OffGridSolutionsProps {
  title?: string;
}

const OffGridSolutions: React.FC<OffGridSolutionsProps> = ({ 
  title = "Off-grid Energy Storage Solutions"
}) => {
  const models = ['S6-EO1P4K-48', 'S6-EO1P5K-48'];
  
  const features = [
    'Generator-compatible to extend backup duration during grid power outage',
    'Multiple inverters can operate together to form a microgrid',
    'Supports dual backup ports for intelligent control of critical and non-critical loads',
    'Supports six different batteries charging and discharging TOU (Time of Use) settings',
    '10 seconds of 200% overload capability',
    'Suitable for lithium batteries, compatible with non-communicating batteries'
  ];

  return (
    <section id="offgrid" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-8">{title}</h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - System Diagram */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative max-w-md w-full">
              <img 
                src="/lovable-uploads/26d5abcc-174d-4183-a623-c4627bdcfd21.png" 
                alt="Off-grid energy storage system configuration with Solis inverter"
                className="w-full h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right side - Description and Features */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our off-grid Energy Storage System is designed for residential off-grid systems in countries without stable grid power, which can work with batteries to supply power to loads and can also charge the batteries through PV plants, grid or generator.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our off-grid inverter has a variety of application scenarios combination modes, and can realize modular system assembly configuration according to needs, providing multiple products in parallel to form up to 30kW single-phase parallel operation system which is very suitable for small industrial, commercial or residential energy storage projects.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Available Models</h3>
              <div className="flex flex-wrap gap-2">
                {models.map(model => (
                  <ModelChip key={model} label={model} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffGridSolutions;