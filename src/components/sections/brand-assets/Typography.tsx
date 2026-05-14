"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function BrandAssetsTypography() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-28 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#020617]" : "bg-white"
      }`}
      style={{
        fontFamily: typography.fonts.inter,
        backgroundImage: "url(/section-16-how-to-build-agents/bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}
      {isDark && (
        <div className="absolute inset-0 bg-[#020617]/80 z-0" />
      )}

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-[40px] md:text-[48px] font-medium mb-12 tracking-tight transition-colors duration-300 ${
            isDark ? "text-white" : "text-[#000000]"
          }`}
          style={{ fontFamily: typography.fonts.poppins }}
        >
          Typography
        </motion.h2>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-[32px] overflow-hidden border transition-all duration-300 ${
            isDark
              ? "bg-[#0F172A]/90 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "bg-white border-[rgba(0,0,0,0.05)] shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          }`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x transition-colors duration-300 ${
              isDark
                ? "divide-white/10"
                : "divide-[rgba(0,0,0,0.06)]"
            }`}
          >

            {/* Left Column */}
            <div className="p-12 md:p-16 flex flex-col h-full">
              <span className="text-[12px] font-bold text-[#2F80ED] uppercase tracking-[0.15em] mb-10">
                HEADLINE TYPEFACE
              </span>

              <div className="flex-grow flex items-center">
                <p
                  className={`text-[40px] lg:text-[52px] font-semibold leading-[1.1] tracking-tight mb-16 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-[#000000]"
                  }`}
                  style={{ fontFamily: typography.fonts.poppins }}
                >
                  AI Powered
                  <br />
                  Commerce
                  <br />
                  Identity
                </p>
              </div>

              <p
                className={`text-[14px] transition-colors duration-300 ${
                  isDark ? "text-[#94A3B8]" : "text-[#718096]"
                }`}
              >
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-[#4A5568]"
                  }`}
                >
                  Poppins
                </span>{" "}
                — Geometric, Premium, Authoritative.
              </p>
            </div>

            {/* Right Column */}
            <div className="p-12 md:p-16 flex flex-col h-full">
              <span className="text-[12px] font-bold text-[#56CCF2] uppercase tracking-[0.15em] mb-10">
                BODY TYPEFACE
              </span>

              <div className="flex-grow flex items-center">
                <p
                  className={`text-[28px] lg:text-[34px] leading-[1.5] mb-16 transition-colors duration-300 ${
                    isDark ? "text-[#E2E8F0]" : "text-[#2D3748]"
                  }`}
                  style={{ fontFamily: typography.fonts.inter }}
                >
                  AI-powered commerce made simple. Secure,
                  fast, and globally accessible for the new
                  economy.
                </p>
              </div>

              <p
                className={`text-[14px] transition-colors duration-300 ${
                  isDark ? "text-[#94A3B8]" : "text-[#718096]"
                }`}
              >
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-[#4A5568]"
                  }`}
                >
                  Inter
                </span>{" "}
                — Legible, Neutral, Universal.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}