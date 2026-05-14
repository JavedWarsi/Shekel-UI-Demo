"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Quote, Star, ArrowRight, Bot, BarChart3, Briefcase, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsHero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[28px] bg-[#060b16] py-[180px] mt-15">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid Layer */}
      <div
        className="absolute inset-0 opacity-[0.30]"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(88,140,255,0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(88,140,255,0.25) 1px, transparent 1px)
    `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Secondary Soft Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(178, 183, 187, 0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(187, 194, 198, 0.06) 1px, transparent 1px)
    `,
          backgroundSize: "96px 96px",
        }}
      />

      {/* Center Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
      radial-gradient(
        circle at center,
        rgba(127, 152, 228, 0.28) 0%,
        rgba(24,38,70,0.45) 28%,
        rgba(7,10,18,0.92) 68%
      )
    `,
        }}
      />

      {/* Side Dark Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `
      radial-gradient(circle at center,
      transparent 35%,
      rgba(0,0,0,0.45) 100%)
    `,
        }}
      />

      {/* Left Top Avatar */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-[4.5%] top-[4%] hidden h-[58px] w-[58px] overflow-hidden rounded-full border border-white/15 shadow-[0_0_25px_rgba(255,255,255,0.08)] md:block"
      >
        <Image
          src="/section-15-testimonials/avtarlt.jpg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Left Middle Avatar */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute left-[0.2%] top-[35%] hidden h-[82px] w-[82px] overflow-hidden rounded-full border border-white/15 shadow-[0_0_30px_rgba(255,255,255,0.08)] md:block"
      >
        <Image
          src="/section-15-testimonials/avtarlm.jpg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Left Bottom Avatar */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-[2%] left-[8%] hidden h-[52px] w-[52px] overflow-hidden rounded-full border border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.08)] md:block"
      >
        <Image
          src="/section-15-testimonials/avtarlb.jpg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right Top Avatar */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute right-[3.8%] top-[7%] hidden h-[64px] w-[64px] overflow-hidden rounded-full border border-white/15 shadow-[0_0_25px_rgba(255,255,255,0.08)] md:block"
      >
        <Image
          src="/section-15-testimonials/avtarrt.jpg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right Middle Avatar */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        className="absolute right-[1.5%] top-[40%] hidden h-[92px] w-[92px] overflow-hidden rounded-full border border-white/15 shadow-[0_0_35px_rgba(255,255,255,0.08)] md:block"
      >
        <Image
          src="/section-15-testimonials/avtarrm.jpg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right Bottom Avatar */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-[3%] right-[7%] hidden h-[54px] w-[54px] overflow-hidden rounded-full border border-white/15 shadow-[0_0_25px_rgba(255,255,255,0.08)] md:block"
      >
        <Image
          src="/section-15-testimonials/avtarrb.jpg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex  flex-col items-center px-6 text-center">

        {/* Heading */}
        <h1
          className="max-w-full bg-gradient-to-r from-[#f2f3f799] via-[#ffffff] to-[#ffffff] bg-clip-text text-center text-transparent"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "72px",
            lineHeight: "72px",
            letterSpacing: "-3.6px",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          Trusted by teams building
          <br />
          with <span className="text-[#9CB8FF]">AI</span>
        </h1>

        {/* Description */}
        <p
          className="mt-10 max-w-[640px] text-center text-white/85"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "42px",
            letterSpacing: "0px",
            verticalAlign: "middle",
          }}
        >
          See how users are using Shekel to create, connect, and run AI
          workflows. Join the future of autonomous architecture.
        </p>

      </div>
    </section>
  );
}

