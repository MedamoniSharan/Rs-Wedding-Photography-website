import React, { useState, useEffect, useCallback } from 'react';
import type { Section } from '../types';
import { HERO_SLIDES } from '../constants';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  
  return (
    <section 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      id="home-section"
    >
       {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: `url("${slide.src}")` }}
          aria-hidden={index !== currentIndex}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 text-center text-white px-4 mt-48">
        <div className="overflow-hidden mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-black tracking-tight animate-text-reveal opacity-80" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                One Life. One Shot.
            </h1>
        </div>
        <div className="overflow-hidden mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl text-golden-beige font-lato font-normal animate-text-reveal-delayed italic" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                Where emotion meets perfection — welcome to Ranga Surya Photography.
            </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection('gallery')}
              className="py-3 px-10 font-bold text-sm uppercase tracking-widest bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-colors duration-300"
            >
              View Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-3 px-10 font-bold text-sm uppercase tracking-widest bg-golden-beige text-charcoal-gray hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-golden-beige/20"
            >
              Book Your Shoot
            </button>
        </div>
      </div>
      <style>{`
        @keyframes text-reveal {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        .animate-text-reveal { animation: text-reveal 0.8s 0.2s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
        .animate-text-reveal-delayed { animation: text-reveal 0.8s 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default Hero;