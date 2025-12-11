import React from 'react';
import { Smartphone, Users, BookOpen, Database, Heart } from 'lucide-react';

const SectionFuture: React.FC = () => {
  return (
    <section id="future" className="py-20 px-4 bg-nature-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-serif font-bold mb-12 border-b border-nature-700 pb-6">
          05. 结语与未来运营<br/>
          <span className="text-lg font-sans font-light opacity-70 mt-2 block">Conclusion & Future Operations</span>
        </h2>

        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-nature-100 font-light leading-relaxed">
            “Eco-Pulse”方案，旨在为朝阳公园安装一套敏感的“神经系统”，让它不仅能被看见，更能被感受、理解和深爱。当每一位游客都能感知到风的路径、水的净化、树的呼吸与鸟的依存时，公园便真正拥有了持续跳动的生态之心。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-nature-800 p-6 rounded-lg border border-nature-700 hover:border-nature-400 transition-colors">
            <Smartphone className="text-nature-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">5.1 数字化衔接</h3>
            <p className="text-sm text-nature-200 opacity-80">集成碳汇计算、鸟类声谱至官方小程序，形成线上线下一体体验。</p>
          </div>
          <div className="bg-nature-800 p-6 rounded-lg border border-nature-700 hover:border-nature-400 transition-colors">
            <Users className="text-nature-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">5.2 志愿者体系化</h3>
            <p className="text-sm text-nature-200 opacity-80">招募“生态解说志愿者”，涵盖学生、专家、跑者，形成在地解说力量。</p>
          </div>
          <div className="bg-nature-800 p-6 rounded-lg border border-nature-700 hover:border-nature-400 transition-colors">
            <BookOpen className="text-nature-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">5.3 活动课程化</h3>
            <p className="text-sm text-nature-200 opacity-80">开发自然教育课程，面向学校和企业开展深度生态教育。</p>
          </div>
          <div className="bg-nature-800 p-6 rounded-lg border border-nature-700 hover:border-nature-400 transition-colors">
            <Database className="text-nature-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">5.4 社区共建化</h3>
            <p className="text-sm text-nature-200 opacity-80">设立“公民科学数据站”，让公众贡献成为生态监测的一部分。</p>
          </div>
          <div className="bg-nature-800 p-6 rounded-lg border border-nature-700 hover:border-nature-400 transition-colors md:col-span-2 lg:col-span-2">
            <Heart className="text-nature-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">5.5 品牌联动化</h3>
            <p className="text-sm text-nature-200 opacity-80">打造“Eco-Pulse”生态文化IP，通过季节性主题活动，实现生态价值的社会化传播。</p>
          </div>
        </div>

        <footer className="text-center border-t border-nature-800 pt-8 text-nature-400 text-sm">
          <p>© 2025 Eco-Pulse Project. Prepared by Becca Wei 魏志婧.</p>
          <p className="mt-2 opacity-60">Images sourced from Unsplash for demonstration purposes.</p>
        </footer>
      </div>
    </section>
  );
};

export default SectionFuture;