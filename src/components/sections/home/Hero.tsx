"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { colors, typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { motion, useReducedMotion } from "framer-motion";
import { PartnerMarquee } from "@/components/shared/PartnerMarquee";

// LAYOUT MAP — Figma frame 500:21924 "Hero" (1280 × 717, logo strip extends to y=726)
// Root: bg #000000 (colors.black); fixed 1280×726 canvas scaled to viewport via CSS transform.
// Decorative layers (behind content):
//   - Ellipse 43662: x=-19, y=-49, 1343×211, linear-gradient(180°, brand.blueStart → brand.blueEnd), blur(1000px)
//   - Ellipse 43664: x=-98, y=-139, 163×163, same gradient, blur(203.4px)
//   - Ellipse 43665: x=1252, y=-82, 163×163, same gradient, blur(214.7px)
//   - Circuit lines SVG (Group 9210): x=412, y=50, 1566.67×1025.34 → /images/hero/circuit-lines.svg
// Robot (image 51): x=653, y=118, 645×645 → /images/hero/robot.webp
// Left text column:
//   - "The Marketplace for": x=56, y=82, 628×72, Poppins 500 64/72, letter -5.62%,
//     fill linear-gradient(193°, #ffffff 50% → rgba(255,255,255,0) 100%) clipped to text
//   - "AI Agents": x=65, y=151, 628×132, Poppins 500 88, fill linear-gradient(180°, brand.blueStart → brand.blueEnd) clipped to text
//   - Subtext: x=60, y=315, 508.73×98, Inter 400 20/32.5, color text.badgeUpcoming (#a7aab9)
//   - Button row: x=62, y=461, row gap 14
//     • Primary "Join Waitlist" & Outline "Explore Platform" via shared Button component
// Logo strip (Frame 2147225678): x=-4, y=637, 1291×89, bg #000, top+bottom border rgba(255,255,255,0.2)
//   Partner logos (x,y,w×h) at their Figma coords inside strip.
// Scaling strategy: inner canvas is pinned at 1280×726. Section height + inner transform
// use `min(1, 100vw/1280)` so it looks 1:1 at 1280+ and proportionally scales on narrower viewports.

type Partner = {
  name: string;
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const PARTNERS: Partner[] = [
  { name: "OpenAI", src: "/images/hero/openai.png", x: -22, y: 31, w: 103, h: 28 },
  { name: "Google AI", src: "/images/hero/google-ai.png", x: 132, y: 3, w: 134, h: 73 },
  { name: "Anthropic", src: "/images/hero/anthropic.svg", x: 302, y: -16, w: 185, h: 123 },
  { name: "Azure", src: "/images/hero/azure.png", x: 561, y: 27, w: 90, h: 26 },
  { name: "Meta", src: "/images/hero/meta.png", x: 700, y: 22, w: 140, h: 44 },
  { name: "Notion", src: "/images/hero/notion.png", x: 893, y: 9, w: 102, h: 72 },
  { name: "Slack", src: "/images/hero/slack.png", x: 1050, y: 24, w: 103, h: 42 },
  { name: "AWS", src: "/images/hero/aws.png", x: 1208, y: 19, w: 50, h: 50 },
];

const BLUE_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
const BORDER_SOFT = "rgba(255,255,255,0.2)";

// Figma canvas dimensions — all child coords are expressed in these pixels.
const CANVAS_W = 1280;
const CANVAS_H = 726;

// Uniform scale tied to the section's container width (100cqw) so the composition
// always matches Figma at every viewport — including widths greater than 1280 (scales up)
// and smaller than 1280 (scales down). Using cqw instead of vw avoids double-counting
// the vertical scrollbar width that otherwise causes horizontal overflow.
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <HeroDesktop />
      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <HeroMobile />
    </>
  );
}

