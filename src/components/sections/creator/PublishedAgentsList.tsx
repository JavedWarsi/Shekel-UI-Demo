"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { ExternalLink, MoreVertical, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

const PUBLISHED_AGENTS = [
  { name: "DataHarvester AI", status: "published", revenue: "$1,250", rating: "4.9", icon: "icon-data-harvester.svg", runs: "12k" },
  { name: "LingoMaster", status: "published", revenue: "$850", rating: "4.7", icon: "icon-lingo-master.svg", runs: "8k" },
  { name: "SentinalShield", status: "published", revenue: "$3,400", rating: "5.0", icon: "icon-sentinal-shield.svg", runs: "2k" }
];

export default function PublishedAgentsList() {
  return (
    <div className="space-y-6" style={{ fontFamily: typography.fonts.inter }}>
      {PUBLISHED_AGENTS.map((agent, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-[rgba(0,0,0,0.06)] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-8 group"
        >
          <div className="w-16 h-16 bg-[#f8fafd] rounded-2xl flex items-center justify-center border border-[rgba(0,0,0,0.04)] shrink-0">
            <Image 
              src={`/section-5-explore-agent/${agent.icon}`} 
              alt={agent.name} 
              width={28} 
              height={28}
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[18px] font-bold text-[#0b0b0b]">{agent.name}</h3>
              <span className="px-2 py-0.5 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold uppercase tracking-widest rounded">Published</span>
            </div>
            <p className="text-[14px] text-[#475569] font-medium">Marketplace visibility: Public</p>
          </div>
          
          <div className="flex gap-12 text-center md:text-left">
            <div>
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Total Revenue</div>
              <div className="text-[18px] font-bold text-[#0b0b0b]">{agent.revenue}</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Total Runs</div>
              <div className="text-[18px] font-bold text-[#0b0b0b]">{agent.runs}</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Avg Rating</div>
              <div className="flex items-center gap-1 justify-center md:justify-start">
                <Star size={14} className="fill-[#ffb800] text-[#ffb800]" />
                <span className="text-[18px] font-bold text-[#0b0b0b]">{agent.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 shrink-0">
            <button className="p-3 bg-[#f8fafd] text-[#2864e4] rounded-xl hover:bg-[#2864e4] hover:text-white transition-all">
              <TrendingUp size={20} />
            </button>
            <button className="p-3 bg-[#f8fafd] text-[#475569] rounded-xl hover:bg-gray-100 transition-all">
              <ExternalLink size={20} />
            </button>
            <button className="p-3 bg-[#f8fafd] text-[#475569] rounded-xl hover:bg-gray-100 transition-all">
              <MoreVertical size={20} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
