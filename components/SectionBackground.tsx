import React from 'react';

const SectionBackground: React.FC = () => {
  return (
    <section id="background" className="py-20 px-4 bg-stone-100">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <h2 className="text-4xl font-serif font-bold text-nature-900 mb-6 border-l-4 border-nature-500 pl-6">
              01. 设计背景<br/>
              <span className="text-xl text-nature-600 font-light mt-2 block">Design Background</span>
            </h2>
            <div className="prose prose-stone text-stone-600">
              <p className="mb-4">
                解说最早由 Freeman Tilden 提出。我国早期的环境解说主要着眼于环境教育。目前，我国公园解说系统主要呈现为单向的静态解说，互动性和高科技解说形式较为缺乏。
              </p>
              <p className="mb-4">
                生态教育解说存在碎片化和不协调发展的问题。这一现实困境凸显了构建具有城市公园特色的生态教育解说体系的重要性和紧迫性。
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400 mt-6">
                 <p className="italic text-sm text-stone-500 font-serif">
                   "To reveal meanings rather than just providing information."
                 </p>
              </div>
            </div>
          </div>
          <div className="bg-nature-800 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-nature-600 rounded-full opacity-20"></div>
             <h3 className="text-2xl font-serif mb-4 relative z-10">核心挑战 Core Challenge</h3>
             <ul className="space-y-4 relative z-10">
               <li className="flex items-start">
                 <span className="bg-nature-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                 <span>单向静态解说为主，缺乏互动。<br/><span className="text-nature-300 text-xs">Static interpretation, lack of interaction.</span></span>
               </li>
               <li className="flex items-start">
                 <span className="bg-nature-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                 <span>生态教育碎片化。<br/><span className="text-nature-300 text-xs">Fragmented ecological education.</span></span>
               </li>
               <li className="flex items-start">
                 <span className="bg-nature-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                 <span>未充分连接周边社区。<br/><span className="text-nature-300 text-xs">Disconnected from community.</span></span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBackground;