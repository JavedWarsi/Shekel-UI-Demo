"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";

export default function BrandAssetsTypography() {
  return (
    <section className="relative w-full py-28 overflow-hidden" style={{ fontFamily: typography.fonts.inter, backgroundImage: "url(/section-16-how-to-build-agents/bg.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
      {/* Mesh Gradient Background (Similar to Logos section) */}
      {/* <div className="absolute inset-0 bg-[#FAFAFA]" />
      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#EBF8FF] blur-[120px] opacity-80" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FFF5F5] blur-[120px] opacity-80" /> */}

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[48px] font-medium text-[#000000] mb-12 tracking-tight"
          style={{ fontFamily: typography.fonts.poppins }}
        >
          Typography
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(0,0,0,0.06)]">

            {/* Left Column - Poppins */}
            <div className="p-12 md:p-16 flex flex-col h-full">
              <span className="text-[12px] font-bold text-[#2F80ED] uppercase tracking-[0.15em] mb-10">
                HEADLINE TYPEFACE
              </span>

              <div className="flex-grow flex items-center">
                <p
                  className="text-[40px] lg:text-[52px] font-semibold text-[#000000] leading-[1.1] tracking-tight mb-16"
                  style={{ fontFamily: typography.fonts.poppins }}
                >
                  AI Powered<br />Commerce<br />Identity
                </p>
              </div>

              <p className="text-[14px] text-[#718096]">
                <span className="font-semibold text-[#4A5568]">Poppins</span> — Geometric, Premium, Authoritative.
              </p>
            </div>

            {/* Right Column - Inter */}
            <div className="p-12 md:p-16 flex flex-col h-full">
              <span className="text-[12px] font-bold text-[#56CCF2] uppercase tracking-[0.15em] mb-10">
                BODY TYPEFACE
              </span>

              <div className="flex-grow flex items-center">
                <p
                  className="text-[28px] lg:text-[34px] text-[#2D3748] leading-[1.5] mb-16"
                  style={{ fontFamily: typography.fonts.inter }}
                >
                  AI-powered commerce made simple. Secure, fast, and globally accessible for the new economy.
                </p>
              </div>

              <p className="text-[14px] text-[#718096]">
                <span className="font-semibold text-[#4A5568]">Inter</span> — Legible, Neutral, Universal.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
