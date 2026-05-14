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
} from "lucide-react";
import { typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const STATS = [
  {
    title: "smart_toy",
    label: "Total Agents",
    value: "120+",
    badge: "LIVE NOW",
    badgeColor:
      "text-[#2864e4] bg-[#2864e4]/10 dark:bg-[#2864e4]/20 dark:text-[#7ea8ff]",
    icon: Bot,
  },
  {
    title: "dynamic_form",
    label: "Total Runs",
    value: "12,400+",
    badge: "+12% now",
    badgeColor:
      "text-[#10b981] bg-[#10b981]/10 dark:bg-[#10b981]/20 dark:text-[#5ee7b7]",
    icon: Activity,
  },
  {
    title: "account_tree",
    label: "Active Workflows",
    value: "860+",
    badge: "ACTIVE",
    badgeColor:
      "text-[#7c4dff] bg-[#7c4dff]/10 dark:bg-[#7c4dff]/20 dark:text-[#b89cff]",
    icon: GitBranch,
  },
  {
    title: "star",
    label: "Avg Performance",
    value: "4.8",
    badge: "OPTIMAL",
    badgeColor:
      "text-[#f59e0b] bg-[#f59e0b]/10 dark:bg-[#f59e0b]/20 dark:text-[#ffd166]",
    icon: Star,
  },
];

const CATEGORIES = [
  { name: "Marketing", percent: 43, color: "bg-[#2864e4]" },
  { name: "Automation", percent: 31, color: "bg-[#0891b2]" },
  { name: "Dev Tools", percent: 18, color: "bg-[#92400e]" },
  { name: "Content", percent: 8, color: "bg-[#4b5563]" },
];

const TOP_AGENTS = [
  {
    name: "SEO Architect",
    category: "MARKETING",
    runs: "4,281",
    rating: "4.9",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    name: "ViralGenie AI",
    category: "SOCIAL",
    runs: "3,104",
    rating: "4.7",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
  },
  {
    name: "Git-Flow Master",
    category: "DEV TOOLS",
    runs: "2,850",
    rating: "4.8",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
  },
];

export default function PerformanceCharts() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className="w-full bg-white dark:bg-[#05070C] py-12 md:py-20 transition-colors duration-300"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-2xl">
            <h1
              className="text-[32px] md:text-[40px] font-bold text-[#0b0b0b] dark:text-white mb-4 transition-colors"
              style={{ fontFamily: typography.fonts.poppins }}
            >
              AI Agent Insights
            </h1>

            <p className="text-[14px] md:text-[16px] text-[#414753] dark:text-white/60 leading-relaxed transition-colors">
              Track usage, performance, and activity across AI agents and
              workflows with precision-curated analytics.
            </p>
          </div>

          <div className="flex items-center bg-[#f8f9fa] dark:bg-white/5 border border-[#e5e7eb] dark:border-white/10 rounded-lg p-1 transition-colors">
            {["7 days", "30 days", "All Time"].map((period, i) => (
              <button
                key={period}
                className={`px-4 py-1.5 text-[12px] font-bold rounded-md transition-all ${
                  i === 1
                    ? "bg-white dark:bg-[#10131A] text-[#2864e4] shadow-sm"
                    : "text-[#6b7280] dark:text-white/50 hover:text-[#0b0b0b] dark:hover:text-white"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 p-8 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-[11px] font-bold text-[#2864e4] uppercase tracking-[0.12em] bg-[#eff6ff] dark:bg-[#2864e4]/10 px-3 py-1 rounded-full border border-[#dbeafe] dark:border-[#2864e4]/20">
                  {stat.title}
                </div>

                <div
                  className={`text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider ${stat.badgeColor}`}
                >
                  {stat.badge}
                </div>
              </div>

              <div className="text-[34px] font-bold text-[#0b0b0b] dark:text-white mb-1 tracking-tight transition-colors">
                {stat.value}
              </div>

              <div className="text-[13px] font-medium text-[#6b7280] dark:text-white/50 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Platform Activity */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 p-8 rounded-[24px] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-[18px] font-bold text-[#0b0b0b] dark:text-white mb-1">
                  Platform activity
                </h3>

                <p className="text-[13px] text-[#6b7280] dark:text-white/50">
                  Track usage over time
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2864e4]" />

                <span className="text-[11px] font-bold text-[#6b7280] dark:text-white/50 uppercase tracking-wider">
                  Runs
                </span>
              </div>
            </div>

            <div className="h-[280px] w-full flex items-end justify-between px-2 gap-4">
              {[45, 60, 55, 95, 75, 58, 48].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full max-w-[80px] rounded-t-lg transition-all duration-500 ${
                      i === 3
                        ? "bg-[#2864e4] shadow-[0_8px_20px_rgba(40,100,228,0.25)]"
                        : "bg-[#f1f3f5] dark:bg-white/10"
                    }`}
                    style={{ height: `${h}%` }}
                  />

                  <span className="mt-4 text-[10px] font-bold text-[#9ca3af] dark:text-white/40 uppercase tracking-widest">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Insights */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 p-8 rounded-[24px] transition-colors">
            <h3 className="text-[18px] font-bold text-[#0b0b0b] dark:text-white mb-1">
              Category insights
            </h3>

            <p className="text-[13px] text-[#6b7280] dark:text-white/50 mb-10">
              Most active categories
            </p>

            <div className="space-y-8">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-[#4b5563] dark:text-white/70">
                      {cat.name}
                    </span>

                    <span className="text-[#2864e4]">{cat.percent}%</span>
                  </div>

                  <div className="h-1.5 w-full bg-[#f1f3f5] dark:bg-white/10 rounded-full overflow-hidden">
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

        {/* Table */}
        <div className="mb-16">
          <h2
            className="text-[24px] font-bold text-[#0b0b0b] dark:text-white mb-2"
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Top performing agents
          </h2>

          <p className="text-[14px] text-[#6b7280] dark:text-white/50 mb-8">
            Highest usage and engagement across the ecosystem.
          </p>

          <div className="bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 rounded-[24px] overflow-hidden shadow-sm transition-colors">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f9fafb] dark:bg-white/5 border-b border-[#e5e7eb] dark:border-white/10">
                    {[
                      "Agent Name",
                      "Category",
                      "Runs",
                      "Rating",
                      "Action",
                    ].map((item) => (
                      <th
                        key={item}
                        className="px-8 py-5 text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e5e7eb] dark:divide-white/10">
                  {TOP_AGENTS.map((agent, i) => (
                    <tr
                      key={i}
                      className="hover:bg-[#f9fafb] dark:hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl ${agent.iconBg} flex items-center justify-center shrink-0 border border-[rgba(0,0,0,0.03)] dark:border-white/5 shadow-sm`}
                          >
                            {i === 0 && (
                              <span className="text-[#2864e4] text-[18px]">
                                ✦
                              </span>
                            )}

                            {i === 1 && (
                              <span className="text-[#0891b2] text-[18px]">
                                ⚡
                              </span>
                            )}

                            {i === 2 && (
                              <span className="text-[#92400e] text-[18px]">
                                ⚙
                              </span>
                            )}
                          </div>

                          <span className="text-[15px] font-bold text-[#1a1c1c] dark:text-white">
                            {agent.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-[#eff6ff] dark:bg-[#2864e4]/10 text-[#2864e4] text-[10px] font-bold uppercase tracking-[0.1em] rounded">
                          {agent.category}
                        </span>
                      </td>

                      <td className="px-8 py-6 text-[15px] font-bold text-[#4b5563] dark:text-white/70">
                        {agent.runs}
                      </td>

                      <td className="px-8 py-6">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-[#2864e4] font-bold uppercase tracking-widest">
                            Star
                          </span>

                          <span className="text-[15px] font-bold text-[#2864e4]">
                            {agent.rating}
                          </span>
                        </div>
                      </td>

                      <td className="px-8 py-6 text-right">
                        <button className="text-[13px] font-bold text-[#2864e4] hover:underline">
                          View Agent
                        </button>
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

              <h4 className="text-[14px] font-bold text-[#0b0b0b] dark:text-white">
                Workflow Performance
              </h4>
            </div>

            <div className="bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 p-6 rounded-[20px] transition-colors">
              <div className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-1">
                Avg Execution
              </div>

              <div className="text-[24px] font-bold text-[#0b0b0b] dark:text-white">
                1.2s
              </div>
            </div>

            <div className="bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 p-6 rounded-[20px] transition-colors">
              <div className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-1">
                Success Rate
              </div>

              <div className="text-[24px] font-bold text-[#2864e4]">
                98.5%
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <History size={18} className="text-[#2864e4]" />

              <h4 className="text-[14px] font-bold text-[#0b0b0b] dark:text-white">
                Recent Activity
              </h4>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "SEO Architect",
                  time: "RUNNING NOW",
                  status: "active",
                },
                {
                  name: "ViralGenie AI",
                  time: "2M AGO",
                  status: "idle",
                },
                {
                  name: "Flow Optimizer",
                  time: "5M AGO",
                  status: "idle",
                },
              ].map((act, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#0B111C] border border-[#e5e7eb] dark:border-white/10 p-5 rounded-[20px] flex items-center gap-4 hover:shadow-sm transition-all"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      act.status === "active"
                        ? "bg-[#10b981]"
                        : "bg-[#2864e4]"
                    }`}
                  />

                  <div>
                    <div className="text-[13px] font-bold text-[#1a1c1c] dark:text-white">
                      {act.name}
                    </div>

                    <div className="text-[9px] font-bold text-[#6b7280] dark:text-white/40 uppercase tracking-wider">
                      {act.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Reach */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={18} className="text-[#2864e4]" />

              <h4 className="text-[14px] font-bold text-[#0b0b0b] dark:text-white">
                Global Reach
              </h4>
            </div>

            <div className="relative aspect-[1.4/1] bg-[#1a1c1c] rounded-[24px] overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">
                  Nodes Online
                </div>

                <div className="text-[28px] font-bold text-[#2864e4]">
                  1,204
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}