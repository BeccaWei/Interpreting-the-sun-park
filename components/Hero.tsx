import React from 'react';
import { images } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.lake1.url}
          alt={images.lake1.caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-nature-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-xl md:text-2xl font-sans font-light tracking-[0.2em] mb-4 uppercase text-nature-200">
          Beijing Chaoyang Park
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Re-Interpreting<br />
          <span className="text-nature-300">The Sun Park</span>
        </h1>
        <div className="w-24 h-1 bg-nature-400 mx-auto mb-8"></div>
        <p className="text-lg md:text-xl font-light mb-2">
          Eco-Pulse 生态解说系统提案
        </p>
        <p className="text-sm md:text-base text-nature-200 opacity-80">
          Prepared by: Becca Wei 魏志婧 | December 2, 2025
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;