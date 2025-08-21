import React from 'react';

interface OverviewSectionProps {
  title?: string;
  systemDiagramSrc: string;
  systemDiagramAlt: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ 
  title = "Residential Solutions Overview",
  systemDiagramSrc,
  systemDiagramAlt
}) => {
  return (
    <section id="overview" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-8">{title}</h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Achieve energy independence with Tanso Home Solutions!
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Residential Energy Storage System is a cutting-edge solution designed to meet the growing demand for sustainable, stable, and reliable home energy management.
              </p>
            </div>
            
            <div>
              <p className="text-foreground/80 leading-relaxed">
                An efficient all-in-one solar energy storage solution combining a hybrid inverter, solar battery, and BMS. It seamlessly integrates with generators, heat pumps, and EV chargers for a comprehensive energy storage solution.
              </p>
            </div>
            
            <div>
              <p className="text-foreground/80 leading-relaxed">
                As a leading home energy storage system manufacturer, TANSO Solar offers homeowners the ability to store excess solar energy generated during the day and use it when needed, ensuring a stable and uninterrupted power supply while maximizing energy efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg border border-border bg-card/50">
                <div className="text-2xl font-bold text-primary">≤ 4ms</div>
                <div className="text-sm text-foreground/70 mt-1">Automatic switchover</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/50">
                <div className="text-2xl font-bold text-primary">200%</div>
                <div className="text-sm text-foreground/70 mt-1">10s overload capability</div>
              </div>
            </div>
          </div>
          
          {/* Right side - System Diagram */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <img 
                src="/lovable-uploads/95b4d6fb-eb3e-484f-bd92-46180ad4ad56.png" 
                alt="Residential energy storage system architecture diagram"
                className="w-full h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;