"use client";

import { Wallet, Landmark } from "lucide-react";
import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";

export default function EarningsStats() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mb-8" style={{ fontFamily: typography.fonts.inter }}>
      
      {/* Total Earnings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/3 bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[rgba(0,0,0,0.02)] dark:border-slate-800 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-[16px] bg-[#EFF6FF] dark:bg-blue-900/30 text-[#2864E4] flex items-center justify-center">
            <Wallet size={24} strokeWidth={2} />
          </div>
          <div className="px-3 py-1 rounded-full bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981] text-[11px] font-medium tracking-wide flex items-center gap-1">
            ↗ +18%
          </div>
        </div>

        <div>
          <p className="text-[13px] font-medium text-[#64748B] dark:text-slate-400 mb-1">Total Earnings</p>
          <div className="text-[40px] font-medium text-[#0b0b0b] dark:text-white leading-none mb-2 tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>
            $12,540
          </div>
          <p className="text-[12px] text-[#94A3B8] dark:text-slate-500">
            Updated 2 hours ago
          </p>
        </div>
      </motion.div>

      {/* Payout Management Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-2/3 border-[4px] border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]  flex flex-col"
      >
        <div className="flex items-center  gap-2 mb-8 text-[#0b0b0b] dark:text-white">
          <Landmark size={20} className="text-[#2864E4]" strokeWidth={2} />
          <h3 className="text-[16px] font-medium tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>
            Payout Management
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center w-full">
          {/* Available Balance Box */}
          <div className="flex-1 bg-[#F8FAFC] dark:bg-slate-800/50 rounded-[24px] p-6 w-full md:w-auto">
            <p className="text-[10px] font-medium text-[#64748B] dark:text-slate-400 uppercase tracking-[0.1em] mb-2">Available Balance</p>
            <div className="text-[28px] font-medium text-[#0b0b0b] dark:text-white leading-none" style={{ fontFamily: typography.fonts.poppins }}>
              $2,400
            </div>
          </div>

          {/* Pending Clear Box */}
          <div className="flex-1 p-6 w-full md:w-auto">
            <p className="text-[10px] font-medium text-[#64748B] dark:text-slate-400 uppercase tracking-[0.1em] mb-2">Pending Clear</p>
            <div className="text-[28px] font-medium text-[#0b0b0b] dark:text-white leading-none" style={{ fontFamily: typography.fonts.poppins }}>
              $860
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto pl-0 md:pl-6">
            <button 
              onClick={() => alert("Withdrawal request initiated...")}
              className="w-full md:w-auto bg-[#0550E6] text-white px-8 py-4 rounded-[16px] font-medium text-[14px] hover:bg-[#0440C5] transition-colors mb-3 shadow-[0_4px_14px_rgba(5,80,230,0.25)]"
            >
              Withdraw Earnings
            </button>
            <p className="text-[10px] text-[#94A3B8] dark:text-slate-500 font-medium text-center md:text-right">
              Next automatic payout: <span className="text-[#64748B] dark:text-slate-400">April 01, 2024</span>
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
