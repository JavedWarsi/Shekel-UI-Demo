"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Filter, Star, ChevronDown, LayoutGrid, List } from "lucide-react";
import { motion } from "framer-motion";

const AGENTS = [
  {
    title: "DataHarvester AI",
    desc: "Autonomous web scraping agent that cleans and formats data for analysis.",
    rating: "4.9",
    runs: "4.2k runs",
    price: "Free",
    icon: "icon-data-harvester.svg",
    category: "Data"
  },
  {
    title: "LingoMaster",
    desc: "Context-aware translation agent supporting over 95 languages with high accuracy.",
    rating: "4.7",
    runs: "12k runs",
    price: "$0.05/run",
    icon: "icon-lingo-master.svg",
    category: "Language"
  },
  {
    title: "SentinalShield",
    desc: "Monitors infrastructure logs for anomalous patterns and active threats.",
    rating: "5.0",
    runs: "1.8k runs",
    price: "Custom",
    icon: "icon-sentinal-shield.svg",
    category: "Security"
  },
  {
    title: "InboxManager",
    desc: "Sorts, prioritizes, and drafts replies for high-volume support channels.",
    rating: "4.5",
    runs: "6.7k runs",
    price: "Free Tier",
    icon: "icon-inbox-manager.svg",
    category: "Productivity"
  },
  {
    title: "TrendForecaster",
    desc: "Predicts consumer market trends using multi-source social listening tools.",
    rating: "4.8",
    runs: "8.9k runs",
    price: "$29/mo",
    icon: "icon-trend-forecaster.svg",
    category: "Marketing"
  },
  {
    title: "LegalSummarizer",
    desc: "Extracts key clauses and risks from 50+ page legal documents in seconds.",
    rating: "4.6",
    runs: "2.1k runs",
    price: "$1.50/doc",
    icon: "icon-legal-summarizer.svg",
    category: "Legal"
  }
];

export default function SearchResultGrid() {
  return (
    <section className="relative w-full py-12 bg-[#f9f9f9]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-[rgba(0,0,0,0.06)] p-6 rounded-2xl shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <Filter size={18} className="text-[#2864e4]" />
                <h3 className="font-bold text-[#0b0b0b]">Filters</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[14px] font-bold text-[#1a1c1c] mb-3">Categories</h4>
                  <div className="space-y-2">
                    {["All Categories", "Data & Research", "Marketing", "Development", "Productivity", "Legal"].map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#2864e4] focus:ring-[#2864e4]/20" />
                        <span className="text-[14px] text-[#414753] group-hover:text-[#2864e4] transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[14px] font-bold text-[#1a1c1c] mb-3">Pricing</h4>
                  <div className="space-y-2">
                    {["Free", "Pay-per-run", "Subscription", "Enterprise"].map((price) => (
                      <label key={price} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#2864e4] focus:ring-[#2864e4]/20" />
                        <span className="text-[14px] text-[#414753] group-hover:text-[#2864e4] transition-colors">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[14px] font-bold text-[#1a1c1c] mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((star) => (
                      <label key={star} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#2864e4] focus:ring-[#2864e4]/20" />
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < star ? "fill-[#ffb800] text-[#ffb800]" : "text-gray-200"} />
                          ))}
                          <span className="text-[14px] text-[#414753] ml-1">& Up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-8 py-3 text-[14px] font-bold text-[#2864e4] bg-[#2864e4]/[0.05] rounded-xl hover:bg-[#2864e4]/[0.1] transition-colors">
                Clear All Filters
              </button>
            </div>
          </aside>
          
          {/* Main Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-xl border border-[rgba(0,0,0,0.06)] shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-[14px] text-[#475569] font-medium">Sort by:</span>
                <button className="flex items-center gap-2 text-[14px] font-bold text-[#0b0b0b]">
                  Most Popular <ChevronDown size={16} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-[#f8fafd] border border-[rgba(0,0,0,0.06)] rounded-lg text-[#2864e4]">
                  <LayoutGrid size={18} />
                </button>
                <button className="p-2 hover:bg-[#f8fafd] rounded-lg text-[#94A3B8] transition-colors">
                  <List size={18} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {AGENTS.map((agent, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-[rgba(0,0,0,0.08)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col h-full group"
                  style={{ borderRadius: radiuses.card }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-[#f8fafd] rounded-2xl flex items-center justify-center border border-[rgba(0,0,0,0.04)] group-hover:scale-110 transition-transform">
                      <Image 
                        src={`/section-5-explore-agent/${agent.icon}`} 
                        alt={agent.title} 
                        width={24} 
                        height={24}
                        className="opacity-90"
                      />
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#ffb800]/10 text-[#ffb800] rounded-lg">
                      <Star size={14} className="fill-[#ffb800]" />
                      <span className="text-[13px] font-bold">{agent.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-[18px] font-bold text-[#0b0b0b] mb-2 group-hover:text-[#2864e4] transition-colors">
                    {agent.title}
                  </h4>
                  <p className="text-[14px] text-[#414753] leading-relaxed mb-6 flex-1">
                    {agent.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Usage</span>
                      <span className="text-[14px] font-bold text-[#0b0b0b]">{agent.runs}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Pricing</span>
                      <span className="text-[14px] font-bold text-[#0b0b0b]">{agent.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href="/agent-detail" className="flex-1">
                      <button className="w-full py-3 bg-[#2864e4] text-white text-[14px] font-bold rounded-xl hover:bg-[#2054c2] transition-colors shadow-lg shadow-[#2864e4]/20">
                        View Agent
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-4 bg-white border border-[rgba(0,0,0,0.08)] rounded-xl font-bold text-[#0b0b0b] hover:bg-gray-50 transition-colors shadow-sm">
                Load More Results
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
