import { useEffect, useRef } from 'react';

const certificates = [
  {
    src: "/lovable-uploads/05822799-e8e6-4cc1-86b8-838ca2484eed.png",
    alt: "Specialized SME Enterprise Certificate"
  },
  {
    src: "/lovable-uploads/36b7d319-c20d-4b3e-83fd-dbbc9703c1ba.png",
    alt: "Advanced Enterprise Award"
  },
  {
    src: "/lovable-uploads/2aed2729-a216-4776-94a9-0588d6cbd476.png",
    alt: "Advanced Unit Certificate"
  },
  {
    src: "/lovable-uploads/9520725d-3f76-44d6-a272-2c2ba6bb4623.png",
    alt: "High-Tech Enterprise Certificate"
  },
  {
    src: "/lovable-uploads/ebfb769c-bdd5-4212-bed7-a28d13bf686b.png",
    alt: "Shandong Province Enterprise Certificate"
  },
  {
    src: "/lovable-uploads/7f93e562-d838-4501-8fd4-69fb4ca90289.png",
    alt: "Technical Research Center Certificate"
  }
];

const LogoCloudMarquee = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone items for seamless loop
    const scrollerInner = scroller.querySelector('.scroller-inner');
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="section-badge">Recognition</span>
          <h2 className="section-heading">Certificates & Awards</h2>
          <p className="section-description">
            Trusted and recognized by industry leaders and government institutions
          </p>
        </div>
        
        <div 
          ref={scrollerRef}
          className="scroller relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent"
          data-animated="true"
        >
          <div className="scroller-inner flex gap-8 animate-scroll hover:[animation-play-state:paused]">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:scale-105"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-24 h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloudMarquee;