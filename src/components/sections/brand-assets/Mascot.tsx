"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import Image from "next/image";

const MASCOTS = [
  { name: "Pose 1", src: "/shared/astronaut.png" },
  { name: "Pose 2", src: "/404.png" },
  { name: "Pose 3", src: "/shared/astronaut.png" },
  { name: "Pose 4", src: "/404.png" },
];

export default function BrandAssetsMascot() {
  return (
    <section
      className="
        relative
        w-full
        py-28
        bg-white
        dark:bg-[#020617]
        transition-colors
        duration-300
      "
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-[48px]
              md:text-[48px]
              font-medium
              tracking-tight
              mb-4
              text-[#000000]
              dark:text-white
              transition-colors
              duration-300
            "
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Mascot Variations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-[18px]
              text-[#4A5568]
              dark:text-[#94A3B8]
              transition-colors
              duration-300
            "
          >
            Approved poses for consistent brand representation.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MASCOTS.map((mascot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                rounded-[32px]
                p-6
                flex
                flex-col
                h-full
                items-center
                transition-all
                duration-300
                bg-white
                dark:bg-[#0F172A]
                border
                border-[#E2E8F0]
                dark:border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="w-full aspect-square relative mb-6">
                <Image
                  src={mascot.src}
                  alt={mascot.name}
                  fill
                  className="
                    object-contain
                    drop-shadow-xl
                    p-4
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Bottom Content */}
              <div className="w-full flex flex-col items-center mt-auto">
                <h3
                  className="
                    text-[16px]
                    font-bold
                    mb-6
                    text-[#1A202C]
                    dark:text-white
                    transition-colors
                    duration-300
                  "
                  style={{ fontFamily: typography.fonts.poppins }}
                >
                  {mascot.name}
                </h3>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full">

                  <button
                    className="
                      py-2.5
                      rounded-lg
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white
                      dark:bg-[#111827]
                      text-[12px]
                      font-bold
                      text-[#1A202C]
                      dark:text-white
                      hover:bg-gray-50
                      dark:hover:bg-[#1E293B]
                      transition-all
                      duration-300
                      w-full
                      text-center
                    "
                  >
                    PNG
                  </button>

                  <button
                    className="
                      py-2.5
                      rounded-lg
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white
                      dark:bg-[#111827]
                      text-[12px]
                      font-bold
                      text-[#1A202C]
                      dark:text-white
                      hover:bg-gray-50
                      dark:hover:bg-[#1E293B]
                      transition-all
                      duration-300
                      w-full
                      text-center
                    "
                  >
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