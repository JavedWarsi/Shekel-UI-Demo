"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Clock, Megaphone } from "lucide-react";

export default function AnalyticsCategoryReach() {
  const categories = [
    { name: "MARKETING", value: 62, active: true },
    { name: "AUTOMATION", value: 34, active: false },
    { name: "DESIGN", value: 14, active: false },
  ];

  return (
    <div className="flex flex-col gap-6 h-full" style={{ fontFamily: typography.fonts.inter }}>
      
      {/* Top Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] flex-1"
      >
        <h3 className="text-[16px] font-medium text-[#0b0b0b] tracking-tight mb-8" style={{ fontFamily: typography.fonts.poppins }}>
          Category Reach
        </h3>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] font-medium uppercase tracking-wider">
                <span className="text-[#64748B]">{cat.name}</span>
                <span className={cat.active ? "text-[#2864E4]" : "text-[#94A3B8]"}>{cat.value}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                  className={`h-full rounded-full ${cat.active ? 'bg-[#2864E4]' : 'bg-[#CBD5E1]'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-2 gap-4 h-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center"
        >
          <Clock size={18} className="text-[#2864E4] mb-2" strokeWidth={2} />
          <div className="text-[18px] font-medium text-[#0b0b0b] mb-1" style={{ fontFamily: typography.fonts.poppins }}>
            6 PM
          </div>
          <div className="text-[9px] font-medium text-[#94A3B8] uppercase tracking-wider">
            PEAK USAGE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center"
        >
          <Megaphone size={18} className="text-[#F97316] mb-2" strokeWidth={2} />
          <div className="text-[18px] font-medium text-[#0b0b0b] mb-1" style={{ fontFamily: typography.fonts.poppins }}>
            Marketing
          </div>
          <div className="text-[9px] font-medium text-[#94A3B8] uppercase tracking-wider">
            ACTIVE CAT
          </div>
        </motion.div>
      </div>

    </div>
  );
}
