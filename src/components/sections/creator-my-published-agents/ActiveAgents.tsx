"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Search, Mail, Layout, Star } from "lucide-react";

const AGENTS = [
  {
    name: "SEO Content Generator",
    category: "Marketing",
    runs: "2,140",
    revenue: "$1,200",
    rating: 4.8,
    status: "LIVE",
    icon: Search,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#EFF6FF]"
  },
  {
    name: "Email Automation AI",
    category: "Automation",
    runs: "1,320",
    revenue: "$820",
    rating: 4.6,
    status: "LIVE",
    icon: Mail,
    iconColor: "text-[#A855F7]",
    iconBg: "bg-[#F3E8FF]"
  },
  {
    name: "UI Design Assistant",
    category: "Design",
    runs: "890",
    revenue: "$560",
    rating: 4.5,
    status: "LIVE",
    icon: Layout,
    iconColor: "text-[#F97316]",
    iconBg: "bg-[#FFF7ED]"
  }
];

export default function CreatorActiveAgents() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[rgba(0,0,0,0.02)] overflow-hidden w-full"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="p-8 md:px-10 md:py-8 flex justify-between items-center border-b border-[rgba(0,0,0,0.04)]">
        <h2 className="text-[20px] font-bold text-[#0b0b0b] tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>
          Active Agents
        </h2>
        <button className="text-[12px] font-bold text-[#2864E4] hover:underline">
          View All Performance
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="py-4 px-8 md:px-10 text-[10px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap">Agent Name</th>
              <th className="py-4 px-4 text-[10px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap">Category</th>
              <th className="py-4 px-4 text-[10px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap">Runs</th>
              <th className="py-4 px-4 text-[10px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap">Revenue</th>
              <th className="py-4 px-4 text-[10px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap">Rating</th>
              <th className="py-4 px-8 md:px-10 text-[10px] font-bold text-[#64748B] uppercase tracking-wider whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,0,0,0.04)]">
            {AGENTS.map((agent, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors group">
                <td className="py-6 px-8 md:px-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${agent.iconBg} ${agent.iconColor}`}>
                      <agent.icon size={18} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-[#0b0b0b] text-[14px] whitespace-nowrap">
                      {agent.name}
                    </span>
                  </div>
                </td>
                <td className="py-6 px-4 text-[13px] text-[#64748B]">
                  {agent.category}
                </td>
                <td className="py-6 px-4 text-[14px] font-bold text-[#0b0b0b]">
                  {agent.runs}
                </td>
                <td className="py-6 px-4 text-[14px] font-bold text-[#2864E4]">
                  {agent.revenue}
                </td>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] font-bold text-[#0b0b0b]">{agent.rating}</span>
                    <Star size={12} fill="#F59E0B" className="text-[#F59E0B]" />
                  </div>
                </td>
                <td className="py-6 px-8 md:px-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D1FAE5] text-[#10B981] text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    {agent.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
