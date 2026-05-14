"use client";

import Image from "next/image";
import { colors, radiuses, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────
// ModularAgents.tsx
// Refactored + Reusable + Dark Mode Ready
// ─────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 380;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

// Shared styles
const GRADIENT_BLUE =
  "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";

const CARD_SHADOW =
  "0px 30px 60px -12px rgba(25, 28, 30, 0.08)";

const STATS = [
  {
    value: "120+",
    title: "Modular Agents",
    body:
      "Pre-built specialized agents ready for instant deployment into your existing logic.",
    fontFamily: typography.fonts.poppins,
    fontWeight: 500,
  },
  {
    value: "0ms",
    title: "Execution Delay",
    body:
      "Real-time edge execution ensuring your workflows respond at the speed of thought.",
    fontFamily: typography.fonts.jakarta,
    fontWeight: 800,
  },
  {
    value: "∞",
    title: "Modular System",
    body:
      "Scale vertically or horizontally with our recursive orchestration architecture.",
    fontFamily: "'Liberation Serif', serif",
    fontWeight: 700,
  },
] as const;

export default function ModularAgents() {
  return (
    <>
      <DesktopSection />
      <MobileSection />
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Desktop
────────────────────────────────────────────────────────── */

function DesktopSection() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W}/${CANVAS_H}`,
        containerType: "inline-size",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      {/* Scaled Canvas */}
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          minHeight: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          willChange: "transform",
        }}
      >
        {/* Background */}
        <div
          aria-hidden
          className="pointer-events-none absolute flex items-center justify-center"
          style={{
            left: -395,
            top: -7,
            width: 1841,
            height: 1252,
          }}
        >
          <div
            className="relative flex-none -scale-y-100 rotate-180"
            style={{
              width: 1841,
              height: 1252,
            }}
          >
            <Image
              src="/section-2-developer-builder/bg.png"
              alt=""
              fill
              className="object-cover dark:opacity-30"
              unoptimized
            />
          </div>
        </div>

        {/* Grid */}
        <div
          className="absolute grid grid-cols-3"
          style={{
            left: 24,
            top: 61,
            width: 1232,
            gap: 32,
          }}
        >
          {STATS.map((item) => (
            <StatCard
              key={item.title}
              value={item.value}
              title={item.title}
              body={item.body}
              fontFamily={item.fontFamily}
              fontWeight={item.fontWeight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Mobile
────────────────────────────────────────────────────────── */

function MobileSection() {
  return (
    <section
      className="relative block w-full overflow-hidden rounded-t-[30px] md:hidden"
      style={{
        backgroundColor: colors.white,
      }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <Image
          src="/section-2-developer-builder/bg.png"
          alt=""
          fill
          className="object-cover object-top -scale-y-100 rotate-180"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-6 px-5 py-16 sm:px-6">
        {STATS.map((item) => (
          <MobileStatCard
            key={item.title}
            value={item.value}
            title={item.title}
            body={item.body}
            fontFamily={item.fontFamily}
            fontWeight={item.fontWeight}
          />
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Shared Desktop Card
────────────────────────────────────────────────────────── */

type CardProps = {
  value: string;
  title: string;
  body: string;
  fontFamily: string;
  fontWeight: number;
};

function StatCard({
  value,
  title,
  body,
  fontFamily,
  fontWeight,
}: CardProps) {
  return (
    <article
      className="flex flex-col items-start bg-white dark:bg-slate-900 transition-colors duration-300"
      style={{
        borderRadius: radiuses.cardLg,
        padding: 40,
        gap: 8,
        boxShadow: CARD_SHADOW,
      }}
    >
      {/* Value */}
      <div
        className="flex flex-col justify-center shrink-0"
        style={{ height: 48 }}
      >
        <span
          style={{
            background: GRADIENT_BLUE,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily,
            fontWeight,
            fontSize: 48,
            lineHeight: "48px",
          }}
        >
          {value}
        </span>
      </div>

      {/* Title */}
      <div className="flex w-full pt-[8.5px]">
        <h3
          className="m-0 text-[#191c1e] dark:text-white"
          style={{
            fontFamily: typography.fonts.jakarta,
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "28px",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Body */}
      <p
        className="m-0 text-[#414753] dark:text-slate-300"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
        }}
      >
        {body}
      </p>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────
   Shared Mobile Card
────────────────────────────────────────────────────────── */

function MobileStatCard({
  value,
  title,
  body,
  fontFamily,
  fontWeight,
}: CardProps) {
  return (
    <article
      className="flex flex-col items-start bg-white dark:bg-slate-900 transition-colors duration-300"
      style={{
        borderRadius: radiuses.cardLg,
        padding: "32px 24px",
        gap: 8,
        boxShadow: CARD_SHADOW,
      }}
    >
      {/* Value */}
      <span
        style={{
          background: GRADIENT_BLUE,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily,
          fontWeight,
          fontSize: 40,
          lineHeight: "1.2",
        }}
      >
        {value}
      </span>

      {/* Title */}
      <h3
        className="m-0 mt-1 text-[#191c1e] dark:text-white"
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 18,
          lineHeight: "1.4",
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className="m-0 text-[#414753] dark:text-slate-300"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 15,
          lineHeight: "1.6",
        }}
      >
        {body}
      </p>
    </article>
  );
}