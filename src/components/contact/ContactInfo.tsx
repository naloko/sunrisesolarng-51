import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { CONTACT, buildTelLink, buildMailtoLink, buildWhatsAppLink } from '../../config/contact';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      primary: CONTACT.phoneDisplay,
      secondary: '+8615964341134',
      action: () => window.location.href = buildTelLink(CONTACT.phoneE164),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: CONTACT.email,
      secondary: 'Quick response guaranteed',
      action: () => window.location.href = buildMailtoLink(CONTACT.email, CONTACT.emailSubject, CONTACT.emailBody),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      primary: 'Inuwa Wada Road, Fagge',
      secondary: 'Kano, Nigeria',
      action: () => window.open('https://www.google.com/maps?q=XHM7%2BX7%20Kano', '_blank'),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Mon - Fri: 8:00 AM - 5:00 PM',
      secondary: 'Sat: 9:00 AM - 2:00 PM',
      action: null,
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <span className="text-primary text-sm font-medium">Contact Information</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred method of communication. We're here to help you with all your solar energy needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div 
                  className={`relative group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${detail.action ? 'cursor-pointer' : ''}`}
                  onClick={detail.action || undefined}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-12 h-12 bg-gradient-to-br ${detail.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800">
                      {detail.title}
                    </h3>
                    <p className="text-gray-700 font-medium mb-1">
                      {detail.primary}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {detail.secondary}
                    </p>
                  </div>

                  {/* Action Indicator */}
                  {detail.action && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Quick Actions */}
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
              <a
                href={buildWhatsAppLink(CONTACT.whatsappNumber, CONTACT.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-xl font-medium transition-colors hover:bg-green-600 mr-2"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              
              <a
                href={buildTelLink(CONTACT.phoneE164)}
                className="inline-flex items-center text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors hover:bg-gray-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Direct
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactInfo;