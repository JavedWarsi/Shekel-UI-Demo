"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Zap, Calendar, ArrowUp } from "lucide-react";

export default function EarningsChart() {
  const chartData = [
    { height: "35%", label: "MAR 05", active: false },
    { height: "45%", label: "MAR 12", active: false },
    { height: "40%", label: "", active: false },
    { height: "60%", label: "MAR 19", active: false },
    { height: "50%", label: "", active: false },
    { height: "75%", label: "MAR 26", active: false },
    { height: "90%", label: "TODAY", active: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[rgba(0,0,0,0.02)] mb-8 flex flex-col lg:flex-row gap-12 lg:gap-16"
      style={{ fontFamily: typography.fonts.inter }}
    >
      {/* Left: Chart Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-[20px] font-medium text-[#0b0b0b] tracking-tight mb-1" style={{ fontFamily: typography.fonts.poppins }}>
              Revenue Over Time
            </h3>
            <p className="text-[13px] text-[#64748B]">
              Daily growth visualization
            </p>
          </div>

          <div className="flex items-center bg-[#F1F5F9] rounded-full p-1">
            <button className="px-4 py-1.5 rounded-full text-[12px] font-medium text-[#64748B]">
              Daily
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#0550E6] text-white text-[12px] font-medium shadow-sm">
              Weekly
            </button>
          </div>
        </div>

        {/* Bar Chart Area */}
        <div className="relative flex-1 min-h-[250px] flex items-end justify-between pt-10 pb-8 mt-auto">
          {/* Background Dashed Lines */}
          <div className="absolute top-[20%] left-0 w-full h-[1px] border-b border-dashed border-[#E2E8F0]" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] border-b border-dashed border-[#E2E8F0]" />

          {chartData.map((bar, i) => (
            <div key={i} className="flex flex-col items-center gap-4 w-[12%] z-10 h-full justify-end">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: bar.height }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                className={`w-full rounded-t-[4px] ${bar.active ? 'bg-[#0550E6]' : 'bg-[#98B8E8]'}`}
              />
              <div className="text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider h-4">
                {bar.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Breakdown Section */}
      <div className="w-full lg:w-[320px] flex flex-col lg:border-l border-[rgba(0,0,0,0.04)] lg:pl-12 justify-center">
        
        <div className="flex flex-col gap-8 mb-10">
          {/* Breakdown 1 */}
          <div className="flex justify-between items-start border-l-2 border-[#2864E4] pl-4">
            <div>
              <p className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Pay-per-use</p>
              <p className="text-[20px] font-medium text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>$7,200</p>
            </div>
            <Zap size={18} className="text-[#2864E4]" strokeWidth={2} />
          </div>

          {/* Breakdown 2 */}
          <div className="flex justify-between items-start border-l-2 border-[#E2E8F0] pl-4">
            <div>
              <p className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Subscriptions</p>
              <p className="text-[20px] font-medium text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>$3,800</p>
            </div>
            <Calendar size={18} className="text-[#64748B]" strokeWidth={2} />
          </div>

          {/* Breakdown 3 */}
          <div className="flex justify-between items-start border-l-2 border-[#F59E0B] pl-4">
            <div>
              <p className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Premium Upgrades</p>
              <p className="text-[20px] font-medium text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>$1,540</p>
            </div>
            <ArrowUp size={18} className="text-[#F59E0B]" strokeWidth={2.5} />
          </div>
        </div>

        {/* Insight Box */}
        <div className="bg-[#F8FAFC]/50 rounded-[16px] p-5 border border-dashed border-[#CBD5E1]">
          <p className="text-[12px] text-[#64748B] leading-[1.6] text-center">
            AI Insight: Your "Pay-per-use" revenue increased by 24% this week. Consider promoting bulk credits.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
