"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { PlusSquare, Share2, Compass } from "lucide-react";

const ACTIONS = [
  {
    title: "Create Agent",
    desc: "Deploy a new autonomous AI model",
    icon: PlusSquare,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#EFF6FF]"
  },
  {
    title: "Build Workflow",
    desc: "Chain agents for complex automation",
    icon: Share2,
    iconColor: "text-[#64748B]",
    iconBg: "bg-[#F1F5F9]"
  },
  {
    title: "Explore Agents",
    desc: "Browse the marketplace for community builds",
    icon: Compass,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#FFFBEB]"
  }
];

export default function DashboardQuickActions() {
  return (
    <div className="w-full flex flex-col" style={{ fontFamily: typography.fonts.inter }}>
      <h2 className="text-[20px] font-bold text-[#0b0b0b] mb-6 tracking-tight">
        Quick Actions
      </h2>
      
      <div className="flex flex-col gap-4">
        {ACTIONS.map((action, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-[16px] p-5 shadow-sm border border-[rgba(0,0,0,0.04)] flex items-center gap-5 hover:shadow-md hover:border-[rgba(0,0,0,0.08)] cursor-pointer transition-all"
          >
            <div className={`w-12 h-12 rounded-full ${action.iconBg} ${action.iconColor} flex items-center justify-center flex-shrink-0`}>
              <action.icon size={22} strokeWidth={2} />
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-[16px] font-bold text-[#0b0b0b]">
                {action.title}
              </h3>
              <p className="text-[14px] text-[#64748B]">
                {action.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
