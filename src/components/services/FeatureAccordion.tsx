import React, { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export type FeatureSection = {
  title: string;
  content: ReactNode;
};

interface FeatureAccordionProps {
  sections: FeatureSection[];
}

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({ sections }) => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Accordion type="multiple" className="w-full">
          {sections.map((sec, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold">
                {sec.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="prose max-w-none text-gray-700">
                  {sec.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FeatureAccordion;
