"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { PlayCircle, CheckCircle2, Users, AlertTriangle } from "lucide-react";

const ACTIVITIES = [
  {
    title: "Agent executed",
    desc: "Data Scraper Pro completed a crawl",
    time: "2M AGO",
    icon: PlayCircle,
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#D1FAE5]"
  },
  {
    title: "Workflow completed",
    desc: "Marketing Campaign Pipeline finished",
    time: "15M AGO",
    icon: CheckCircle2,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#DBEAFE]"
  },
  {
    title: "New agent added",
    desc: "Support GPT-4 added to your workspace",
    time: "1H AGO",
    icon: Users,
    iconColor: "text-[#8B5CF6]",
    iconBg: "bg-[#EDE9FE]"
  },
  {
    title: "Agent quota reached",
    desc: "Free tier limit hit for Image Gen model",
    time: "3H AGO",
    icon: AlertTriangle,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#FEF3C7]"
  }
];

export default function DashboardActivity() {
  return (
    <div className="w-full flex flex-col h-full" style={{ fontFamily: typography.fonts.inter }}>
      <h2 className="text-[20px] font-bold text-[#0b0b0b] mb-6 tracking-tight">
        Recent Activity
      </h2>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-[16px] shadow-sm border border-[rgba(0,0,0,0.04)] flex flex-col flex-grow overflow-hidden"
      >
        <div className="flex flex-col">
          {ACTIVITIES.map((activity, i) => (
            <div 
              key={i}
              className={`p-6 flex items-center gap-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer ${
                i !== ACTIVITIES.length - 1 ? 'border-b border-[rgba(0,0,0,0.04)]' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full ${activity.iconBg} ${activity.iconColor} flex items-center justify-center flex-shrink-0`}>
                <activity.icon size={20} strokeWidth={2} />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-[14px] font-bold text-[#0b0b0b]">
                  {activity.title}
                </h3>
                <p className="text-[13px] text-[#64748B] mt-0.5">
                  {activity.desc}
                </p>
              </div>
              
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider flex-shrink-0">
                {activity.time}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-[rgba(0,0,0,0.04)]">
          <button className="w-full py-4 text-[13px] font-bold text-[#2864E4] hover:bg-[#F8FAFC] transition-colors uppercase tracking-wider">
            VIEW ALL LOGS
          </button>
        </div>
      </motion.div>
    </div>
  );
}
