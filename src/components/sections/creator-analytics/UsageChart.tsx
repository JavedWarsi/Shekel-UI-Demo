"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";

export default function AnalyticsUsageChart() {
  const chartData = [
    { label: "Mon", height: "35%", active: false },
    { label: "Tue", height: "60%", active: false },
    { label: "Wed", height: "50%", active: false },
    { label: "Thu", height: "100%", active: true },
    { label: "Fri", height: "70%", active: false },
    { label: "Sat", height: "45%", active: false },
    { label: "Sun", height: "35%", active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] mb-8 flex flex-col"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h3 className="text-[20px] font-medium text-[#0b0b0b] tracking-tight mb-1" style={{ fontFamily: typography.fonts.poppins }}>
            Agent Usage
          </h3>
          <p className="text-[13px] text-[#64748B]">
            Processing cycles across all active AI models
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2864E4] text-[11px] font-medium flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2864E4]"></div>
            Current Period
          </div>
          <div className="text-[#64748B] text-[11px] font-medium flex items-center gap-2 pr-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
            Previous
          </div>
        </div>
      </div>

      <div className="relative w-full h-[240px] flex items-end">
        {chartData.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center h-full justify-end relative group">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: bar.height }}
              transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
              className={`w-full rounded-t-[8px] transition-colors ${bar.active ? 'bg-[#0550E6]' : 'bg-[#DCE8FC] hover:bg-[#C5D8F9]'}`}
              style={{
                // Prevent overlapping gaps perfectly
                marginRight: i !== chartData.length - 1 ? '-1px' : '0' 
              }}
            />
            <div className={`absolute -bottom-8 text-[10px] font-medium uppercase tracking-wider ${bar.active ? 'text-[#0550E6] font-bold' : 'text-[#94A3B8]'}`}>
              {bar.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Spacer for bottom labels */}
      <div className="h-8"></div>
    </motion.div>
  );
}
