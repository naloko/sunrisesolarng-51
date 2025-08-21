import React from 'react';

export type StatItem = {
  label: string;
  value: string;
};

interface AtAGlanceStatsProps {
  items: StatItem[];
  title?: string;
  description?: string;
}

const AtAGlanceStats: React.FC<AtAGlanceStatsProps> = ({ items, title = 'At a glance', description = 'Key capabilities for reliable home energy.' }) => {
  return (
    <section id="overview" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{title}</h2>
        <p className="section-description mt-2">{description}</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceStats;
