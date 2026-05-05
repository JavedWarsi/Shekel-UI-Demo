"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Play, 
  TrendingUp, 
  Clock, 
  ChevronRight,
  Lightbulb,
  Zap,
  Target,
  BarChart3,
  Layers,
  ArrowUpRight,
  FileText,
  Sparkles,
  Paintbrush
} from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Float } from "@/components/shared/motion/Float";
import { 
  ANALYTICS_STATS, 
  USAGE_CHART_DATA, 
  TOP_AGENTS, 
  CATEGORY_REACH 
} from "./demo-data";

// --- Helper Components ---

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'neutral';
}

function StatCard({ title, value, trend, trendType }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-[28px] shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col justify-between group hover:border-blue-100 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{title}</span>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
          trendType === 'positive' ? 'bg-green-50 text-green-500' : 'bg-blue-50 text-blue-500'
        }`}>
          {trend}
        </span>
      </div>
      <div className="text-[32px] font-extrabold text-[#111827] tracking-tight">{value}</div>
    </div>
  );
}

interface BarProps {
  day: string;
  height: string;
  highlighted?: boolean;
}

function Bar({ day, height, highlighted }: BarProps) {
  return (
    <div className="flex-1 flex flex-col items-center group">
      <div className="w-full flex items-end justify-center gap-1.5 h-full mb-4">
        <div 
          className={`w-full max-w-[64px] rounded-t-xl transition-all duration-500 ${
            highlighted ? 'bg-[#0061C1] shadow-lg shadow-blue-500/20' : 'bg-blue-50 group-hover:bg-blue-100'
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

interface AgentRowProps {
  icon: string;
  name: string;
  category: string;
  runs: string;
  revenue: string;
  bgColor: string;
  iconColor: string;
}

function AgentRow({ icon, name, category, runs, revenue, bgColor, iconColor }: AgentRowProps) {
  return (
    <div className="grid grid-cols-12 items-center px-4 py-5 hover:bg-gray-50/50 rounded-2xl transition-all group border-b border-gray-50 last:border-0">
      <div className="col-span-6 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-[14px] ${bgColor} flex items-center justify-center shrink-0`}>
          {name.includes("SEO") && <FileText size={20} className={iconColor} />}
          {name.includes("Email") && <Sparkles size={20} className={iconColor} />}
          {name.includes("Visual") && <Paintbrush size={20} className={iconColor} />}
        </div>
        <div>
          <div className="text-[15px] font-bold text-[#111827] group-hover:text-[#0061C1] transition-colors">{name}</div>
          <div className="text-[12px] text-gray-400 font-medium">{category}</div>
        </div>
      </div>
      <div className="col-span-3 text-right text-[15px] font-bold text-[#111827]">{runs}</div>
      <div className="col-span-3 text-right text-[15px] font-bold text-[#111827]">{revenue}</div>
    </div>
  );
}

interface ProgressItemProps {
  label: string;
  percentage: number;
  color: string;
}

function ProgressItem({ label, percentage, color }: ProgressItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.15em] text-[#111827]">
        <span className="text-gray-500">{label}</span>
        <span className="text-[#0061C1]">{percentage}%</span>
      </div>
      <div className="h-[8px] w-full bg-gray-50 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(59,130,246,0.15)]`} 
          style={{ width: `${percentage}%` }} 
        />
      </div>
    </div>
  );
}

const CreatorAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans overflow-hidden selection:bg-blue-100 pb-20">
      <main className="max-w-[1400px] mx-auto w-full pt-40 pb-12 px-8 md:px-12 space-y-10">
        
        {/* --- 1. Metric Overview with Atmospheric Glow --- */}
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {ANALYTICS_STATS.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>

        {/* --- 2. Main Chart Section --- */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-[20px] font-bold text-[#111827] mb-1">Agent Usage</h2>
              <p className="text-[14px] text-gray-400">Processing cycles across all active AI models</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0061C1]" />
                <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Current Period</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-100" />
                <span className="text-[12px] font-bold text-gray-300 uppercase tracking-wider">Previous</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] flex items-end justify-between gap-4 px-4 border-b border-gray-100 pb-2">
            {USAGE_CHART_DATA.map((item, i) => (
              <Bar key={i} {...item} />
            ))}
          </div>
        </div>

        {/* --- 3. Middle Grid Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white rounded-[32px] p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[18px] font-bold text-[#111827]">Top Agents</h2>
              <Link href="#" className="text-[12px] font-bold text-[#0061C1] hover:underline uppercase tracking-wider">View All</Link>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-12 px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-4">
                <div className="col-span-6">Agent Name</div>
                <div className="col-span-3 text-right">Runs</div>
                <div className="col-span-3 text-right">Revenue</div>
              </div>
              {TOP_AGENTS.map((agent, i) => (
                <AgentRow key={i} {...agent} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-50">
              <h2 className="text-[18px] font-bold text-[#111827] mb-6">Category Reach</h2>
              <div className="space-y-6">
                {CATEGORY_REACH.map((item, i) => (
                  <ProgressItem key={i} {...item} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-[32px] p-8 text-center shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col items-center justify-center group hover:border-blue-100 transition-all">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Clock size={24} className="text-[#0061C1]" />
                </div>
                <div className="text-[20px] font-bold text-[#111827]">6 PM</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Peak Usage</div>
              </div>
              <div className="bg-white rounded-[32px] p-8 text-center shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col items-center justify-center group hover:border-orange-100 transition-all">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <TrendingUp size={24} className="text-orange-500" />
                </div>
                <div className="text-[18px] font-bold text-[#111827]">Marketing</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Active Cat</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. Curated Intelligence Banner --- */}
        <div className="bg-blue-50/50 rounded-[32px] p-8 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#0061C1] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
            <Lightbulb size={28} className="text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-[16px] font-bold text-[#111827] mb-1">Curated Intelligence</h3>
            <p className="text-[14px] text-[#4B5563] leading-relaxed">
              Your marketing agents are generating the highest engagement this month. Consider expanding into <span className="text-[#0061C1] font-bold cursor-pointer hover:underline">automation workflows</span> to capture additional retention lift.
            </p>
          </div>
          <Button className="bg-white text-[#0061C1] hover:bg-gray-50 border border-blue-100 px-8 rounded-xl h-12 font-bold text-xs">Explore Workflows</Button>
        </div>

        {/* --- 5. Ultra High-Fidelity Futuristic Footer Hero --- */}
        <div className="bg-white rounded-[48px] overflow-hidden shadow-[0px_60px_120px_rgba(0,0,0,0.06)] border border-gray-100 relative min-h-[580px] group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7FF] via-[#F8F4FF] to-[#FFF0F7] pointer-events-none" />
          
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none overflow-hidden">
             <div 
               className="absolute inset-0 bg-[url('/images/hero/circuit-lines.svg')] bg-repeat opacity-40 mix-blend-multiply" 
               style={{ backgroundSize: '800px' }}
             />
          </div>
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/10 blur-[100px] rounded-full translate-y-1/4 translate-x-1/4" />

          <div className="grid grid-cols-1 lg:grid-cols-12 h-full relative z-10">
            <div className="lg:col-span-6 p-12 md:p-24 flex flex-col justify-center">
              <h2 className="text-[52px] md:text-[68px] font-bold text-[#111827] leading-[1.02] tracking-tighter mb-14">
                Start Using AI <br /> Agents Today
              </h2>
              <div className="flex flex-col items-center sm:items-start gap-12">
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                  <Button className="h-16 px-14 bg-gradient-to-r from-[#2864E4] to-[#1E9AFF] hover:opacity-90 rounded-2xl text-[12px] font-bold uppercase tracking-[0.25em] shadow-2xl shadow-blue-500/30 border-none text-white transition-all transform hover:-translate-y-1">
                    Explore Agents
                  </Button>
                  <Button variant="outline" className="h-16 px-14 border-[#2864E4]/20 bg-white/40 backdrop-blur-sm text-[#2864E4] hover:bg-white/80 rounded-2xl text-[12px] font-bold uppercase tracking-[0.25em] transition-all">
                    Start Building
                  </Button>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] text-center sm:text-left ml-2 opacity-70 leading-relaxed">
                  Join thousands of users and developers <br /> already using Shekel
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                 <div 
                   className="absolute inset-0 bg-[url('/section-7/bg-waves.svg')] bg-repeat opacity-60 mix-blend-multiply" 
                   style={{ backgroundSize: '600px' }}
                 />
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                {[...Array(14)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute border border-gray-400/[0.1] rounded-[32px]" 
                    style={{ 
                      width: `${160 + i * 48}px`,
                      height: `${160 + i * 48}px`,
                    }} 
                  />
                ))}
              </div>

              <div className="relative z-0">
                <div className="absolute inset-0 bg-[#A855F7] rounded-[56px] blur-[100px] opacity-20" />
                <div className="w-[340px] h-[340px] bg-gradient-to-br from-[#A855F7] via-[#D946EF] to-[#EC4899] rounded-[56px] shadow-[0_32px_64px_rgba(168,85,247,0.2)] relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                   <div className="absolute -inset-10 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform rotate-45" />
                </div>
              </div>

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                 <Float motion3d amplitude={14} duration={7}>
                    <div className="relative w-[520px] h-[520px]">
                      <Image 
                        src="/new-images/cta-robot.webp" 
                        alt="Shekel AI Bot" 
                        fill 
                        className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]"
                      />
                    </div>
                 </Float>
              </div>

              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-56 h-80 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] shadow-2xl z-20 overflow-hidden hidden xl:block translate-x-4">
                 <div className="p-8 space-y-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
                       <TrendingUp size={24} className="text-[#0061C1]" />
                    </div>
                    <div className="space-y-3">
                       <div className="h-2.5 w-full bg-white/30 rounded-full" />
                       <div className="h-2.5 w-2/3 bg-white/20 rounded-full" />
                    </div>
                    <div className="mt-auto flex items-end gap-3 pb-2">
                       <div className="w-5 h-[40%] bg-blue-400/30 rounded-lg" />
                       <div className="w-5 h-[65%] bg-blue-500/50 rounded-lg" />
                       <div className="w-5 h-[95%] bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatorAnalyticsPage;
