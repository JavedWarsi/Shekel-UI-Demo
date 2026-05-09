"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Cloud, ArrowRight } from "lucide-react";

export default function CreatorBuildMore() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-[#FAFAFA]/50 rounded-[32px] border-[1.5px] border-dashed border-[#CBD5E1] p-12 md:p-16 flex flex-col items-center justify-center text-center mt-6"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="text-[#94A3B8] mb-6">
        <Cloud size={40} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-[20px] font-bold text-[#0b0b0b] mb-2" style={{ fontFamily: typography.fonts.poppins }}>
        Build more possibilities
      </h3>
      
      <p className="text-[14px] text-[#64748B] max-w-[320px] leading-[1.6] mb-8">
        Ready to expand your empire? Create a new specialized agent and watch your runs grow.
      </p>
      
      <button className="flex items-center gap-2 text-[14px] font-bold text-[#2864E4] hover:gap-3 transition-all">
        Explore templates <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
