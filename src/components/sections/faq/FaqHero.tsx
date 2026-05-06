"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// FaqHero.tsx — FAQ Hero Section
// Figma frame: 508:7763 "Frame 2147225665"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function FaqHero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: "#02040A",
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
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
          {/* Top blue glow */}
          <div
            className="absolute"
            style={{ left: -19, top: -49, width: 1343, height: 211, filter: "blur(1000px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)" }}
          />

          {/* Corner glows */}
          <div
            className="absolute"
            style={{ left: -98, top: -139, width: 163, height: 163, filter: "blur(203px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", borderRadius: "50%" }}
          />
          <div
            className="absolute"
            style={{ left: 1252, top: -82, width: 163, height: 163, filter: "blur(215px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", borderRadius: "50%" }}
          />

          {/* Bottom fade to black */}
          <div
            className="absolute"
            style={{ left: -7, top: 468, width: 1293, height: 278, background: "linear-gradient(0deg, rgba(2, 4, 10, 1) 0%, rgba(2, 4, 10, 0) 100%)", zIndex: 9 }}
          />

          {/* Left rocket — blurred, angled, depth-of-field */}
          <div
            className="absolute border-2 border-red-500"
            style={{
              left: -10,
              top: 280,
              width: 480,
              height: 430,
              zIndex: 5,
              filter: "blur(2px)",
              transform: "rotate(15deg)",
              
            }}
          >
            <Image
              src="/section-2-faq/rocketfaq.png"
              alt="Rocket decoration"
              width={480}
              height={430}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>

          {/* Right rocket — blurred, flipped, angled, depth-of-field */}
          <div
            className="absolute border-2 border-blue-500"
            style={{
              left: 1040,
              top: 360,
              width: 240,
              height: 200,
              zIndex: 5,
              filter: "blur(5px)",
              transform: "scaleX(-1) rotate(-10deg)",
            }}
          >
            <Image
              src="/section-2-faq/rocketfaq.png"
              alt="Rocket decoration"
              width={240}
              height={200}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>

          {/* Center astronaut + question mark */}
          <div
            className="absolute border-2 border-green-500"
            style={{ left: 250, top: 80, width: 950, height: 840, zIndex: 8 }}
          >
            <Image
              src="/section-2-faq/faqrob.png"
              alt="FAQ Astronaut with question mark"
              width={950}
              height={840}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>

          {/* Text Content */}
          <div
            className="absolute flex flex-col items-center text-center w-full"
            style={{ left: 0, top: 57, zIndex: 10 }}
          >
            <HeroHeading fontSize={56} lineHeight="1.1" />
            <div className="mt-5 max-w-2xl">
              <HeroBody fontSize={16} lineHeight="24px" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex w-full flex-col items-center overflow-hidden px-6 py-20 md:hidden"
        style={{
          backgroundColor: "#02040A",
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
        }}
      >
        {/* Simplified Background for mobile */}
        <div
          className="absolute left-1/2 top-0 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
          style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <HeroHeading fontSize={60} lineHeight="1.2" />
          <div className="mt-5">
            <HeroBody fontSize={20} lineHeight="22px" />
          </div>
        </div>
        
        <div className="relative z-0 mt-8 w-full max-w-sm">
             <Image
              src="/section-2-faq/faqrob.png"
              alt="FAQ Astronaut"
              width={680}
              height={560}
              className="h-auto w-full object-contain"
              unoptimized
            />
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

function HeroHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number;
  lineHeight: string;
}) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 400,
        // fontStyle: "italic",
        fontSize,
        lineHeight,
        letterSpacing: "-0.02em",
        color: colors.white,
      }}
    >
      Frequently asked{" "}
      <span
        style={{
          background: "linear-gradient(90deg, #7A9BFF 0%, #A2B9FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        questions
      </span>
    </h1>
  );
}

function HeroBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number;
  lineHeight: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: "rgba(255, 255, 255, 0.5)",
      }}
    >
      Find answers about Shekel, AI agents, and how workflows work.
    </p>
  );
}
