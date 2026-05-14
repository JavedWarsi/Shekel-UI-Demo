"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { useTheme } from "next-themes";

const DOS = [
  {
    title: "Provide Clear Space",
    desc: "Always keep a minimum of 2x the icon width as clear space around the logo.",
  },
  {
    title: "Maintain Consistency",
    desc: "Use the provided color palette for all digital and physical marketing assets.",
  },
  {
    title: "Approved Typography",
    desc: "Stick to Poppins for headers and Inter for body copy without exception.",
  },
];

const DONTS = [
  {
    title: "Don't Stretch Logo",
    desc: "Proportions must remain locked. Never distort vertically or horizontally.",
  },
  {
    title: "Don't Change Colors",
    desc: "Do not apply unapproved gradients or solid colors outside the brand palette.",
  },
  {
    title: "Don't Distort Proportions",
    desc: "Elements of the brand mark should never be moved or resized relative to each other.",
  },
];

export default function BrandAssetsUsage() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-24 transition-colors duration-300 ${
        isDark ? "bg-[#020617]" : "bg-white"
      }`}
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* DOS Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <div className="flex items-center gap-3 mb-2">
              <div className="text-[#60A5FA]">
                <CheckCircle2 size={36} strokeWidth={2} />
              </div>

              <h2
                className="text-[36px] font-medium text-[#8BA8FF]"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Usage Dos
              </h2>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {DOS.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-6 rounded-[20px] border transition-all duration-300 ${
                    isDark
                      ? "bg-[#0F172A] border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                      : "bg-[#F8FFF9] border-[#E2F5E9]"
                  }`}
                >
                  {/* Icon */}
                  <div className="mt-1 flex-shrink-0 text-[#3B82F6]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`text-[16px] font-bold transition-colors duration-300 ${
                        isDark ? "text-white" : "text-[#1A202C]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[14px] leading-[1.6] transition-colors duration-300 ${
                        isDark ? "text-[#94A3B8]" : "text-[#4A5568]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DON'TS Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <div className="flex items-center gap-3 mb-2">
              <div className="text-[#FF6B6B]">
                <XCircle size={36} strokeWidth={2} />
              </div>

              <h2
                className="text-[36px] font-medium text-[#FF6B6B]"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Usage Don'ts
              </h2>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {DONTS.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-6 rounded-[20px] border transition-all duration-300 ${
                    isDark
                      ? "bg-[#0F172A] border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                      : "bg-[#FFF8F8] border-[#FFEAEA]"
                  }`}
                >
                  {/* Icon */}
                  <div className="mt-1 flex-shrink-0 text-[#EF4444]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" />

                      <path
                        d="M9 9L15 15M15 9L9 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`text-[16px] font-bold transition-colors duration-300 ${
                        isDark ? "text-white" : "text-[#1A202C]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[14px] leading-[1.6] transition-colors duration-300 ${
                        isDark ? "text-[#94A3B8]" : "text-[#4A5568]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}