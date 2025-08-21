import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export type FAQ = { q: string; a: string };

interface FaqListProps {
  items: FAQ[];
  title?: string;
  description?: string;
}

const FaqList: React.FC<FaqListProps> = ({ items, title = 'FAQs', description = 'Common questions about residential solar + storage.' }) => {
  return (
    <section id="faqs" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{title}</h2>
        <p className="section-description mt-2">{description}</p>
        <div className="mt-6 rounded-xl border border-gray-100 bg-white p-2">
          <Accordion type="single" collapsible>
            {items.map((f, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-base text-gray-900">{f.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
