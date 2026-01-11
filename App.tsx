import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import AIConsultant from './components/AIConsultant.tsx';
import Footer from './components/Footer.tsx';
import { siteConfig } from './siteConfig.ts';

const App: React.FC = () => {
  const [gearTab, setGearTab] = useState('裝備');
  
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        <Hero />
        
        {/* 活動公告 Section */}
        <section id="news" className="py-24 px-6 bg-[#050505] border-y border-[#b38728]/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-title text-4xl font-black mb-8 gold-text uppercase italic tracking-tighter">活動公告 / News</h2>
              <div className="space-y-4">
                {siteConfig.news.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-[#0a0a0a] border border-[#b38728]/10 hover:border-[#b38728]/50 transition-all cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <span className="text-[#b38728] font-bold font-mono">[{item.type}]</span>
                      <span className="text-white group-hover:text-[#fccd4d] transition-colors">{item.title}</span>
                    </div>
                    <span className="text-slate-500 text-sm">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 aspect-video bg-zinc-900 border border-[#b38728]/20 overflow-hidden relative">
               <img src="https://picsum.photos/800/450?random=news" className="w-full h-full object-cover opacity-60" alt="News Banner" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-6 bg-black/60 backdrop-blur-sm border border-[#b38728]/30">
                   <p className="text-[#fccd4d] font-bold tracking-widest mb-2">HOT EVENT</p>
                   <h3 className="text-2xl font-black text-white">星辰祭典：雙倍經驗大放送</h3>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <Features />

        {/* 裝備與武器介紹 Section */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 id="gear" className="section-title text-4xl font-black mb-4 gold-text uppercase italic">傳奇神兵 / Armory</h2>
                <p className="text-slate-400">當前伺服器中最強力的裝備與武具展示。</p>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setGearTab('裝備')}
                  className={`px-8 py-2 border ${gearTab === '裝備' ? 'gold-bg text-black' : 'border-[#b38728] text-[#fccd4d]'} font-black transition-all`}
                >裝備介紹</button>
                <button 
                  onClick={() => setGearTab('武器')}
                  className={`px-8 py-2 border ${gearTab === '武器' ? 'gold-bg text-black' : 'border-[#b38728] text-[#fccd4d]'} font-black transition-all`}
                >武器介紹</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(gearTab === '裝備' ? siteConfig.gears : siteConfig.weapons).map((item, i) => (
                <div key={i} className="bg-[#0a0a0a] border border-[#b38728]/20 p-8 text-center group hover:bg-[#111111] transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#b38728]/20 to-transparent"></div>
                  <img src={`https://picsum.photos/300/300?random=${gearTab}_${i}`} className="w-48 h-48 mx-auto mb-6 object-contain group-hover:scale-110 transition-transform" alt="Item" />
                  <h3 className="text-2xl font-black mb-2 text-white">
                    {item.name} {item.level}
                  </h3>
                  <p className="text-[#fccd4d] text-sm mb-4 font-bold">品質：[ {item.quality} ]</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 贊助說明 Section */}
        <section id="sponsorship" className="py-24 px-6 bg-[#050505] border-t border-[#b38728]/10">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-8 gold-text italic uppercase">贊助說明 / Donation</h2>
              <div className="bg-[#0a0a0a] border border-[#b38728]/30 p-10 rounded-2xl relative">
                 <p className="text-slate-300 mb-8 leading-relaxed">
                   您的每一份贊助都將用於伺服器基礎建設。為了感謝英雄們的支持，我們提供以下獎勵回饋：
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {siteConfig.sponsorship.map((plan, idx) => (
                      <div key={idx} className={`p-6 bg-black border ${plan.isPopular ? 'border-[#fccd4d] scale-105 shadow-xl' : 'border-[#b38728]/20'}`}>
                        <p className="text-xs text-slate-500 mb-1">{plan.name}</p>
                        <p className="text-2xl font-black gold-text">NT$ {plan.price}</p>
                        <p className="text-[10px] text-white mt-4 leading-relaxed whitespace-pre-line">{plan.reward.split('及').join('\n及')}</p>
                      </div>
                    ))}
                 </div>
                 <button className="btn-gold px-12 py-4 rounded-full text-lg shadow-2xl">
                    前往贊助中心
                 </button>
                 <p className="text-[10px] text-slate-600 mt-8 italic">
                    ※ 贊助為支持行為，不可退換，請在量力而行的情況下支持我們。
                 </p>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;