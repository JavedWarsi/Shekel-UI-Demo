"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";

const BLUE_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function FeaturesBento() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 dark:bg-black relative overflow-hidden">
      {/* Background Grid Pattern - Only in Light mode or subtle in dark */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(#ba9eff 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} />
      </div> */}
      <div className="absolute inset-0">
        <Image
          src="/section-3/bg-comparison.webp"
          alt=""
          fill
          priority
          className="object-cover object-center dark:opacity-30"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        <h2 className="">
                    Engineered for <span className="bg-clip-text text-transparent" >Every Vertical</span>
          </h2>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(250px,auto)]">

          {/* AI Agent Marketplace - Large Card */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col p-8 md:p-12 bg-white dark:bg-[#1a1f2d] rounded-[32px] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden relative group">
            <div className="relative z-10 flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.inter }}>
                  AI Agent Marketplace
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                  The world's largest repository of verified, production-ready AI agents built for real work. Browse by category, task type, or input modality.

                </p>
              </div>
              <Link href="/marketplace" className="group/link inline-flex items-center gap-2 w-fit">
                <span className="text-blue-600 dark:text-blue-400 font-bold group-hover/link:translate-x-1 transition-transform">
                  Explore Marketplace
                </span>
                <Image
                  src="/section-6/icon-arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="invert dark:invert-0 brightness-0 saturate-100 invert-[32%] sepia-[95%] saturate-[1900%] hue-rotate-[213deg] brightness-[95%] contrast-[94%] dark:brightness-100 dark:contrast-100"
                />
              </Link>
            </div>
            {/* Background decoration for this card */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 blur-[80px] group-hover:scale-110 transition-transform" />
          </div>

          {/* Flexible Pricing */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col p-8 bg-white dark:bg-[#151926] rounded-[32px] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <Image src="/section-6/icon-pricing.svg" alt="" width={33} height={24} className="mb-6" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Flexible Pricing</h4>
            <p className="text-slate-600 content-center dark:text-slate-400 leading-relaxed">
              Set your own pricing model: pay-per-use, subscription, freemium, or custom enterprise. Every agent, monetized on your terms.
            </p>
          </div>

          {/* Workflow Builder */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col p-8 bg-white dark:bg-[#151926] rounded-[32px] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <Image src="/section-6/icon-workflow.svg" alt="" width={30} height={27} className="mb-6" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Workflow Builder</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Drag-and-drop agent chaining for complex multi-step automation. No code required. Connect any agents in the marketplace into one seamless pipeline.

            </p>
          </div>

          {/* Dev Ecosystem */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col p-8 bg-white dark:bg-[#151926] rounded-[32px] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <Image src="/section-6/icon-dev.svg" alt="" width={30} height={24} className="mb-6" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Dev Ecosystem</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A full-featured SDK in Python, JavaScript, and REST. Pre-built connectors to OpenAI, Anthropic, Gemini, and Mistral - with memory management included.
            </p>
          </div>

          {/* Global Settlement Network */}
          <div className="md:col-span-6 lg:col-span-8 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-white dark:bg-[#151926] rounded-[32px] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Global Settlement Network</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Transparent bi-weekly payouts to bank accounts or crypto wallets. Every transaction logged. Commission tiers that scale as your agent earns more.

              </p>
            </div>
            <div className="w-full h-40 md:w-auto px-10 py-8 bg-slate-50 dark:bg-black/50 border border-slate-300 dark:border-white/30 rounded-2xl flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: BLUE_GRADIENT }} />
                <span className="text-xs font-mono font-medium tracking-[0.2em] text-slate-900 dark:text-blue-400 uppercase">
                  NETWORK LIVE: 12.4K TPS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
