"use client";

import { typography, colors } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function BrandAssetsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f9f9f9] pt-32 pb-20 border-b border-[rgba(0,0,0,0.06)]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight mb-6 text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>
            Brand Assets
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#414753] mb-12">
            Resources and guidelines for using the Shekel brand in your products, marketing materials, and publications.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#2864e4] text-white font-bold rounded-xl hover:bg-[#2054c2] transition-all shadow-lg shadow-[#2864e4]/20 group">
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Brand Kit (.ZIP)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
