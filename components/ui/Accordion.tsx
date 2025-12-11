import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { EcoSpot } from '../../types';
import Carousel from '../Carousel';

interface AccordionItemProps {
  spot: EcoSpot;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ spot, isOpen, onClick }) => {
  const [interactState, setInteractState] = useState<string | null>(null);

  const handleInteract = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (spot.interaction?.type === 'calc') setInteractState("✅ 计算完成：今日贡献氧气 2.5kg");
    if (spot.interaction?.type === 'quiz') setInteractState("✅ 回答正确！前身是'水碓子公园'");
    if (spot.interaction?.type === 'trash') setInteractState("⚠️ 样方垃圾密度：中等");
    if (spot.interaction?.type === 'sound') setInteractState("🎵 正在播放：黑天鹅叫声示例");
    if (spot.interaction?.type === 'pledge') setInteractState("💚 已记录您的告白");
    
    setTimeout(() => setInteractState(null), 3000);
  };

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        className={`w-full text-left py-6 px-4 md:px-8 flex justify-between items-center transition-colors ${isOpen ? 'bg-nature-50' : 'bg-white hover:bg-stone-50'}`}
        onClick={onClick}
      >
        <div className="flex-1">
          <div className="flex items-center text-nature-600 text-sm font-semibold uppercase tracking-wider mb-1">
            <span className="mr-3 bg-nature-100 text-nature-800 px-2 py-0.5 rounded text-xs">{spot.id}</span>
            <MapPin size={14} className="mr-1" />
            {spot.location}
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-nature-900">{spot.title}</h3>
          <h4 className="text-sm font-light text-stone-500 mt-1">{spot.enTitle}</h4>
        </div>
        <div className={`ml-4 p-2 rounded-full ${isOpen ? 'bg-nature-200 text-nature-800' : 'bg-stone-100 text-stone-400'}`}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 md:p-8 bg-nature-50 grid md:grid-cols-2 gap-8">
          
          {/* Content Column */}
          <div className="space-y-6">
            <div className="prose prose-stone">
              <p className="text-stone-700 leading-relaxed font-sans text-lg">
                {spot.description.cn}
              </p>
              <div className="border-l-2 border-nature-300 pl-4 py-2 mt-4 bg-white/50 rounded-r-lg">
                <p className="text-stone-500 text-sm italic font-serif">
                  {spot.description.en}
                </p>
              </div>
            </div>

            {spot.interaction && (
              <div className="bg-white p-6 rounded-xl border border-nature-200 shadow-sm mt-6">
                 <h5 className="font-bold text-nature-800 mb-3 flex items-center">
                   <span className="w-2 h-2 bg-nature-500 rounded-full mr-2 animate-pulse"></span>
                   互动体验 Interaction
                 </h5>
                 <p className="text-sm text-stone-600 mb-4">{spot.interaction.label}</p>
                 <button 
                   onClick={handleInteract}
                   className="w-full py-3 bg-nature-600 hover:bg-nature-700 text-white rounded-lg transition-all transform active:scale-95 shadow-md flex justify-center items-center"
                 >
                    {interactState || "点击参与 / Tap to Interact"}
                 </button>
              </div>
            )}
          </div>

          {/* Visual Column */}
          <div>
            <Carousel images={spot.visuals} aspectRatio="aspect-[4/3]" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccordionItem;