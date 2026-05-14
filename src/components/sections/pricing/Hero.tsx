"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

// ─────────────────────────────────────────────────────────────────────────────
// Hero.tsx  —  "Flexible pricing Built for scale"
// Figma frame: 506:4648  "Frame 2147225665"
// Canvas: 1280 × 555 px   Page-y: 66   bg: #000000
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 555;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;

export default function Hero() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative hidden w-full   md:block rounded-bl-[37px] mt-15 rounded-br-[37px] bg-[#05070C] transition-colors duration-300"
      style={{
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
        <div
          aria-hidden
          className="absolute opacity-100"
          style={{
            inset: 0,
            background: isDark 
              ? "radial-gradient(circle at 70% 30%, rgba(40,100,228,0.1) 0%, transparent 70%)"
              : "radial-gradient(circle at 70% 30%, rgba(40,100,228,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Ellipse glows rebuilt from Figma gradients (prevents white seam lines) */}
        <div
          aria-hidden
          className="absolute rounded-full opacity-30 dark:opacity-60"
          style={{
            left: -19,
            top: -49,
            width: 1343,
            height: 211,
            background: BUTTON_GRADIENT,
            filter: "blur(1000px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          className="absolute rounded-full opacity-40"
          style={{
            left: -98,
            top: -139,
            width: 163,
            height: 163,
            background: BUTTON_GRADIENT,
            filter: "blur(203.4px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Rocket background shape */}
        <div
          aria-hidden
          className="absolute opacity-100 animate-diagonalRocketFly -mt-35"
          style={{
            left: -360,
            top: -48,
            width: 860,
            height: 920,
            filter: "blur(8.7px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <div className="absolute" style={{ left: 0, top: 0, width: "100%", height: "100%"  }}>
            <Image
              src="/section-1-pricing/bg-image.png"
              alt=""
              fill
              // className={`object-contain ${isDark ? 'invert-0' : 'invert opacity-20'} `}
              className="object-contain"
              // sizes="1300px"
              priority
            />
          </div>
        </div>

        {/* Laptop mascot foreground */}
        <div
          aria-hidden
          className="absolute"
          style={{
            left: 20,
            top: 10,
            width: 600,
            height: 500,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <Image
            src="/section-1-pricing/laptop-mascot.png"
            alt=""
            fill
            className="object-contain animate-float mt-20"
            sizes="700px"
            priority
          />
        </div>

        <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            left: 865,
            top: 177,
            width: 552,
            height: 60,
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
           <SectionHeading fontSize={64} lineHeight="60px" />
        </div>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: 546, top: 281, width: 672, zIndex: 5 }}
        >
          <div style={{ width: 570.16 }}>
            <SectionBody fontSize={18} lineHeight="28px" />
          </div>
        </div>

        <div
          className="absolute flex flex-col items-start"
          style={{ left: 762, top: 384, zIndex: 30 }}
        >
          <ExploreButton />
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden rounded-bl-[24px] rounded-br-[24px] bg-[#f8fafc] dark:bg-[#05070C] transition-colors duration-300"
    >
      <div className="flex flex-col gap-8 px-6 py-16 items-center text-center">
         <SectionHeading fontSize="clamp(40px, 8vw, 64px)" lineHeight="1.1" />
         <SectionBody fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.5" />
         <ExploreButton isMobile={true} />
      </div>
    </section>
  );
}
// ─── Shared Components ───────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h1
      className="m-0 text-center text-white transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        letterSpacing: "-1.2px",
      }}
    >
      Flexible pricing{" "}
      <span
        style={{
          background: BUTTON_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Built for scale
      </span>
    </h1>
  );
}

function SectionBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      className="m-0 text-center whitespace-pre-wrap text-white/80 transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
      }}
    >
      Choose how you want to use AI agents — pay per run or scale with{"\n"}subscriptions.
    </p>
  );
}
function ExploreButton({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className={`flex items-center hover:opacity-90 transition-all active:scale-95 ${isMobile ? "w-full justify-center mt-4" : ""}`}
      style={{
        background: BUTTON_GRADIENT,
        padding: "16px 32px",
        gap: 12,
        borderRadius: radiuses.cardSm,
        boxShadow: "0px 20px 50px 0px rgba(25,28,30,0.06)",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "28px",
          color: colors.white,
        }}
      >
        Explore Agents
      </span>
      <div style={{ position: "relative", width: 16, height: 16, flexShrink: 0, zIndex: 2 }}>
        <Image
          src="/section-1-about/hero-arrow.svg"
          alt=""
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}