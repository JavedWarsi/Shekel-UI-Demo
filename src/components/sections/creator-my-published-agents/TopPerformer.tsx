"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";

export default function CreatorTopPerformer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-full rounded-[32px] overflow-hidden p-8 text-white shadow-[0_20px_50px_rgba(40,100,228,0.2)] mb-8"
      style={{ 
        fontFamily: typography.fonts.inter,
        background: "linear-gradient(135deg, #4274FF 0%, #C3D5FF 100%)"
      }}
    >
      {/* Star Ribbon SVG positioned absolute */}
      <div className="absolute top-0 right-6 opacity-90">
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H48V64L24 52L0 64V0Z" fill="white" fillOpacity="0.2"/>
          <path d="M24 32L20.4733 34.0206L21.3129 29.8159L18.1189 26.9194L22.2536 26.4741L24 22.5L25.7464 26.4741L29.8811 26.9194L26.6871 29.8159L27.5267 34.0206L24 32Z" fill="white"/>
        </svg>
      </div>

      <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold tracking-wider uppercase mb-8">
        Top Performer
      </div>

      <h3 className="text-[28px] font-bold mb-2 leading-tight" style={{ fontFamily: typography.fonts.poppins }}>
        SEO Content<br />Generator
      </h3>
      
      <p className="text-[14px] text-white/80 mb-10">
        Most active agent this month
      </p>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
        <div>
          <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">Earnings</p>
          <p className="text-[24px] font-bold" style={{ fontFamily: typography.fonts.poppins }}>$1,200</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">Workflows</p>
          <p className="text-[24px] font-bold" style={{ fontFamily: typography.fonts.poppins }}>2,000+</p>
        </div>
      </div>
    </motion.div>
  );
}