function HeroDesktop() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && !prefersReducedMotion;
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300 bg-white dark:bg-[#02040A]"
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
            {/* Blurred blue ellipses */}
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full opacity-40 dark:opacity-100 transition-opacity duration-300"
              style={{
                left: -19,
                top: -49,
                width: 1343,
                height: 211,
                background: BLUE_GRADIENT,
                filter: "blur(1000px)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full opacity-40 dark:opacity-100 transition-opacity duration-300"
              style={{
                left: -98,
                top: -139,
                width: 163,
                height: 163,
                background: BLUE_GRADIENT,
                filter: "blur(203.4px)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full opacity-40 dark:opacity-100 transition-opacity duration-300"
              style={{
                left: 1252,
                top: -82,
                width: 163,
                height: 163,
                background: BLUE_GRADIENT,
                filter: "blur(214.7px)",
              }}
            />
            {/* Circuit-lines SVG background (Group 9210) */}
            <div
              aria-hidden
              className="pointer-events-none absolute opacity-20 dark:opacity-90 transition-opacity duration-300"
              style={{ left: 412, top: 20, width: 1566.67, height: 1025.34 }}
            >
              <Image
                src="/images/hero/circuit-lines.svg"
                alt=""
                fill
                sizes="1567px"
                className="object-contain object-left-top dark:invert-0 invert transition-all duration-300"
                priority
              />
            </div>
            {/* 4 staggered purple depth panels — over lines, behind mascot — match Figma layered glass */}

        {/* 4 staggered purple depth panels — over lines, behind mascot — match Figma layered glass */}
        {/* Right side is flush to canvas edge (no right-side rounding), only left corners rounded */}
        {/* Outer → inner: inner is largest & most opaque (main glass area);
            outer panels are small stacked-sheet tabs peeking from top-left.
            All flush to right+bottom; only top-left & bottom-left corners rounded. */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 902, top: 246, width: 378, height: 480, background: "rgba(130, 72, 255, 0.06)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 860, top: 267, width: 420, height: 459, background: "rgba(130, 72, 255, 0.11)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 818, top: 288, width: 462, height: 438, background: "rgba(130, 72, 255, 0.17)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 776, top: 309, width: 504, height: 417, background: "rgba(130, 72, 255, 0.22)", borderRadius: 0 }}
        />

        {/* Soft purple atmospheric glow — rendered AFTER panels so it sits on top */}
        <div
          aria-hidden
          className="pointer-events-none absolute opacity-40 dark:opacity-100 transition-opacity duration-300"
          style={{
            left: 700,
            top: 90,
            width: 760,
            height: 620,
            background:
              "radial-gradient(ellipse at center, rgba(146, 78, 255, 0.26) 0%, rgba(146, 78, 255, 0.12) 42%, rgba(146, 78, 255, 0.04) 68%, rgba(146, 78, 255, 0) 100%)",
            filter: "blur(28px)",
          }}
        />

        {/* Smooth background blend inside circuit-line area */}
        <div
          aria-hidden
          className="pointer-events-none absolute transition-all duration-300 opacity-40 dark:opacity-100"
          style={{
            left: 180,
            top: 20,
            width: 1100,
            height: 706,
            background:
              "linear-gradient(120deg, var(--hero-blend-1) 0%, var(--hero-blend-2) 26%, var(--hero-blend-3) 52%, var(--hero-blend-4) 76%, var(--hero-blend-5) 100%)",
            maskImage:
              "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,1) 56%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,1) 56%, rgba(0,0,0,1) 100%)",
          }}
        />
        <style jsx>{`
          div { 
            --hero-blend-1: rgba(255,255,255,0.5); 
            --hero-blend-2: rgba(240,240,255,0.4); 
            --hero-blend-3: rgba(230,220,255,0.3); 
            --hero-blend-4: rgba(220,210,255,0.2); 
            --hero-blend-5: rgba(210,200,255,0.2); 
          }
          :global(.dark) div { 
            --hero-blend-1: rgba(0,0,0,0.52); 
            --hero-blend-2: rgba(28, 18, 58, 0.42); 
            --hero-blend-3: rgba(86, 48, 156, 0.34); 
            --hero-blend-4: rgba(126, 72, 214, 0.30); 
            --hero-blend-5: rgba(160, 98, 242, 0.28); 
          }
        `}</style>

        <div
          aria-hidden
          className="pointer-events-none absolute opacity-40 dark:opacity-100 transition-opacity duration-300"
          style={{
            left: 640,
            top: 150,
            width: 640,
            height: 460,
            background:
              "radial-gradient(ellipse at 60% 58%, rgba(255,255,255,0.96) 0%, rgba(252,245,255,0.84) 22%, rgba(231,198,255,0.56) 44%, rgba(192,132,255,0.28) 66%, rgba(192,132,255,0) 100%)",
            filter: "blur(12px)",
          }}
        />
        {/* Local white bloom behind mascot body/legs */}
        <div
          aria-hidden
          className="pointer-events-none absolute opacity-40 dark:opacity-100 transition-opacity duration-300"
          style={{
            left: 760,
            top: 310,
            width: 520,
            height: 360,
            background:
              "radial-gradient(ellipse at 62% 56%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.86) 24%, rgba(245,228,255,0.54) 48%, rgba(210,160,255,0.24) 70%, rgba(210,160,255,0) 100%)",
            filter: "blur(14px)",
          }}
        />

        {/* Robot character — floating + subtle 3D tilt */}
        <Float
          amplitude={10}
          rotate={1.5}
          duration={7}
          motion3d
          className="pointer-events-none absolute z-20"
          style={{
            left: 653,
            top: 40,
            width: 600,
            height: 600,
            perspective: "1000px",
          }}
        >
          <Image
            src="/images/hero/robot.webp"
            alt="AI robot hero illustration"
            fill
            sizes="645px"
            className="object-contain animate-float-x dark:opacity-100 opacity-80 transition-opacity duration-300"
            priority
          />
        </Float>


        {/* Heading line 1: "The Marketplace for" */}
        <motion.h1
          className="absolute m-0 text-black dark:text-white transition-colors duration-300"
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            left: 24,
            top: 132,
            width: 628,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 64,
            lineHeight: "72px",
            letterSpacing: "-0.0562em",
            textShadow: "0 4px 28px rgba(0, 0, 0, 0.1)",
          }}
        >
          The Marketplace for
        </motion.h1>

        {/* Heading line 2: "AI Agents" */}
        <motion.div
          className="absolute"
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          style={{
            left: 33,
            top: 201,
            width: 628,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 88,
            lineHeight: "1.14em",
            paddingBottom: 14,
            background: "linear-gradient(180deg, #1672DF 0%, #1E40AF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 6px 30px rgba(22, 114, 223, 0.2)",
          }}
        >
           <span className="dark:hidden">AI Agents</span>
        </motion.div>
        <motion.div
          className="absolute hidden dark:block"
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          style={{
            left: 33,
            top: 201,
            width: 628,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 88,
            lineHeight: "1.14em",
            paddingBottom: 14,
            background: "linear-gradient(180deg, #A4C8FF 0%, #D1E1FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 6px 30px rgba(164, 200, 255, 0.3)",
          }}
        >
          AI Agents
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="absolute m-0 text-slate-600 dark:text-[#a7aab9] transition-colors duration-300"
          initial={mounted ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          style={{
            left: 28,
            top: 365,
            width: 508.73,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "32.5px",
          }}
        >
          Discover, deploy, and monetize high-performance decentralized
          intelligence. The premier ecosystem for chaining autonomous
          workflows across industries.
        </motion.p>

        {/* Button row */}
        <motion.div
          className="absolute flex flex-row items-center"
          style={{ left: 30, top: 511, gap: 14 }}
          initial={mounted ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
        >
          <Link href="/connect-us">
            <Button variant="hero">Join Waitlist</Button>
          </Link>
          <Link href="/marketplace">
            <Button variant="hero">Explore Platform</Button>
          </Link>
        </motion.div>

        <PartnerMarquee 
          className="absolute z-10" 
          containerWidth={1291}
          style={{ left: -4, top: 637 }}
        />
      </div>
    </section>
  );
}

function HeroMobile() {
  const prefersReducedMotion = useReducedMotion();
  const stripActive = !prefersReducedMotion;

  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300 bg-white dark:bg-[#02040A]"
    >
      {/* Restored ambient gradient and circuit detail for mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute opacity-20 dark:opacity-55 transition-opacity duration-300"
        style={{
          left: "50%",
          top: -80,
          width: "140%",
          height: 320,
          transform: "translateX(-50%)",
          background: BLUE_GRADIENT,
          filter: "blur(120px)",
        }}
      />
      {/* Purple glow anchored behind mascot */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 dark:opacity-100 transition-opacity duration-300"
        style={{
          width: 420,
          height: 320,
          background:
            "radial-gradient(ellipse at center, rgba(186,132,255,0.42) 0%, rgba(148,88,255,0.26) 40%, rgba(108,64,220,0.14) 66%, rgba(108,64,220,0) 100%)",
          filter: "blur(18px)",
        }}
      />
      {/* Desktop-style circuit backdrop behind mascot */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[226px] -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-68 transition-opacity duration-300"
        style={{ width: 520, height: 420 }}
      >
        <Image
          src="/images/hero/circuit-lines.svg"
          alt=""
          fill
          sizes="520px"
          className="object-contain object-center dark:invert-0 invert transition-all duration-300"
        />
      </div>

      <div className="relative flex flex-col items-center gap-8 px-6 pt-20 pb-10 text-center">
        {/* Robot — compact, centered, floating */}
        <Float
          amplitude={8}
          duration={7}
          className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]"
        >
          <Image
            src="/images/hero/robot.webp"
            alt="AI robot hero illustration"
            fill
            sizes="(max-width: 640px) 260px, 320px"
            className="object-contain dark:opacity-100 opacity-80 transition-opacity duration-300"
            priority
          />
        </Float>

        {/* Heading line 1 */}
        <h1
          className="m-0 text-black dark:text-white transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(32px, 9vw, 48px)",
            lineHeight: 1.05,
            letterSpacing: "-0.0562em",
          }}
        >
          The Marketplace for
        </h1>

        {/* Heading line 2 */}
        <div
          className="transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(44px, 13vw, 72px)",
            lineHeight: "1.1em",
            paddingBottom: 6,
            background: "linear-gradient(180deg, #1672DF 0%, #1E40AF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
           <span className="dark:hidden">AI Agents</span>
        </div>
        <div
          className="transition-colors duration-300 hidden dark:block"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(44px, 13vw, 72px)",
            lineHeight: "1.1em",
            paddingBottom: 6,
            background: "linear-gradient(180deg, #A4C8FF 0%, #D1E1FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI Agents
        </div>

        {/* Subtext */}
        <p
          className="m-0 max-w-[480px] text-slate-600 dark:text-[#a7aab9] transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "26px",
          }}
        >
          Discover, deploy, and monetize high-performance decentralized
          intelligence. The premier ecosystem for chaining autonomous
          workflows across industries.
        </p>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/connect-us">
            <Button variant="hero-primary">Join Waitlist</Button>
          </Link>
          <Link href="/marketplace">
            <Button variant="hero">Explore Platform</Button>
          </Link>
        </div>
      </div>

      {/* Logo strip — auto-scrolling marquee */}
      <div
        className="relative overflow-hidden transition-colors duration-300 bg-white dark:bg-black border-y border-black/10 dark:border-white/20"
        style={{
          height: 72,
        }}
      >
        <motion.div
          className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center"
          style={{
            transformPerspective: 1000,
            rotateX: 3,
            transformOrigin: "50% 100%",
          }}
          animate={stripActive ? { x: ["0%", "-50%"] } : undefined}
          transition={
            stripActive
              ? { duration: 20, ease: "linear", repeat: Infinity }
              : undefined
          }
        >
          {[0, 1].map((copyIdx) => (
            <div
              key={copyIdx}
              className="flex items-center"
              style={{ minWidth: 720, height: 72, gap: 32, padding: "0 24px" }}
            >
              {PARTNERS.map((p, i) => (
                <Float
                  key={`${copyIdx}-${p.name}-m`}
                  motion3d
                  amplitude={2}
                  duration={3 + (i % 2)}
                  className="relative flex-shrink-0"
                  style={{ width: p.w * 0.75, height: p.h * 0.75 }}
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes={`${Math.round(p.w * 0.75)}px`}
                    className="object-contain dark:invert-0 invert opacity-20 dark:opacity-100 transition-all duration-300"
                  />
                </Float>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
