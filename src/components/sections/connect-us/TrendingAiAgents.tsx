"use client";

import Image from "next/image";
import Link from "next/link";
import { typography } from "@/tokens/design-tokens";

const AGENTS = [
  {
    name: "CopyGenius Pro",
    rating: "4.7",
    icon: "/section-4-connect-us/icon-copygenius.svg",
  },
  {
    name: "VideoCraft AI",
    rating: "4.9",
    icon: "/section-4-connect-us/icon-videocraft.svg",
  },
  {
    name: "MetricMaster",
    rating: "4.5",
    icon: "/section-4-connect-us/icon-metricmaster.svg",
  },
];

export default function TrendingAiAgents() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2
              className="text-slate-900 dark:text-white transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.poppins,
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: "1.1",
              }}
            >
              Trending AI Agents
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Popular agents used by the community
            </p>
          </div>
          
          <Link href="/marketplace" className="group flex items-center gap-2 w-fit pb-2 border-b-2 border-transparent hover:border-blue-500 transition-all">
            <span className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm">
              Explore Agents
            </span>
            <Image src="/section-4-connect-us/arrow-up-right.svg" alt="" width={12} height={12} className="dark:brightness-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="group flex flex-col p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Image src={agent.icon} alt={agent.name} width={32} height={32} className="object-contain" unoptimized />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {agent.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <Image src="/section-4-connect-us/icon-star.svg" alt="" width={14} height={14} />
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{agent.rating}</span>
                </div>
              </div>

              <Link href="/agent-detail" className="mt-auto">
                <button className="w-full py-4 rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-[0.98]">
                  Run Agent
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
