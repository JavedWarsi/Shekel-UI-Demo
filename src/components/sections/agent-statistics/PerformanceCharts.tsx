"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Activity, 
  GitBranch, 
  Star, 
  TrendingUp, 
  History, 
  Globe, 
  Search,
  MoreVertical,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { typography, radiuses, colors } from "@/tokens/design-tokens";

const STATS = [
  {
    title: "smart_toy",
    label: "Total Agents",
    value: "120+",
    badge: "LIVE NOW",
    badgeColor: "text-[#2864e4] bg-[#2864e4]/10",
    icon: Bot
  },
  {
    title: "dynamic_form",
    label: "Total Runs",
    value: "12,400+",
    badge: "+12% now",
    badgeColor: "text-[#10b981] bg-[#10b981]/10",
    icon: Activity
  },
  {
    title: "account_tree",
    label: "Active Workflows",
    value: "860+",
    badge: "ACTIVE",
    badgeColor: "text-[#7c4dff] bg-[#7c4dff]/10",
    icon: GitBranch
  },
  {
    title: "star",
    label: "Avg Performance",
    value: "4.8",
    badge: "OPTIMAL",
    badgeColor: "text-[#f59e0b] bg-[#f59e0b]/10",
    icon: Star
  }
];

const CATEGORIES = [
  { name: "Marketing", percent: 43, color: "bg-[#2864e4]" },
  { name: "Automation", percent: 31, color: "bg-[#0891b2]" },
  { name: "Dev Tools", percent: 18, color: "bg-[#92400e]" },
  { name: "Content", percent: 8, color: "bg-[#4b5563]" }
];

