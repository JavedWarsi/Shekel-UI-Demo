"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { ChevronDown, Send } from "lucide-react";

export default function ConfigSandbox() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[url(/section-4-faq/bg.png)]">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -left-[20%] top-[10%] w-[800px] h-[800px] bg-pink-100 dark:bg-pink-700 rounded-full blur-[120px]" />
        <div className="absolute -right-[20%] bottom-[10%] w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        {/* Model Configuration */}
        <div className="mb-32">
          <h2 className="text-[40px] font-bold text-[#0F172A] mb-12" style={{ fontFamily: typography.fonts.inter }}>
            Model Configuration
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-[#0F172A] p-8 md:p-12 shadow-2xl border border-white/5"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-8">
                <div>
                  <label className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-wider mb-3 block">MAIN MODEL</label>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 cursor-pointer hover:bg-white/10 transition-all">
                    <span className="text-white font-medium">GPT-4o-Turbo (Recommended)</span>
                    <ChevronDown size={20} className="text-[#94A3B8]" />
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-wider mb-3 block">SYSTEM ROLE</label>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 h-24">
                    <span className="text-white/40 text-[14px]">I want you to be...</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[360px] bg-black/40 rounded-xl p-8 border border-white/5">
                <pre className="font-mono text-[13px] text-[#2864E4] leading-relaxed">
                  <code>{`model: "gpt-4o"
parameters: {
  temperature: 0.7
  max_tokens: 4096
  top_p: 1.0
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Test Sandbox */}
        <div>
          <h2 className="text-[40px] font-bold text-[#0F172A] mb-12" style={{ fontFamily: typography.fonts.inter }}>
            Test Sandbox
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-black p-8 md:p-12 shadow-2xl border border-white/5"
          >
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              <div className="flex justify-end">
                <div className="bg-[#1E293B] text-white px-6 py-4 rounded-[20px] rounded-tr-none text-[14px] max-w-[80%]">
                  Research the last 5 years of space exploration milestones.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#0F172A] border border-white/5 text-white/80 px-6 py-6 rounded-[20px] rounded-tl-none text-[14px] max-w-[80%]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#2864E4] animate-pulse" />
                    <span className="text-[12px] font-bold text-[#94A3B8]">Thinking...</span>
                  </div>
                  I've accessed the browsing tool. 2019-2024 milestones include the Perseverance Mars landing, James Webb first images...
                </div>
              </div>

              <div className="mt-8 relative">
                <input
                  type="text"
                  placeholder="Send a message to your agent..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white focus:outline-none focus:border-[#2864E4] transition-all pr-16"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2864E4] flex items-center justify-center text-white">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
