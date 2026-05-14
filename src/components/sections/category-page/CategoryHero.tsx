"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// CategoryHero — "Marketing AI Agents" hero
// Figma: 506:4108  Frame 2147225665
// Canvas: 1280 × 626

const CANVAS_W = 1280;
const CANVAS_H = 626;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const BTM_ROUND = 36; 

const PURPLE = "#b557fa";
const TUNNEL_RECTS = [
  { l: 771.8, t: 153.19, w: 357.24, h: 320.48, o: 1, r: 30 },
  { l: 755.44, t: 138.51, w: 389.97, h: 349.83, o: 0.9, r: 30 },
  { l: 739.38, t: 124.11, w: 422.08, h: 378.64, o: 0.8, r: 30 },
  { l: 720.78, t: 107.42, w: 459.29, h: 412.02, o: 0.7, r: 30 },
  { l: 702.99, t: 91.46, w: 494.87, h: 443.94, o: 0.6, r: 30 },
  { l: 686.29, t: 76.48, w: 528.27, h: 473.91, o: 0.5, r: 30 },
  { l: 670.2, t: 62.04, w: 560.45, h: 502.77, o: 0.4, r: 30 },
  { l: 652.02, t: 48.0, w: 596.81, h: 530.86, o: 0.3, r: 30 },
  { l: 633.84, t: 35, w: 633.17, h: 556.86, o: 0.3, r: 20 },
  { l: 612.71, t: 35, w: 675.43, h: 556.86, o: 0.2, r: 0 },
  { l: 592.04, t: 35, w: 716.78, h: 556.86, o: 0.1, r: 0 },
  { l: 571.28, t: 35, w: 758.28, h: 556.86, o: 0.08, r: 0 },
  { l: 547.62, t: 35, w: 805.61, h: 556.86, o: 0.06, r: 0 },
  { l: 525, t: 35, w: 850.85, h: 556.86, o: 0.05, r: 0 },
];

function HeroBody({ className }: { className?: string }) {
  return (
    <p
      className={`${className} text-slate-600 dark:text-slate-300 transition-colors duration-300`}
      style={{
        margin: 0,
        width: "100%",
        maxWidth: 436,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "29.25px",
      }}
    >
      Discover AI agents designed to automate marketing workflows and improve performance. From
      content creation to data-driven insights, scale your impact effortlessly.
    </p>
  );
}

function HeroChip() {
  return (
    <div
      className="flex items-center transition-colors duration-300 bg-zinc-900/50 border border-black/5 border-white/10 backdrop-blur-sm"
      style={{
        gap: 7.99,
        padding: "12px 24px",
        borderRadius: radiuses.pill,
        boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="relative shrink-0"
        style={{ width: 20.047, height: 20.071 }}
      >
        <Image
          src="/section-1-category-page/hero-rocket.svg"
          alt=""
          width={20}
          height={20}
          className="h-full w-full object-contain dark:invert-0 invert transition-all duration-300"
        />
      </div>
      <span
        className="text-slate-900 text-white transition-colors duration-300"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
        }}
      >
        120+ agents available
      </span>
    </div>
  );
}

function CategoryHeroDesktop() {
  return (
    <section
      className="relative z-30 hidden w-full md:block transition-colors duration-300 bg-black"
      style={{
        borderBottomLeftRadius: BTM_ROUND,
        borderBottomRightRadius: BTM_ROUND,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {/* Top glow strip */}
        <div
          className="pointer-events-none absolute opacity-40 dark:opacity-100 transition-opacity duration-300"
          style={{ left: -19, top: -49, width: 1343, height: 211 }}
        >
          <div className="absolute inset-[-4.74]">
            <Image
              src="/section-1-category-page/hero-ellipse-top.svg"
              alt=""
              width={1343}
              height={211}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        {/* Heading */}
        <div
          className="absolute m-0"
          style={{
            left: 89,
            top: 87,
            width: 516,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            lineHeight: 1.24,
            fontSize: 75,
            paddingBottom: 18,
          }}
        >
          <span
            className="transition-colors duration-300 text-black dark:text-white"
            style={{
              display: "block",
              background: "inherit",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "inherit",
            }}
          >
            Marketing
          </span>
          <span
            style={{
              display: "block",
              background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Agents
          </span>
        </div>

        <div className="absolute" style={{ left: 89, top: 308, maxWidth: 672 }}>
          <div style={{ paddingLeft: 3.97, paddingRight: 3.97 }}>
            <HeroBody />
          </div>
        </div>

        <div className="absolute" style={{ left: 85, top: 475 }}>
          <HeroChip />
        </div>

        {/* Tunnel + glow */}
        {TUNNEL_RECTS.map((r, i) => (
          <div
            key={i}
            className="absolute dark:mix-blend-screen mix-blend-multiply transition-all duration-300"
            style={{
              left: r.l,
              top: r.t,
              width: r.w,
              height: r.h,
              border: `1px solid ${PURPLE}`,
              borderRadius: r.r,
              opacity: r.o,
            }}
          />
        ))}
        
        <div
          className="pointer-events-none absolute"
          style={{
            left: 904.23,
            top: 363.47,
            width: 997.7,
            height: 1231.7,
            transform: "translate(-50%, -50%)",
            zIndex: 120,
          }}
        >
          <Image
            src="/section-2-faq/faqbot.png"
            alt=""
            fill
            className="object-contain animate-float"
            sizes="438px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function CategoryHeroMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300 bg-white dark:bg-black"
      style={{
        borderBottomLeftRadius: BTM_ROUND,
        borderBottomRightRadius: BTM_ROUND,
      }}
    >
      <div className="flex flex-col gap-8 px-6 py-14">
        <div className="relative h-[240px] w-full overflow-hidden rounded-lg">
           <Image
            src="/section-11/cta-robot.webp"
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="text-black dark:text-white transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            lineHeight: 1.1,
            fontSize: "clamp(40px, 10vw, 56px)",
          }}
        >
          <span className="block">Marketing</span>
          <span
            className="block"
            style={{
              background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Agents
          </span>
        </div>
        <div className="max-w-xl">
          <HeroBody />
        </div>
        <HeroChip />
      </div>
    </section>
  );
}

export default function CategoryHero() {
  return (
    <>
      <CategoryHeroDesktop />
      <CategoryHeroMobile />
    </>
  );
}

