"use client";

import { motion } from "framer-motion";
import { typography, radiuses } from "@/tokens/design-tokens";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CASE_STUDIES = [
  {
    slug: "nexus-analytics-data-automation",
    company: "Nexus Analytics",
    title: "Automating Global Market Research with 500+ Autonomous Agents",
    description: "How Nexus Analytics reduced their data processing time by 85% while increasing accuracy across multi-language markets.",
    metrics: ["85% Faster Processing", "3.2x ROI", "99.9% Accuracy"],
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=800",
    color: "#2864e4"
  },
  {
    slug: "growthstack-marketing-scaling",
    company: "GrowthStack",
    title: "Scaling Personalized Marketing Campaigns at Infinite Velocity",
    description: "GrowthStack utilized Shekel's marketing agents to generate 10,000+ unique ad variants daily, optimized by real-time performance data.",
    metrics: ["10k+ Variants Daily", "45% Lower CAC", "24/7 Optimization"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    color: "#56ccf2"
  },
  {
    slug: "buildright-dev-velocity",
    company: "BuildRight",
    title: "Improving Development Velocity with Autonomous Code Review Agents",
    description: "BuildRight integrated developer agents into their CI/CD pipeline, reducing manual code review time by 60%.",
    metrics: ["60% Less Review Time", "40% Fewer Bugs", "10x Faster Deploy"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    color: "#7c4dff"
  }
];

export default function CaseStudiesList() {
  return (
    <section className="w-full py-16 md:py-24" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col gap-12 md:gap-20">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Link href={`/case-studies/${study.slug}`} className="block relative aspect-[4/3] overflow-hidden group" style={{ borderRadius: radiuses.cardLg }}>
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(0,0,0,0.06)] shadow-sm flex items-center justify-center font-bold text-[#1a1c1c] text-[12px]">
                    {study.company.charAt(0)}
                  </div>
                  <span className="text-[14px] font-bold text-[#475569] uppercase tracking-wider">{study.company}</span>
                </div>
                
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b0b0b] mb-6 leading-tight" style={{ fontFamily: typography.fonts.poppins }}>
                  {study.title}
                </h2>
                
                <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#414753] mb-8">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={18} style={{ color: study.color }} />
                      <span className="text-[14px] font-semibold text-[#1a1c1c]">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#111827] text-white text-[15px] font-bold transition-all hover:bg-[#1f2937] hover:translate-y-[-2px] active:translate-y-0"
                >
                  View Case Study <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
