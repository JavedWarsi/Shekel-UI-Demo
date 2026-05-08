"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

const LOGOS = [
  { name: "Primary Logo - Light", bg: "white", text: "text-[#0b0b0b]", border: "border-[rgba(0,0,0,0.06)]" },
  { name: "Primary Logo - Dark", bg: "#0b0b0b", text: "text-white", border: "border-white/10" },
  { name: "Symbol Only", bg: "white", text: "text-[#0b0b0b]", border: "border-[rgba(0,0,0,0.06)]" },
  { name: "Monochrome", bg: "white", text: "text-[#0b0b0b]", border: "border-[rgba(0,0,0,0.06)]" }
];

export default function BrandAssetsLogos() {
  return (
    <section className="relative w-full py-24 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#0b0b0b] mb-12" style={{ fontFamily: typography.fonts.poppins }}>
          Logos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LOGOS.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div 
                className={`aspect-video rounded-2xl border flex items-center justify-center p-12 group relative overflow-hidden transition-all hover:shadow-xl`}
                style={{ backgroundColor: logo.bg, borderColor: logo.border }}
              >
                {/* Logo Placeholder */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${i === 1 ? "bg-white" : "bg-[#2864e4]"}`} />
                  <span className={`text-[24px] font-bold ${logo.text} tracking-tight`} style={{ fontFamily: typography.fonts.poppins }}>Shekel</span>
                </div>
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-[14px] font-bold text-[#475569]">{logo.name}</span>
                <span className="text-[12px] font-medium text-[#94A3B8]">SVG, PNG</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
