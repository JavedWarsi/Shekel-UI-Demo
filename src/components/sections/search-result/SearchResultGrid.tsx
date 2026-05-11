"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography } from "@/tokens/design-tokens";
import { Star, MoreHorizontal, ArrowRight, Bot, Zap, Search, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const RESULTS = [
  {
    type: "agent",
    title: "Copy-Maven Pro",
    desc: "High-conversion marketing copywriter trained on top-tier sales funnels and ad history.",
    rating: "4.9",
    reviews: "2.4k",
    runs: "12.5k Runs",
    icon: <Bot size={24} className="text-[#2864e4]" />,
    buttonText: "Run Agent",
    buttonVariant: "primary"
  },
  {
    type: "workflow",
    title: "Social Engine 360",
    desc: "Automated pipeline from trending topic detection to multi-platform content scheduling.",
    badge: "WORKFLOW",
    icon: <Zap size={24} className="text-[#2864e4]" />,
    buttonText: "View Workflow",
    buttonVariant: "secondary"
  },
  {
    type: "category",
    title: "SEO Automation",
    desc: "Collection of tools for technical audits, backlink analysis, and automated metadata generation.",
    count: "142 Agents Available",
    icon: <LayoutGrid size={24} className="text-[#2864e4]" />,
    linkText: "Explore Category",
    hasGlow: true
  },
  {
    type: "agent",
    title: "MarketPulse Analyst",
    desc: "Real-time competitor tracking and market sentiment analysis for enterprise strategy.",
    rating: "4.7",
    reviews: "856",
    runs: "4.2k Runs",
    icon: <Search size={24} className="text-[#2864e4]" />,
    buttonText: "Run Agent",
    buttonVariant: "primary"
  },
  {
    type: "workflow",
    title: "Email Drip Maestro",
    desc: "Generative email sequence builder that adapts based on user behavior and CRM tags.",
    badge: "WORKFLOW",
    icon: <Zap size={24} className="text-[#2864e4]" />,
    buttonText: "View Workflow",
    buttonVariant: "secondary"
  },
  {
    type: "agent",
    title: "VisualBrand AI",
    desc: "Generates consistent social media assets and ad banners based on your brand guidelines.",
    rating: "5.0",
    reviews: "1.1k",
    runs: "8.9k Runs",
    icon: <Bot size={24} className="text-[#2864e4]" />,
    buttonText: "Run Agent",
    buttonVariant: "gradient"
  }
];

export default function SearchResultGrid() {
  return (
    <section className="relative w-full py-20 bg-white dark:bg-[#05070C] transition-colors duration-300" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESULTS.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-[#0F172A] border border-[#F1F3F6] dark:border-white/5 p-10 rounded-[32px] flex flex-col h-full group hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-none transition-all duration-500 overflow-hidden ${item.hasGlow ? 'bg-gradient-to-br from-white to-[#EBF2FF] dark:from-[#0F172A] dark:to-[#1e293b]' : ''}`}
            >
              {/* Decorative Glow for Category Card */}
              {item.hasGlow && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2864e4]/10 rounded-full blur-[60px] translate-x-1/4 -translate-y-1/4" />
              )}

              <div className="flex items-start justify-between mb-10 relative z-10">
                {item.badge ? (
                  <span className="text-[12px] font-bold text-[#2864e4] bg-[#EBF2FF] dark:bg-[#2864e4]/20 px-4 py-1.5 rounded-full tracking-wider uppercase">
                    {item.badge}
                  </span>
                ) : (
                  <div className="w-14 h-14 bg-[#F5F8FF] dark:bg-white/5 rounded-2xl flex items-center justify-center border border-[#EBF2FF] dark:border-white/10">
                    {item.icon}
                  </div>
                )}
                {item.type === "workflow" && (
                  <button className="text-[#94A3B8] hover:text-[#2864e4] transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                )}
              </div>
              
              <h4 className="text-[24px] font-bold text-[#0F172A] dark:text-white mb-4 relative z-10">
                {item.title}
              </h4>
              <p className="text-[15px] text-[#64748B] dark:text-slate-400 leading-relaxed mb-10 flex-1 relative z-10">
                {item.desc}
              </p>
              
              {item.type === "agent" && (
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-2">
                    <Star size={18} className="fill-[#FFB800] text-[#FFB800]" />
                    <span className="text-[15px] font-bold text-[#0F172A] dark:text-white">{item.rating}</span>
                    <span className="text-[15px] text-[#94A3B8]">({item.reviews})</span>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-white/5 px-4 py-1.5 rounded-xl border border-gray-50 dark:border-white/5">
                    <span className="text-[13px] font-bold text-[#475569] dark:text-slate-400">{item.runs}</span>
                  </div>
                </div>
              )}

              {item.type === "category" && (
                <div className="flex items-center gap-3 mb-10 relative z-10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-[#EBF2FF] dark:bg-white/10 overflow-hidden" />
                    ))}
                  </div>
                  <span className="text-[15px] font-semibold text-[#2864e4]">{item.count}</span>
                </div>
              )}
              
              <div className="relative z-10 mt-auto">
                {item.buttonText ? (
                  <Link href={item.type === "agent" ? "/agent-detail" : "/workflows"} className="block">
                    <button 
                      className={`w-full py-4.5 px-6 rounded-[20px] text-[16px] font-bold transition-all flex items-center justify-center gap-2 ${
                        item.buttonVariant === "primary" 
                          ? "bg-[#2864e4] text-white hover:bg-[#1E50C0] shadow-lg shadow-blue-500/20" 
                          : item.buttonVariant === "gradient"
                          ? "bg-gradient-to-r from-[#7CA5F4] to-[#5C8AE7] text-white hover:opacity-90 shadow-lg shadow-blue-400/20"
                          : "bg-[#F1F3F6] dark:bg-white/5 text-[#475569] dark:text-white hover:bg-[#E5E7EB] dark:hover:bg-white/10"
                      }`}
                    >
                      {item.buttonText}
                      {item.buttonVariant === "primary" && <ArrowRight size={18} />}
                    </button>
                  </Link>
                ) : (
                  <Link href="/category-page" className="inline-flex items-center gap-2 text-[16px] font-bold text-[#2864e4] hover:gap-3 transition-all">
                    {item.linkText}
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
