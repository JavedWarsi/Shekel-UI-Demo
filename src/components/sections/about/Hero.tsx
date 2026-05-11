"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function Hero() {
  const { isDark } = useThemeTokens();

  const TITLE_GRADIENT = isDark
    ? "linear-gradient(202.17deg, #FFFFFF 55.63%, rgba(255,255,255,0.4) 110.73%)"
    : "linear-gradient(202.17deg, #000000 55.63%, rgba(0,0,0,0.6) 110.73%)";

  return (
    <section className="relative overflow-hidden transition-colors duration-300 bg-white dark:bg-[#05070C] px-6 pb-20 pt-28 md:px-16 md:pb-28 md:pt-36">
      <Image src="/section-1-about/hero-vector.svg" alt="" width={905} height={909} className="pointer-events-none absolute -left-64 -top-96 opacity-10 dark:opacity-20 transition-opacity duration-300" />
      <Image src="/section-1-about/hero-ellipse-top.svg" alt="" width={1343} height={211} className="pointer-events-none absolute -top-12 left-0 opacity-20 dark:opacity-40 transition-opacity duration-300" />
      <Image src="/section-1-about/hero-ellipse-left.svg" alt="" width={163} height={163} className="pointer-events-none absolute -left-10 -top-10 opacity-40 dark:opacity-100 transition-opacity duration-300" />
      <Image src="/section-1-about/hero-ellipse-right.svg" alt="" width={163} height={163} className="pointer-events-none absolute -right-10 -top-10 opacity-40 dark:opacity-100 transition-opacity duration-300" />
      
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[590px]">
          <h1
            className="transition-colors duration-300"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(44px, 7vw, 64px)",
              lineHeight: "1.08",
              letterSpacing: "-0.056em",
              background: TITLE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Where AI agents
            <br />
            become systems
          </h1>
          <p
            className="mt-8 max-w-[520px] text-slate-600 dark:text-white/60 transition-colors duration-300"
            style={{
              marginBottom: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "32.5px",
            }}
          >
            Shekel brings multiple AI agents together into a unified architecture.
            It&apos;s not just about one task; it&apos;s about building resilient, automated
            production lines.
          </p>
          <Link
            href="/marketplace"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 hover:opacity-90 transition-opacity"
            style={{
              borderRadius: radiuses.cardSm,
              background: "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)",
              boxShadow: "0px 20px 25px rgba(25,28,30,0.06)",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 18,
                lineHeight: "28px",
                color: colors.white,
              }}
            >
              Explore Agents
            </span>
            <Image src="/section-1-about/hero-arrow.svg" alt="" width={16} height={16} />
          </Link>
        </div>
        <div className="relative mx-auto h-[360px] w-[360px] md:mx-0 md:h-[560px] md:w-[560px]">
          <div className="absolute inset-0 rounded-[20px] border border-[#B557FA]/10 dark:border-[#B557FA]/30 transition-colors duration-300" />
          <div className="absolute inset-3 rounded-[20px] border border-[#B557FA]/5 dark:border-[#B557FA]/20 transition-colors duration-300" />
          <div className="absolute inset-6 rounded-[20px] border border-[#B557FA]/5 dark:border-[#B557FA]/15 transition-colors duration-300" />
          <Image src="/section-1-about/hero-glow.svg" alt="" fill className="object-contain opacity-40 dark:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
}
