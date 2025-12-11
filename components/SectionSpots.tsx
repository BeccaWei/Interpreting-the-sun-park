import React, { useState } from 'react';
import { spots } from '../data';
import AccordionItem from './ui/Accordion';

const SectionSpots: React.FC = () => {
  const [openId, setOpenId] = useState<string>("4.1");

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="spots" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-serif font-bold text-nature-900 mb-4 text-center">
          04. 生态解说<br/>
          <span className="text-xl text-nature-600 font-light mt-2 block">Ecological Interpretation</span>
        </h2>
        <p className="text-center text-stone-500 max-w-2xl mx-auto mb-16">
          分点位展板与互动设计 - Site-Specific Panels & Interactive Design
        </p>

        <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
          {spots.map((spot) => (
            <AccordionItem 
              key={spot.id} 
              spot={spot} 
              isOpen={openId === spot.id} 
              onClick={() => handleToggle(spot.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSpots;