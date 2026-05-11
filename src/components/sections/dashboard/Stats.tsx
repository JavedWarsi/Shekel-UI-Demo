"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Bot, Workflow, Rocket, Bookmark } from "lucide-react";

const STATS = [
  { label: "TOTAL AGENTS", value: "24", icon: Bot },
  { label: "WORKFLOWS CREATED", value: "128", icon: Workflow },
  { label: "TOTAL RUNS", value: "1.2k", icon: Rocket },
  { label: "SAVED ITEMS", value: "42", icon: Bookmark }
];

export default function DashboardStats() {
  return (
    <div className="w-full sm:px-12 mb-12" style={{ fontFamily: typography.fonts.inter }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-[16px] p-6 shadow-sm border border-[rgba(0,0,0,0.04)]"
          >
            <h3 className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider mb-4">
              {stat.label}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="text-[32px] md:text-[40px] font-medium text-[#0b0b0b] leading-none" style={{ fontFamily: typography.fonts.poppins }}>
                {stat.value}
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center">
                <stat.icon size={20} strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
