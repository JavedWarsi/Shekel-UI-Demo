"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  GitBranch, 
  Brain, 
  Trash2, 
  Zap, 
  Target, 
  Clock, 
  ChevronRight,
  Plus,
  LayoutGrid,
  Filter,
  ArrowUpRight,
  Layers,
  RefreshCw,
  Code,
  Settings
} from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Float } from "@/components/shared/motion/Float";

// --- Mock Data ---

const SAVED_AGENTS = [
  {
    id: "1",
    type: "MARKETING AGENT",
    title: "Lexicon Growth AI",
    description: "Autonomous multi-channel content generator specialized in technical SaaS...",
    icon: <Sparkles size={20} strokeWidth={1.5} className="text-[#0061C1]" />,
    iconBg: "bg-blue-50",
    tags: [<Zap size={14} strokeWidth={1.5} />, <RefreshCw size={14} strokeWidth={1.5} />]
  },
  {
    id: "2",
    type: "DATA WORKFLOW",
    title: "Omniscience ETL",
    description: "Real-time pipeline that aggregates sentiment data from 50+ sources and...",
    icon: <GitBranch size={20} strokeWidth={1.5} className="text-[#0061C1]" />,
    iconBg: "bg-blue-50",
    tags: [<Target size={14} strokeWidth={1.5} />]
  },
  {
    id: "3",
    type: "NEURAL AGENT",
    title: "Synth-A-Logic",
    description: "Advanced reasoning model for complex code refactoring and architecture...",
    icon: <Brain size={20} strokeWidth={1.5} className="text-[#0061C1]" />,
    iconBg: "bg-blue-50",
    tags: [<Code size={14} strokeWidth={1.5} />, <Settings size={14} strokeWidth={1.5} />]
  }
];

// --- Helper Components ---

const SavedTab = ({ 
  label, 
  count, 
  active, 
  onClick, 
  icon 
}: { 
  label: string, 
  count?: number, 
  active?: boolean, 
  onClick: () => void,
  icon: React.ReactNode
}) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 pb-5 border-b-[3px] transition-all relative group/tab ${
      active ? 'border-[#0061C1] text-[#0061C1]' : 'border-transparent text-gray-400 hover:text-gray-600'
    }`}
  >
    <span className={`${active ? 'text-[#0061C1]' : 'text-gray-400 group-hover/tab:text-gray-600'} transition-colors`}>
      {icon}
    </span>
    <span className="text-[15px] font-bold tracking-tight">{label}</span>
    {count !== undefined && (
      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ml-1 ${
        active ? 'bg-blue-50 text-[#0061C1]' : 'bg-gray-100 text-gray-400 group-hover/tab:bg-gray-200'
      } transition-colors`}>
        {count}
      </span>
    )}
  </button>
);

const SavedCard = ({ agent }: { agent: typeof SAVED_AGENTS[0] }) => (
  <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-[0px_4px_30px_rgba(0,0,0,0.02)] flex flex-col h-full group hover:border-blue-100 transition-all duration-300">
    <div className="flex items-center justify-between mb-10">
      <div className="w-[56px] h-[56px] bg-[#F8FAFF] rounded-[20px] flex items-center justify-center border border-blue-50 group-hover:scale-105 transition-transform">
        {agent.icon}
      </div>
      <button className="text-gray-300 hover:text-red-500 transition-colors p-2">
        <Trash2 size={22} strokeWidth={1.5} />
      </button>
    </div>
    
    <div className="space-y-4 mb-10">
      <span className="text-[11px] font-bold text-[#0061C1] uppercase tracking-[0.2em]">{agent.type}</span>
      <h3 className="text-[24px] font-bold text-[#111827] tracking-tight leading-tight">{agent.title}</h3>
      <p className="text-[15px] text-gray-400 leading-relaxed line-clamp-2 mt-1">
        {agent.description}
      </p>
    </div>

    <div className="mt-auto flex items-center justify-between">
      <div className="flex gap-3">
        {agent.tags.map((tag, i) => (
          <div key={i} className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
            {tag}
          </div>
        ))}
      </div>
      <Button variant="ghost" className="h-12 px-8 bg-[#ECF2FF] text-[#0061C1] hover:bg-[#DCE7FF] rounded-2xl text-[13px] font-extrabold tracking-wide transition-colors">
        Open Artifact
      </Button>
    </div>
  </div>
);

// --- Main Page Component ---

