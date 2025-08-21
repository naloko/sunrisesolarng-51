import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const ContactMap = () => {
  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir//XHM7%2BX7%20Kano', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">Visit Our Office</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us in Kano
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our office is conveniently located in the heart of Kano. Drop by for a consultation or to see our solar solutions in action.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <AnimatedSection animation="slide-in-left">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">Office Address</h3>
                      <p className="text-gray-500">Our main location</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900">Inuwa Wada Road</p>
                      <p className="text-gray-600">Fagge, Kano State</p>
                      <p className="text-gray-600">Nigeria</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <button
                        onClick={handleGetDirections}
                        className="group w-full bg-primary text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center"
                      >
                        <Navigation className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                        Get Directions
                        <ExternalLink className="w-4 h-4 ml-2 opacity-75" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="lg:col-span-2">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                  {/* Map Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  
                  <iframe
                    title="Sunrise Solar Nigeria Office Location"
                    src="https://www.google.com/maps?q=XHM7%2BX7%20Kano&output=embed&z=15"
                    className="w-full h-full border-0 transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Interactive map showing Sunrise Solar Nigeria office location at Inuwa Wada Road, Fagge, Kano, Nigeria"
                  />
                  
                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      onClick={handleGetDirections}
                      className="bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-xl group"
                      title="Get directions to our office"
                    >
                      <Navigation className="w-5 h-5 transition-transform group-hover:rotate-12" />
                    </button>
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

export default ContactMap;