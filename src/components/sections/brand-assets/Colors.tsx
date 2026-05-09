"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const COLOR_PALETTE = [
  { name: "PRIMARY BLUE", hex: "#2F80ED", hexText: "#2F80ED" },
  { name: "LIGHT BLUE", hex: "#56CCF2", hexText: "#56CCF2" },
  { name: "MIDNIGHT BLACK", hex: "#0B0B0B", hexText: "#0B0B0B" },
  { name: "SOFT WHITE", hex: "#F5F7FA", hexText: "#F5F7FA" }
];

export default function BrandAssetsColors() {
  return (
    <section className="relative w-full py-28 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[48px] font-medium text-[#000000] mb-4 tracking-tight" 
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Core Palette
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-[#4A5568]"
          >
            Precision and depth define our tonal range.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLOR_PALETTE.map((color, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-full"
            >
              {/* Color Block */}
              <div 
                className="w-full aspect-[4/3] flex-grow"
                style={{ backgroundColor: color.hex }}
              />

              {/* Bottom Info Area */}
              <div className="p-6 flex justify-between items-center bg-white border-t border-[rgba(0,0,0,0.02)]">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider">
                    {color.name}
                  </span>
                  <span className="text-[18px] font-bold text-[#1A202C]" style={{ fontFamily: typography.fonts.poppins }}>
                    {color.hexText}
                  </span>
                </div>
                
                <button className="p-2.5 rounded-lg bg-[#F7FAFC] text-[#4A5568] hover:bg-gray-100 transition-colors">
                  <Copy size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
