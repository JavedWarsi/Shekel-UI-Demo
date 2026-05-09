"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { FileText, Wand2, Sparkles } from "lucide-react";

export default function AnalyticsTopAgents() {
  const agents = [
    {
      name: "SEO Content Generator",
      category: "Marketing",
      runs: "2,140",
      revenue: "$1,200",
      icon: FileText,
      iconBg: "bg-[#FFF7ED]",
      iconColor: "text-[#F97316]",
    },
    {
      name: "Email Workflow Pro",
      category: "Automation",
      runs: "1,890",
      revenue: "$945",
      icon: Sparkles,
      iconBg: "bg-[#F3E8FF]",
      iconColor: "text-[#A855F7]",
    },
    {
      name: "Visual Prompt Architect",
      category: "Design",
      runs: "1,420",
      revenue: "$710",
      icon: Wand2,
      iconBg: "bg-[#D1FAE5]",
      iconColor: "text-[#10B981]",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[rgba(0,0,0,0.02)] h-full flex flex-col"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[18px] font-medium text-[#0b0b0b] tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>
          Top Agents
        </h3>
        <button className="text-[12px] font-medium text-[#2864E4] hover:underline">
          View All
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Headers */}
        <div className="flex items-center pb-4 mb-2 border-b border-[rgba(0,0,0,0.04)]">
          <div className="flex-[2] text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider pl-14">
            AGENT NAME
          </div>
          <div className="flex-1 text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider text-center">
            RUNS
          </div>
          <div className="flex-1 text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider text-right">
            REVENUE
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2 pt-2">
          {agents.map((agent, i) => (
            <div key={i} className="flex items-center py-3">
              <div className="flex-[2] flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${agent.iconBg} ${agent.iconColor}`}>
                  <agent.icon size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-[#0b0b0b] text-[13px] whitespace-nowrap">
                    {agent.name}
                  </span>
                  <span className="text-[11px] text-[#94A3B8] mt-0.5">
                    {agent.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 text-center text-[13px] text-[#475569]">
                {agent.runs}
              </div>
              
              <div className="flex-1 text-right text-[13px] font-medium text-[#0b0b0b]">
                {agent.revenue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
