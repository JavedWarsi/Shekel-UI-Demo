"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function BrandAssetsCTA() {
  return (
    <section className="relative w-full py-24 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[32px] overflow-hidden bg-[#05070C] px-8 py-16 md:px-16 md:py-24 text-center border border-white/10"
        >
          {/* Background effects */}
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at top, #2864E4 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#56CCF2] to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6 leading-[1.1]" style={{ fontFamily: typography.fonts.poppins }}>
              Everything you need in one package.
            </h2>
            <p className="text-[18px] text-white/70 mb-10 leading-[1.6]">
              Download the complete Shekel Brand Kit including logos, color swatches, typography guidelines, and 3D mascot renders.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0b0b0b] font-bold rounded-xl hover:scale-105 transition-transform"
                style={{ fontFamily: typography.fonts.inter, fontSize: 16 }}
              >
                <Download size={18} />
                Download Full Kit (.ZIP)
              </button>
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                style={{ fontFamily: typography.fonts.inter, fontSize: 16 }}
              >
                <Mail size={18} />
                Press Inquiries
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
