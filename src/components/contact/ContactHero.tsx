import { Phone, Mail } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { CONTACT, buildTelLink, buildMailtoLink } from '../../config/contact';

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('/lovable-uploads/2cd49726-2b3c-4c67-8cc8-416dbc8fa7ec.png')`
           }}>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/75 to-gray-900/85"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-primary text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Let's Build Your
              <span className="text-primary block">Solar Future</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to make the switch to clean, renewable energy? Our experts are here to guide you through every step of your solar journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={buildTelLink(CONTACT.phoneE164)}
                className="group inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                <Phone className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                Call Now
              </a>
              
              <a
                href={buildMailtoLink(CONTACT.email, CONTACT.emailSubject, CONTACT.emailBody)}
                className="group inline-flex items-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                Send Email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;