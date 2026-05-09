"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function AnalyticsCuratedIntelligence() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="w-full bg-[#F4F7FB] rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 mt-8"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="flex items-start md:items-center gap-6">
        <div className="w-14 h-14 rounded-full bg-[#0550E6] flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(5,80,230,0.3)]">
          <Lightbulb size={24} className="text-white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-[16px] font-medium text-[#0b0b0b] tracking-tight mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            Curated Intelligence
          </h3>
          <p className="text-[14px] text-[#64748B] leading-[1.6] max-w-[600px]">
            Your marketing agents are generating the highest engagement this month. 
            Consider expanding into <span className="font-medium text-[#2864E4]">automation workflows</span> to capture additional retention lift.
          </p>
        </div>
      </div>

      <button className="whitespace-nowrap px-8 py-3 bg-white rounded-full text-[#2864E4] font-medium text-[13px] shadow-[0_2px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.08)] transition-shadow border border-[#E2E8F0]">
        Explore Workflows
      </button>
    </motion.div>
  );
}
