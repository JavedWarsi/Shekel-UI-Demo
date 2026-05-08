"use client";

import { typography, colors } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HowToBuildHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b0b] pt-32 pb-24" style={{ fontFamily: typography.fonts.inter }}>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#2864e4]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#56ccf2]/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2864e4]" />
            <span className="text-[13px] font-bold uppercase tracking-widest text-white/60">Developer Guide</span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-8 text-white" style={{ fontFamily: typography.fonts.poppins }}>
            Build Your First <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2864e4] to-[#56ccf2]">Autonomous Agent</span>
          </h1>
          <p className="text-[18px] md:text-[22px] leading-[1.6] text-white/70 mb-12 max-w-2xl mx-auto">
            From architecture to deployment. Master the tools and frameworks needed to create high-performance AI entities on Shekel.
          </p>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                <Play size={32} className="text-[#0b0b0b] fill-[#0b0b0b] ml-1" />
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute bottom-8 left-8 z-20 text-left">
              <span className="text-white/60 text-[14px] font-bold uppercase tracking-widest block mb-2">Introduction</span>
              <h3 className="text-white text-[24px] font-bold">Watch the 2-minute overview</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
