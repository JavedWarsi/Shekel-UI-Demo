"use client";

import { typography } from "@/tokens/design-tokens";
import { Plus } from "lucide-react";

const TABS = ["All Agents", "Published", "Draft", "Archived"];

export default function MyAgentsHeader() {
  return (
    <div className="w-full flex flex-col mb-10" style={{ fontFamily: typography.fonts.inter }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-[36px] md:text-[40px] font-medium text-[#0b0b0b] tracking-tight mb-2" style={{ fontFamily: typography.fonts.poppins }}>
            My Agents
          </h1>
          <p className="text-[16px] text-[#64748B]">
            Curate and manage your autonomous intelligence workforce.
          </p>
        </div>
        
        <button className="flex items-center gap-2 bg-[#0550E6] text-white px-6 py-3 rounded-[12px] font-medium text-[14px] hover:bg-[#0440C5] transition-colors">
          <Plus size={18} strokeWidth={2.5} />
          Create New Agent
        </button>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {TABS.map((tab, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-colors ${
              i === 0 
                ? "bg-[#0550E6] text-white shadow-md" 
                : "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
