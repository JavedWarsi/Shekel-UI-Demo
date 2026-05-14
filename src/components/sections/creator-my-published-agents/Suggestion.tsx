"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CreatorSuggestion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white rounded-[32px] p-8 dark:bg-slate-900/70 backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] w-full"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="flex items-center gap-2 mb-4 text-[#2864E4]">
        <Sparkles size={16} />
        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em]">
          CURATOR SUGGESTION
        </h3>
      </div>
      
      <p className="text-[14px] text-[#0b0b0b] dark:text-white/40 leading-[1.6] mb-8">
        "Your SEO Content Generator is reaching capacity. Consider creating a 'SEO Content Lite' version for higher throughput."
      </p>
      
      <button className="w-auto px-6 py-3 bg-[#0550E6] text-white rounded-full font-bold text-[13px] hover:bg-[#0440C5] transition-colors">
        Apply Recommendation
      </button>
    </motion.div>
  );
}