const TOP_AGENTS = [
  { 
    name: "SEO Architect", 
    category: "MARKETING", 
    runs: "4,281", 
    rating: "4.9", 
    icon: "auto_awesome", 
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  { 
    name: "ViralGenie AI", 
    category: "SOCIAL", 
    runs: "3,104", 
    rating: "4.7", 
    icon: "bolt", 
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500"
  },
  { 
    name: "Git-Flow Master", 
    category: "DEV TOOLS", 
    runs: "2,850", 
    rating: "4.8", 
    icon: "code", 
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500"
  }
];

export default function PerformanceCharts() {
  return (
    <section className="w-full bg-white py-12 md:py-20" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#0b0b0b] mb-4" style={{ fontFamily: typography.fonts.poppins }}>
              AI Agent Insights
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#414753] leading-relaxed">
              Track usage, performance, and activity across AI agents and workflows with precision-curated analytics.
            </p>
          </div>
          <div className="flex items-center bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg p-1">
            {["7 days", "30 days", "All Time"].map((period, i) => (
              <button 
                key={period} 
                className={`px-4 py-1.5 text-[12px] font-bold rounded-md transition-all ${i === 1 ? 'bg-white text-[#2864e4] shadow-sm' : 'text-[#6b7280] hover:text-[#0b0b0b]'}`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-[#e5e7eb] p-8 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-[11px] font-bold text-[#2864e4] uppercase tracking-[0.12em] bg-[#eff6ff] px-3 py-1 rounded-full border border-[#dbeafe]">
                  {stat.title}
                </div>
                <div className={`text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider ${stat.badgeColor}`}>
                  {stat.badge}
                </div>
              </div>
              <div className="text-[34px] font-bold text-[#0b0b0b] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[13px] font-medium text-[#6b7280]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Platform Activity */}
          <div className="lg:col-span-8 bg-white border border-[#e5e7eb] p-8 rounded-[24px]">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-[18px] font-bold text-[#0b0b0b] mb-1">Platform activity</h3>
                <p className="text-[13px] text-[#6b7280]">Track usage over time</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2864e4]" />
                <span className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider">Runs</span>
              </div>
            </div>
            <div className="h-[280px] w-full flex items-end justify-between px-2 gap-4">
              {[45, 60, 55, 95, 75, 58, 48].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className={`w-full max-w-[80px] rounded-t-lg transition-all duration-500 ${i === 3 ? 'bg-[#2864e4] shadow-[0_8px_20px_rgba(40,100,228,0.25)]' : 'bg-[#f1f3f5]'}`} 
                    style={{ height: `${h}%` }} 
                  />
                  <span className="mt-4 text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Insights */}
          <div className="lg:col-span-4 bg-white border border-[#e5e7eb] p-8 rounded-[24px]">
            <h3 className="text-[18px] font-bold text-[#0b0b0b] mb-1">Category insights</h3>
            <p className="text-[13px] text-[#6b7280] mb-10">Most active categories</p>
            <div className="space-y-8">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-[#4b5563]">{cat.name}</span>
                    <span className="text-[#2864e4]">{cat.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1f3f5] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${cat.color} rounded-full transition-all duration-1000`} 
                      style={{ width: `${cat.percent}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="mb-16">
          <h2 className="text-[24px] font-bold text-[#0b0b0b] mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            Top performing agents
          </h2>
          <p className="text-[14px] text-[#6b7280] mb-8">Highest usage and engagement across the ecosystem.</p>
          
          <div className="bg-white border border-[#e5e7eb] rounded-[24px] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                    <th className="px-8 py-5 text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]">Agent Name</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]">Category</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]">Runs</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]">Rating</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.2em] text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb]">
                  {TOP_AGENTS.map((agent, i) => (
                    <tr key={i} className="hover:bg-[#f9fafb] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl ${agent.iconBg} flex items-center justify-center shrink-0 border border-[rgba(0,0,0,0.03)] shadow-sm`}>
                             {i === 0 && <span className="text-[#2864e4] text-[18px]">✦</span>}
                             {i === 1 && <span className="text-[#0891b2] text-[18px]">⚡</span>}
                             {i === 2 && <span className="text-[#92400e] text-[18px]">⚙</span>}
                          </div>
                          <span className="text-[15px] font-bold text-[#1a1c1c]">{agent.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-[#eff6ff] text-[#2864e4] text-[10px] font-bold uppercase tracking-[0.1em] rounded">
                          {agent.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-[15px] font-bold text-[#4b5563]">{agent.runs}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-1.5">
                           <span className="text-[9px] text-[#2864e4] font-bold uppercase tracking-widest">Star</span>
                           <span className="text-[15px] font-bold text-[#2864e4]">{agent.rating}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="text-[13px] font-bold text-[#2864e4] hover:underline">View Agent</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Workflow Performance */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-[#2864e4]" />
              <h4 className="text-[14px] font-bold text-[#0b0b0b]">Workflow Performance</h4>
            </div>
            <div className="bg-white border border-[#e5e7eb] p-6 rounded-[20px]">
              <div className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-1">Avg Execution</div>
              <div className="text-[24px] font-bold text-[#0b0b0b]">1.2s</div>
            </div>
            <div className="bg-white border border-[#e5e7eb] p-6 rounded-[20px]">
              <div className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-1">Success Rate</div>
              <div className="text-[24px] font-bold text-[#2864e4]">98.5%</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <History size={18} className="text-[#2864e4]" />
              <h4 className="text-[14px] font-bold text-[#0b0b0b]">Recent Activity</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "SEO Architect", time: "RUNNING NOW", status: "active" },
                { name: "ViralGenie AI", time: "2M AGO", status: "idle" },
                { name: "Flow Optimizer", time: "5M AGO", status: "idle" }
              ].map((act, i) => (
                <div key={i} className="bg-white border border-[#e5e7eb] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-sm transition-shadow">
                  <div className={`w-2 h-2 rounded-full ${act.status === 'active' ? 'bg-[#10b981]' : 'bg-[#2864e4]'}`} />
                  <div>
                    <div className="text-[13px] font-bold text-[#1a1c1c]">{act.name}</div>
                    <div className="text-[9px] font-bold text-[#6b7280] uppercase tracking-wider">{act.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Reach */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={18} className="text-[#2864e4]" />
              <h4 className="text-[14px] font-bold text-[#0b0b0b]">Global Reach</h4>
            </div>
            <div className="relative aspect-[1.4/1] bg-[#1a1c1c] rounded-[24px] overflow-hidden group shadow-xl">
               {/* <Image 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                 alt="Global Map" 
                 fill 
                 className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
               /> */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6">
                 <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Nodes Online</div>
                 <div className="text-[28px] font-bold text-[#2864e4]">1,204</div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
