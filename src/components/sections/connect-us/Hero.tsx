"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GLOW_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

export default function Hero() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionDesktop() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'black' : colors.white,
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
        {/* Glow Ellipses */}
        <div
          className="absolute transition-opacity duration-300"
          style={{
            left: -19,
            top: -49,
            width: 1343,
            height: 211,
            background: GLOW_GRADIENT,
            filter: "blur(1000px)",
            opacity: isDark ? 0.3 : 0.1
          }}
        />
        <div
          className="absolute transition-opacity duration-300"
          style={{
            left: -98,
            top: -139,
            width: 163,
            height: 163,
            background: GLOW_GRADIENT,
            filter: "blur(203.4px)",
            opacity: isDark ? 0.4 : 0.2
          }}
        />
        <div
          className="absolute transition-opacity duration-300"
          style={{
            left: 99,
            top: 609,
            width: 1034,
            height: 373,
            background: GLOW_GRADIENT,
            filter: "blur(203.4px)",
            opacity: isDark ? 0.4 : 0.2
          }}
        />
        <div
          className="absolute transition-opacity duration-300"
          style={{
            left: 1252,
            top: -82,
            width: 163,
            height: 163,
            background: GLOW_GRADIENT,
            filter: "blur(214.7px)",
            opacity: isDark ? 0.4 : 0.2
          }}
        />

        {/* Hero Image */}
        <div
          className="absolute transition-all duration-300"
          style={{ left: 233, top: 140, width: 843, height: 749, opacity: isDark ? 1 : 0.8 }}
        >
          <Image
            src="/section-1-connect-us/hero-image.png"
            alt="Connect with us illustration"
            width={843}
            height={749}
            className={`h-full w-full object-cover transition-all ${isDark ? '' : 'brightness-110'}`}
            priority
            unoptimized
          />
        </div>

        {/* Heading */}
        <div
          className="absolute"
          style={{ left: 94, top: 71, width: 516, height: 198 }}
        >
          <SectionHeading fontSize={72} lineHeight="72px" />
        </div>

        {/* Body Text */}
        <div
          className="absolute"
          style={{ left: 840, top: 115, width: 400, height: 64 }}
        >
          <SectionBody fontSize={24} lineHeight="32px" />
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 opacity-60 transition-opacity duration-300"
        style={{
          width: "120%",
          height: 200,
          background: GLOW_GRADIENT,
          filter: "blur(100px)",
          opacity: isDark ? 0.5 : 0.2
        }}
      />

      <div className="relative z-10 flex flex-col gap-8 px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-6">
          <SectionHeading fontSize="clamp(40px, 10vw, 56px)" lineHeight="1.1" />
          <SectionBody fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.5" />
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-4 w-full max-w-[500px]">
          <Image
            src="/section-1-connect-us/hero-image.png"
            alt="Connect with us illustration"
            width={843}
            height={749}
            className="h-auto w-full object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  const { isDark } = useThemeTokens();
  return (
    <h1
      className="m-0 transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 800,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        background: isDark ? "linear-gradient(193deg, #FFFFFF 50%, rgba(255, 255, 255, 0.4) 100%)" : "linear-gradient(193deg, #0B0B0B 50%, rgba(0, 0, 0, 0.4) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Get in touch with us
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
  const { isDark } = useThemeTokens();
  return (
    <p
      className="m-0 transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: isDark ? colors.white : 'rgba(0,0,0,0.7)',
      }}
    >
      We&apos;re here to help you navigate the world of AI agents.
      <br />
      Premium support for modern builders.
    </p>
  );
}
