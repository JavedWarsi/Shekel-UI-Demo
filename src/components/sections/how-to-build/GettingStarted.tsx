"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function GettingStarted() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className={`relative w-full py-24 overflow-hidden transition-colors duration-300 dark:bg-[#1A1F27]
       
      `}
    >
      {/* Decorative Grid Background */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 ${
          isDark ? "opacity-[0.08]" : "opacity-[0.05]"
          
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#2864E4 1px, transparent 1px), linear-gradient(90deg, #2864E4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Blue Glows */}
      <div
        className={`absolute -left-[10%] top-[20%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
          isDark ? "bg-blue-500/10" : "bg-blue-100/50"
        }`}
      />
      <div
        className={`absolute -right-[10%] bottom-[20%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
          isDark ? "bg-blue-500/10" : "bg-blue-100/50"
        }`}
      />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2
            className={`text-[40px] font-semibold mb-8 transition-colors duration-300  dark:text-white 
            `}
            style={{ fontFamily: typography.fonts.inter }}
          >
            Getting Started
          </h2>

          <p
            className={`text-[16px] leading-relaxed transition-colors duration-300 ${
              isDark ? "text-[#94A3B8]" : "text-[#64748B]"
            }`}
          >
            To begin, install the AgentArchitect CLI and initialize your
            workspace. This sets up the local environment required for agent
            orchestration.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative rounded-[20px] border p-8 md:p-12 shadow-sm transition-all duration-300 ${
            isDark
              ? "bg-[#0F172A] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              : "bg-[#F8FAFC] border-[#E2E8F0]"
          }`}
        >
          {/* Mac Style Dots */}
          <div className="flex gap-1.5 mb-8">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>

          <div className="space-y-4 font-mono text-[15px] md:text-[16px]">
            <div className="flex gap-4">
              <span
                className={`transition-colors duration-300 
                  ${
                  isDark ? "text-[#64748B]" : "text-[#94A3B8]"
                }`
              }
              >
                $
              </span>

              <span
                className={`transition-colors duration-300 ${
                  isDark ? "text-white" : "text-[#0F172A]"
                }`}
              >
                npm install -g @agent-architect/cli
              </span>
            </div>

            <div className="flex gap-4">
              <span
                className={`transition-colors duration-300 ${
                  isDark ? "text-[#64748B]" : "text-[#94A3B8]"
                }`}
              >
                $
              </span>

              <span
                className={`transition-colors duration-300 ${
                  isDark ? "text-white" : "text-[#0F172A]"
                }`}
              >
                architect init my-first-agent
              </span>
            </div>

            <div className="flex gap-4 pt-4">
              <span
                className={`animate-pulse transition-colors duration-300 ${
                  isDark ? "text-[#94A3B8]" : "text-[#64748B]"
                }`}
              >
                Initializing repository...
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}