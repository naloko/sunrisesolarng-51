import React from 'react';

export type PackageSpec = {
  name: string;
  power?: string; // e.g., "5 kW"
  storage?: string; // e.g., "10 kWh"
  models?: string[];
  description?: string;
};

interface PackagesGridProps {
  packages: PackageSpec[];
  title?: string;
  description?: string;
}

const PackagesGrid: React.FC<PackagesGridProps> = ({ packages, title = 'Recommended packages', description = 'Typical residential setups. Final design depends on your loads and goals.' }) => {
  return (
    <section id="packages" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{title}</h2>
        <p className="section-description mt-2">{description}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <article key={p.name} className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <header className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </header>
              <ul className="text-sm text-gray-700 space-y-2">
                {p.power && (
                  <li><span className="font-medium">Inverter power:</span> {p.power}</li>
                )}
                {p.storage && (
                  <li><span className="font-medium">Battery storage:</span> {p.storage}</li>
                )}
                {p.models && p.models.length > 0 && (
                  <li>
                    <span className="font-medium">Models:</span> {p.models.join(', ')}
                  </li>
                )}
              </ul>
              <footer className="mt-5 text-xs text-gray-500">Specs indicative; final configuration after site assessment.</footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesGrid;
