"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

const BLUE_GRADIENT = "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

const FEATURES = [
  {
    title: "Simple Integration",
    body: "Connect your LLM logic via API in minutes with our lightweight TypeScript SDK.",
    icon: "/section-8-marketplace/feature-1-icon.svg",
  },
  {
    title: "Automated Billing",
    body: "We handle payments, usage tracking, and global payouts so you can focus on building.",
    icon: "/section-8-marketplace/feature-2-icon.svg",
  },
  {
    title: "Built-in Analytics",
    body: "Monitor performance, usage, and earnings in real time with our developer console.",
    icon: "/section-8-marketplace/feature-3-icon.svg",
  },
];

export default function DeveloperHub() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-[#F7F9FC] dark:bg-black relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Mockup UI */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
           <div className="relative rounded-[32px] border bg-white dark:bg-zinc-900/80 p-8 shadow-2xl shadow-blue-500/10 border-slate-200 dark:border-white/5 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <Image src="/section-8-marketplace/dashboard-grid.svg" alt="" fill className="object-cover dark:invert" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Earnings</p>
                    <p className="text-4xl font-black text-slate-900 dark:text-white">$3,450.00</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">PRO PLAN</span>
                </div>

                <div className="relative h-32 mb-8">
                   <Image src="/section-8-marketplace/line-chart.svg" alt="" fill className="object-contain dark:brightness-150" />
                </div>

                <div className="flex flex-col gap-3 mb-8">
                   <Activity text="Agent 'SocialCraft' run" time="2m ago" color="#22C55E" />
                   <Activity text="Payout processed" time="1h ago" color="#3B82F6" />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">API QUOTA</span>
                      <span className="text-[10px] font-bold bg-clip-text text-transparent" style={{ backgroundImage: BLUE_GRADIENT }}>72% USED</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "72%" }} />
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          <h2
            className="text-slate-900 dark:text-white transition-colors duration-300"
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: "1.1",
            }}
          >
            Build and monetize <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: BLUE_GRADIENT }}>AI agents</span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
            Create, publish, and scale your AI agents on Shekel using our powerful SDK. Everything you need to turn logic into revenue.
          </p>

          <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
             <div className="w-14 h-14 shrink-0 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <Image src="/section-8-marketplace/earn-overlay.svg" alt="" width={32} height={32} />
             </div>
             <div>
                <p className="font-bold text-slate-900 dark:text-white">Earn from every agent run</p>
                <p className="text-sm font-medium bg-clip-text text-transparent" style={{ backgroundImage: BLUE_GRADIENT }}>Top creators earn $2k+/month</p>
             </div>
          </div>

          <div className="flex flex-col gap-8">
             {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                   <div className="w-12 h-12 shrink-0 bg-slate-200 dark:bg-white/10 rounded-xl flex items-center justify-center">
                      <Image src={f.icon} alt="" width={24} height={24} className="dark:brightness-200" />
                   </div>
                   <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-slate-900 dark:text-white">{f.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.body}</p>
                   </div>
                </div>
             ))}
          </div>

          <button
            className="w-fit px-10 py-4 rounded-2xl text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-95"
            style={{ background: BLUE_GRADIENT }}
          >
            Start Building &gt;
          </button>
        </div>

      </div>
    </section>
  );
}

function Activity({ text, time, color }: { text: string; time: string; color: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm font-bold text-slate-900 dark:text-white">{text}</span>
      </div>
      <span className="text-[10px] font-bold text-slate-400 uppercase">{time}</span>
    </div>
  );
}
