"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useTheme } from "next-themes";

const COLOR_PALETTE = [
  { name: "PRIMARY BLUE", hex: "#2F80ED", hexText: "#2F80ED" },
  { name: "LIGHT BLUE", hex: "#56CCF2", hexText: "#56CCF2" },
  { name: "MIDNIGHT BLACK", hex: "#0B0B0B", hexText: "#0B0B0B" },
  { name: "SOFT WHITE", hex: "#F5F7FA", hexText: "#F5F7FA" }
];

export default function BrandAssetsColors() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-28 transition-colors duration-300 ${
        isDark ? "bg-[#020617]" : "bg-white"
      }`}
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[48px] md:text-[48px] font-medium mb-4 tracking-tight transition-colors duration-300 ${
              isDark ? "text-white" : "text-[#000000]"
            }`}
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Core Palette
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-[18px] transition-colors duration-300 ${
              isDark ? "text-[#94A3B8]" : "text-[#4A5568]"
            }`}
          >
            Precision and depth define our tonal range.
          </motion.p>
        </div>

        {/* Palette Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLOR_PALETTE.map((color, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-[20px] overflow-hidden flex flex-col h-full border transition-all duration-300 ${
                isDark
                  ? "bg-[#0F172A] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
                  : "bg-white border-[rgba(0,0,0,0.03)] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              }`}
            >
              
              {/* Color Preview */}
              <div
                className="w-full aspect-[4/3] flex-grow"
                style={{ backgroundColor: color.hex }}
              />

              {/* Bottom Info */}
              <div
                className={`p-6 flex justify-between items-center border-t transition-colors duration-300 ${
                  isDark
                    ? "bg-[#111827] border-white/5"
                    : "bg-white border-[rgba(0,0,0,0.02)]"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isDark ? "text-[#94A3B8]" : "text-[#718096]"
                    }`}
                  >
                    {color.name}
                  </span>

                  <span
                    className={`text-[18px] font-bold transition-colors duration-300 ${
                      isDark ? "text-white" : "text-[#1A202C]"
                    }`}
                    style={{ fontFamily: typography.fonts.poppins }}
                  >
                    {color.hexText}
                  </span>
                </div>

                <button
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 text-white hover:bg-white/10"
                      : "bg-[#F7FAFC] text-[#4A5568] hover:bg-gray-100"
                  }`}
                >
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