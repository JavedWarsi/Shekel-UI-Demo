"use client";

import { typography, colors } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

export default function WorkflowGuideHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 border-b border-[rgba(0,0,0,0.06)]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#56ccf2]/[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8fafd] border border-[rgba(0,0,0,0.06)] mb-8">
              <Workflow size={16} className="text-[#2864e4]" />
              <span className="text-[13px] font-bold uppercase tracking-widest text-[#475569]">Workflow Guide</span>
            </div>
            <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>
              Architect Complex <br /><span className="text-[#2864e4]">AI Workflows</span>
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#414753] mb-12">
              Learn how to chain multiple agents together to solve sophisticated business problems. From simple linear tasks to complex recursive loops.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#2864e4] text-white font-bold rounded-xl hover:bg-[#2054c2] transition-colors shadow-lg shadow-[#2864e4]/20">
                Explore Patterns
              </button>
              <button className="px-8 py-4 bg-white border border-[rgba(0,0,0,0.1)] text-[#0b0b0b] font-bold rounded-xl hover:bg-gray-50 transition-colors">
                View Templates
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-[500px]"
          >
            <div className="bg-[#0b0b0b] rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2864e4]/20 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-6">
                {[
                  { label: "Data Input", color: "#2864e4", icon: "📥" },
                  { label: "Agent A: Analysis", color: "#56ccf2", icon: "🧠" },
                  { label: "Agent B: Synthesis", color: "#10b981", icon: "⚙️" },
                  { label: "Result Delivery", color: "#7c4dff", icon: "📤" }
                ].map((node, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[20px] bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {node.icon}
                    </div>
                    <div className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
                      <span className="text-white/80 font-medium">{node.label}</span>
                    </div>
                    {i < 3 && (
                      <div className="absolute left-[40px] top-[48px] h-[24px] w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
