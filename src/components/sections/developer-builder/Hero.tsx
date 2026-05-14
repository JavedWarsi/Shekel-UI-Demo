import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Hero.tsx  —  "Build powerful AI agents, faster"
// Figma frame: 507-6296  "Frame 2147225665"
// Canvas: 1280 × 717 px   Page-y: 66   bg: black
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Ellipse 43664   (x=-98, y=-139)   163×163   [hero-glow-2.png]
//   Group 9210      (x=200, y=349)   850×556   [14 nested rounded-rectangles, stroke only]
//   Group 9181      (x=403, y=421)   451×412   [icon-cube.png inside nested rings]
//   Untitled design (x=37, y=177)   1160×652   [bg-image.png]
//   Frame 2147225678 (x=-4, y=629)   1291×89   [logostrip, border: rgba(255,255,255,0.2)]
//     image 29      (x=1208, y=19)   50×50     [icon-jira.png]
//     image 24      (x=-22, y=31)   103×28    [icon-github.png]
//     image 25      (x=132, y=3)     134×73    [icon-figma.png]
//     Anthropic     (x=302, y=-16)   185×123   [icon-anthropic.png]
//     image 30      (x=561, y=27)    90×26     [icon-slack.png]
//     image 26      (x=724, y=36)    95×19     [icon-notion.png]
//     image 27      (x=893, y=9)     102×72    [icon-discord.png]
//     image 28      (x=1050, y=24)   103×42    [icon-linear.png]
//     Left fade     (x=0, y=0)       34×90     [linear-gradient]
//     Right fade    (x=1274, y=0)    34×90     [linear-gradient]
//   Text: Build...  (x=114, y=24)    1078×144  [64px, gradient "faster"]
//   Container       (x=317, y=126)   672×84    [20px, white text]
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const LOGO_STRIP_BORDER = "rgba(255,255,255,0.2)";
const RING_COLOR = "#b557fa";
const TEXT_GRADIENT = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";

export default function Hero() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function HeroHeading({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h1
      className="m-0 text-white transition-colors duration-300"
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        textAlign: "center",
      }}
    >
      Build powerful AI agents,{" "}
      <span
        style={{
          background: TEXT_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        faster
      </span>
    </h1>
  );
}

