"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const COLOR_PALETTE = [
  { name: "Shekel Blue", hex: "#2864E4", rgb: "40, 100, 228", usage: "Primary Brand Color" },
  { name: "Electric Cyan", hex: "#56CCF2", rgb: "86, 204, 242", usage: "Accent & Gradients" },
  { name: "Deep Navy", hex: "#0B0B0B", rgb: "11, 11, 11", usage: "Text & Backgrounds" },
  { name: "Soft Sky", hex: "#ECF2FF", rgb: "236, 242, 255", usage: "Subtle Backgrounds" }
];

export default function BrandAssetsColors() {
  return (
    <section className="relative w-full py-24 bg-[#f9f9f9]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#0b0b0b] mb-12" style={{ fontFamily: typography.fonts.poppins }}>
          Color Palette
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLOR_PALETTE.map((color, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-[rgba(0,0,0,0.06)] rounded-[24px] overflow-hidden shadow-sm"
            >
              <div 
                className="h-40 w-full relative group"
                style={{ backgroundColor: color.hex }}
              >
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 text-white gap-2 font-bold text-[14px]">
                  <Copy size={16} /> Copy HEX
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#0b0b0b] mb-4">{color.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-wider">HEX</span>
                    <span className="text-[14px] font-mono font-medium text-[#1a1c1c]">{color.hex}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-wider">RGB</span>
                    <span className="text-[14px] font-mono font-medium text-[#1a1c1c]">{color.rgb}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-50">
                    <span className="text-[12px] italic text-[#475569]">{color.usage}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
