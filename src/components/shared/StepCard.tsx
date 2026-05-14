"use client";

import { colors, typography } from "@/tokens/design-tokens";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type StepCardProps = {
  number: string;
  title: string;
  description: string;
  href?: string;
};

export default function StepCard({ number, title, description, href }: StepCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <motion.div
      className="flex flex-col items-center gap-6 text-center group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -8,
              transition: { duration: 0.3 }
            }
      }
    >
      {/* Number Bubble */}
      <div
        className="flex items-center justify-center w-24 h-24 rounded-full transition-all duration-300 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-xl group-hover:shadow-blue-500/10 group-hover:border-blue-500/20"
      >
        <span
          className="font-bold text-4xl transition-colors duration-300 bg-clip-text text-transparent"
          style={{
            fontFamily: typography.fonts.inter,
            backgroundImage: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
          }}
        >
          {number}
        </span>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <h3
          className="text-slate-900 dark:text-white transition-colors duration-300"
          style={{
            margin: 0,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 24,
            lineHeight: "28px",
          }}
        >
          {title}
        </h3>
        <p
          className="text-slate-600 dark:text-slate-400 transition-colors duration-300 max-w-[280px]"
          style={{
            margin: 0,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
