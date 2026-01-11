import React from 'react';
import { siteConfig } from '../siteConfig';

const Features: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b38728]/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4 gold-text italic tracking-widest">特色系統</h2>
          <div className="w-24 h-1 gold-bg mx-auto"></div>
          <p className="text-slate-500 mt-6">感受獨一無二的遊戲體驗，開創你的英雄篇章。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.features.map((item, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-[#b38728]/10 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:border-[#b38728]/50 group">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#fccd4d]">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;