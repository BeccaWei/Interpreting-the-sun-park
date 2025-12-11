import React from 'react';
import { Lightbulb, Users, MapPin, Activity } from 'lucide-react';

const SectionConcept: React.FC = () => {
  const principles = [
    { 
      icon: <Lightbulb size={32} />, 
      title: "揭示意义", 
      en: "Reveal Meaning", 
      desc: "侧重于叙事，将信息与个人体验联系起来。" 
    },
    { 
      icon: <Users size={32} />, 
      title: "积极参与", 
      en: "Active Participation", 
      desc: "优先互动体验，从被动接收转向主动探索。" 
    },
    { 
      icon: <MapPin size={32} />, 
      title: "连接城市", 
      en: "Connect Context", 
      desc: "强调“都市张力”，宁静与CBD活力的对比。" 
    },
    { 
      icon: <Activity size={32} />, 
      title: "公民科学", 
      en: "Citizen Science", 
      desc: "赋能游客，参与数据收集与生态守护。" 
    },
  ];

  return (
    <section id="concept" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif font-bold text-center text-nature-900 mb-16">
          02. 理念与目标<br/>
          <span className="text-xl text-nature-600 font-light mt-2 block">Design Concept & Goals</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-stone-100 group">
              <div className="text-nature-600 mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              <h3 className="text-xl font-bold text-nature-900 mb-1">{p.title}</h3>
              <h4 className="text-sm font-serif text-nature-600 mb-3 italic">{p.en}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-nature-50 rounded-2xl p-8 md:p-12 border border-nature-100">
           <h3 className="text-2xl font-serif text-nature-800 mb-6 text-center">设计目标：提升生态素养</h3>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center">
               <div className="w-12 h-12 bg-nature-200 rounded-full flex items-center justify-center mx-auto mb-4 text-nature-800 font-bold">1</div>
               <p className="text-stone-700">在关键生态点位部署基于场所的解说内容。</p>
             </div>
             <div className="text-center">
               <div className="w-12 h-12 bg-nature-200 rounded-full flex items-center justify-center mx-auto mb-4 text-nature-800 font-bold">2</div>
               <p className="text-stone-700">实施“碳汇测量”、“学声辨鸟”等公民科学互动。</p>
             </div>
             <div className="text-center">
               <div className="w-12 h-12 bg-nature-200 rounded-full flex items-center justify-center mx-auto mb-4 text-nature-800 font-bold">3</div>
               <p className="text-stone-700">认可由用户驱动的文化，加强公园与社区联系。</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SectionConcept;