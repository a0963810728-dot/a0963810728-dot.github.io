import { GoogleGenAI } from "@google/genai";
import { siteConfig } from "../siteConfig.ts";

export const getGeminiResponse = async (userMessage: string, history: any[]) => {
  // 安全取得 API KEY
  const apiKey = (typeof process !== 'undefined' && process.env.API_KEY) || '';
  
  if (!apiKey) {
    return "英雄，我感應不到星辰之鑰（API Key），請聯絡大賢者（管理員）設定環境變數。";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const newsStr = siteConfig.news.map(n => `[${n.date}] ${n.title}`).join(', ');
  const sponsorshipStr = siteConfig.sponsorship.map(s => `NT$${s.price}: ${s.reward}`).join(' | ');

  const systemInstruction = `
    你現在是《${siteConfig.gameName}》的官方引導精靈「露娜」。
    背景：黑金風格的高級 MMORPG 官方網站。
    語氣：優雅、神祕、樂於助人。稱呼用戶為「尊敬的英雄」。請用繁體中文回答。回覆請保持簡短精煉，不超過 100 字。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: { 
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "英雄，星辰的軌跡被迷霧遮蔽了。";
  } catch (error) {
    console.error("AI 服務異常:", error);
    return "時空之門暫時不穩定，請稍後再試。";
  }
};