export function TestimonialsGrid() {
  const miniCards = [
    {
      name: "Racel Herein",
      role: "VP Product @ OmniCloud",
      content:
        "The integration took minutes, not days. It's the cleanest AI infrastructure we've ever used.",
    },
    {
      name: "Daniel Lenzo",
      role: "AI Platform Engineer",
      content:
        "Deploying AI agents has never been this seamless. We've scaled customer support workflows effortlessly.",
    },
    {
      name: "Rachel Foster",
      role: "Product Manager",
      content:
        "Shekel's orchestration layer reduced our operations overhead and made release cycles much faster.",
    },
  ];

  return (
    <section
      className="w-full bg-[#f2f4f8] py-10 md:py-14 dark:bg-[#05070C] transition-colors duration-300"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          
          {/* Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between border border-[#e7ebf2] dark:border-white/10 bg-white dark:bg-[#0B111C] p-6 shadow-[0_10px_35px_rgba(10,20,40,0.04)] md:col-span-8 md:p-7 transition-colors duration-300"
            style={{ borderRadius: "16px" }}
          >
            <div className="mb-10 md:mb-12">
              <Quote size={34} className="mb-4 text-[#e4e9f2] dark:text-white/10" />

              <p
                className="text-[#1a1c1c] dark:text-white font-light"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "30px",
                  lineHeight: "36px",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                }}
              >
                "Shekel has fundamentally changed how our engineering team
                interacts with large language models. The workflow orchestration
                is seamless."
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100 dark:border-white/10">
                <Image
                  src="/section-15-testimonials/avtarlt.jpg"
                  alt="Mark Wayne"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1c1c] dark:text-white">
                  Mark Wayne
                </h4>
                <p className="text-[12px] text-[#5f6878] dark:text-white/60">
                  CTO @ BuildStack
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between border border-[#e7ebf2] dark:border-white/10 bg-white dark:bg-[#0B111C] p-5 shadow-[0_8px_28px_rgba(10,20,40,0.05)] md:col-span-4 transition-colors duration-300"
            style={{ borderRadius: "14px" }}
          >
            <p className="mb-8 text-[13px] leading-[1.65] text-[#525c6d] dark:text-white/70">
              "The integration took minutes, not days. It's the cleanest AI
              infrastructure we've ever used."
            </p>

            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-100 dark:border-white/10">
                <Image
                  src="/section-15-testimonials/avtarrt.jpg"
                  alt="Sarah Chen"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-[13px] font-semibold text-[#1a1c1c] dark:text-white">
                  Sarah Chen
                </h4>
                <p className="text-[11px] text-[#5f6878] dark:text-white/60">
                  Lead Data Scientist
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end bg-gradient-to-b from-[#2864E4] to-[#ECF2FF] p-5 text-white md:col-span-4"
            style={{ borderRadius: "14px" }}
          >
            <div className="mb-1 text-[32px] font-semibold md:text-[40px]">
              98%
            </div>

            <p className="text-[12px] leading-[1.5] text-white/85 md:text-[13px]">
              Customer satisfaction across 500+ enterprises using Shekel.
            </p>
          </motion.div>

          {/* Large Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 border border-[#e7ebf2] dark:border-white/10 bg-white dark:bg-[#0B111C] p-5 shadow-[0_8px_28px_rgba(10,20,40,0.05)] md:col-span-8 md:flex-row md:items-start md:gap-8 md:p-6 transition-colors duration-300"
            style={{ borderRadius: "14px" }}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-[#eff3f9] dark:border-white/10 shadow-inner">
              <Image
                src="/section-15-testimonials/avtarrm.jpg"
                alt="Marcus J. Thorne"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-4 text-[13px] font-medium leading-[1.6] text-[#2c3441] dark:text-white/75 md:text-[15px]">
                "Intuitive, fast, and powerful. Shekel is exactly what the AI
                developer community needed to bridge the gap between research and
                production."
              </p>

              <div>
                <h4 className="text-[13px] font-semibold text-[#1a1c1c] dark:text-white md:text-[14px]">
                  Marcus J. Thorne
                </h4>

                <p className="text-[11px] text-[#5f6878] dark:text-white/60 md:text-[12px]">
                  AI Research Lead @ LabX
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mini Cards */}
          {miniCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-[#e7ebf2] dark:border-white/10 bg-white dark:bg-[#0B111C] p-5 shadow-[0_8px_28px_rgba(10,20,40,0.05)] md:col-span-4 transition-colors duration-300"
              style={{ borderRadius: "14px" }}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="fill-current text-[#ff9f1c]"
                  />
                ))}
              </div>

              <p className="mb-7 text-[12px] leading-[1.6] text-[#4e596a] dark:text-white/70">
                "{item.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-100 dark:border-white/10">
                  <Image
                    src="/section-15-testimonials/avtarlb.jpg"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-[12px] font-semibold text-[#1a1c1c] dark:text-white">
                    {item.name}
                  </h4>

                  <p className="text-[11px] text-[#475569] dark:text-white/60">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsStats() {
  return (
    <section
      className="w-full overflow-hidden bg-white dark:bg-[#05070C] py-12 md:py-16 transition-colors duration-300"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <h2
          className="pb-15 text-[32px] md:text-[48px] text-[#0b0b0b] dark:text-white"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            lineHeight: "36px",
            letterSpacing: "-0.75px",
            verticalAlign: "middle",
          }}
        >
          Used by teams worldwide
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          
          {/* Stats Box */}
          <div className="rounded-[16px] border border-[#edf1f7] dark:border-white/10 bg-[#fafcff] dark:bg-[#0B111C] px-8 py-10 shadow-[0_0_40px_rgba(59,116,236,0.04)] transition-colors duration-300">
            <div className="flex flex-col items-center justify-center space-y-14">

              {[
                { value: "10,000+", label: "Workflows Created" },
                { value: "5,000+", label: "Active Users" },
                { value: "4.8", label: "Average Rating" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <h2
                    className="
                      text-[44px]
                      font-[700]
                      leading-none
                      tracking-[-0.04em]
                      bg-gradient-to-b
                      from-[#a8c5ff]
                      via-[#5f8fff]
                      to-[#2f67ea]
                      bg-clip-text
                      text-transparent
                      drop-shadow-[0_4px_12px_rgba(59,116,236,0.18)]
                    "
                  >
                    {item.value}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-[700]
                      uppercase
                      tracking-[0.24em]
                      text-[#7b8597]
                      dark:text-white/50
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Globe Image */}
          <div className="relative aspect-[1.15/1] overflow-hidden rounded-[16px] bg-[#0b0f18] shadow-[0_18px_50px_rgba(12,26,60,0.35)]">
            <Image
              src="/section-15-testimonials/testimoGlob.png"
              alt="Globe"
              width={860}
              height={920}
              className="h-full w-full object-cover"
              priority
              style={{ objectPosition: "top" }}
            />

            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm">
              Global AI Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}