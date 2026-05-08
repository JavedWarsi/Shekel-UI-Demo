"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { MoreVertical, Play, Power, Settings, Star } from "lucide-react";
import Image from "next/image";

const MY_AGENTS = [
  { name: "DataHarvester Pro", status: "active", runs: "1,205", rating: "4.9", icon: "icon-data-harvester.svg", lastRun: "2 mins ago" },
  { name: "MarketAnalyzer", status: "idle", runs: "852", rating: "4.7", icon: "icon-trend-forecaster.svg", lastRun: "3 hours ago" },
  { name: "SupportBot v2", status: "active", runs: "4,120", rating: "4.8", icon: "icon-inbox-manager.svg", lastRun: "Just now" },
  { name: "LingoFlow", status: "active", runs: "96", rating: "5.0", icon: "icon-lingo-master.svg", lastRun: "1 day ago" }
];

export default function MyAgentsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ fontFamily: typography.fonts.inter }}>
      {MY_AGENTS.map((agent, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-[rgba(0,0,0,0.06)] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#f8fafd] rounded-2xl flex items-center justify-center border border-[rgba(0,0,0,0.04)]">
                <Image 
                  src={`/section-5-explore-agent/${agent.icon}`} 
                  alt={agent.name} 
                  width={24} 
                  height={24}
                />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#0b0b0b] mb-1">{agent.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-[#10b981]' : 'bg-gray-300'}`} />
                  <span className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-wider">{agent.status}</span>
                </div>
              </div>
            </div>
            <button className="p-2 text-[#94A3B8] hover:bg-gray-50 rounded-lg">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-50 mb-6">
            <div>
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Runs</div>
              <div className="text-[16px] font-bold text-[#0b0b0b]">{agent.runs}</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Rating</div>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-[#ffb800] text-[#ffb800]" />
                <span className="text-[16px] font-bold text-[#0b0b0b]">{agent.rating}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Last Run</div>
              <div className="text-[14px] font-medium text-[#475569]">{agent.lastRun}</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className={`flex-1 py-3 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-colors ${agent.status === 'active' ? 'bg-[#fef2f2] text-[#ef4444] hover:bg-[#fee2e2]' : 'bg-[#f0f9ff] text-[#0369a1] hover:bg-[#e0f2fe]'}`}>
              {agent.status === 'active' ? <Power size={18} /> : <Play size={18} />}
              {agent.status === 'active' ? 'Stop Agent' : 'Start Agent'}
            </button>
            <button className="px-4 py-3 bg-[#f8fafd] text-[#475569] rounded-xl hover:bg-gray-100 transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </motion.div>
      ))}
      
      {/* Create New Agent Card */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white border-2 border-dashed border-gray-200 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#2864e4] hover:bg-[#2864e4]/[0.02] transition-all group min-h-[250px]"
      >
        <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#2864e4] group-hover:text-white transition-all">
          <Play size={24} className="ml-1" />
        </div>
        <div className="text-center">
          <div className="font-bold text-[#0b0b0b] text-[18px]">Create New Agent</div>
          <p className="text-[14px] text-[#475569] mt-1">Start from a template or build from scratch</p>
        </div>
      </motion.button>
    </div>
  );
}