export default function SavedPage() {
  const [activeTab, setActiveTab] = useState("Agents");
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans selection:bg-blue-100 pb-32">
      <main className="max-w-[1400px] mx-auto w-full pt-44 pb-12 px-8 md:px-12 space-y-16">
        
        {/* --- 1. Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="space-y-5">
            <h1 className="text-[56px] font-bold text-[#111827] tracking-tighter leading-none">Saved</h1>
            <p className="text-[18px] text-gray-400 max-w-[540px] leading-relaxed">
              Your curated collection of high-performance AI agents and automated operational workflows.
            </p>
          </div>
          
          <div className="bg-[#F3F4F6]/60 p-1.5 rounded-[24px] border border-gray-100 flex items-center min-w-[240px] shadow-sm">
            <button 
              onClick={() => setFilter("All")}
              className={`flex-1 py-3 rounded-[20px] text-[14px] font-extrabold transition-all duration-300 ${
                filter === "All" 
                  ? 'bg-white text-[#0061C1] shadow-[0_4px_12px_rgba(0,0,0,0.08)]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("Recent")}
              className={`flex-1 py-3 rounded-[20px] text-[14px] font-extrabold transition-all duration-300 ${
                filter === "Recent" 
                  ? 'bg-white text-[#0061C1] shadow-[0_4px_12px_rgba(0,0,0,0.08)]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Recent
            </button>
          </div>
        </div>

        {/* --- 2. Navigation Tabs --- */}
        <div className="flex items-center gap-14 border-b border-gray-100">
          <SavedTab 
            label="Agents" 
            count={12} 
            active={activeTab === "Agents"} 
            onClick={() => setActiveTab("Agents")} 
            icon={<Brain size={20} strokeWidth={1.5} />}
          />
          <SavedTab 
            label="Workflows" 
            count={4} 
            active={activeTab === "Workflows"} 
            onClick={() => setActiveTab("Workflows")} 
            icon={<GitBranch size={20} strokeWidth={1.5} />}
          />
          <SavedTab 
            label="Categories" 
            active={activeTab === "Categories"} 
            onClick={() => setActiveTab("Categories")} 
            icon={<Layers size={20} strokeWidth={1.5} />}
          />
        </div>

        {/* --- 3. Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SAVED_AGENTS.map((agent) => (
            <SavedCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* --- 4. Recommended For You Divider --- */}
        <div className="relative pt-20 pb-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-100/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#F9FAFB] px-10 text-[12px] font-bold text-[#0061C1] uppercase tracking-[0.45em]">
              Recommended For You
            </span>
          </div>
        </div>

        {/* --- 5. Hero Banner (Professional Developer High-Fidelity) --- */}
        <div className="bg-white rounded-[80px] shadow-[0px_60px_120px_rgba(0,0,0,0.05)] border border-gray-100/60 p-12 md:p-20 relative group overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-400/5 blur-[140px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Rocket Illustration in Black Rounded Box */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square bg-black rounded-[56px] overflow-hidden shadow-2xl flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-700">
                <Float motion3d amplitude={14} duration={5}>
                  <div className="relative w-full h-full">
                    <Image 
                      src="/section-8/rocket.webp" 
                      alt="Hyperion Intelligence" 
                      fill 
                      className="object-contain p-12 drop-shadow-[0_40px_80px_rgba(255,255,255,0.2)] scale-125 animate-float"
                    />
                  </div>
                </Float>
              </div>
            </div>

            {/* Banner Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[12px] font-extrabold text-[#3B82F6] uppercase tracking-[0.35em] mb-7">New Release</span>
              <h2 className="text-[42px] md:text-[52px] font-bold text-[#111827] leading-[1.05] tracking-tighter mb-8">
                Hyperion Intelligence:<br /> The New Standard for Logic
              </h2>
              <p className="text-[18px] text-gray-400 max-w-[560px] leading-relaxed mb-14">
                Our latest curated artifact features a breakthrough in sparse-attention mechanisms, allowing for 10x larger context windows with zero latency loss. Perfect for deep architectural planning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button className="h-14 px-12 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[20px] text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.2)] border-none transition-all transform hover:-translate-y-0.5">
                  Quick Save
                </Button>
                <Button variant="ghost" className="h-14 px-12 border border-gray-200 bg-white text-[#111827] hover:bg-gray-50 rounded-[20px] text-[15px] font-bold transition-all shadow-sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
