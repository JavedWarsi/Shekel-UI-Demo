"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const LOGOS = [
  { src: "/section-3-pricing/logo-1.png", w: 210, h: 57 },
  { src: "/section-3-pricing/image 65.png", w: 226, h: 72 },
  { src: "/section-3-pricing/logo-2.png", w: 120, h: 72 },
  { src: "/section-3-pricing/logo-3.png", w: 119, h: 119 },
  { src: "/section-3-pricing/image 69.png", w: 239, h: 44 },
  { src: "/section-3-pricing/logo-4.png", w: 85, h: 89 },
  { src: "/section-3-pricing/logo-5.png", w: 223, h: 57 },
  { src: "/section-3-pricing/image 71.png", w: 141, h: 117 },
];

export default function TrustedTeams() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-[#05070C] relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-[0.03]">
        <Image src="/section-3-pricing/bg-texture.png" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-12 md:gap-16 items-center text-center">
        
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2
            className="text-slate-900 dark:text-white transition-colors duration-300"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.1",
            }}
          >
            Trusted by creators and teams worldwide.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl">
            Join thousands using AI agents to automate workflows.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {LOGOS.map((logo, i) => (
            <div key={i} className="relative transition-all duration-300 hover:scale-110 dark:brightness-0 dark:invert dark:opacity-60 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
              <Image
                src={logo.src}
                alt={`Logo ${i}`}
                width={logo.w}
                height={logo.h}
                className="object-contain"
                style={{ height: "clamp(40px, 8vw, 60px)", width: "auto" }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
