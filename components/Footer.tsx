import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-[#b38728]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gold-bg rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
              </div>
              <span className="text-xl font-bold tracking-widest gold-text italic">星辰之影</span>
            </div>
            <p className="text-slate-500 text-xs max-w-sm mb-6 leading-relaxed">
              本遊戲內容涉及暴力、性、菸酒。請注意遊戲時間，避免沉迷。<br/>
              本網站所有贊助皆用於伺服器基礎建設與維護。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 border border-[#b38728]/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#b38728] hover:text-black transition-all">FB</div>
              <div className="w-10 h-10 border border-[#b38728]/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#b38728] hover:text-black transition-all">DC</div>
              <div className="w-10 h-10 border border-[#b38728]/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#b38728] hover:text-black transition-all">YT</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#fccd4d] font-bold mb-6 tracking-widest uppercase text-sm">官網指南</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><a href="#download" className="hover:text-white transition-colors">檔案下載</a></li>
              <li><a href="#sponsorship" className="hover:text-white transition-colors">贊助說明</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">活動公告</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#fccd4d] font-bold mb-6 tracking-widest uppercase text-sm">系統介紹</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><a href="#gear" className="hover:text-white transition-colors">裝備介紹</a></li>
              <li><a href="#weapons" className="hover:text-white transition-colors">武器介紹</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">特色系統</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#b38728]/10 text-center text-[10px] text-slate-600 uppercase tracking-widest">
          <p>© 2025 SHADOW OF STARS ENTERTAINMENT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;