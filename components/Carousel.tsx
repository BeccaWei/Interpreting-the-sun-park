import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideImage } from '../types';

interface CarouselProps {
  images: SlideImage[];
  aspectRatio?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, aspectRatio = "aspect-video" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative group ${aspectRatio} overflow-hidden rounded-xl shadow-lg bg-stone-200`}>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].caption}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
      />
      
      {/* Overlay & Caption */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
        <p className="text-white text-sm md:text-base font-serif italic text-center">
          {images[currentIndex].caption}
        </p>
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="absolute top-4 right-4 flex space-x-1">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-nature-400' : 'w-2 bg-white/50'}`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;