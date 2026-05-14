"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const GLOW_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Glow Decor */}
      <div className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-blue-500/10 blur-[100px] dark:bg-blue-600/20" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
          <h1
            className="text-slate-900 dark:text-white transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400"
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 800,
              fontSize: "clamp(48px, 8vw, 84px)",
              lineHeight: "1.05",
              letterSpacing: "-0.04em",
            }}
          >
            Get in touch <br /> with us
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            We're here to help you navigate the world of AI agents. Premium support for modern builders.
          </p>
        </div>

        <div className="relative w-full max-w-[600px] aspect-square lg:aspect-auto lg:h-[600px]">
           <Image
            src="/section-1-connect-us/hero-image.png"
            alt="Connect with us illustration"
            fill
            className="object-contain dark:brightness-110 transition-all duration-500 hover:scale-105"
            priority
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
