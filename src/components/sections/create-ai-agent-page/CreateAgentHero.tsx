"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Float } from "@/components/shared/motion/Float";
import { PartnerMarquee } from "@/components/shared/PartnerMarquee";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const PURPLE = "#b557fa";
const PURPLE_GROUP_SHIFT_X = -208;

const TUNNEL = [
  { l: 661.8, t: 172.2, w: 357.2, h: 320.5, o: 1, r: 30 },
  { l: 645.4, t: 157.5, w: 390, h: 349.8, o: 0.9, r: 30 },
  { l: 629.4, t: 143.1, w: 422.1, h: 378.6, o: 0.8, r: 30 },
  { l: 610.8, t: 126.4, w: 459.3, h: 412, o: 0.7, r: 30 },
  { l: 593, t: 110.5, w: 494.9, h: 443.9, o: 0.6, r: 30 },
  { l: 576.3, t: 95.5, w: 528.3, h: 473.9, o: 0.5, r: 30 },
  { l: 560.2, t: 81, w: 560.4, h: 502.8, o: 0.4, r: 30 },
  { l: 542, t: 67, w: 596.8, h: 530.9, o: 0.3, r: 30 },
  { l: 523.8, t: 54, w: 633.2, h: 556.9, o: 0.3, r: 20 },
  { l: 502.7, t: 54, w: 675.4, h: 556.9, o: 0.2, r: 0 },
  { l: 482, t: 54, w: 716.8, h: 556.9, o: 0.1, r: 0 },
  { l: 461.3, t: 54, w: 758.3, h: 556.9, o: 0.08, r: 0 },
  { l: 437.6, t: 54, w: 805.6, h: 556.9, o: 0.06, r: 0 },
  { l: 415, t: 54, w: 850.8, h: 556.9, o: 0.05, r: 0 },
];

const PARTNER_LOGOS = [
  { src: "/section-1-create-ai-agent-page/logo-openai.png", alt: "OpenAI", w: 103, h: 28 },
  { src: "/section-1-create-ai-agent-page/logo-google-ai.png", alt: "Google AI", w: 134, h: 73 },
  { src: "/section-1-create-ai-agent-page/logo-anthropic.svg", alt: "Anthropic", w: 185, h: 123 },
  { src: "/section-1-create-ai-agent-page/logo-azure.png", alt: "Azure", w: 90, h: 26 },
  { src: "/section-1-create-ai-agent-page/logo-meta.png", alt: "Meta", w: 95, h: 19 },
  { src: "/section-1-create-ai-agent-page/logo-notion.png", alt: "Notion", w: 102, h: 72 },
  { src: "/section-1-create-ai-agent-page/logo-slack.png", alt: "Slack", w: 103, h: 42 },
  { src: "/section-1-create-ai-agent-page/logo-aws.png", alt: "AWS", w: 50, h: 50 },
] as const;

