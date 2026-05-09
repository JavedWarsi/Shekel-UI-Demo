"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  {
    title: "Primary Logo",
    desc: "Main brand mark for all use.",
    bg: "#1A1A1A",
    content: (
      <Image src="/shared/header-logo.svg" alt="Primary Logo" width={140} height={40} className="brightness-0 invert" />
    )
  },
  {
    title: "Icon Only",
    desc: "Social and avatar contexts.",
    bg: "#1A1A1A",
    content: (
      // Using header logo and clipping/sizing it to just show the icon part if possible, or just scale the SVG. 
      // The design shows the large gradient S logo.
      <div className="relative w-16 h-16 overflow-hidden flex items-center justify-start">
        <Image src="/shared/Vector.svg" alt="Icon Only" width={140} height={40} className="absolute left-0 scale-[1] origin-left" />
      </div>
    )
  },
  {
    title: "Dark Version",
    desc: "For light backgrounds.",
    bg: "#E2E8F0",
    content: (
      <Image src="/shared/header-logo.svg" alt="Dark Version" width={140} height={40} />
    )
  },
  {
    title: "Monochrome",
    desc: "For black backgrounds.",
    bg: "#1A1A1A",
    content: (
      <Image src="/shared/header-logo.svg" alt="Monochrome" width={140} height={40} className="brightness-0 invert grayscale" />
    )
  }
];

export default function BrandAssetsLogos() {
  return (
    <section className="relative w-full py-28 overflow-hidden" style={{ fontFamily: typography.fonts.inter, backgroundImage: "url(/section-16-how-to-build-agents/bg.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
      {/* Mesh Gradient Background */}
      {/* <div className="absolute inset-0 bg-[#FAFAFA]" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#EBF8FF] blur-[100px] opacity-70" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FFF5F5] blur-[100px] opacity-70" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#FAF5FF] blur-[100px] opacity-60" /> */}

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[48px] font-medium text-[#000000] mb-4 tracking-tight" 
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Official Logos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-[#4A5568]"
          >
            Consistent application is key to our visual recognition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[24px] p-4 pb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full"
            >
              {/* Top Image Area */}
              <div 
                className="w-full aspect-[4/3] rounded-[16px] flex items-center justify-center mb-6"
                style={{ backgroundColor: logo.bg }}
              >
                {logo.content}
              </div>

              {/* Bottom Info Area */}
              <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-[18px] font-bold text-[#1A202C] mb-1" style={{ fontFamily: typography.fonts.poppins }}>
                  {logo.title}
                </h3>
                <p className="text-[14px] text-[#718096] mb-6 flex-grow">
                  {logo.desc}
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button className="py-2.5 rounded-lg border border-gray-200 text-[12px] font-bold text-[#1A202C] hover:bg-gray-50 transition-colors">
                    PNG
                  </button>
                  <button className="py-2.5 rounded-lg border border-gray-200 text-[12px] font-bold text-[#1A202C] hover:bg-gray-50 transition-colors">
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
