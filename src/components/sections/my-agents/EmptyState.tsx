"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function MyAgentsEmptyState() {
  return (
    <div className="w-full flex flex-col items-center pb-24" style={{ fontFamily: typography.fonts.inter }}>
      
      {/* Divider */}
      <div className="w-full flex items-center gap-4 mb-20 opacity-60">
        <div className="flex-grow h-[1px] bg-[#E2E8F0]"></div>
        <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] whitespace-nowrap">
          EMPTY STATE CONCEPT
        </span>
        <div className="flex-grow h-[1px] bg-[#E2E8F0]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center text-center max-w-[400px]"
      >
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-[#F1F5F9] rounded-sm flex items-center justify-center border border-white shadow-[0_0_30px_rgba(40,100,228,0.15)] relative z-10 text-[#94A3B8]">
            <Rocket size={32} strokeWidth={1.5} />
          </div>
          {/* Subtle blue glow behind icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#2864E4] rounded-sm blur-[30px] opacity-20 z-0"></div>
        </div>

        <h3 className="text-[24px] font-bold text-[#0b0b0b] tracking-tight mb-3" style={{ fontFamily: typography.fonts.poppins }}>
          No agents yet
        </h3>
        
        <p className="text-[15px] text-[#64748B] leading-[1.6] mb-8">
          Your autonomous workforce is ready to be built. Start by creating your first specialized AI agent.
        </p>
        
        <button className="bg-[#0550E6] text-white px-8 py-3.5 rounded-[12px] font-bold text-[14px] hover:bg-[#0440C5] transition-colors">
          Create your first agent
        </button>
      </motion.div>
    </div>
  );
}
