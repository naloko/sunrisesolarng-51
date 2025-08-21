import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a solar installation cost?",
      answer: "Solar installation costs vary based on your energy needs, property size, and system specifications. We provide free consultations and detailed quotes tailored to your specific requirements. Our residential systems typically range from ₦2-8 million, while commercial installations are priced based on scale and complexity."
    },
    {
      question: "How long does installation take?",
      answer: "Residential installations typically take 1-3 days, depending on system size and roof complexity. Commercial projects usually take 1-2 weeks, including all electrical work and grid connection. We provide a detailed timeline during your consultation and keep you updated throughout the process."
    },
    {
      question: "What maintenance is required?",
      answer: "Solar systems require minimal maintenance. We recommend annual professional inspections and occasional cleaning to ensure optimal performance. Our comprehensive maintenance packages include system monitoring, cleaning, and performance optimization to maximize your investment."
    },
    {
      question: "Do you provide warranties?",
      answer: "Yes, we provide comprehensive warranties on all installations. Solar panels come with 25-year performance warranties, inverters have 10-15 year warranties, and our installation work is covered for 5 years. We also partner with leading manufacturers to ensure long-term support."
    },
    {
      question: "How much can I save on electricity bills?",
      answer: "Most customers see 70-90% reduction in their electricity bills. Savings depend on your energy consumption, system size, and local electricity rates. With Nigeria's rising energy costs, many customers achieve full payback within 3-5 years and continue saving for decades."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer flexible financing solutions including installment plans and partnerships with financial institutions. Our goal is to make solar accessible to everyone. We'll work with you to find a payment plan that fits your budget and maximizes your savings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our solar solutions, installation process, and services.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFAQ === index ? 'rotate-180 bg-primary text-white' : 'text-primary'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Still have questions CTA */}
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our solar experts are here to help. Get personalized answers to your specific questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Send us a message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+2349098888119"
                    className="inline-flex items-center bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                  >
                    Call us directly
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;