"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function BrandAssetsHero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden" style={{ backgroundColor: "#0F1115", fontFamily: typography.fonts.inter }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="max-w-[500px]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white font-light leading-[1.1]  tracking-tight mb-8"
              style={{ fontFamily: typography.fonts.poppins, fontSize: "72px", fontWeight: 500 }}
            >
              Shekel <br />
              <span className="bg-linear-to-r from-[#2F80ED] to-[#91abceff] bg-clip-text text-transparent" >Brand Assets</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[18px] leading-[1.6] mb-10"
              style={{ color: "#A0AEC0" }}
            >
              Everything you need to represent Shekel consistently across platforms. A reimagined system of value for AI commerce.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 px-8 py-4 rounded-[20px] text-white font-medium transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#2F80ED" }}
            >
              <Download size={20} />
              Download Brand Kit
            </motion.button>
          </div>

          {/* Right Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            {/* Fallback to 404 image if the specific astronaut with UI panels isn't there */}
            <Image 
              src="/section-11/cta-robot.png" 
              alt="Shekel Mascot" 
              fill 
              className="object-contain drop-shadow-2xl scale-[2.2] animate-float " 
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
