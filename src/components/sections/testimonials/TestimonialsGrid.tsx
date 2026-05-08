"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Quote, Star, ArrowRight, Bot, BarChart3, Briefcase, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(130%_90%_at_50%_0%,#122850_0%,#07090f_52%,#06070b_100%)] pt-24 pb-14 md:pt-32 md:pb-20">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(86,153,255,0.36)_0%,rgba(86,153,255,0)_100%)]" />

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-[7%] top-[14%] hidden h-12 w-12 overflow-hidden rounded-full border border-white/20 shadow-xl md:block md:h-14 md:w-14"
      >
        <Image src="/section-15-testimonials/avtarlt.jpg" alt="User" fill className="object-cover" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute left-[2%] top-[52%] hidden h-10 w-10 overflow-hidden rounded-full border border-white/20 shadow-xl md:block md:h-12 md:w-12"
      >
        <Image src="/section-15-testimonials/avtarlm.jpg" alt="User" fill className="object-cover" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[10%] hidden h-10 w-10 overflow-hidden rounded-full border border-white/20 shadow-xl md:block md:h-11 md:w-11"
      >
        <Image src="/section-15-testimonials/avtarlb.jpg" alt="User" fill className="object-cover" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute right-[9%] top-[15%] hidden h-11 w-11 overflow-hidden rounded-full border border-white/20 shadow-xl md:block md:h-12 md:w-12"
      >
        <Image src="/section-15-testimonials/avtarrt.jpg" alt="User" fill className="object-cover" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        className="absolute right-[5%] top-[50%] hidden h-12 w-12 overflow-hidden rounded-full border border-white/20 shadow-xl md:block md:h-14 md:w-14"
      >
        <Image src="/section-15-testimonials/avtarrm.jpg" alt="User" fill className="object-cover" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-[16%] right-[11%] hidden h-11 w-11 overflow-hidden rounded-full border border-white/20 shadow-xl md:block md:h-12 md:w-12"
      >
        <Image src="/section-15-testimonials/avtarrb.jpg" alt="User" fill className="object-cover" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="mx-auto mb-4 max-w-[420px] text-[38px] font-medium leading-[1.06] tracking-[-0.03em] text-white md:max-w-[780px] md:text-[64px]"
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Trusted by teams building
            <br /> with <span className="text-[#7fb0ff]">AI</span>
          </h1>
          <p className="mx-auto mb-8 max-w-[560px] text-[12px] leading-[1.65] text-white/65 md:mb-12 md:text-[14px]">
            See how users are using Shekel to create, connect, and run AI workflows. Join the future of autonomous architecture.
          </p>
          <div className="flex justify-center pt-1">
            <div className="flex h-9 w-5 justify-center rounded-full border border-white/35 p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="h-2 w-1 rounded-full bg-white/60" 
              />
            </div>
          </div>
        </motion.div>
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
    <section className="w-full bg-[#f2f4f8] py-10 md:py-14" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between border border-[#e7ebf2] bg-white p-6 shadow-[0_10px_35px_rgba(10,20,40,0.04)] md:col-span-8 md:p-7"
            style={{ borderRadius: "16px" }}
          >
            <div className="mb-10 md:mb-12">
              <Quote size={34} className="mb-4 text-[#e4e9f2]" />
              <p className="text-[18px] font-medium leading-[1.42] text-[#1a1c1c] md:text-[24px]">
                "Shekel has fundamentally changed how our engineering team interacts with large language models. The workflow orchestration is seamless."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100">
                <Image src="/section-15-testimonials/avtarlt.jpg" alt="Mark Wayne" fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1c1c]">Mark Wayne</h4>
                <p className="text-[12px] text-[#5f6878]">CTO @ BuildStack</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between border border-[#e7ebf2] bg-white p-5 shadow-[0_8px_28px_rgba(10,20,40,0.05)] md:col-span-4"
            style={{ borderRadius: "14px" }}
          >
            <p className="mb-8 text-[13px] leading-[1.65] text-[#525c6d]">
              "The integration took minutes, not days. It's the cleanest AI infrastructure we've ever used."
            </p>
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-100">
                <Image src="/section-15-testimonials/avtarrt.jpg" alt="Sarah Chen" fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-[#1a1c1c]">Sarah Chen</h4>
                <p className="text-[11px] text-[#5f6878]">Lead Data Scientist</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end bg-gradient-to-br from-[#3d79ff] via-[#4988ff] to-[#8ab8ff] p-5 text-white md:col-span-4"
            style={{ borderRadius: "14px" }}
          >
            <div className="mb-1 text-[32px] font-semibold md:text-[40px]">98%</div>
            <p className="text-[12px] leading-[1.5] text-white/85 md:text-[13px]">
              Customer satisfaction across 500+ enterprises using Shekel.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 border border-[#e7ebf2] bg-white p-5 shadow-[0_8px_28px_rgba(10,20,40,0.05)] md:col-span-8 md:flex-row md:items-start md:gap-8 md:p-6"
            style={{ borderRadius: "14px" }}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-[#eff3f9] shadow-inner">
               <Image src="/section-15-testimonials/avtarrm.jpg" alt="Marcus J. Thorne" fill className="object-cover" />
            </div>
            <div>
              <p className="mb-4 text-[13px] font-medium leading-[1.6] text-[#2c3441] md:text-[15px]">
                "Intuitive, fast, and powerful. Shekel is exactly what the AI developer community needed to bridge the gap between research and production."
              </p>
              <div>
                <h4 className="text-[13px] font-semibold text-[#1a1c1c] md:text-[14px]">Marcus J. Thorne</h4>
                <p className="text-[11px] text-[#5f6878] md:text-[12px]">AI Research Lead @ LabX</p>
              </div>
            </div>
          </motion.div>

          {miniCards.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-[#e7ebf2] bg-white p-5 shadow-[0_8px_28px_rgba(10,20,40,0.05)] md:col-span-4"
              style={{ borderRadius: "14px" }}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-current text-[#ff9f1c]" />)}
              </div>
              <p className="mb-7 text-[12px] leading-[1.6] text-[#4e596a]">
                "{item.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-100">
                  <Image src="/section-15-testimonials/avtarlb.jpg" alt="User" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold text-[#1a1c1c]">{item.name}</h4>
                  <p className="text-[11px] text-[#475569]">{item.role}</p>
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
    <section className="w-full overflow-hidden bg-white py-12 md:py-16" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <h2 className="mb-8 text-[28px] font-medium text-[#0b0b0b] md:mb-12 md:text-[40px]" style={{ fontFamily: typography.fonts.poppins }}>
          Used by teams worldwide
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          <div className="space-y-6 rounded-[16px] border border-[#e8edf5] bg-[#f8fafd] p-6 md:space-y-8">
            <div>
              <div className="text-[28px] font-semibold tracking-tight text-[#3b74ec] md:text-[34px]">10.000+</div>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a7384]">Agents and models</p>
            </div>
            <div>
              <div className="text-[28px] font-semibold tracking-tight text-[#3b74ec] md:text-[34px]">5.000+</div>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a7384]">Active users</p>
            </div>
            <div>
              <div className="text-[28px] font-semibold tracking-tight text-[#3b74ec] md:text-[34px]">4.8</div>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a7384]">Average rating</p>
            </div>
          </div>
          
          <div className="relative aspect-[1.15/1] overflow-hidden rounded-[16px] bg-[#0b0f18] shadow-[0_18px_50px_rgba(12,26,60,0.35)]">
            {/* TODO: Replace this simulated globe block with exact globe image from design */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_10%,#2d80ff_0%,rgba(45,128,255,0.18)_35%,rgba(11,15,24,0.95)_78%)]" />
            <div className="absolute left-[15%] top-[12%] h-[74%] w-[74%] rounded-full border border-[#77b2ff]/60 bg-[radial-gradient(circle_at_36%_34%,#6fd0ff_0%,#2857a8_44%,#121b2f_74%,#0c101a_100%)] shadow-[0_0_0_1px_rgba(108,185,255,0.2),0_0_45px_rgba(74,146,255,0.45)]" />
            <div className="absolute left-[17%] top-[14%] h-[70%] w-[70%] rounded-full border border-white/15" />
            <div className="absolute left-[49%] top-[30%] h-2 w-2 rounded-full bg-[#8fd5ff]" />
            <div className="absolute left-[40%] top-[44%] h-2 w-2 rounded-full bg-[#8fd5ff]" />
            <div className="absolute left-[60%] top-[52%] h-2 w-2 rounded-full bg-[#8fd5ff]" />
            <div className="absolute left-[45%] top-[32%] h-px w-[18%] rotate-[15deg] bg-[#88c8ff]/80" />
            <div className="absolute left-[41%] top-[46%] h-px w-[20%] rotate-[4deg] bg-[#88c8ff]/70" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#090d15] to-transparent" />
            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
              Global AI Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsTrending() {
  const agents = [
    { name: "MARKETWISE", desc: "Gain real-time market insights and generate winning SEO strategies.", category: "MARKETING", id: "01", icon: BarChart3 },
    { name: "CRYPRO", desc: "Complex crypto logic handled by intelligent autonomous agents.", category: "FINANCE", id: "02", icon: Shield },
    { name: "TECHLEADER", desc: "Autonomous CI/CD and developer productivity at scale.", category: "DEVELOPMENT", id: "03", icon: Bot },
    { name: "SERVITODO", desc: "Smart customer support and workflow orchestration.", category: "SERVICES", id: "04", icon: Briefcase },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-12 md:py-16" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <div>
            <h2 className="text-[30px] font-medium text-[#0b0b0b] md:text-[40px]" style={{ fontFamily: typography.fonts.poppins }}>
              Trending <span className="text-[#2864e4]">AI Agents</span>
            </h2>
            <p className="mt-1 text-[12px] text-[#647083]">Find the agents used by the community.</p>
          </div>
          <Link href="/marketplace" className="hidden items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-[#2864e4] hover:underline md:flex">
            EXPLORE AGENTS <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-pointer border border-[#e8edf5] bg-white p-4 shadow-[0_8px_24px_rgba(12,24,54,0.05)]"
              style={{ borderRadius: "10px" }}
            >
              <div className="mb-10 flex items-start justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e4e9f2] bg-[#f8fbff] text-[#2864e4]">
                  <agent.icon size={15} />
                </div>
                <div className="text-[10px] font-bold text-black/25">#{agent.id}</div>
              </div>
              <h3 className="mb-3 text-[13px] font-semibold tracking-[0.04em] text-[#1a1c1c]">{agent.name}</h3>
              <p className="mb-7 text-[11px] leading-[1.65] text-[#4a5668]">
                {agent.desc}
              </p>
              <div className="flex flex-col gap-4 border-t border-black/5 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#6f7888]">{agent.category}</span>
                </div>
                <button className="w-full rounded-md border border-[#e3e8f2] bg-[#f8fbff] py-2.5 text-[11px] font-semibold text-[#1a1c1c] transition-colors hover:bg-gray-100">
                  View agent
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsCTA() {
  return (
    <section className="w-full bg-white px-4 pb-12 pt-10 md:px-6 md:pb-16 md:pt-14">
      <div className="relative mx-auto flex min-h-[250px] w-full max-w-[1100px] items-center overflow-hidden rounded-[16px] bg-gradient-to-r from-[#eef3ff] via-[#f1f3ff] to-[#dde9ff] px-4 py-8 md:min-h-[290px] md:px-8">
        <div className="absolute -left-10 -top-14 h-52 w-52 rounded-full bg-[#6da7ff]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-[46%] bg-gradient-to-l from-white/55 to-transparent" />
        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="relative hidden h-[230px] md:block">
            <div className="absolute left-0 top-1/2 h-[190px] w-[190px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#9fc4ff_0%,#d7e7ff_50%,transparent_72%)]" />
            <div className="absolute bottom-[24px] left-[26px] overflow-hidden rounded-[26px] border border-[#dbe6ff] bg-white/80 shadow-[0_10px_25px_rgba(64,107,189,0.16)] w-[140px] h-[140px]">
              <Image src="/new-images/cta-robot.webp" alt="CTA Robot" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="mb-4 text-[32px] font-medium leading-[1.05] text-[#0b0b0b] md:text-[46px]" style={{ fontFamily: typography.fonts.poppins }}>
              Start Building With
              <br />
              Confidence
            </h2>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/marketplace" className="rounded-md bg-[#2864e4] px-5 py-2.5 text-center text-[11px] font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#2054c2]">
                EXPLORE AGENTS
              </Link>
              <Link href="/signup" className="rounded-md border border-[#ccd8f0] bg-white px-5 py-2.5 text-center text-[11px] font-semibold tracking-[0.08em] text-[#1a1c1c] transition-colors hover:bg-gray-50">
                START BUILDING
              </Link>
            </div>
            <p className="mt-5 max-w-sm text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6a7384] md:mt-7">
              Join 10.000+ teams who are building the future with Shekel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
