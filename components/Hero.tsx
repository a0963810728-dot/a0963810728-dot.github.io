import React from 'react';
import { siteConfig } from '../siteConfig';

const Hero: React.FC = () => {
  return (
    <section id="download" className="relative h-[85vh] flex items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10"></div>
        <img 
          src="https://picsum.photos/1920/1080?random=fantasy_dark" 
          className="w-full h-full object-cover opacity-40"
          alt="Game World"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center">
        <div className="animate-float">
          <h2 className="gold-text text-xl sm:text-2xl font-bold tracking-[0.4em] mb-4 uppercase">GLOBAL OPEN 2025</h2>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-tight">
            {siteConfig.gameName.split('：')[0]} <br/> <span className="gold-text">{siteConfig.gameName.split('：')[1]}</span>
          </h1>
        </div>
        
        <p className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg mb-10 leading-relaxed font-light">
          唯有真正的英雄，能在黑暗中看見星光。<br />
          立即下載客戶端，領取開服限定金裝禮包。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="group relative">
            <div className="absolute -inset-1 gold-bg rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative btn-gold px-12 py-5 rounded-lg text-xl sm:text-2xl font-black tracking-widest flex items-center transition-all">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              主程式下載
            </button>
          </div>
          
          <div className="flex flex-col space-y-1 text-left text-[10px] text-slate-500 font-mono bg-white/5 p-3 rounded border border-white/5">
            <p>VERSION: {siteConfig.version}</p>
            <p>SIZE: {siteConfig.fileSize}</p>
            <p>DATE: {siteConfig.updateDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;