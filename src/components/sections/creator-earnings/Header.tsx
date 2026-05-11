"use client";

import { typography } from "@/tokens/design-tokens";
import { Calendar, Download } from "lucide-react";

export default function EarningsHeader() {
  return (
    <div className="w-full flex flex-col mb-10" style={{ fontFamily: typography.fonts.inter }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[36px] md:text-[40px] font-medium text-[#0b0b0b] dark:text-white tracking-tight mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            Earnings
          </h1>
          <p className="text-[15px] text-[#64748B] dark:text-slate-400">
            Monitor your revenue flow and payout status.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 text-[#0b0b0b] dark:text-white px-4 py-2.5 rounded-[12px] font-medium text-[13px] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <Calendar size={16} className="text-[#64748B]" />
            Last 30 Days
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-[#64748B]"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          <button 
            onClick={() => alert("Report generation started...")}
            className="flex items-center gap-2 bg-[#0550E6] text-white px-5 py-2.5 rounded-[12px] font-medium text-[13px] hover:bg-[#0440C5] transition-colors shadow-[0_4px_14px_rgba(5,80,230,0.25)]"
          >
            <Download size={16} strokeWidth={2} />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
