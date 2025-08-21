import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const slides = [
  {
    image: '/lovable-uploads/1ab8907a-e014-4416-ba4b-2f7217002d9a.png',
    title: 'Solar Water Heater',
    desc: 'Efficient hot water with solar thermal technology',
    link: '/products/solar-water-heater',
    alt: 'Solar water heater product photo',
  },
  {
    image: '/lovable-uploads/be0620a9-b789-464b-b554-66d4c2376130.png',
    title: 'Solar Panels',
    desc: 'High-efficiency modules for homes and businesses',
    link: '/products/solar-panel',
    alt: 'Solar panel array close-up',
  },
  {
    image: '/lovable-uploads/425045d0-781c-4a14-a59f-41dfee50cafb.png',
    title: 'Energy Storage',
    desc: 'Reliable batteries for day‑night power continuity',
    link: '/products/energy-storage',
    alt: 'Energy storage battery stack',
  },
  {
    image: '/lovable-uploads/05c1eed8-c553-48b3-ba7b-0e8d3e3bb27b.png',
    title: 'Inverters',
    desc: 'Smart, safe DC→AC conversion with monitoring',
    link: '/products/inverter',
    alt: 'Solar inverter product render',
  },
];

const FeaturedProductsCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem
              key={i}
              className="basis-full sm:basis-2/3 lg:basis-1/3"
            >
              <div className="group h-full rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] w-full bg-gray-50">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-contain p-4"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                  <div className="mt-3">
                    <Link to={s.link} className="inline-flex items-center text-primary font-medium hover:underline">
                      View details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 bg-white/90 shadow" />
        <CarouselNext className="-right-6 bg-white/90 shadow" />
      </Carousel>
    </div>
  );
};

export default FeaturedProductsCarousel;
