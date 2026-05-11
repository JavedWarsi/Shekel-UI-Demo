"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { MessageSquare, BarChart2, Terminal, Wand2, Languages, TrendingUp, RefreshCw, Edit2, Play } from "lucide-react";
import Link from "next/link";

export default function MyAgentsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-16" style={{ fontFamily: typography.fonts.inter }}>
      
      {/* Card 1 (Large - spans 8 columns) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="col-span-1 border border-gray-300 dark:border-slate-800 md:col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 rounded-sm bg-[#DCE6FF] dark:bg-blue-900/30 text-[#2864E4] flex items-center justify-center">
              <MessageSquare size={24} strokeWidth={2.5} fill="currentColor" className="text-[#2864E4]" />
            </div>
            <div className="px-3 py-1 bg-[#EBF0FE] dark:bg-blue-900/30 text-[#2864E4] text-[10px] font-medium uppercase tracking-wider rounded-sm">
              FEATURED
            </div>
          </div>
          
          <h2 className="text-[36px] font-medium text-[#0b0b0b] dark:text-white tracking-tight mb-4" style={{ fontFamily: typography.fonts.poppins }}>
            The Content Architect
          </h2>
          <p className="text-[15px] text-[#64748B] dark:text-slate-400 max-w-[400px] leading-[1.6]">
            A sophisticated large-scale language model tuned for long-form editorial excellence, creative storytelling, and narrative architecture.
          </p>
        </div>

        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981] text-[11px] font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#10B981]"></span>
              LIVE
            </span>
            <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#64748B] dark:text-slate-500">
              <TrendingUp size={14} />
              24.5k runs this month
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/create-ai-agent-page">
              <button className="px-6 py-2.5 rounded-sm border border-[#E2E8F0] dark:border-slate-800 text-[13px] font-medium text-[#2864E4] dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                Edit
              </button>
            </Link>
            <Link href="/agent-detail">
              <button className="px-6 py-2.5 rounded-sm bg-[#0b0b0b] dark:bg-white dark:text-black text-white text-[13px] font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Run Agent
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Card 2 (Medium - spans 4 columns) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="col-span-1 border border-gray-300 dark:border-slate-800 md:col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl border border-[#E2E8F0] dark:border-slate-800 bg-white dark:bg-slate-800 text-[#2864E4] flex items-center justify-center shadow-sm">
              <BarChart2 size={20} strokeWidth={2} />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981] text-[10px] font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#10B981]"></span>
              LIVE
            </span>
          </div>
          
          <h3 className="text-[18px] font-medium text-[#0b0b0b] dark:text-white tracking-tight mb-3" style={{ fontFamily: typography.fonts.poppins }}>
            Market Analyst v2
          </h3>
          <p className="text-[14px] text-[#64748B] dark:text-slate-400 leading-[1.6]">
            Real-time sentiment analysis and trend forecasting for digital asset...
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#94A3B8] dark:text-slate-500 uppercase tracking-wider">
            <RefreshCw size={12} />
            842 RUNS TOTAL
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/create-ai-agent-page" className="flex-1">
              <button className="w-full py-2.5 rounded-sm border border-[#E2E8F0] dark:border-slate-800 text-[13px] font-medium text-[#64748B] dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                Edit
              </button>
            </Link>
            <Link href="/agent-detail" className="flex-1">
              <button className="w-full py-2.5 rounded-sm bg-[#0550E6] text-white text-[13px] font-medium hover:bg-[#0440C5] transition-colors">
                Run
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Bottom 3 Cards */}
      
      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="col-span-1 border border-gray-300 dark:border-slate-800 md:col-span-4 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 flex items-center text-[#64748B] dark:text-slate-400">
              <Terminal size={24} strokeWidth={1.5} />
            </div>
            <span className="px-3 py-1 rounded-sm bg-[#F1F5F9] dark:bg-slate-800 text-[#64748B] dark:text-slate-400 text-[10px] font-medium uppercase tracking-wider">
              DRAFT
            </span>
          </div>
          
          <h3 className="text-[16px] font-medium text-[#0b0b0b] dark:text-white tracking-tight mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            Code Curator
          </h3>
          <p className="text-[13px] text-[#64748B] dark:text-slate-400 leading-[1.6]">
            Autonomous debugging and documentation generator for Rust ecosystems.
          </p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(0,0,0,0.04)] dark:border-slate-800">
          <span className="text-[10px] font-medium text-[#94A3B8] dark:text-slate-500 uppercase tracking-wider">
            0 RUNS
          </span>
          <div className="flex items-center gap-3 text-[#64748B] dark:text-slate-400">
            <Link href="/create-ai-agent-page">
              <button className="hover:text-[#2864E4] dark:hover:text-blue-400 transition-colors"><Edit2 size={16} strokeWidth={2} /></button>
            </Link>
            <Link href="/agent-detail">
              <button className="hover:text-[#10B981] dark:hover:text-green-400 transition-colors"><Play size={16} fill="currentColor" /></button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-1 border border-gray-300 dark:border-slate-800 md:col-span-4 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 flex items-center text-[#0b0b0b] dark:text-white">
              <Wand2 size={24} strokeWidth={1.5} />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981] text-[10px] font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#10B981]"></span>
              LIVE
            </span>
          </div>
          
          <h3 className="text-[16px] font-medium text-[#0b0b0b] dark:text-white tracking-tight mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            Visual Critic
          </h3>
          <p className="text-[13px] text-[#64748B] dark:text-slate-400 leading-[1.6]">
            AI agent providing design critique based on classical UI/UX principles.
          </p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(0,0,0,0.04)] dark:border-slate-800">
          <span className="text-[10px] font-medium text-[#94A3B8] dark:text-slate-500 uppercase tracking-wider">
            1.2K RUNS
          </span>
          <div className="flex items-center gap-3 text-[#64748B] dark:text-slate-400">
            <Link href="/create-ai-agent-page">
              <button className="hover:text-[#2864E4] dark:hover:text-blue-400 transition-colors"><Edit2 size={16} strokeWidth={2} /></button>
            </Link>
            <Link href="/agent-detail">
              <button className="hover:text-[#10B981] dark:hover:text-green-400 transition-colors"><Play size={16} fill="currentColor" /></button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="col-span-1 border border-gray-300 dark:border-slate-800 md:col-span-4 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 flex items-center text-[#0b0b0b] dark:text-white">
              <Languages size={24} strokeWidth={1.5} />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D1FAE5] dark:bg-green-900/30 text-[#10B981] text-[10px] font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#10B981]"></span>
              LIVE
            </span>
          </div>
          
          <h3 className="text-[16px] font-medium text-[#0b0b0b] dark:text-white tracking-tight mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            Polyglot Bridge
          </h3>
          <p className="text-[13px] text-[#64748B] dark:text-slate-400 leading-[1.6]">
            Instant technical translation across 15+ languages with context preservation.
          </p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(0,0,0,0.04)] dark:border-slate-800">
          <span className="text-[10px] font-medium text-[#94A3B8] dark:text-slate-500 uppercase tracking-wider">
            5.1K RUNS
          </span>
          <div className="flex items-center gap-3 text-[#64748B] dark:text-slate-400">
            <Link href="/create-ai-agent-page">
              <button className="hover:text-[#2864E4] dark:hover:text-blue-400 transition-colors"><Edit2 size={16} strokeWidth={2} /></button>
            </Link>
            <Link href="/agent-detail">
              <button className="hover:text-[#10B981] dark:hover:text-green-400 transition-colors"><Play size={16} fill="currentColor" /></button>
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
