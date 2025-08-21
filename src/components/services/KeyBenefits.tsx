import React, { ReactNode } from 'react';

export type BenefitItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface KeyBenefitsProps {
  items: BenefitItem[];
}

const KeyBenefits: React.FC<KeyBenefitsProps> = ({ items }) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article key={i} className="service-card">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
