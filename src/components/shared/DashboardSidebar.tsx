"use client";

import { LayoutDashboard, Users, CreditCard, Settings, Share2, BarChart3 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const MENU_ITEMS = [
    { label: "Overview", icon: LayoutDashboard, href: "/dashboard-overview" },
    { label: "My Agents", icon: Users, href: "/my-agents" },
    { label: "Published Agents", icon: Share2, href: "/creator-my-published-agents" },
    { label: "Earnings", icon: CreditCard, href: "/creator-earnings" },
    { label: "Analytics", icon: BarChart3, href: "/creator-analytics" },
    { label: "Settings", icon: Settings, href: "/settings" }
  ];

  return (
    <aside className="w-20 lg:w-64 bg-[#0b0b0b] dark:bg-slate-950 shrink-0 flex flex-col items-center lg:items-stretch py-8 border-r border-white/5 dark:border-slate-800/50 h-[calc(100vh-75px)] sticky top-[75px] z-30 transition-colors duration-300">
      <nav className="flex-1 space-y-2 px-3">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-[#2864e4] text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={22} />
              <span className="hidden lg:block font-bold text-[14px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="px-4 mt-auto">
        <div className="bg-gradient-to-br from-[#2864e4]/10 to-[#56ccf2]/10 rounded-2xl p-4 border border-white/5 hidden lg:block">
          <p className="text-[11px] text-white/40 font-medium uppercase tracking-wider mb-2">Workspace</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2864e4] flex items-center justify-center text-white font-bold text-xs">S</div>
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold">Shekel Pro</span>
              <span className="text-[10px] text-white/40">Verified Creator</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
