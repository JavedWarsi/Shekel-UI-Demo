"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// Figma: 506:4546  Section - Similar Agents
const CARDS = [
  { name: "CopyGenius Pro", rating: "4.7", icon: "glow" },
  { name: "VideoCraft AI", rating: "4.9", icon: "glow2" },
  { name: "MetricMaster", rating: "4.5", icon: "graph" },
];

function CardIcon({ kind }: { kind: (typeof CARDS)[0]["icon"] }) {
  if (kind === "graph") {
    return (
      <div
        className="flex items-center justify-center w-14 h-14 transition-colors duration-300 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-black/5 dark:border-white/5"
      >
        <div className="relative w-4 h-2.5">
          <Image src="/section-4-category-page/card-3-icon.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    );
  }
  const iconSrc = kind === "glow2" ? "/section-4-category-page/card-2-glow.svg" : "/section-4-category-page/card-1-glow.svg";
  return (
    <div className="relative w-14 h-14">
      <Image src={iconSrc} alt="" width={56} height={56} className="h-full w-full object-contain" />
    </div>
  );
}

export default function CategorySimilarAgents() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full transition-colors duration-300 bg-white dark:bg-zinc-950 py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2
            className="text-slate-900 dark:text-white transition-colors duration-300"
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.1",
            }}
          >
            Similar <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>Agents</span>
          </h2>
          
          <Link
            href="/marketplace"
            className="group flex items-center gap-2 text-slate-900 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <span
              className="text-xs font-semibold uppercase tracking-[0.1em]"
              style={{ fontFamily: typography.fonts.inter }}
            >
              Explore More Agents
            </span>
            <div className="relative w-2.5 h-2.5 group-hover:translate-x-1 transition-transform">
              <Image src="/section-4-category-page/link-arrow.svg" alt="" fill className="object-contain dark:invert" />
            </div>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.name}
              className="flex flex-col p-8 transition-all duration-300 bg-slate-50 dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-[32px] hover:shadow-xl hover:translate-y-[-4px]"
            >
              <CardIcon kind={card.icon} />
              
              <div className="mt-6 flex flex-col gap-2">
                <h3
                  className="text-slate-900 dark:text-white font-semibold text-lg"
                  style={{ fontFamily: typography.fonts.inter }}
                >
                  {card.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <Image src="/section-4-category-page/star.svg" alt="" width={10} height={10} />
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                    {card.rating}
                  </span>
                </div>
              </div>

              <Link
                href="/agent-detail"
                className="mt-8 flex items-center justify-center h-12 w-full transition-all duration-300 bg-white dark:bg-white/10 border border-black/5 dark:border-white/5 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-white/20 text-slate-900 dark:text-white font-semibold text-sm"
                style={{ fontFamily: typography.fonts.inter }}
              >
                Run Agent
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
