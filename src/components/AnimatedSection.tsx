
import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'zoom-in' | 'bounce' | 'rotate' | 'flip';
  threshold?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-in',
  threshold = 0.2,
  delay = 0,
  duration = 500,
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible and we only want to animate once, stop observing
          if (sectionRef.current && once) {
            observer.unobserve(sectionRef.current);
          }
        } else if (!once) {
          // If we want to animate every time the element enters the viewport
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, once]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'scale-in':
        return 'animate-scale-in';
      case 'zoom-in':
        return 'animate-zoom-in';
      case 'bounce':
        return 'animate-bounce';
      case 'rotate':
        return 'animate-rotate';
      case 'flip':
        return 'animate-flip';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
