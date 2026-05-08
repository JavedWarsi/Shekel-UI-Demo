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
    <aside className="w-20 lg:w-64 bg-[#0b0b0b] shrink-0 flex flex-col items-center lg:items-stretch py-8 border-r border-white/5 h-screen sticky top-0">
      <div className="px-6 mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#2864e4] rounded-xl flex items-center justify-center shrink-0" />
        <span className="hidden lg:block text-white font-bold text-[20px] tracking-tight">Shekel</span>
      </div>
      
      <nav className="flex-1 space-y-2 px-3">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-[#2864e4] text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={22} />
              <span className="hidden lg:block font-bold text-[14px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
