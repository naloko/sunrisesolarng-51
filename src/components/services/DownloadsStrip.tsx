import React from 'react';
import { BROCHURES } from '@/config/brochures';
import { Download } from 'lucide-react';

interface DownloadsStripProps {
  title?: string;
  description?: string;
}

const DownloadsStrip: React.FC<DownloadsStripProps> = ({ title = 'Downloads', description = 'Datasheets and brochures for home energy products.' }) => {
  return (
    <section id="downloads" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{title}</h2>
        <p className="section-description mt-2">{description}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BROCHURES.map((b) => (
            <a
              key={b.id}
              href={`/brochures/${b.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm hover:border-primary/30 hover:shadow"
            >
              <div>
                <div className="text-sm font-medium text-gray-900">{b.title}</div>
                <div className="text-xs text-gray-500">{b.lang ?? 'EN'} · PDF</div>
              </div>
              <Download className="h-4 w-4 text-primary" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsStrip;
