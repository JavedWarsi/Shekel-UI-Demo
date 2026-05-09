"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Bot, Zap, Banknote, Star } from "lucide-react";

export default function CreatorStats() {
  return (
    <div className="w-full" style={{ fontFamily: typography.fonts.inter }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[rgba(0,0,0,0.02)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Stat 1 */}
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2864E4] flex items-center justify-center">
                <Bot size={20} strokeWidth={2} />
              </div>
              <div className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2864E4] text-[11px] font-bold tracking-wide">
                +2 new
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#64748B] mb-1">Total Published Agents</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[36px] font-bold text-[#0b0b0b] leading-none tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>12</span>
                <span className="text-[14px] font-medium text-[#475569]">Active</span>
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2864E4] flex items-center justify-center">
                <Zap size={20} strokeWidth={2} />
              </div>
              <div className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2864E4] text-[11px] font-bold tracking-wide">
                +14%
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#64748B] mb-1">Total Runs</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[36px] font-bold text-[#0b0b0b] leading-none tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>8,420</span>
                <span className="text-[14px] font-medium text-[#475569]">Runs</span>
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2864E4] flex items-center justify-center">
                <Banknote size={20} strokeWidth={2} />
              </div>
              <div className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2864E4] text-[11px] font-bold tracking-wide">
                ↑ $420
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#64748B] mb-1">Total Revenue</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[36px] font-bold text-[#0b0b0b] leading-none tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>$6,280</span>
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#2864E4] flex items-center justify-center">
                <Star size={20} strokeWidth={2} />
              </div>
              <div className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2864E4] text-[11px] font-bold tracking-wide">
                Top 1%
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#64748B] mb-1">Average Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-[36px] font-bold text-[#0b0b0b] leading-none tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>4.7</span>
                <Star size={20} fill="#0b0b0b" className="text-[#0b0b0b]" />
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
