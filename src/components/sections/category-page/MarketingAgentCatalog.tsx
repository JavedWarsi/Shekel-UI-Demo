"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// Figma: 506:4233  Frame 2147225686
// MarketingAgentCatalog — Responsive Grid Version

const TABS = [
  { id: "all", label: "All Agents", active: true },
  { id: "sm", label: "Social Media", active: false },
  { id: "ads", label: "Ads", active: false },
  { id: "seo", label: "SEO", active: false },
  { id: "em", label: "Email", active: false },
  { id: "an", label: "Analytics", active: false },
];

const AGENTS = [
  { title: "ViralGenie AI", body: "Generates trend-aligned social media hooks and scripts optimized for growth.", rating: "4.9", runs: "1.2k runs", price: "Free", priceGradient: true, icon: "card-icon-1.svg", iconBg: "#d7e3ff" },
  { title: "AdCopy Pro", body: "High-converting ad copy for Facebook, Google, and LinkedIn campaigns.", rating: "4.7", runs: "850 runs", price: "$12/mo", icon: "card-icon-2.svg", iconBg: "#b7eaff" },
  { title: "SEO Keyword Architect", body: "Deep semantic keyword research and content clustering for organic reach.", rating: "4.8", runs: "3.4k runs", price: "Free", priceGradient: true, icon: "card-icon-3.svg", iconBg: "#d7e3ff" },
  { title: "SmartMail Sequence", body: "Automates personalized cold outreach and follow-up sequences.", rating: "4.6", runs: "920 runs", price: "$29/mo", icon: "card-icon-4.svg", iconBg: "#d7e3ff" },
  { title: "Insight Analytica", body: "Transforms raw GA4 data into actionable executive summaries instantly.", rating: "4.9", runs: "540 runs", price: "Free", priceGradient: true, icon: "card-icon-5.svg", iconBg: "#b7eaff" },
  { title: "Brand Storyteller", body: "Crafts a cohesive brand voice across all digital channels using AI.", rating: "4.7", runs: "2.1k runs", price: "$15/mo", icon: "card-icon-6.svg", iconBg: "#d7e3ff" },
  { title: "Reddit Rapport", body: "Finds relevant Reddit threads and suggests authentic ways to engage.", rating: "4.5", runs: "1.1k runs", price: "Free", priceGradient: true, icon: "card-icon-7.svg", iconBg: "#d7e3ff" },
  { title: "Shorts Master", body: "Extracts viral short-form clips from long videos with auto-captions.", rating: "4.8", runs: "4.2k runs", price: "$49/mo", icon: "card-icon-8.svg", iconBg: "#e2e8f0" },
];

function CardShell({ agent }: { agent: (typeof AGENTS)[0] }) {
  const grad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
  
  return (
    <div
      className="flex flex-col transition-all duration-300 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 hover:shadow-xl dark:hover:border-white/10 p-6 gap-2 h-full"
      style={{
        borderRadius: radiuses.cardLg,
        boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 56,
          height: 56,
          backgroundColor: agent.iconBg,
          borderRadius: radiuses.pill,
        }}
      >
        <Image
          src={`/section-2-category-page/${agent.icon}`}
          alt=""
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="pt-4">
        <h3
          className="text-slate-900 dark:text-white transition-colors duration-300"
          style={{
            margin: 0,
            fontFamily: typography.fonts.jakarta,
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "28px",
          }}
        >
          {agent.title}
        </h3>
      </div>
      <p
        className="text-slate-600 dark:text-slate-400 transition-colors duration-300 line-clamp-2"
        style={{
          margin: 0,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
        }}
      >
        {agent.body}
      </p>
      
      <div className="flex w-full items-center mt-auto pt-4 gap-4">
        <div className="flex items-center gap-1">
          <Image src="/section-2-category-page/star.svg" alt="" width={15} height={15} />
          <span className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
            {agent.rating}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/section-2-category-page/play.svg" alt="" width={15} height={15} />
          <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">
            {agent.runs}
          </span>
        </div>
        <div className="ml-auto">
          {agent.priceGradient ? (
            <span
              className="bg-clip-text text-transparent font-semibold text-sm"
              style={{ backgroundImage: grad }}
            >
              {agent.price}
            </span>
          ) : (
            <span className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
              {agent.price}
            </span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 pt-4">
        <button
          className="flex items-center justify-center h-10 px-4 rounded-lg transition-all hover:opacity-90 active:scale-95"
          style={{
            backgroundImage: grad,
            color: colors.white,
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Run Agent
        </button>
        <button
          className="flex items-center justify-center h-10 px-4 rounded-lg transition-all bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 active:scale-95"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default function MarketingAgentCatalog() {
  const grad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full transition-colors duration-300 bg-slate-50 dark:bg-zinc-950 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row items-center gap-4 p-2 bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-2xl shadow-sm mb-12">
          <div className="relative w-full lg:flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400">
              <Image src="/section-2-category-page/search-icon.svg" alt="" width={18} height={18} />
            </div>
            <input
              type="text"
              placeholder="Search marketing agents..."
              className="w-full h-12 pl-12 pr-4 bg-slate-50 dark:bg-black/20 border border-transparent focus:border-blue-500 rounded-full outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            {["Pricing: All", "Rating: Any", "Sort: Most Used"].map((label) => (
              <button
                key={label}
                className="flex items-center gap-2 px-4 h-11 bg-slate-50 dark:bg-black/20 border border-transparent hover:border-slate-200 dark:hover:border-white/10 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 transition-all"
              >
                {label}
                <Image src="/section-2-category-page/chevron.svg" alt="" width={16} height={16} className="opacity-60" />
              </button>
            ))}
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap px-6 h-11 rounded-full text-sm font-semibold transition-all duration-300 ${
                tab.active 
                  ? "text-white shadow-lg shadow-blue-500/20" 
                  : "bg-white dark:bg-zinc-900/50 text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-zinc-800"
              }`}
              style={tab.active ? { backgroundImage: grad } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {AGENTS.map((agent) => (
            <CardShell key={agent.title} agent={agent} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center justify-center px-10 h-14 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 rounded-full transition-all active:scale-95">
            <span className="text-slate-900 dark:text-white font-semibold text-lg">
              Load more agents
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
