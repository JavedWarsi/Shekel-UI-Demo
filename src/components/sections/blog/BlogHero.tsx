"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { BookOpen } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative w-full pt-32 pb-16 bg-white overflow-hidden" style={{ fontFamily: typography.fonts.inter }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(40,100,228,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fc] border border-[rgba(0,0,0,0.06)] shadow-sm mb-6">
            <BookOpen size={16} className="text-[#2864e4]" />
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#475569]">Shekel Insights</span>
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>
            The Autonomous Future
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#414753] max-w-2xl mx-auto">
            Stay updated with the latest trends in AI agents, decentralized intelligence, and the future of automated workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
