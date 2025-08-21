import React from 'react';

interface SystemConfigurationsSectionProps {
  title?: string;
}

const SystemConfigurationsSection: React.FC<SystemConfigurationsSectionProps> = ({ 
  title = "System Configurations" 
}) => {
  return (
    <section id="configurations" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-8">{title}</h2>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Choose from our pre-configured hybrid photovoltaic and storage systems designed for different residential energy needs. Each configuration includes PV modules, hybrid inverter, and lithium battery storage.
            </p>
          </div>
          
          <div className="bg-card/50 rounded-xl border border-border overflow-hidden">
            <img 
              src="/lovable-uploads/1fa7f3cf-4fd8-4ef3-ac90-10c24f499860.png" 
              alt="Hybrid photovoltaic and storage system configurations - 5kW/10kWh, 10kW/20kWh, 15kW/30kWh, and 20kW/40kWh systems"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 rounded-lg border border-border bg-card/30">
              <div className="text-lg font-bold text-primary">5kW/10kWh</div>
              <div className="text-sm text-foreground/70 mt-1">Small residential</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-border bg-card/30">
              <div className="text-lg font-bold text-primary">10kW/20kWh</div>
              <div className="text-sm text-foreground/70 mt-1">Medium home</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-border bg-card/30">
              <div className="text-lg font-bold text-primary">15kW/30kWh</div>
              <div className="text-sm text-foreground/70 mt-1">Large home</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-border bg-card/30">
              <div className="text-lg font-bold text-primary">20kW/40kWh</div>
              <div className="text-sm text-foreground/70 mt-1">Villa/Estate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemConfigurationsSection;