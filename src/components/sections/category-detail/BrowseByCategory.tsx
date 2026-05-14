"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────
// Browse By Category — Dark Mode via Tailwind class
// No ThemeProvider Required
// Fixed Icon Sizing & Alignment
// ─────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    title: "Marketing",
    desc: "Automate social media, email campaigns, and SEO strategy with specialized agents.",
    count: "120+ agents",
    icon: "/section-2-category-detail/icon-marketing.svg",
  },
  {
    title: "Content",
    desc: "Draft articles, generate creative scripts, and refine copy across all digital channels.",
    count: "85+ agents",
    icon: "/section-2-category-detail/icon-content.svg",
  },
  {
    title: "Design",
    desc: "Create UI prototypes, brand assets, and custom illustrations using generative vision agents.",
    count: "60+ agents",
    icon: "/section-2-category-detail/icon-design.svg",
  },
  {
    title: "Development",
    desc: "Debug code, write boilerplate scripts, and automate documentation for tech stacks.",
    count: "200+ agents",
    icon: "/section-2-category-detail/icon-development.svg",
  },
  {
    title: "Automation",
    desc: "Bridge workflows between different apps and schedule complex task sequences.",
    count: "150+ agents",
    icon: "/section-2-category-detail/icon-automation.svg",
  },
  {
    title: "Data Processing",
    desc: "Analyze spreadsheets, scrape web data, and generate insights from raw datasets.",
    count: "95+ agents",
    icon: "/section-2-category-detail/icon-data-processing.svg",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F8FC] transition-colors duration-300 dark:bg-[#020817]">
      <div className="mx-auto max-w-[1280px] px-6 py-[72px] md:px-8 md:py-[96px]">
        {/* Header */}
        <div className="max-w-[620px]">
          <h2
            style={{
              fontFamily: typography.fonts.poppins,
            }}
            className="
              text-[42px]
              font-semibold
              leading-[48px]
              tracking-[-0.02em]
              text-[#1C1B1F]
              transition-colors duration-300
              dark:text-[#F8FAFC]
            "
          >
            Browse by category
          </h2>

          <p
            style={{
              fontFamily: typography.fonts.inter,
            }}
            className="
              mt-4
              text-[18px]
              font-normal
              leading-[30px]
              text-[#5B6472]
              transition-colors duration-300
              dark:text-[#94A3B8]
            "
          >
            Find AI agents based on your needs and use cases.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-[56px] grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {CATEGORIES.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                min-h-[248px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[20px]
                border
                border-[rgba(15,23,42,0.04)]
                bg-white
                p-[28px]
                shadow-[0px_1px_2px_rgba(16,24,40,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                dark:border-[rgba(255,255,255,0.06)]
                dark:bg-[#0F172A]
                dark:shadow-[0px_4px_20px_rgba(0,0,0,0.35)]
              "
              style={{
                borderRadius: radiuses.cardSm,
              }}
            >
              {/* Top */}
              <div>
                {/* Icon */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#DCE7FF]
                    transition-colors
                    duration-300
                    dark:bg-[rgba(37,99,235,0.15)]
                    shrink-0
                  "
                  style={{
                    width: 56,
                    height: 56,
                    minWidth: 56,
                    minHeight: 56,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={55}
                    height={55}
                    className="
                      object-contain
                      transition-all
                      duration-300
                      
                    
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: typography.fonts.jakarta,
                  }}
                  className="
                    mt-8
                    text-[24px]
                    font-bold
                    leading-[32px]
                    text-[#1C1B1F]
                    transition-colors
                    duration-300
                    dark:text-[#F8FAFC]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: typography.fonts.inter,
                  }}
                  className="
                    mt-3
                    max-w-[310px]
                    text-[16px]
                    font-normal
                    leading-[28px]
                    text-[#5B6472]
                    transition-colors
                    duration-300
                    dark:text-[#94A3B8]
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                  }}
                  className="
                    text-[14px]
                    font-semibold
                    leading-[20px]
                    text-[#0057B8]
                    transition-colors
                    duration-300
                    dark:text-[#60A5FA]
                  "
                >
                  {item.count}
                </span>

                <button className="flex items-center gap-1">
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                    }}
                    className="
                      text-[14px]
                      font-semibold
                      leading-[20px]
                      text-[#0057B8]
                      transition-colors
                      duration-300
                      dark:text-[#60A5FA]
                    "
                  >
                    View Category
                  </span>

                  <Image
                    src="/section-2-category-detail/icon-arrow-right.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                     
                    "
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}