"use client";

import { motion } from "framer-motion";
import { typography, radiuses } from "@/tokens/design-tokens";
import { ArrowLeft, Share2, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyHeaderProps {
  study: {
    company: string;
    title: string;
    description: string;
    image: string;
    color: string;
  };
}

export default function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  return (
    <section className="relative w-full pt-32 pb-16 bg-white dark:bg-[#05070C] overflow-hidden" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#475569] dark:text-slate-400 hover:text-[#2864e4] mb-10 transition-colors">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-end justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-slate-900 border border-[rgba(0,0,0,0.06)] dark:border-slate-800 flex items-center justify-center font-bold text-[#1a1c1c] dark:text-white text-[12px]">
                  {study.company.charAt(0)}
                </div>
                <span className="text-[14px] font-bold text-[#475569] dark:text-slate-400 uppercase tracking-wider">{study.company}</span>
              </div>
              
              <h1 className="text-[36px] md:text-[56px] font-bold leading-[1.15] text-[#0b0b0b] dark:text-white mb-8" style={{ fontFamily: typography.fonts.poppins }}>
                {study.title}
              </h1>
              
              <p className="text-[18px] md:text-[22px] leading-[1.6] text-[#414753] dark:text-slate-300">
                {study.description}
              </p>
            </div>
            
            <div className="flex gap-4 mb-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(0,0,0,0.08)] dark:border-slate-800 text-[14px] font-bold text-[#1a1c1c] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
                <Share2 size={18} /> Share
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] dark:bg-slate-800 text-white text-[14px] font-bold hover:bg-[#1f2937] dark:hover:bg-slate-700 transition-all">
                <Download size={18} /> PDF Version
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[21/9] w-full overflow-hidden shadow-2xl border dark:border-slate-800" 
          style={{ borderRadius: radiuses.cardLg }}
        >
          <Image src={study.image} alt={study.title} fill className="object-cover" priority />
        </motion.div>
      </div>
    </section>  );
}
