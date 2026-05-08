"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Activity, CreditCard, PlayCircle, TrendingUp, Users } from "lucide-react";

const STATS = [
  { label: "Active Agents", value: "24", icon: PlayCircle, color: "#2864e4", trend: "+2 this week" },
  { label: "Total Runs", value: "1,205", icon: Activity, color: "#10b981", trend: "+14% vs last month" },
  { label: "Revenue", value: "$4,280", icon: CreditCard, color: "#7c4dff", trend: "+$520 today" },
  { label: "Followers", value: "852", icon: Users, color: "#56ccf2", trend: "+12 new" }
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ fontFamily: typography.fonts.inter }}>
      {STATS.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-[rgba(0,0,0,0.06)] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
            >
              <stat.icon size={24} />
            </div>
            <div className="flex items-center gap-1 text-[12px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-lg">
              <TrendingUp size={14} />
              {stat.trend.split(' ')[0]}
            </div>
          </div>
          <div className="text-[28px] font-bold text-[#0b0b0b] mb-1">{stat.value}</div>
          <div className="text-[14px] font-medium text-[#475569]">{stat.label}</div>
          <div className="mt-4 text-[11px] text-[#94A3B8] font-medium">{stat.trend}</div>
        </motion.div>
      ))}
    </div>
  );
}