function HeroDescription({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <p
      className="m-0 text-[#475569] transition-colors duration-300"
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        textAlign: "center",
      }}
    >
      Design, connect, and deploy intelligent workflows using modular AI agents all in one platform. Engineering high-performance autonomy for every dev stack.
    </p>
  );
}
function HeroLogos({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center border-y border-black/10 dark:border-white/20 transition-colors duration-300 bg-black`}
      style={{
        height: isMobile ? "64px" : "89px",
        background: isMobile ? "#000000" : "linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(15, 23, 42, 0.04) 50%, rgba(255, 255, 255, 0.04) 100%)",
      }}
    >
      {/* Logos Track */}
      <div className="flex animate-marquee items-center gap-12 whitespace-nowrap min-w-max px-6 bg-black">
        <Image src="/section-1-developer-builder/icon-github.png" alt="GitHub" width={isMobile ? 73 : 103} height={isMobile ? 20 : 28} className="object-contain opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-figma.png" alt="Figma" width={isMobile ? 95 : 134} height={isMobile ? 52 : 73} className="object-contain opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-anthropic.svg" alt="Anthropic" width={isMobile ? 131 : 185} height={isMobile ? 87 : 123} className="object-contain opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-slack.png" alt="Slack" width={isMobile ? 64 : 90} height={isMobile ? 18 : 26} className="object-contain opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-notion.png" alt="Notion" width={isMobile ? 67 : 95} height={isMobile ? 13 : 19} className="object-contain opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-discord.png" alt="Discord" width={isMobile ? 72 : 102} height={isMobile ? 51 : 72} className="object-contain opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-linear.png" alt="Linear" width={isMobile ? 73 : 103} height={isMobile ? 30 : 42} className="object-contain   opacity-100 transition-all duration-300" />
        <Image src="/section-1-developer-builder/icon-jira.png" alt="Jira" width={isMobile ? 35 : 50} height={isMobile ? 35 : 50} className="object-contain opacity-20 dark:opacity-100 transition-all duration-300" />
      </div>

      {/* Fades */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 w-[34px] bg-gradient-to-r from-black to-transparent transition-all duration-300"
      />
      <div
        className="absolute right-0 top-0 bottom-0 z-10 w-[34px] bg-gradient-to-l from-black to-transparent transition-all duration-300"
      />
    </div>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300 bg-black"
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
        {/* Glow Effects */}
        <div className="absoluteopacity-100 transition-opacity duration-300" style={{ left: -98, top: -139, width: 163, height: 163 }}>
          <Image src="/section-1-developer-builder/hero-glow-2.svg" alt="" fill className="object-contain" priority />
        </div>

        {/* Central Graphic */}
        <div className="absolute opacity-100 z-[1] transition-opacity duration-300" style={{ left: 37, top: 177, width: 1160, height: 652 }}>
          <Image src="/section-1-developer-builder/bg-image.png" alt="Platform UI" fill className="object-contain animate-float" priority />
        </div>

        {/* Concentric Rings Effect (Group 9210) */}
        <div className="absolute dark:mix-blend-difference mix-blend-multiply transition-all duration-300" style={{ left: 200, top: 349, width: 850, height: 556, pointerEvents: "none" }}>
          {/* <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 446.8, top: 467.2, width: 357.2, height: 320.5, opacity: 1 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 430.4, top: 452.5, width: 390.0, height: 349.8, opacity: 0.9 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 414.4, top: 438.1, width: 422.1, height: 378.6, opacity: 0.8 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 395.8, top: 421.4, width: 459.3, height: 412.0, opacity: 0.7 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 378.0, top: 405.5, width: 494.9, height: 443.9, opacity: 0.6 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 361.3, top: 390.5, width: 528.3, height: 473.9, opacity: 0.5 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 345.2, top: 376.0, width: 560.4, height: 502.8, opacity: 0.4 }} />
          <div className="absolute rounded-[30px] border border-solid" style={{ borderColor: RING_COLOR, left: 327.0, top: 362.0, width: 596.8, height: 530.9, opacity: 0.3 }} />
          <div className="absolute rounded-[20px] border border-solid" style={{ borderColor: RING_COLOR, left: 308.8, top: 349.0, width: 633.2, height: 556.9, opacity: 0.3 }} />
          <div className="absolute border border-solid" style={{ borderColor: RING_COLOR, left: 287.7, top: 349.0, width: 675.4, height: 556.9, opacity: 0.2 }} />
          <div className="absolute border border-solid" style={{ borderColor: RING_COLOR, left: 267.0, top: 349.0, width: 716.8, height: 556.9, opacity: 0.1 }} />
          <div className="absolute border border-solid" style={{ borderColor: RING_COLOR, left: 246.3, top: 349.0, width: 758.3, height: 556.9, opacity: 0.08 }} />
          <div className="absolute border border-solid" style={{ borderColor: RING_COLOR, left: 222.6, top: 349.0, width: 805.6, height: 556.9, opacity: 0.06 }} />
          <div className="absolute border border-solid" style={{ borderColor: RING_COLOR, left: 200.0, top: 349.0, width: 850.8, height: 556.9, opacity: 0.05 }} />
           */}
          {/* Inner Cube Icon */}
          <div className="absolute z-[-1]" style={{ left: -155, top: -300, width: 1150.85, height: 856.86 }}>
            <Image src="/section-9-workflows/hero-rings.svg" alt="" width={851} height={557} className="h-full w-full" />
          </div>
        </div>

        {/* Text Content */}
        <div className="absolute flex flex-col justify-center" style={{ left: 101, top: 24, width: 1078, height: 144 }}>
          <HeroHeading fontSize="64px" lineHeight="72px" />
        </div>
        <div className="absolute flex flex-col justify-center" style={{ left: 187, top: 126, width: 906, height: 84 }}>
          <HeroDescription fontSize="20px" lineHeight="28px" />
        </div>

        {/* Logo Strip (Frame 2147225678) */}
        <div className="absolute z-10" style={{ left: -4, top: 629, width: 1291, height: 89 }}>
          <HeroLogos />
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden pt-24 transition-colors duration-300 bg-white dark:bg-black"
    >
      <div className="flex flex-col items-center gap-6 px-6 relative z-10 text-center">
        <HeroHeading fontSize="clamp(36px, 10vw, 48px)" lineHeight="1.1" />
        <div className="max-w-[500px]">
          <HeroDescription fontSize="16px" lineHeight="24px" />
        </div>
      </div>

      <div className="relative mt-12 w-full h-[400px] opacity-20 dark:opacity-100 transition-opacity duration-300">
        <Image src="/section-1-developer-builder/bg-image.png" alt="Platform UI" fill className="object-contain object-top" priority />
      </div>

      <div className="mt-8 mb-12">
        <HeroLogos isMobile={true} />
      </div>
    </section>
  );
}
