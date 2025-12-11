import React from 'react';
import Carousel from './Carousel';
import { images, routes } from '../data';

const SectionIntro: React.FC = () => {
  return (
    <section id="intro" className="py-20 px-4 bg-stone-100">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-serif font-bold text-nature-900 mb-10 border-l-4 border-nature-500 pl-6">
          03. 概况：城市绿肺<br/>
          <span className="text-xl text-nature-600 font-light mt-2 block">Introduction: The Green Lung</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-nature-700 first-letter:mr-2 float-left">
              各位朋友，欢迎大家来到北京市朝阳公园。您脚下这片土地，拥有一个令人震撼的尺寸：它的面积比著名的颐和园还要大300亩。
            </p>
            <p>
              它是北京四环内最大的城市公园，更是这座超大都市中，一片用绿色写成的诗意留白。当我们站在繁忙的东四环边，朝阳公园就像城市巨大的呼吸机，过滤喧嚣，收藏时间。
            </p>
            <div className="pl-4 border-l-2 border-stone-300 italic text-stone-500 text-sm">
              <p>Welcome to Chaoyang Park. You are inhaling fresh air from the largest 'Green Lung' within the 4th Ring Road. It is a poetic green space in this mega-city.</p>
            </div>
            
            <h3 className="text-xl font-bold text-nature-800 mt-6">历史与现代张力</h3>
            <p>
              四十年前，这里曾是老北京东郊的“串儿窑”。它的历史是一部从烟火气到生态乐园的城市更新史。请转身看向南边，高速运转的CBD与此地的空旷宁静，形成奇妙的“都市张力”。
            </p>
          </div>
          <div>
            <Carousel images={[images.lake1, images.skyline1, images.forest1]} />
          </div>
        </div>

        {/* Routes & Map */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-serif text-nature-900 mb-6 text-center">游览路线 Recommended Routes</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
               <ul className="space-y-4">
                 {routes.map((route, idx) => (
                   <li key={idx} className="bg-nature-50 p-4 rounded-lg border border-nature-100">
                     <span className="font-bold text-nature-800 block mb-1">{route.name}</span>
                     <div className="flex flex-wrap items-center text-sm text-stone-600">
                       {route.stops.map((stop, i) => (
                         <span key={i} className="flex items-center">
                           {stop}
                           {i < route.stops.length - 1 && <span className="mx-2 text-nature-400">→</span>}
                         </span>
                       ))}
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-auto">
              <img src={images.map.url} alt="Map" className="w-full h-full object-cover rounded-lg shadow-inner grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;