function Desktop() {
  const prefersReducedMotion = useReducedMotion();
  const marqueeOn = !prefersReducedMotion;

  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{ backgroundColor: colors.black, aspectRatio: `${CANVAS_W}/${CANVAS_H}`, containerType: "inline-size" }}
    >
      <div
        className="absolute left-0 top-0"
        style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${SCALE})`, transformOrigin: "top left" }}
      >
        <Image src="/section-1-create-ai-agent-page/hero-ellipse-top.png" alt="" width={1343} height={211} className="absolute left-[-19px] top-[-49px]" />
        <Image src="/section-1-create-ai-agent-page/hero-ellipse-left.png" alt="" width={163} height={163} className="absolute left-[-98px] top-[-139px]" />
        <Image src="/section-1-create-ai-agent-page/hero-ellipse-right.png" alt="" width={163} height={163} className="absolute left-[1252px] top-[-82px]" />

        <h1
          className="absolute m-0 bg-clip-text text-transparent"
          style={{
            left: 45,
            top: 46,
            width: 794,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 64,
            lineHeight: "82px",
            paddingBottom: 8,
            letterSpacing: "-0.9px",
            backgroundImage: "linear-gradient(184.67deg,#fff 55.6%,rgba(255,255,255,0) 110.73%)",
          }}
        >
          Create AI Agent
        </h1>

        {TUNNEL.map((r, i) => (
          <div
            key={i}
            className="absolute mix-blend-difference"
            style={{ left: r.l + PURPLE_GROUP_SHIFT_X, top: r.t, width: r.w, height: r.h, border: `1px solid ${PURPLE}`, borderRadius: r.r, opacity: r.o }}
          />
        ))}
        <Image
          src="/section-1-create-ai-agent-page/hero-glow-right.svg"
          alt=""
          width={980}
          height={900}
          className="absolute left-[147px] top-[-117px] mix-blend-screen object-cover"
        />
        <Float
          motion3d
          amplitude={10}
          rotate={1.5}
          duration={7}
          className="pointer-events-none absolute left-[322px] top-[6px] z-10"
          style={{ width: 640, height: 634, perspective: "1000px" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/hero/robot.webp"
              alt="AI agent illustration"
              fill
              sizes="640px"
              className="object-contain"
              priority
            />
          </div>
        </Float>

        <p style={{ position: "absolute", left: 838, top: 482, margin: 0, width: 387, color: colors.white, fontSize: 18, lineHeight: "28px", fontFamily: typography.fonts.inter, zIndex: 30 }}>
          Define the identity, logic, and pricing of your autonomous agent.
        </p>

        <PartnerMarquee 
          className="absolute z-20"
          containerWidth={1291}
          style={{ left: -4, top: 627 }}
          partners={PARTNER_LOGOS.map(p => ({ ...p, name: p.alt }))}
        />
      </div>
    </section>
  );
}

function Mobile() {
  const prefersReducedMotion = useReducedMotion();
  const marqueeOn = !prefersReducedMotion;

  return (
    <section className="block w-full bg-black px-4 py-10 md:hidden">
      <h1 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(34px,9vw,48px)", lineHeight: 1.1 }}>Create AI Agent</h1>
      <div className="relative mx-auto mt-6 h-56 w-full max-w-sm">
        <Image src="/section-1-create-ai-agent-page/hero-glow-center.png" alt="" fill className="object-contain mix-blend-screen" />
        <Float
          motion3d
          amplitude={8}
          duration={7}
          className="absolute left-1/2 top-1/2 z-[1] h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2"
          style={{ perspective: "1000px" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/hero/robot.webp"
              alt="AI agent illustration"
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        </Float>
      </div>
      <p style={{ margin: "16px 0 0", color: colors.white, fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "24px" }}>
        Define the identity, logic, and pricing of your autonomous agent.
      </p>
      <div
        className="relative mt-8 overflow-hidden border-y border-white/20 bg-black"
        style={{ height: 72 }}
      >
        <motion.div
          className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center"
          style={{
            transformPerspective: 1000,
            rotateX: 3,
            transformOrigin: "50% 100%",
          }}
          animate={marqueeOn ? { x: ["0%", "-50%"] } : undefined}
          transition={
            marqueeOn ? { duration: 22, ease: "linear", repeat: Infinity } : undefined
          }
        >
            {[0, 1].map((copyIdx) => (
              <div
                key={copyIdx}
                className="flex items-center"
                style={{ minWidth: 720, height: 72, gap: 32, padding: "0 24px" }}
              >
                {PARTNER_LOGOS.map((p, i) => (
                  <Float
                    key={`${copyIdx}-${p.alt}-m`}
                    motion3d
                    amplitude={2}
                    duration={3 + (i % 2)}
                    className="relative flex-shrink-0"
                    style={{ width: p.w * 0.75, height: p.h * 0.75 }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={`${Math.round(p.w * 0.75)}px`}
                      className="object-contain"
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

export default function CreateAgentHero() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
