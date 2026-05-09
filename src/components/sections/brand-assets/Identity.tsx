"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandAssetsIdentity() {
  return (
    <section className="relative w-full py-28 bg-white overflow-hidden" style={{ fontFamily: typography.fonts.inter }}>
      {/* Very faint bottom border to match the slight divider in the design */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2F80ED]/10 to-transparent" />
      
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Large Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            {/* We use the shared logo as a placeholder, scaled up and cropped or styled to match the large icon feel */}
            <div className="relative w-[600px] h-[600px] mr-20 flex items-center justify-center">
              <Image 
                src="/shared/Vector.svg" 
                alt="Brand Identity Icon" 
                width={600} 
                height={600} 
                className="object-cover object-left ml-12"
                style={{
                  filter: "drop-shadow(0px 20px 40px rgba(47, 128, 237, 0.15))"
                }}
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[500px]"
          >
            <h2 
              className="text-[48px] md:text-[42px] font-medium text-[#000000] mb-8 tracking-tight" 
              style={{ fontFamily: typography.fonts.poppins }}
            >
              Brand Identity
            </h2>
            
            <div className="space-y-6 text-[18px] leading-[1.7] text-[#4A5568]">
              <p>
                Shekel was born from the intersection of ancient commerce logic and future autonomous technology. The name itself reflects a foundational unit of value, updated for the era of AI-driven marketplaces.
              </p>
              <p>
                Our visual language is defined by <strong className="font-semibold text-[#1A202C]">Structural Clarity</strong> and <strong className="font-semibold text-[#1A202C]">Fluid Transition</strong>, balancing the rigid precision of code with the organic movement of global trade.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
