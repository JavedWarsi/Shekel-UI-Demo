"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Play, Sparkles, Bot, Shield, Star, Cpu } from "lucide-react";
import Image from "next/image";

const TRENDING_AGENTS = [
  {
    title: "Insight Engine",
    desc: "Advanced qualitative data analysis agent for extracting sentiment from large datasets.",
    rating: 4.8,
    reviews: "4.8k",
    tag: "POPULAR",
    tagColor: "bg-[#EFF6FF] text-[#2F80ED]",
    icon: Sparkles,
    bgImage: "/section-17-workflow-guide/Border.png" // Placeholder
  },
  {
    title: "Dev-Ops Architect",
    desc: "Automates CI/CD pipelines and infrastructure scaling with natural language commands.",
    rating: 4.9,
    reviews: "1.2k",
    tag: "NEW",
    tagColor: "bg-[#F0FDF4] text-[#10B981]",
    icon: Cpu,
    bgImage: "/section-17-workflow-guide/Border (1).png" // Placeholder
  },
  {
    title: "Creative Muse",
    desc: "Generates high-fidelity brand assets and UI layouts based on design tokens.",
    rating: 4.7,
    reviews: "3.5k",
    tag: "DESIGN",
    tagColor: "bg-[#FDF4FF] text-[#D946EF]",
    icon: Shield, // Fallback icon
    bgImage: "/section-17-workflow-guide/image.png" // Placeholder
  }
];

export default function DashboardTrending() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 mt-12 pb-24" style={{ fontFamily: typography.fonts.inter }}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[20px] md:text-[24px] font-bold text-[#0b0b0b] dark:text-white tracking-tight">
          Trending Agents
        </h2>
        <button className="text-[14px] font-medium text-[#2864E4] hover:underline">
          Explore Marketplace
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRENDING_AGENTS.map((agent, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-[#0d111b] rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.06)] dark:border-white/10 shadow-sm hover:shadow-lg dark:hover:border-white/20 transition-all group flex flex-col h-full"
          >
            {/* Top Image Banner */}
            <div className="relative w-full h-[160px] bg-[#1a1a2e]">
              <Image 
                src={agent.bgImage} 
                alt={agent.title} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/404.png"; // Fallback image
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${agent.tagColor}`}>
                  {agent.tag}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow relative">
              
              {/* Floating Icon */}
              <div className="absolute -top-6 right-6 w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1f2d] shadow-md flex items-center justify-center border border-gray-100 dark:border-white/10 text-[#2864E4]">
                <agent.icon size={20} />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[18px] font-bold text-[#0b0b0b] dark:text-white" style={{ fontFamily: typography.fonts.poppins }}>
                  {agent.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[12px] font-medium text-[#64748B] dark:text-[#94A3B8]">({agent.reviews})</span>
              </div>

              <p className="text-[14px] text-[#475569] dark:text-[#94A3B8] leading-[1.6] mb-8 flex-grow">
                {agent.desc}
              </p>

              <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0F111A] dark:bg-white/10 text-white rounded-[12px] font-semibold text-[14px] hover:bg-[#1f2233] dark:hover:bg-white/20 transition-colors mt-auto">
                <Play size={16} fill="currentColor" />
                Run Agent
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
