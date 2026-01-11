import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService.ts';
import { Message } from '../types.ts';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好，勇敢的冒險者！我是引導精靈露娜。需要我為你指引方向嗎？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    
    const responseText = await getGeminiResponse(input, messages);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="w-80 sm:w-96 h-[500px] border border-[#b38728]/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 bg-black">
          <div className="p-4 bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-white flex justify-between items-center border-b border-[#b38728]/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#b38728] overflow-hidden bg-slate-800">
                 <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Luna&backgroundColor=b38728" className="w-full h-full object-cover" alt="Luna" />
              </div>
              <div>
                <span className="font-bold text-sm block gold-text">引導精靈 露娜</span>
                <span className="text-[10px] text-slate-400">正在守護星辰大陸...</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-950/80 backdrop-blur-xl custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#b38728] text-black font-bold rounded-tr-none shadow-lg' 
                    : 'bg-slate-900 text-slate-200 border border-[#b38728]/20 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 px-4 py-2 rounded-full space-x-1 flex items-center border border-[#b38728]/20">
                  <div className="w-1.5 h-1.5 bg-[#b38728] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#b38728] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#b38728] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-[#0a0a0a] border-t border-[#b38728]/20 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="輸入訊息..."
              className="flex-1 bg-black border border-[#b38728]/30 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#fccd4d]"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-black disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 gold-bg rounded-full shadow-2xl flex items-center justify-center text-black hover:scale-110 transition-transform animate-float relative group"
        >
          <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full animate-pulse">1</div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;