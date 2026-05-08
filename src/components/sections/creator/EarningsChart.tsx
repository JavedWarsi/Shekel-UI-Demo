"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Wallet } from "lucide-react";

export default function EarningsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ fontFamily: typography.fonts.inter }}>
      <div className="lg:col-span-2 bg-white border border-[rgba(0,0,0,0.06)] p-8 rounded-2xl shadow-sm">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="text-[20px] font-bold text-[#0b0b0b] mb-1">Revenue Overview</h3>
            <p className="text-[14px] text-[#475569] font-medium">Tracking your earnings over the last 30 days.</p>
          </div>
          <div className="flex gap-2">
            {["1W", "1M", "3M", "1Y"].map((t, i) => (
              <button key={t} className={`px-4 py-2 rounded-lg text-[13px] font-bold ${i === 1 ? 'bg-[#2864e4] text-white' : 'bg-[#f8fafd] text-[#475569] hover:bg-gray-100'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        
        {/* Simulated Chart */}
        <div className="h-[300px] w-full flex items-end justify-between gap-2 px-2">
          {[30, 45, 40, 65, 55, 85, 75, 95, 80, 100, 90, 110, 105, 120, 115, 130].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-[#2864e4] to-[#56ccf2] rounded-t-lg relative group" style={{ height: `${h * 2}px` }}>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#1a1c1c] text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                ${h * 10}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6 px-2">
          {["Apr 01", "Apr 07", "Apr 14", "Apr 21", "Apr 28"].map((d) => (
            <span key={d} className="text-[12px] font-bold text-[#94A3B8]">{d}</span>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-[#0b0b0b] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2864e4]/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Wallet size={24} className="text-[#56ccf2]" />
            </div>
            <div className="text-[14px] font-bold text-white/60 uppercase tracking-widest mb-1">Available Balance</div>
            <div className="text-[36px] font-bold mb-8">$5,240.00</div>
            <button className="w-full py-4 bg-[#2864e4] text-white font-bold rounded-xl hover:bg-[#2054c2] transition-colors shadow-lg shadow-[#2864e4]/30">
              Withdraw Funds
            </button>
          </div>
        </div>
        
        <div className="bg-white border border-[rgba(0,0,0,0.06)] p-8 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[14px] font-bold text-[#94A3B8] uppercase tracking-widest">Payout Settings</div>
            <button className="p-2 hover:bg-gray-50 rounded-lg"><ArrowUpRight size={18} className="text-[#2864e4]" /></button>
          </div>
          <div className="flex items-center gap-4 p-4 bg-[#f8fafd] rounded-xl border border-[rgba(0,0,0,0.04)]">
            <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
              <DollarSign size={20} className="text-[#10b981]" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0b0b0b]">Stripe Connected</div>
              <div className="text-[12px] font-medium text-[#475569]">Last payout: Yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
