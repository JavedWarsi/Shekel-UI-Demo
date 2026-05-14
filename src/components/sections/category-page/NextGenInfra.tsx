"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const FEATURES = [
  { 
    title: "Smart Automation", 
    body: "Automate repetitive tasks like content creation, SEO, and campaign management with AI-powered agents.", 
    icon: "feat-1.svg" 
  },
  { 
    title: "High Performance", 
    body: "Optimize workflows with data-driven insights and intelligent decision-making.", 
    icon: "feat-2.svg" 
  },
  { 
    title: "Scalable Systems", 
    body: "Run multiple AI agents simultaneously to handle complex business operations at scale.", 
    icon: "feat-3.svg" 
  },
];

function Subcopy() {
  return (
    <p
      className="text-slate-600 dark:text-slate-300 transition-colors duration-300"
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 20,
        lineHeight: "28px",
      }}
    >
      Discover powerful AI agents designed to handle repetitive tasks, improve performance, and
      scale your operations effortlessly.
    </p>
  );
}

export default function NextGenInfra() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full  sm:px-6 px-  py-12 md:py-24">
      <div 
        className="mx-auto relative overflow-hidden transition-all duration-500 bg-slate-100 dark:bg-[#0B1220] border border-black/5 dark:border-white/5"
        style={{
          borderRadius: 32,
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-[10] pointer-events-none overflow-hidden">
  {/* Blur Effects */}
  {/* <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-500/10 dark:bg-blue-600/5 blur-[100px] rounded-full" />

  <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-indigo-500/10 dark:bg-indigo-600/5 blur-[100px] rounded-full" /> */}

  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/section-9-developer-builder/bg.png"
      alt=""
      fill
      priority
      unoptimized
      className="
        object-cover
        object-center
        w-full
        h-full
        opacity-40
        dark:opacity-40
        mix-blend-overlay
        scale-100
      "
    />
  </div>
</div>

        <div className="relative z-10 p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div
              className="inline-flex w-fit transition-colors duration-300 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 rounded-full px-4 py-1.5"
            >
              <span
                className="font-semibold text-xs uppercase tracking-[0.1em] bg-clip-text text-transparent"
                style={{ backgroundImage: blueGrad }}
              >
                Next-Gen Infrastructure
              </span>
            </div>

            <h2
              className="text-slate-900 dark:text-white transition-colors duration-300"
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "1.1",
                letterSpacing: -1.5,
              }}
            >
              Automate your workflows with <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>AI agents</span>
            </h2>

            <Subcopy />

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="flex items-center gap-2 px-8 h-14 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
                style={{
                  backgroundColor: colors.brand.blue,
                  color: colors.white,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                }}
              >
                Run an AI Agent
                <Image src="/section-3-category-page/btn-arrow.svg" alt="" width={14} height={16} className="" />
              </button>
              <button
                className="flex items-center px-8 h-14 rounded-full transition-all bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-md text-slate-900 dark:text-white font-semibold"
                style={{ fontFamily: typography.fonts.inter }}
              >
                View Solutions
              </button>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-6">
            {FEATURES.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-start md:items-center gap-6 p-6 md:p-8 transition-all duration-300 bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[40px] backdrop-blur-md hover:translate-x-2 lg:odd:translate-x-4 lg:even:translate-x-8"
              >
                <div
                  className="flex shrink-0 items-center justify-center w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl"
                >
                  <Image src={`/section-3-category-page/${feature.icon}`} alt="" width={32} height={32} className="object-contain" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-slate-900 dark:text-white font-bold text-xl"
                    style={{ fontFamily: typography.fonts.jakarta }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: typography.fonts.inter }}
                  >
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
