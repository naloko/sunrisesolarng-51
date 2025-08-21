import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, imageSrc, imageAlt, ctaText, ctaLink }) => {
  return (
    <header data-dark-bg className="relative overflow-hidden">
      <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-end pb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-white/90 max-w-2xl text-base sm:text-lg">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="mt-6">
              <Link
                to={ctaLink}
                className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium transition-colors hover:bg-primary/90"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default ServiceHero;
