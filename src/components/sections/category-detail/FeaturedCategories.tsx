"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
// ─────────────────────────────────────────────────────────
// Featured Categories — Theme Toggle Fixed
// Tailwind Dark Mode Compatible
// ─────────────────────────────────────────────────────────

const CARDS = [
  {
    title: "Generative Coding",
    desc: "The most active category for developers building complex microservices and API integrations.",
    button: "Explore Coding Agents",
    overlay: "/section-3-category-detail/card-1-overlay.svg",
  },
  {
    title: "Intelligent Logistics",
    desc: "Streamline supply chain and inventory management with real-time reactive AI agents.",
    button: "Explore Logistics",
    overlay: "/section-3-category-detail/card-2-overlay.svg",
  },
];

export default function FeaturedCategories() {
  // export default function FeaturedCategories() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? CARDS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === CARDS.length - 1 ? 0 : prev + 1
    );
  };

// }
  return (
    <section className="w-full overflow-hidden">
      <div
        className="
          relative mx-auto overflow-hidden rounded-[28px]
          bg-[#F6F8FF]
          transition-colors duration-300
          dark:bg-[#020817]
        "
      >
        {/* Top Glow */}
        <div className="absolute left-[-120px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#4E8DFF]/30 blur-[140px]" />

        <div className="absolute right-[-120px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#4E8DFF]/20 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-[72px] md:px-8 md:py-[92px]">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[640px]">
              <h2
                style={{
                  fontFamily: typography.fonts.poppins,
                }}
                className="
                  text-[40px] font-semibold leading-[46px] tracking-[-0.02em]
                  text-[#121212]
                  transition-colors duration-300
                  dark:text-[#F8FAFC]
                "
              >
                Featured categories
              </h2>

              <p
                style={{
                  fontFamily: typography.fonts.inter,
                }}
                className="
                  mt-4 text-[18px] leading-[30px]
                  text-[#666D80]
                  transition-colors duration-300
                  dark:text-[#94A3B8]
                "
              >
                Explore categories with the highest activity and usage this
                month.
              </p>
            </div>

            {/* Arrows */}
            <div className="hidden items-center gap-4 md:flex">
  {/* Previous Button */}
  <button
    onClick={handlePrev}
    className="
      flex h-12 w-12 items-center justify-center
      rounded-full
      border border-black/10
      bg-white/70
      backdrop-blur-md
      transition-all duration-300
      hover:scale-105
      hover:bg-white
      active:scale-95
      dark:border-white/10
      dark:bg-white/5
      dark:hover:bg-white/10
    "
  >
    <ChevronLeft
      size={24}
      strokeWidth={2.5}
      className="text-[#5E6068] dark:text-white"
    />
  </button>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="
      flex h-12 w-12 items-center justify-center
      rounded-full
      border border-black/10
      bg-white/70
      backdrop-blur-md
      transition-all duration-300
      hover:scale-105
      hover:bg-white
      active:scale-95
      dark:border-white/10
      dark:bg-white/5
      dark:hover:bg-white/10
    "
  >
    <ChevronRight
      size={24}
      strokeWidth={2.5}
      className="text-[#5E6068] dark:text-white"
    />
  </button>
</div>
          </div>

          {/* Cards */}
          <div className="mt-[56px] grid grid-cols-1 gap-8 xl:grid-cols-2">
            {/* Card 1 */}
            <div
              className="
                group relative overflow-hidden
                border border-[rgba(255,255,255,0.7)]
                bg-[rgba(255,255,255,0.45)]
                transition-all duration-300
                dark:border-[rgba(255,255,255,0.06)]
                dark:bg-[rgba(15,23,42,0.7)]
              "
              style={{
                backdropFilter: "blur(18px)",
                borderRadius: 28,
                minHeight: 600,
              }}
            >
              <div className="relative z-10 p-8 md:p-12">
                <h3
                  style={{
                    fontFamily: typography.fonts.jakarta,
                  }}
                  className="
                    max-w-[430px]
                    text-[38px] font-bold leading-[44px]
                    text-[#121212]
                    transition-colors duration-300
                    dark:text-[#F8FAFC]
                  "
                >
                  {CARDS[0].title}
                </h3>

                <p
                  style={{
                    fontFamily: typography.fonts.inter,
                  }}
                  className="
                    mt-5 max-w-[470px]
                    text-[18px] leading-[31px]
                    text-[#666D80]
                    transition-colors duration-300
                    dark:text-[#94A3B8]
                  "
                >
                  {CARDS[0].desc}
                </p>

                <button
                  className="
                    mt-8 transition-all duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                  style={{
                    background: "#2F80ED",
                    borderRadius: radiuses.inputIcon,
                    padding: "14px 24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                    }}
                    className="text-[15px] font-semibold text-white"
                  >
                    {CARDS[0].button}
                  </span>
                </button>
              </div>

              {/* Overlay Graphic */}
              <div className="absolute bottom-0 left-0 w-full px-8 pb-0">
                <div className="relative mx-auto max-w-[520px]">
                  <Image
                    src={CARDS[0].overlay}
                    alt=""
                    width={520}
                    height={320}
                    className="
                      h-auto w-full object-contain
                      dark:brightness-90
                    "
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
                group relative overflow-hidden
                border border-[rgba(255,255,255,0.7)]
                bg-[rgba(255,255,255,0.45)]
                transition-all duration-300
                dark:border-[rgba(255,255,255,0.06)]
                dark:bg-[rgba(15,23,42,0.7)]
              "
              style={{
                backdropFilter: "blur(18px)",
                borderRadius: 28,
                minHeight: 600,
              }}
            >
              <div className="relative z-10 p-8 md:p-12">
                <h3
                  style={{
                    fontFamily: typography.fonts.jakarta,
                  }}
                  className="
                    max-w-[430px]
                    text-[38px] font-bold leading-[44px]
                    text-[#121212]
                    transition-colors duration-300
                    dark:text-[#F8FAFC]
                  "
                >
                  {CARDS[1].title}
                </h3>

                <p
                  style={{
                    fontFamily: typography.fonts.inter,
                  }}
                  className="
                    mt-5 max-w-[500px]
                    text-[18px] leading-[31px]
                    text-[#666D80]
                    transition-colors duration-300
                    dark:text-[#94A3B8]
                  "
                >
                  {CARDS[1].desc}
                </p>

                <button
                  className="
                    mt-8 transition-all duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                  style={{
                    background: "#2F80ED",
                    borderRadius: radiuses.inputIcon,
                    padding: "14px 24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                    }}
                    className="text-[15px] font-semibold text-white"
                  >
                    {CARDS[1].button}
                  </span>
                </button>
              </div>

              {/* Dashboard */}
              <div className="absolute bottom-0 left-0 flex w-full justify-center px-8">
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: 420,
                    height: 270,
                    background: "#070707",
                    borderRadius: "18px 18px 0 0",
                    boxShadow:
                      "0px 30px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Top Pills */}
                  <div className="absolute left-5 top-5 h-5 w-[68px] rounded-full bg-white/10" />

                  <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0F3F8E]">
                    <div className="h-2 w-2 rounded-full bg-[#5AA1FF]" />
                  </div>

                  {/* Stats */}
                  <div className="absolute left-5 top-[62px] flex gap-4">
                    <div className="w-[172px] rounded-[14px] border border-white/5 bg-white/[0.04] p-4">
                      <p className="text-[10px] uppercase tracking-[0.08em] text-white/40">
                        Efficiency
                      </p>

                      <p className="mt-2 text-[30px] font-semibold text-white">
                        98.4%
                      </p>
                    </div>

                    <div className="w-[122px] rounded-[14px] border border-white/5 bg-white/[0.04] p-4">
                      <p className="text-[10px] uppercase tracking-[0.08em] text-white/40">
                        Active
                      </p>

                      <p className="mt-2 text-[30px] font-semibold text-white">
                        14
                      </p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="absolute bottom-0 left-0 flex h-[110px] w-full items-end gap-4 px-6 pb-0">
                    {[28, 40, 16, 52, 34].map((h, i) => (
                      <div
                        key={i}
                        className="relative flex-1 rounded-t-[2px] bg-[#2F80ED]"
                        style={{
                          height: `${h + 18}px`,
                        }}
                      >
                        <div className="absolute bottom-0 left-0 h-[22%] w-full bg-white/15" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          className="
            pointer-events-none absolute bottom-0 left-0 h-[180px] w-full
            bg-gradient-to-b from-transparent to-[#DCE7FF]/50
            dark:to-[#0F172A]/80
          "
        />
      </div>
    </section>
  );
}