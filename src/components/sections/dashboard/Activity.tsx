"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, MoreVertical, Terminal } from "lucide-react";

const ACTIVITIES = [
  { action: "Agent 'DataHarvester' completed run", time: "2 minutes ago", status: "success", type: "Run" },
  { action: "New subscription: Pro Plan", time: "15 minutes ago", status: "success", type: "Finance" },
  { action: "Agent 'LingoMaster' encountered a warning", time: "1 hour ago", status: "warning", type: "System" },
  { action: "Deployment of 'TrendForecaster' v2.1", time: "3 hours ago", status: "success", type: "Deploy" },
  { action: "Payout processed: $1,250", time: "5 hours ago", status: "success", type: "Finance" }
];

export default function DashboardActivity() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl shadow-sm overflow-hidden" style={{ fontFamily: typography.fonts.inter }}>
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="font-bold text-[#0b0b0b]">Recent Activity</h3>
        <button className="text-[13px] font-bold text-[#2864e4] hover:underline">View All</button>
      </div>
      <div className="divide-y divide-gray-50">
        {ACTIVITIES.map((activity, i) => (
          <div key={i} className="p-6 flex items-center gap-4 hover:bg-[#f8fafd] transition-colors group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.status === 'success' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-[#ffb800]/10 text-[#ffb800]'}`}>
              {activity.status === 'success' ? <CheckCircle2 size={18} /> : <Clock size={18} />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] font-bold text-[#1a1c1c]">{activity.action}</span>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-gray-100 rounded text-[#475569] uppercase tracking-wider">{activity.type}</span>
              </div>
              <div className="text-[12px] text-[#94A3B8] font-medium">{activity.time}</div>
            </div>
            <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical size={18} className="text-[#94A3B8]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
