
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../../components/AnimatedSection';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT } from '../../config/contact';

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Solar panel background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/e98919f1-676b-4e7c-85df-877382b8999c.png')] bg-cover bg-center" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-16">
              <span className="inline-block text-primary bg-primary/20 backdrop-blur-sm border border-primary/30 px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                {t('about.joinUs')}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('about.ctaTitle')}
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t('about.ctaSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CTA Actions */}
            <AnimatedSection animation="slide-in-left" delay={200}>
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link 
                    to="/contact" 
                    className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    {t('about.contactCta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/projects" 
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 flex items-center justify-center"
                  >
                    {t('about.projectsCta')}
                  </Link>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-gray-400 text-sm">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slide-in-right" delay={400}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-gray-400 text-sm">{CONTACT.phoneDisplay}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-gray-400 text-sm">{CONTACT.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Visit Us</div>
                      <div className="text-gray-400 text-sm">Kano, Nigeria</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaSection;
