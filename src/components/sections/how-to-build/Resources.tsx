"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { BookOpen, MessageSquare, Newspaper } from "lucide-react";
import Link from "next/link";
// import { Github } from "lucide-react";
// , Github bookOPe
const RESOURCES = [
  {
    title: "Documentation",
    desc: "Comprehensive guides and API references for the Shekel platform.",
    icon: BookOpen,
    link: "https://docs.shekel.ai",
    label: "Read Docs"
  },
  {
    title: "GitHub Examples",
    desc: "Ready-to-use templates and community-built agent repositories.",
    // icon: Github,
    link: "https://github.com/shekel-ai",
    label: "Explore Code"
  },
  {
    title: "Developer Blog",
    desc: "Deep dives into AI architecture and case studies from top creators.",
    icon: Newspaper,
    link: "/blog",
    label: "Read Articles"
  },
  {
    title: "Discord Community",
    desc: "Get help from our team and fellow builders in real-time.",
    icon: MessageSquare,
    link: "https://discord.gg/shekel",
    label: "Join Discord"
  }
];

export default function HowToBuildResources() {
  return (
    <section className="relative w-full py-24 bg-[#f8fafd]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b0b0b] mb-4" style={{ fontFamily: typography.fonts.poppins }}>
              Additional Resources
            </h2>
            <p className="text-[16px] text-[#414753] max-w-xl">
              Everything you need to accelerate your development process and build world-class agents.
            </p>
          </div>
          <Link href="/signup">
            <button className="px-8 py-4 bg-[#2864e4] text-white font-bold rounded-xl hover:bg-[#2054c2] transition-colors shadow-lg shadow-[#2864e4]/20">
              Start Building Now
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white border border-[rgba(0,0,0,0.06)] p-8 rounded-3xl shadow-sm flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f8fafd] flex items-center justify-center text-[#2864e4] mb-6 group-hover:bg-[#2864e4] group-hover:text-white transition-all duration-300">
                {/* <resource.icon size={32} /> */}
              </div>
              <h3 className="text-[20px] font-bold text-[#0b0b0b] mb-3">{resource.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#475569] mb-8 flex-1">
                {resource.desc}
              </p>
              <a 
                href={resource.link} 
                className="text-[14px] font-bold text-[#2864e4] hover:underline flex items-center gap-2"
              >
                {resource.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
