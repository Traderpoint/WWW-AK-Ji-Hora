
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';
import { CarouselSlide } from '../types';

interface HeroCarouselProps {
  onServiceSelect?: (serviceId: string) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onServiceSelect }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, slide: CarouselSlide) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Prevent bubbling

    if (slide.serviceId && onServiceSelect) {
      // Open Service Modal
      onServiceSelect(slide.serviceId);
    } else if (slide.ctaLink.startsWith('#')) {
      // Smooth scroll to section with header offset
      const targetId = slide.ctaLink.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // External navigation
      window.location.href = slide.ctaLink;
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            index === current 
              ? 'opacity-100 scale-100 z-20 pointer-events-auto' 
              : 'opacity-0 scale-105 z-10 pointer-events-none'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className={`max-w-4xl transition-all duration-1000 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight shadow-sm">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink} 
                onClick={(e) => handleCtaClick(e, slide)}
                className="inline-block bg-brand-gold hover:bg-amber-500 text-white text-lg font-medium px-10 py-4 rounded-sm transition-colors duration-300 uppercase tracking-wider cursor-pointer shadow-lg relative z-50"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 pointer-events-auto">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-brand-gold w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
