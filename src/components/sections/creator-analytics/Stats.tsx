"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";

export default function AnalyticsStats() {
  const stats = [
    {
      title: "Total Users",
      value: "3,200",
      badge: "+12%",
      badgeColor: "bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981]",
    },
    {
      title: "Total Runs",
      value: "12,840",
      badge: "+8.4%",
      badgeColor: "bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981]",
    },
    {
      title: "Conversion Rate",
      value: "6.2%",
      badge: "Optimal",
      badgeColor: "bg-[#EFF6FF] dark:bg-blue-900/30 text-[#2864E4]",
    },
    {
      title: "Avg Session Time",
      value: "4m 20s",
      badge: "Stable",
      badgeColor: "bg-[#F1F5F9] dark:bg-slate-800 text-[#64748B] dark:text-slate-400",
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-12" style={{ fontFamily: typography.fonts.inter }}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] dark:border-slate-800 flex flex-col justify-between h-[130px]"
        >
          <div className="flex justify-between items-center w-full">
            <span className="text-[12px] font-medium text-[#64748B] dark:text-slate-400">
              {stat.title}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${stat.badgeColor}`}>
              {stat.badge}
            </span>
          </div>
          <div className="text-[32px] font-medium text-[#0b0b0b] dark:text-white tracking-tight leading-none" style={{ fontFamily: typography.fonts.poppins }}>
            {stat.value}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
