"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import Image from "next/image";

const MASCOTS = [
  { name: "Pose 1", src: "/shared/astronaut.png" }, // I'll reuse the astronaut for all, or 404
  { name: "Pose 2", src: "/404.png" },
  { name: "Pose 3", src: "/shared/astronaut.png" },
  { name: "Pose 4", src: "/404.png" }
];

export default function BrandAssetsMascot() {
  return (
    <section className="relative w-full py-28 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="mb-16 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[48px] font-medium text-[#000000] mb-4 tracking-tight" 
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Mascot Variations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-[#4A5568]"
          >
            Approved poses for consistent brand representation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MASCOTS.map((mascot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[32px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.20)] flex flex-col h-full items-center"
            >
              {/* Image Area */}
              <div className="w-full aspect-square relative mb-6">
                <Image 
                  src={mascot.src} 
                  alt={mascot.name} 
                  fill 
                  className="object-contain drop-shadow-xl p-4 hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Bottom Info Area */}
              <div className="w-full flex flex-col items-center mt-auto">
                <h3 className="text-[16px] font-bold text-[#1A202C] mb-6" style={{ fontFamily: typography.fonts.poppins }}>
                  {mascot.name}
                </h3>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <button className="py-2.5 rounded-lg border border-gray-200 text-[12px] font-bold text-[#1A202C] hover:bg-gray-50 transition-colors w-full text-center">
                    PNG
                  </button>
                  <button className="py-2.5 rounded-lg border border-gray-200 text-[12px] font-bold text-[#1A202C] hover:bg-gray-50 transition-colors w-full text-center">
                    SVG
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
