"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

function CtaSubline() {
  return (
    <p
      className="text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] text-[10px]"
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        lineHeight: "16px",
      }}
    >
      Join thousands of users and developers already using Shekel
    </p>
  );
}

export default function CategoryCta() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
  const btnGrad = "linear-gradient(188.63deg, rgb(40, 100, 228) 35.4%, rgb(30, 154, 255) 67.2%, rgb(198, 248, 255) 151.2%)";

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div 
        className="max-w-[1280px] mx-auto relative overflow-hidden transition-all duration-500 bg-slate-900 dark:bg-black p-8 md:p-16 lg:p-24"
        style={{
          borderRadius: 32,
        }}
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <Image 
            src="/section-5-category-page/cta-bg.png" 
            alt="" 
            fill 
            className="object-cover opacity-20 dark:opacity-40"
          />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
            <h2
              className="text-white transition-colors duration-300"
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: "1.1",
                letterSpacing: -2,
              }}
            >
              Start using AI agents today
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                className="px-10 h-14 rounded-xl text-white font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
                style={{
                  background: btnGrad,
                  fontFamily: typography.fonts.inter,
                }}
              >
                Explore Agents
              </button>
              <button
                className="px-10 h-14 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all border border-blue-500/50 hover:bg-blue-500/10 text-white"
                style={{ 
                  fontFamily: typography.fonts.inter,
                }}
              >
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>
                  Start Building
                </span>
              </button>
            </div>

            <div className="pt-4">
              <CtaSubline />
            </div>
          </div>

          {/* Rocket Image */}
          <div className="relative w-full max-w-[400px] aspect-square lg:max-w-[500px]">
            <Image
              src="/section-8/rocket.webp"
              alt=""
              fill
              className="object-contain animate-float"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
