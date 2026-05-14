"use client";

import { typography } from "@/tokens/design-tokens";
import Image from "next/image";
import Link from "next/link";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function AnalyticsBottomCTA() {
  const { isDark } = useThemeTokens();

  return (
    <div
      className="
      
        relative
        w-full
        h-[550px]
        overflow-visible
        rounded-t-[48px]
        px-8
        py-16
        md:px-16
        md:py-24
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
      "
      style={{
        fontFamily: typography.fonts.inter,
        backgroundImage: "url('/section-8-about/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-[700px] ml-[20px] md:ml-[80px]">
        <h2
          className="
            text-[48px]
            md:text-[56px]
            font-normal
            leading-[1.2]
            tracking-tight
            text-[#0b0b0b]
            dark:text-white
            mb-8
          "
          style={{ fontFamily: typography.fonts.poppins }}
        >
          Start Using AI
          <br />
          Agents Today
        </h2>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <Link href="/marketplace" className="w-full sm:w-auto">
            <button
              className="
                w-full
                px-8
                py-4
                rounded-[12px]
                text-white
                font-medium
                text-[12px]
                uppercase
                tracking-wider
                transition-transform
                hover:scale-105
                shadow-[0_8px_30px_rgba(40,100,228,0.4)]
              "
              style={{
                background:
                  "linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)",
              }}
            >
              Explore Agents
            </button>
          </Link>

          <Link href="/create-ai-agent-page" className="w-full sm:w-auto">
            <button
              className="
                w-full
                px-8
                py-4
                rounded-[12px]
                text-[#2864E4]
                dark:text-blue-400
                font-medium
                text-[12px]
                uppercase
                tracking-wider
                bg-white/50
                dark:bg-slate-900/50
                backdrop-blur-sm
                border
                border-[#2864E4]/20
                dark:border-blue-400/20
                hover:bg-white/80
                dark:hover:bg-slate-800/80
                transition-colors
              "
            >
              Start Building
            </button>
          </Link>
        </div>

        {/* FOOTER TEXT */}
        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.2em]
            leading-[1.8]
            max-w-[300px]
            text-[#64748B]
            dark:text-slate-400
          "
        >
          JOIN THOUSANDS OF USERS AND DEVELOPERS ALREADY USING SHEKEL
        </p>
      </div>

      {/* FLOATING ROBOT IMAGE */}
      <div className="relative flex-1 flex items-center justify-end overflow-visible">
        <div
          className="
          mt-50
            relative
            w-[320px]
            h-[320px]
            md:w-[620px]
            md:h-[620px]
            z-30
          "
        >
          <Image
            src="/section-11/cta-robot.png"
            alt="3D Character"
            fill
            priority
            className="
              object-contain
              animate-float
              scale-[1.8]
              md:scale-[1.70]
              translate-x-10
              md:translate-x-24
              -translate-y-8
              relative
              z-30
              pointer-events-none
              drop-shadow-[0_40px_80px_rgba(37,99,235,0.35)]
            "
          />
        </div>
      </div>
    </div>
  );
}