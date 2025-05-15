"use client";
import {
  Zap,
  Globe,
  Bot,
  Cpu,
  Smartphone
} from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const services = [
  {
    icon: <Zap size={20} />,
    title: "自動化程式開發",
    description: "從資料處理、點擊腳本到報表生成，打造能真正減少人力成本的自動化工具。",
  },
  {
    icon: <Globe size={20} />,
    title: "Web 系統開發（ERP / CRM）",
    description: "量身打造企業內部流程系統，支援進銷存、客戶管理與營運數據整合。",
  },
  {
    icon: <Bot size={20} />,
    title: "AI 聊天機器人整合",
    description: "打造客製化 AI 對話機器人，支援 Line、Discord、Telegram 與內嵌網站應用。",
  },
  {
    icon: <Cpu size={20} />,
    title: "AI 系統維護與擴充",
    description: "持續協助企業優化 LLM 應用，加入外部資料、搜尋與多模態擴展功能。",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Apple App 開發",
    description: "專精於 iOS / macOS App 開發，從 UI 設計到上架流程一次包辦。",
  },
];


export default function ServicesPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* 標題區塊 */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            服務項目
          </h2>
          <p className="mt-4 text-zinc-400">
            從自動化工具、Web 系統到 AI 聊天機器人與 Apple App，我們專注為企業打造高效、穩定、可擴充的軟體解決方案。
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* 卡片區塊 */}
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3 lg:gap-16">
          {services.map((s, idx) => (
            <Card key={idx}>
              <div className="p-6 relative flex flex-col items-center gap-4 md:gap-8 md:py-16">
                <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center text-center">
                  <span className="text-xl font-medium text-zinc-200 group-hover:text-white font-display">
                    {s.title}
                  </span>
                  <span className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
                    {s.description}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}