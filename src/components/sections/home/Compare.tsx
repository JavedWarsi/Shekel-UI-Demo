"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const FRAGMENTED_ITEMS = [
  "Weeks of building basic chat interfaces",
  "Inconsistent component styling across teams",
  'Technical debt from "quick-fix" UI updates',
];

const STANDARD_ITEMS = [
  "Launch sophisticated AI apps in days",
  "Unified design language across all products",
  "Optimized for performance and heavy data",
];

export default function Compare() {
  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-8 md:py-24 bg-white dark:bg-black">
  
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/section-3/bg-comparison.webp"
      alt=""
      fill
      priority
      className="object-cover object-center dark:opacity-40"
    />

    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-white/40 dark:bg-black/70" />
  </div>

  <div className="mx-auto max-w-[1280px] relative">
    <div className="relative z-10 grid grid-cols-1 overflow-hidden rounded-[40px] border border-slate-200 shadow-2xl dark:border-white/10 lg:grid-cols-2">

      {/* Fragmented Panel */}
      <ComparePanel
        variant="fragmented"
        headerImage="/section-3/fragmented-header.svg"
        heading="The Fragmented Approach"
        items={FRAGMENTED_ITEMS}
        bulletIcon="/section-3/fragmented-bullet-icon.svg"
        bulletSize={14}
      />

      {/* Standard Panel */}
      <ComparePanel
        variant="standard"
        headerImage="/section-3/shekel-header.svg"
        heading="The Shekel UI Standard"
        items={STANDARD_ITEMS}
        bulletIcon="/section-3/shekel-bullet-icon.svg"
        bulletSize={22}
      />
    </div>
  </div>
</section>
  );
}

function ComparePanel({ 
  variant, 
  headerImage, 
  heading, 
  items, 
  bulletIcon, 
  bulletSize 
}: { 
  variant: "fragmented" | "standard";
  headerImage: string;
  heading: string;
  items: string[];
  bulletIcon: string;
  bulletSize: number;
}) {
  const isFragmented = variant === "fragmented";
  
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative flex flex-col p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r last:border-0 transition-all duration-300
        ${isFragmented 
          ? "bg-white dark:bg-black border-slate-100 dark:border-red-500/10" 
          : "bg-slate-50 dark:bg-[#1a1f2d] border-slate-100 dark:border-blue-500/10"
        }`}
    >
      <div className="relative h-12 mb-8">
        <Image
          src={headerImage}
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <h3
        className={`font-bold mb-8 transition-colors duration-300
          ${isFragmented 
            ? "text-slate-900 dark:text-red-400" 
            : "text-slate-900 dark:text-blue-400"
          }`}
        style={{
          fontFamily: typography.fonts.poppins,
          fontSize: "clamp(24px, 4vw, 32px)",
          lineHeight: "1.2",
        }}
      >
        {heading}
      </h3>

      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <div className="shrink-0 mt-1" style={{ width: bulletSize, height: bulletSize }}>
              <Image src={bulletIcon} alt="" width={bulletSize} height={bulletSize} className="object-contain" />
            </div>
            <span
              className="text-slate-600 dark:text-slate-300 transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.inter,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative Glow for Standard Panel */}
      {!isFragmented && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none" />
      )}
    </motion.div>
  );
}
