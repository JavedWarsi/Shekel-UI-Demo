"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { FileText, Mail, Paintbrush } from "lucide-react";

const TRANSACTIONS = [
  {
    title: "SEO Content Generator",
    desc: "Usage credits purchased",
    date: "Mar 12, 2024",
    amount: "$120.00",
    status: "Completed",
    statusColor: "bg-[#D1FAE5] text-[#10B981]",
    icon: FileText,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#3B82F6]"
  },
  {
    title: "Email Automation AI",
    desc: "Monthly subscription renewal",
    date: "Mar 11, 2024",
    amount: "$85.00",
    status: "Completed",
    statusColor: "bg-[#D1FAE5] text-[#10B981]",
    icon: Mail,
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#A855F7]"
  },
  {
    title: "Image Generation Pro",
    desc: "Expansion pack license",
    date: "Mar 10, 2024",
    amount: "$45.50",
    status: "Processing",
    statusColor: "bg-[#F1F5F9] text-[#64748B]",
    icon: Paintbrush,
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F97316]"
  }
];

export default function EarningsTransactions() {
  return (
    <div className="w-full mb-16" style={{ fontFamily: typography.fonts.inter }}>
      <div className="flex justify-between items-center mb-6 px-4">
        <h3 className="text-[18px] font-medium text-[#0b0b0b] tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>
          Recent Transactions
        </h3>
        <button className="text-[12px] font-medium text-[#2864E4] hover:underline">
          View All Activity
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-4 px-8 md:px-10 text-[10px] font-medium text-[#64748B] uppercase tracking-wider whitespace-nowrap">Agent / Product</th>
              <th className="py-4 px-4 text-[10px] font-medium text-[#64748B] uppercase tracking-wider whitespace-nowrap">Date</th>
              <th className="py-4 px-4 text-[10px] font-medium text-[#64748B] uppercase tracking-wider whitespace-nowrap">Amount</th>
              <th className="py-4 px-8 md:px-10 text-[10px] font-medium text-[#64748B] uppercase tracking-wider whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,0,0,0.04)]">
            {TRANSACTIONS.map((tx, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                <td className="py-5 px-8 md:px-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${tx.iconBg} ${tx.iconColor}`}>
                      <tx.icon size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-[#0b0b0b] text-[13px] whitespace-nowrap">
                        {tx.title}
                      </span>
                      <span className="text-[11px] text-[#64748B] mt-0.5">
                        {tx.desc}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-4 text-[13px] text-[#475569]">
                  {tx.date}
                </td>
                <td className="py-5 px-4 text-[14px] font-medium text-[#0b0b0b]">
                  {tx.amount}
                </td>
                <td className="py-5 px-8 md:px-10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium tracking-wider ${tx.statusColor}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
