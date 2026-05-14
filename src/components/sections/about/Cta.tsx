"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function Cta() {
  const { isDark } = useThemeTokens();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-black px-6 py-16 md:px-16 md:py-24">
      <Image src="/section-8-about/cta-bg.png" alt="" fill className="object-cover dark:opacity-30" />
      <Image src="/section-8-about/cta-ellipse.svg" alt="" width={696} height={696} className="border-red-500 pointer-events-none absolute -left-36 -top-72 opacity-60" />
      
      <div className="relative mx-auto max-w-[1080px] pb-20">
        <h2 className="text-white" style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: "clamp(48px,7vw,72px)", lineHeight: "1", letterSpacing: "-0.05em", textTransform: "capitalize" }}>
          Start building with
          <br />
          Shekel
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="min-w-[200px] px-10 py-5 hover:brightness-110 transition-all active:scale-95" style={{ borderRadius: "10px", background: "linear-gradient(188.63deg, #2864E4 35.41%, #1E9AFF 67.17%, #C6F8FF 151.22%)" }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>Get Started</span>
          </button>
          <button className="min-w-[200px] border bg-white dark:bg-black/20 backdrop-blur-sm px-10 py-5 hover:bg-gray-50 dark:hover:bg-white/5 transition-all active:scale-95" style={{ borderRadius: "10px", borderColor: "#2864E4" }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", letterSpacing: "0.1em", textTransform: "uppercase", background: "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Explore Agents</span>
          </button>
        </div>
        <p className="mt-12 max-w-[420px] text-[#0E0E0E] dark:text-white/60" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 10, lineHeight: "16px", letterSpacing: "0.36em", textTransform: "uppercase" }}>
          Join thousands of users and developers already using Shekel
        </p>
        <div className="absolute overflow-visible z-[20]" style={{ left: 802, top: 0, width: 473, height: 629 }}>
        <Image src="/section-9-workflows/side-image.png" alt="" fill className="object-cover animate-float" unoptimized />
      </div>
      </div>
    </section>
  );
}
