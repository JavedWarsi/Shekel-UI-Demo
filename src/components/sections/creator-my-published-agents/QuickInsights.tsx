"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { TrendingUp, Rocket, ChevronRight } from "lucide-react";

export default function CreatorQuickInsights() {
  return (
    <div className="w-full mb-8" style={{ fontFamily: typography.fonts.inter }}>
      <h3 className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.1em] mb-4">
        QUICK INSIGHTS
      </h3>

      <div className="flex flex-col gap-4">
        {/* Insight 1 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-slate-900/70 backdrop-blur-sm rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2864E4] flex items-center justify-center flex-shrink-0">
            <TrendingUp size={18} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-0.5">Most Used Category</p>
            <p className="text-[14px] font-bold dark:text-[#FFFFFF] text-[#0b0b0b]">Marketing</p>
          </div>
        </motion.div>

        {/* Insight 2 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-[24px] dark:bg-slate-900/70 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#FFF7ED] text-[#F97316] flex items-center justify-center flex-shrink-0">
            <Rocket size={18} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-0.5">Highest Growth</p>
            <p className="text-[14px] font-bold dark:text-[#FFFFFF] text-[#0b0b0b]">Automation Agents</p>
          </div>
        </motion.div>

        {/* Insight 3 (Forecast) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#F8FAFC] dark:bg-slate-900/70 backdrop-blur-sm rounded-[24px] p-6 border border-[#E2E8F0] flex items-center justify-between cursor-pointer hover:bg-[#F1F5F9] transition-colors"
        >
          <div className="flex flex-col">
            <p className="text-[13px] font-bold text-[#2864E4] mb-1">Weekly AI Forecast</p>
            <p className="text-[12px] text-[#64748B]">Predicting +18% revenue next week</p>
          </div>
          <ChevronRight size={18} className="text-[#2864E4]" />
        </motion.div>
      </div>
    </div>
  );
}
