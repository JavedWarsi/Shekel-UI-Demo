"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp, 
  Clock, 
  Lightbulb,
  FileText,
  Sparkles,
  Paintbrush,
  Target,
  BarChart3,
  Layers,
  Search,
  Bell
} from "lucide-react";
import { Button } from "@/components/shared/Button";
import { 
  ANALYTICS_STATS, 
  USAGE_CHART_DATA, 
  TOP_AGENTS, 
  CATEGORY_REACH 
} from "@/app/creator-analytics/demo-data";

// --- Helper Components ---

function StatCard({ title, value, trend, trendType }: typeof ANALYTICS_STATS[0]) {
  return (
    <div className="bg-white p-8 rounded-[28px] shadow-[0px_4px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group hover:border-blue-200 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.15em]">{title}</span>
        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
          trendType === 'positive' ? 'bg-green-50 text-green-500' : 'bg-blue-50 text-blue-500'
        }`}>
          {trend}
        </span>
      </div>
      <div className="text-[34px] font-bold text-[#111827] tracking-tight">{value}</div>
    </div>
  );
}

function Bar({ day, height, highlighted }: typeof USAGE_CHART_DATA[0]) {
  return (
    <div className="flex-1 flex flex-col items-center group cursor-pointer">
      <div className="w-full flex items-end justify-center h-[240px] mb-4">
        <div 
          className={`w-full max-w-[120px] rounded-[14px] transition-all duration-500 ${
            highlighted 
              ? 'bg-[#0061C1] shadow-[0_15px_35px_rgba(0,97,193,0.25)] scale-105' 
              : 'bg-blue-50 group-hover:bg-blue-100'
          }`} 
          style={{ height }} 
        />
      </div>
      <span className={`text-[11px] font-bold uppercase tracking-widest ${highlighted ? 'text-[#0061C1]' : 'text-gray-300'}`}>
        {day}
      </span>
    </div>
  );
}

function AgentRow({ icon, name, category, runs, revenue, bgColor, iconColor }: typeof TOP_AGENTS[0]) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-5 hover:bg-gray-50/80 rounded-2xl transition-all group border-b border-gray-50 last:border-0">
      <div className="col-span-6 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center shrink-0 shadow-sm`}>
          {name.includes("SEO") && <FileText size={20} className={iconColor} strokeWidth={1.5} />}
          {name.includes("Email") && <Sparkles size={20} className={iconColor} strokeWidth={1.5} />}
          {name.includes("Visual") && <Paintbrush size={20} className={iconColor} strokeWidth={1.5} />}
        </div>
        <div>
          <div className="text-[15px] font-bold text-[#111827] group-hover:text-[#0061C1] transition-colors">{name}</div>
          <div className="text-[12px] text-gray-400 font-medium">{category}</div>
        </div>
      </div>
      <div className="col-span-3 text-right text-[15px] font-bold text-[#4B5563]">{runs}</div>
      <div className="col-span-3 text-right text-[15px] font-bold text-[#111827]">{revenue}</div>
    </div>
  );
}

function ProgressItem({ label, percentage, color }: typeof CATEGORY_REACH[0]) {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#111827]">
        <span className="text-gray-400">{label}</span>
        <span className="text-[#0061C1] font-extrabold">{percentage}%</span>
      </div>
      <div className="h-[7px] w-full bg-gray-50 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000`} 
          style={{ width: `${percentage}%` }} 
        />
      </div>
    </div>
  );
}

const GraphBarCounter = () => {
  return (
    <div className="w-full space-y-10 animate-in fade-in duration-700">
      
      {/* --- 1. Metric Overview --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ANALYTICS_STATS.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* --- 2. Main Chart Section --- */}
      <div className="bg-white rounded-[32px] p-10 shadow-[0px_4px_35px_rgba(0,0,0,0.02)] border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[22px] font-bold text-[#111827] mb-1.5">Agent Usage</h2>
            <p className="text-[14px] text-gray-400">Processing cycles across all active AI models</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0061C1]" />
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Current Period</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-100" />
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">Previous</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between gap-6 px-6 border-b border-gray-50 pb-4">
          {USAGE_CHART_DATA.map((item, i) => (
            <Bar key={i} {...item} />
          ))}
        </div>
      </div>

      {/* --- 3. Middle Grid Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Top Agents */}
        <div className="lg:col-span-8 bg-white rounded-[32px] p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.02)] border border-gray-100">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[20px] font-bold text-[#111827]">Top Agents</h2>
            <Link href="#" className="text-[12px] font-bold text-[#0061C1] hover:underline uppercase tracking-wider">View All</Link>
          </div>
          <div className="space-y-1">
            <div className="grid grid-cols-12 px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50 mb-6">
              <div className="col-span-6">Agent Name</div>
              <div className="col-span-3 text-right">Runs</div>
              <div className="col-span-3 text-right">Revenue</div>
            </div>
            {TOP_AGENTS.map((agent, i) => (
              <AgentRow key={i} {...agent} />
            ))}
          </div>
        </div>

        {/* Reach & Peak Cards */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white rounded-[32px] p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.02)] border border-gray-100">
            <h2 className="text-[18px] font-bold text-[#111827] mb-8">Category Reach</h2>
            <div className="space-y-7">
              {CATEGORY_REACH.map((item, i) => (
                <ProgressItem key={i} {...item} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-[32px] p-10 text-center shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col items-center justify-center group hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <Clock size={20} className="text-[#0061C1]" strokeWidth={2} />
              </div>
              <div className="text-[22px] font-bold text-[#111827]">6 PM</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Peak Usage</div>
            </div>
            <div className="bg-white rounded-[32px] p-10 text-center shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col items-center justify-center group hover:border-orange-100 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <TrendingUp size={20} className="text-orange-500" strokeWidth={2} />
              </div>
              <div className="text-[18px] font-bold text-[#111827]">Marketing</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Active Cat</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. Curated Intelligence Banner --- */}
      <div className="bg-[#EDF5FF] rounded-[32px] p-8 border border-blue-100/50 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#0061C1] flex items-center justify-center shrink-0 shadow-[0_10px_25px_rgba(0,97,193,0.3)]">
          <Lightbulb size={26} className="text-white" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-[17px] font-bold text-[#111827] mb-1.5">Curated Intelligence</h3>
          <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-[800px]">
            Your marketing agents are generating the highest engagement this month. Consider expanding into <span className="text-[#0061C1] font-extrabold cursor-pointer hover:underline">automation workflows</span> to capture additional retention lift.
          </p>
        </div>
        <Button variant="ghost" className="bg-white text-[#0061C1] hover:bg-gray-50 border border-blue-100/60 px-10 rounded-2xl h-14 font-bold text-[13px] shadow-sm">
          Explore Workflows
        </Button>
      </div>

    </div>
  );
};

export default GraphBarCounter;
