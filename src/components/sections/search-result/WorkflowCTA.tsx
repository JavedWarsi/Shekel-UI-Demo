"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layout,
  Palette,
  Send,
} from "lucide-react";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function WorkflowCTA() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className="relative w-full py-24 overflow-hidden bg-white dark:bg-[#05070C] transition-colors duration-300"
      style={{ fontFamily: typography.fonts.inter }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20 transition-opacity duration-300"
        style={{
          background: isDark
            ? `
              radial-gradient(circle at 80% 20%, rgba(92,138,231,0.18) 0%, transparent 40%),
              radial-gradient(circle at 20% 80%, rgba(40,100,228,0.14) 0%, transparent 40%),
              linear-gradient(135deg, #05070C 0%, #0B1120 100%)
            `
            : `
              radial-gradient(circle at 80% 20%, rgba(255, 182, 193, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 20% 80%, rgba(173, 216, 230, 0.2) 0%, transparent 40%),
              linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)
            `,
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white dark:bg-[#0F172A] rounded-[32px] p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.45)] border border-gray-50 dark:border-white/10 overflow-hidden transition-colors duration-300">
              
              {/* Header */}
              <div className="mb-8">
                <span className="text-[11px] font-bold text-[#475569] dark:text-white/50 uppercase tracking-[0.1em] mb-4 block transition-colors duration-300">
                  What do you want to automate?
                </span>

                <div className="relative group">
                  <div className="w-full bg-[#F1F5F9] dark:bg-[#111827] rounded-2xl py-5 px-6 pr-14 text-[15px] text-[#1E293B] dark:text-white/80 border border-transparent dark:border-white/5 group-hover:border-blue-100 dark:group-hover:border-[#2864e4]/30 transition-all">
                    Create and publish a full marketing campaign
                  </div>

                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#E2E8F0] dark:bg-[#1E293B] rounded-xl flex items-center justify-center text-[#2864e4]">
                    <Sparkles size={18} />
                  </div>
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="flex items-center justify-between gap-4 mb-10 mt-12 relative px-4">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-white dark:bg-[#111827] rounded-2xl flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                    <Layout size={24} className="text-[#2864e4]" />
                  </div>

                  <span className="text-[10px] font-bold text-[#64748B] dark:text-white/50 uppercase tracking-wider">
                    Content AI
                  </span>
                </div>

                <div className="flex-1 flex justify-center pb-8">
                  <div className="w-full h-[1px] bg-[#CBD5E1] dark:bg-white/10 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#CBD5E1] dark:border-white/20 rotate-45" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-white dark:bg-[#111827] rounded-2xl flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                    <Palette size={24} className="text-[#2864e4]" />
                  </div>

                  <span className="text-[10px] font-bold text-[#64748B] dark:text-white/50 uppercase tracking-wider">
                    Design AI
                  </span>
                </div>

                <div className="flex-1 flex justify-center pb-8">
                  <div className="w-full h-[1px] bg-[#CBD5E1] dark:bg-white/10 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#CBD5E1] dark:border-white/20 rotate-45" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-white dark:bg-[#111827] rounded-2xl flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                    <Send size={24} className="text-[#2864e4]" />
                  </div>

                  <span className="text-[10px] font-bold text-[#64748B] dark:text-white/50 uppercase tracking-wider">
                    Publish AI
                  </span>
                </div>
              </div>

              {/* Execution Log */}
              <div className="bg-[#F8FAFC] dark:bg-[#111827] rounded-2xl p-8 border border-gray-50 dark:border-white/5 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />

                  <span className="text-[11px] font-bold text-[#475569] dark:text-white/50 uppercase tracking-[0.1em]">
                    System Execution Log
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    "12 posts generated",
                    "Scheduled across platforms",
                    "Ready to publish",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-[#10B981]"
                      />

                      <span className="text-[14px] text-[#475569] dark:text-white/70 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2
              className="text-[48px] md:text-[64px] font-bold text-[#0F172A] dark:text-white leading-[1.1] mb-8 transition-colors duration-300"
              style={{ fontFamily: typography.fonts.poppins }}
            >
              Run AI agents as a{" "}
              <span className="bg-gradient-to-r from-[#7CA5F4] to-[#5C8AE7] bg-clip-text text-transparent">
                complete workflow
              </span>
            </h2>

            <p className="text-[18px] text-[#64748B] dark:text-white/60 leading-relaxed mb-10 max-w-lg transition-colors duration-300">
              Automate complex multi-step processes by connecting specialized AI
              agents into a seamless, high-performance execution chain.
            </p>

            <div className="mb-12">
              <button className="flex items-center gap-3 bg-gradient-to-r from-[#8EADEE] to-[#5C8AE7] text-white px-9 py-4 rounded-[18px] text-[16px] font-bold shadow-lg shadow-blue-400/30 hover:scale-105 transition-transform">
                Run Workflow
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="pt-10 border-t border-gray-100 dark:border-white/10 flex items-center gap-12 transition-colors duration-300">
              <div>
                <div className="text-[32px] font-bold text-[#0F172A] dark:text-white">
                  2.4k+
                </div>

                <div className="text-[14px] text-[#64748B] dark:text-white/50 font-medium">
                  Active agents
                </div>
              </div>

              <div className="w-[1px] h-10 bg-gray-100 dark:bg-white/10" />

              <div>
                <div className="text-[32px] font-bold text-[#0F172A] dark:text-white">
                  0ms
                </div>

                <div className="text-[14px] text-[#64748B] dark:text-white/50 font-medium">
                  Latency
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}