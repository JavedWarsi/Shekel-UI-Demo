"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
      <div>
        <h1 className="text-[32px] font-bold text-[#0b0b0b] mb-2">{title}</h1>
        <p className="text-[14px] font-medium text-[#475569]">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-white border border-[rgba(0,0,0,0.06)] rounded-xl py-2.5 pl-10 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2864e4]/20 w-64"
          />
        </div>
        <button className="p-2.5 bg-white border border-[rgba(0,0,0,0.06)] rounded-xl text-[#475569] hover:bg-gray-50 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#2864e4] rounded-full border-2 border-white" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2864e4] to-[#56ccf2] border-2 border-white shadow-sm" />
      </div>
    </header>
  );
}
