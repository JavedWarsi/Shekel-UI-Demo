"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

// ─────────────────────────────────────────────────────────────────────────────
// TrustedTeams.tsx  —  "Trusted by creators and teams worldwide."
// Figma frame: 506:4849  "Frame 2147225678"
// Canvas: 1280 × 673 px
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 673;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function TrustedTeams() {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden bg-white dark:bg-[#05070C] md:rounded-[56px] transition-colors duration-300"
      >
        <SectionDesktop />
        <SectionMobile />
      </div>
    </div>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'transparent' : colors.white,
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
        {/* Grid / texture background (Group 1000005054) */}
        <div
          aria-hidden
          className="pointer-events-none absolute overflow-hidden"
          style={{ left: -564, top: 118, width: 2400.917, height: 1830 }}
        >
          <Image
            src="/section-3-pricing/bg-texture.png"
            alt=""
            fill
            className={`object-cover ${isDark ? 'opacity-10 brightness-50' : ''}`}
            sizes="2400px"
            priority
          />
        </div>

        {/* Decorative ellipses (inset-[-37%] in Figma — overflow clip) */}
        <Ellipse
          left={-550}
          top={-567}
          size={696}
          src="/section-3-pricing/ellipse-1.png"
          transform="scaleY(-1) rotate(180deg)"
        />
        <Ellipse
          left={1102}
          top={-514}
          size={696}
          src="/section-3-pricing/ellipse-2.png"
        />
        <div
          aria-hidden
          className="absolute overflow-hidden"
          style={{ left: -32, top: 670, width: 1383, height: 696, pointerEvents: "none" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/section-3-pricing/ellipse-3.png"
              alt=""
              fill
              className="object-cover"
              style={{ transform: "scale(1.2, 1.37)" }}
              sizes="1400px"
            />
          </div>
        </div>

        {/* Heading — centered, Figma: left 50% - 0.5px, top 102, translate -50% -50% */}
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            left: "calc(50% - 0.5px)",
            top: 108,
            width: 1016,
            height: 36,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <SectionHeading fontSize={48} lineHeight="36px" noWrap />
        </div>

        {/* Subcopy */}
        <div
          className="absolute flex flex-col items-center"
          style={{ left: 377, top: 146, width: 576, zIndex: 2 }}
        >
          <SectionBody fontSize={16} lineHeight="24px" />
        </div>

        {/* Logos — exact Figma x/y/w/h */}
        <Logo left={111} top={274} w={210} h={57} src="/section-3-pricing/logo-1.png" />
        <Logo left={402} top={266} w={226} h={72} src="/section-3-pricing/image 65.png" />
        <Logo left={739} top={267} w={120} h={72} src="/section-3-pricing/logo-2.png" />
        <Logo left={983} top={227} w={119} h={119} src="/section-3-pricing/logo-3.png" />
        <Logo left={192} top={416} w={239} h={44} src="/section-3-pricing/image 69.png" />
        <Logo left={1080} top={416} w={85} h={89} src="/section-3-pricing/logo-4.png" />
        <Logo left={536} top={416} w={223} h={57} src="/section-3-pricing/logo-5.png" />
        <Logo left={821} top={393} w={141} h={117} src="/section-3-pricing/image 71.png" />
      </div>
    </section>
  );
}

function Ellipse({
  left,
  top,
  size,
  src,
  transform,
}: {
  left: number;
  top: number;
  size: number;
  src: string;
  transform?: string;
}) {
  return (
    <div
      aria-hidden
      className="absolute"
      style={{
        left,
        top,
        width: size,
        height: size,
        transform,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          style={{ transform: "scale(1.37)" }}
          sizes="800px"
        />
      </div>
    </div>
  );
}

function Logo({
  left,
  top,
  w,
  h,
  src,
}: {
  left: number;
  top: number;
  w: number;
  h: number;
  src: string;
}) {
  const { isDark } = useThemeTokens();
  
  return (
    <div
      className="absolute transition-all duration-300"
      style={{ left, top, width: w, height: h, zIndex: 2, filter: isDark ? 'brightness(0) invert(1) opacity(0.7)' : 'none' }}
    >
      <Image src={src} alt="" fill className="object-contain" sizes={`${w}px`} />
    </div>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'transparent' : colors.white }}
    >
      <div
        className="absolute"
        style={{ left: "-50%", top: 0, width: "200%", height: "100%", opacity: isDark ? 0.1 : 0.5 }}
      >
        <Image
          src="/section-3-pricing/bg-texture.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-8">
        <SectionHeading fontSize="clamp(32px, 8vw, 48px)" lineHeight="1.1" />
        <SectionBody fontSize="16px" lineHeight="24px" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <MobileLogo w={150} h={40} src="/section-3-pricing/logo-1.png" />
          <MobileLogo w={150} h={46} src="/section-3-pricing/image 65.png" />
          <MobileLogo w={100} h={60} src="/section-3-pricing/logo-2.png" />
          <MobileLogo w={100} h={100} src="/section-3-pricing/logo-3.png" />
          <MobileLogo w={170} h={32} src="/section-3-pricing/image 69.png" />
          <MobileLogo w={70} h={75} src="/section-3-pricing/logo-4.png" />
          <MobileLogo w={90} h={72} src="/section-3-pricing/image 71.png" />
          <MobileLogo w={160} h={40} src="/section-3-pricing/logo-5.png" />
        </div>
      </div>
    </section>
  );
}

function MobileLogo({ w, h, src }: { w: number, h: number, src: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div style={{ position: "relative", width: w, height: h, filter: isDark ? 'brightness(0) invert(1) opacity(0.7)' : 'none' }}>
      <Image
        src={src}
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
  noWrap = false,
}: {
  fontSize: number | string;
  lineHeight: string;
  noWrap?: boolean;
}) {
  return (
    <h2
      className="m-0 text-center text-black dark:text-white transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        whiteSpace: noWrap ? "nowrap" : undefined,
      }}
    >
      Trusted by creators and teams worldwide.
    </h2>
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
      className="m-0 text-center text-black dark:text-white/60 transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
      }}
    >
      Join thousands using AI agents to automate workflows.
    </p>
  );
}
