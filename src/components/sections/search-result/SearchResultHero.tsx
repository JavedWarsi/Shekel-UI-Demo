"use client";

import { typography, colors } from "@/tokens/design-tokens";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchResultHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 border-b border-[rgba(0,0,0,0.06)]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2864e4]/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.2] tracking-tight mb-4 text-[#0b0b0b]" style={{ fontFamily: typography.fonts.poppins }}>
            Search Results for <span className="text-[#2864e4]">"Specialized Agents"</span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#414753] mb-8">
            Found 124 autonomous agents matching your criteria.
          </p>
          
          <div className="relative max-w-2xl group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search size={20} className="text-[#94A3B8] group-focus-within:text-[#2864e4] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search agents, categories, or creators..."
              className="w-full bg-[#f8fafd] border border-[rgba(0,0,0,0.08)] rounded-xl py-4 pl-12 pr-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2864e4]/20 focus:border-[#2864e4] transition-all"
              defaultValue="Specialized Agents"
            />
            <button className="absolute inset-y-2 right-2 px-6 bg-[#2864e4] text-white font-bold rounded-lg hover:bg-[#2054c2] transition-colors">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
