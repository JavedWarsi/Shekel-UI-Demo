"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
      <div>
        <h1 className="text-[32px] font-bold text-[#0b0b0b] dark:text-white mb-2">{title}</h1>
        <p className="text-[14px] font-medium text-[#475569] dark:text-slate-400">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] dark:text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-white dark:bg-slate-900 border border-[rgba(0,0,0,0.06)] dark:border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-[14px] text-[#0b0b0b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2864e4]/20 w-64 shadow-sm"
          />
        </div>
        <button className="p-2.5 bg-white dark:bg-slate-900 border border-[rgba(0,0,0,0.06)] dark:border-slate-800 rounded-xl text-[#475569] dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 relative shadow-sm">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#2864e4] rounded-full border-2 border-white dark:border-slate-900" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2864e4] to-[#56ccf2] border-2 border-white dark:border-slate-800 shadow-sm cursor-pointer hover:opacity-90 transition-opacity" />
      </div>
    </header>
  );
}
