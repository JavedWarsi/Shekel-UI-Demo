"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#EEF2F8] dark:bg-[#05070C] pt-28 pb-20"
      style={{ fontFamily: typography.fonts.inter }}
    >
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#8EB4FF]/20 blur-[120px]" />
        <div className="absolute right-[-140px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#C9D9FF]/30 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-12">
        {/* TOP CONTENT */}
        <div className="mb-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-[44px] font-semibold leading-none tracking-[-0.04em] text-black md:text-[72px]"
              style={{ fontFamily: typography.fonts.poppins }}
            >
              Shekel{" "}
              <span className="font-medium text-[#7B9DFF]">Blog</span>
            </h1>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:pl-16"
          >
            <p className="max-w-[480px] text-[15px] leading-[1.8] text-[#4B5563] dark:text-slate-300">
              Exploring the intersection of neural networks,
              decentralized economies, and the future of creative
              autonomy. Curated for the digitally conscious.
            </p>

            {/* EMAIL */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email for the curated feed"
                className="h-[52px] w-full rounded-[10px] border border-[#E5E7EB] bg-white px-5 text-[14px] text-[#111827] outline-none transition-all placeholder:text-[#9CA3AF] focus:border-[#4D7CFF] dark:border-white/10 dark:bg-[#0F1117] dark:text-white"
              />

              <button className="flex h-[52px] items-center justify-center rounded-[10px] bg-[#3F6DF6] px-7 text-[14px] font-medium text-white transition-all hover:bg-[#2958E8]">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* FEATURED HERO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[18px]"
        >
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[18px]">
            {/* Background Image */}
            {/* <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
              alt="Future city"
              fill
              priority
              className="object-cover"
            /> */}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02131F]/90 via-[#02131F]/50 to-[#02131F]/20" />

            {/* Glow Trail */}
            <div className="absolute right-[10%] top-[28%] h-[2px] w-[42%] bg-gradient-to-r from-[#4FFFE4] via-[#49F3FF] to-transparent blur-[1px]" />

            <div className="absolute right-[28%] top-[20%] h-[140px] w-[140px] rounded-full border border-[#42FFE8]/60 blur-[2px]" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10 lg:p-14">
              <span className="mb-5 text-[11px] uppercase tracking-[0.14em] text-white/60">
                Oct 10, 2024
              </span>

              <h2
                className="max-w-[620px] text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[54px]"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Beyond Prompting: The New Era of Directed Intent
              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-[1.8] text-white/70 md:text-[15px]">
                Why the future of AI isn't about the words you use,
                but the architectural intent you provide to autonomous
                systems.
              </p>

              <button className="mt-7 flex h-[46px] w-fit items-center gap-2 rounded-[10px] bg-[#3F6DF6] px-5 text-[14px] font-medium text-white transition-all hover:bg-[#2958E8]">
                Read Article
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}