"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { Search, ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SearchResultHero() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Agents", "Workflows", "Categories"];

  return (
    <div className="w-full">
      {/* Dark Search Section - Matches the top dark area of the image */}
      <section
        className="relative w-full overflow-hidden pt-36 pb-24 flex flex-col items-center"
        style={{
          backgroundColor: "#03070E",
          fontFamily: typography.fonts.inter
        }}
      >
        {/* High-Fidelity Background Glows - Matching the high-res crop */}
        <div
          className="absolute -left-[10%] top-[10%] w-[600px] h-[600px] pointer-events-none opacity-[0.15]"
          style={{
            background: "radial-gradient(circle at center, #2864E4 0%, transparent 70%)",
            filter: "blur(100px)"
          }}
        />
        <div
          className="absolute -right-[10%] top-[10%] w-[600px] h-[600px] pointer-events-none opacity-[0.15]"
          style={{
            background: "radial-gradient(circle at center, #2864E4 0%, transparent 70%)",
            filter: "blur(100px)"
          }}
        />

        {/* Central subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] pointer-events-none opacity-[0.08]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, #2864E4 0%, transparent 100%)",
            filter: "blur(80px)"
          }}
        />

        <div className="relative z-10 w-full max-w-[860px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Search Input Container - Pixel perfect match to high-res crop */}
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
                <Search size={22} className="text-[#64748B] opacity-90" />
              </div>
              <input
                type="text"
                // placeholder="Search AI agents, workflows, categories..."
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-[22px] py-6 pl-17 pr-8 text-[17px] text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#2864e4]/30 focus:border-[#2864e4]/40 transition-all placeholder:text-[#475569] shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
                placeholder="Search AI agents, workflows, categories..."
              />
            </div>

            {/* Result text - Precise color match to the crop: Showing results for 'marketing' */}
            <p className="mt-8 text-center text-[15px] font-medium tracking-normal text-[#94A3B8]">Showing results for <span className="text-[#ABC7FF]">'marketing'</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Light Filter Bar - Matches the horizontal filter section below */}
      <section className="w-full bg-[#F3F5F8] border-b border-[#E2E8F0] py-5">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Tabs Container */}
          <div className="flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 text-[15px] font-semibold transition-all duration-300 ${activeTab === tab
                  ? "text-[#2864e4]"
                  : "text-[#64748B] hover:text-[#1E293B]"
                  }`}
              >
                {tab === "All" && activeTab === "All" ? (
                  <div className="flex items-center justify-center px-9 py-2.5 bg-gradient-to-b from-[#8EADEE] to-[#5C8AE7] text-white rounded-[20px] shadow-[0_4px_14px_rgba(40,100,228,0.25)]">
                    {tab}
                  </div>
                ) : (
                  <span className="px-4">{tab}</span>
                )}
              </button>
            ))}
          </div>

          {/* Filters Container - Right side dropdowns */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Pricing Filter */}
            <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] px-5 py-2.5 rounded-[22px] shadow-sm cursor-pointer hover:border-[#2864e4]/30 hover:bg-gray-50/50 transition-all group">
              <span className="text-[14px] text-[#475569] font-medium">Pricing: <span className="text-[#0F172A] font-bold">Paid</span></span>
              <X size={14} className="text-[#94A3B8]" />
            </div>

            {/* Rating Filter */}
            <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] px-5 py-2.5 rounded-[22px] shadow-sm cursor-pointer hover:border-[#2864e4]/30 hover:bg-gray-50/50 transition-all group">
              <span className="text-[14px] text-[#475569] font-medium">Rating: <span className="text-[#0F172A] font-bold">4.5+</span></span>
              <ChevronDown size={14} className="text-[#94A3B8]" />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] px-5 py-2.5 rounded-[22px] shadow-sm cursor-pointer hover:border-[#2864e4]/30 hover:bg-gray-50/50 transition-all group">
              <span className="text-[14px] text-[#475569] font-medium">Category</span>
              <ChevronDown size={14} className="text-[#94A3B8]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
