"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

const TRANSACTIONS = [
  { id: "TXN-8421", date: "May 08, 2026", amount: "+$420.00", type: "Sale", status: "completed", agent: "DataHarvester Pro" },
  { id: "TXN-8420", date: "May 07, 2026", amount: "-$1,250.00", type: "Withdrawal", status: "processing", agent: "Bank Transfer" },
  { id: "TXN-8419", date: "May 06, 2026", amount: "+$85.50", type: "Sale", status: "completed", agent: "LingoFlow" },
  { id: "TXN-8418", date: "May 06, 2026", amount: "+$12.00", type: "Sale", status: "completed", agent: "SupportBot v2" },
  { id: "TXN-8417", date: "May 05, 2026", amount: "+$110.00", type: "Sale", status: "completed", agent: "DataHarvester Pro" }
];

export default function EarningsTransactions() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl shadow-sm overflow-hidden" style={{ fontFamily: typography.fonts.inter }}>
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="font-bold text-[#0b0b0b]">Transaction History</h3>
        <div className="flex gap-4">
          <button className="text-[13px] font-bold text-[#475569] hover:text-[#2864e4]">Download CSV</button>
          <button className="text-[13px] font-bold text-[#2864e4] hover:underline">View All</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f8fafd] border-b border-gray-50">
              <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Transaction ID</th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Description</th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {TRANSACTIONS.map((txn, i) => (
              <tr key={i} className="hover:bg-[#f8fafd] transition-colors">
                <td className="px-6 py-4 text-[14px] font-bold text-[#1a1c1c]">{txn.id}</td>
                <td className="px-6 py-4 text-[14px] font-medium text-[#475569]">{txn.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${txn.type === 'Sale' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-[#2864e4]/10 text-[#2864e4]'}`}>
                      {txn.type === 'Sale' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#0b0b0b]">{txn.type}</div>
                      <div className="text-[12px] font-medium text-[#94A3B8]">{txn.agent}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold ${txn.status === 'completed' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-[#ffb800]/10 text-[#ffb800]'}`}>
                    {txn.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                    {txn.status === 'completed' ? 'Completed' : 'Processing'}
                  </div>
                </td>
                <td className={`px-6 py-4 text-[15px] font-bold text-right ${txn.amount.startsWith('+') ? 'text-[#10b981]' : 'text-[#0b0b0b]'}`}>
                  {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
