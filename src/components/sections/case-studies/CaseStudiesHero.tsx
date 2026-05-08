"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Briefcase } from "lucide-react";

export default function CaseStudiesHero() {
  return (
    <section className="relative w-full pt-32 pb-16 bg-white overflow-hidden" style={{ fontFamily: typography.fonts.inter }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#56ccf2]/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fc] border border-[rgba(0,0,0,0.06)] shadow-sm mb-6">
            <Briefcase size={16} className="text-[#56ccf2]" />
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#475569]">Success Stories</span>
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>
            Real impact, <br />Real results.
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#414753] max-w-2xl">
            Explore how enterprises and startups are using Shekel's autonomous agent infrastructure to solve complex challenges and scale their operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
