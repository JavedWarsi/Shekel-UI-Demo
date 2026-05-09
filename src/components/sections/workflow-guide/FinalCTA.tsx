"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";

export default function WorkflowFinalCTA() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-white">
      {/* Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[10%] top-[20%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute right-[10%] bottom-[10%] w-[600px] h-[600px] bg-pink-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[48px] md:text-[56px] font-bold text-[#0F172A] leading-[1.1] mb-10" style={{ fontFamily: typography.fonts.inter }}>
              Ready To Build Your <br />
              First Architect?
            </h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button 
                className="h-14 px-10 rounded-xl text-[14px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-[0_12px_24px_-8px_rgba(40,100,228,0.5)]"
                style={{ background: 'linear-gradient(180deg, #4F86F7 0%, #2864E4 100%)' }}
              >
                START BUILDING
              </button>
              
              <button 
                className="h-14 px-10 rounded-xl text-[14px] font-bold uppercase tracking-[0.1em] text-[#2864E4] border border-[#2864E4]/20 transition-all hover:bg-[#F3F6FB] active:scale-[0.98]"
              >
                VIEW SAMPLES
              </button>
            </div>
            
            <p className="mt-12 text-[13px] text-[#94A3B8] font-bold uppercase tracking-[0.3em]">
              MASTER AGENTIC ORCHESTRATION TODAY
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-pink-100/20 rounded-[40px] border border-white/40 backdrop-blur-md overflow-hidden flex items-center justify-center">
               <div className="relative w-full h-full">
                 <Image 
                   src="/section-1-marketplace/hero-character.png" 
                   alt="Final CTA Character" 
                   fill 
                   className="object-contain"
                   onError={(e) => {
                     (e.target as any).src = "https://framerusercontent.com/images/3P8vG6KzG8J8J8J8J8J8J8J8.png";
                   }}
                 />
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
    </section>
  );
}
