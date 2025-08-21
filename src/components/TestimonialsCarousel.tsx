import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: "Zhang Wei",
    company: "Shanghai Green Energy Co.",
    role: "CEO",
    content: "Sunrise Solar delivered exceptional quality and service. Our commercial installation has exceeded energy production expectations by 15%.",
    rating: 5,
    avatar: "/lovable-uploads/413059b7-7b70-4f16-8f06-d9ab3ed8dda7.png"
  },
  {
    id: 2,
    name: "Lisa Chen",
    company: "EcoHome Solutions",
    role: "Project Manager",
    content: "Professional installation, competitive pricing, and outstanding after-sales support. Highly recommend for residential projects.",
    rating: 5,
    avatar: "/lovable-uploads/425045d0-781c-4a14-a59f-41dfee50cafb.png"
  },
  {
    id: 3,
    name: "Michael Johnson",
    company: "Industrial Solar Corp",
    role: "Director",
    content: "Their technical expertise and project management capabilities are top-notch. Completed our 5MW installation ahead of schedule.",
    rating: 5,
    avatar: "/lovable-uploads/412b7ab0-d860-400f-a41a-fdce856bdf2d.png"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-description">
            Trusted by businesses and homeowners across China
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 sm:px-8">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;