"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const CTA_TEXT_LEFT = 406;
const CTA_TEXT_WIDTH = 683;
const CTA_BODY_WIDTH = 540;

function Desktop() {
  return (
    <section className="relative hidden w-full overflow-visible md:block mb-10" style={{ aspectRatio: `${CANVAS_W}/${CANVAS_H}`, containerType: "inline-size" }}>
      <div className="absolute left-0 top-0 overflow-visible" style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${SCALE})`, transformOrigin: "top left" }}>
        <div className="absolute inset-0 overflow-hidden  bg-black">
          <Image src="/section-7-create-ai-agent-page/cta-bg.png" alt="" fill className="object-cover rounded-3xl dark:opacity-30" />
          <Image
            src="/section-7-create-ai-agent-page/robot.png"
            alt=""
            width={360}
            height={421}
            className="pointer-events-none absolute right-[-92px] top-[128px] z-10 blur-[3.5px] animate-float opacity-90"
          />
          <h2
            style={{
              margin: 0,
              position: "absolute",
              left: CTA_TEXT_LEFT,
              top: 113,
              width: CTA_TEXT_WIDTH,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "72px",
              lineHeight: "72px",
              letterSpacing: "-3.6px",
              textAlign: "center",
              verticalAlign: "middle",
              textTransform: "capitalize",
              // color: "#000",
            }}
          >
            Start exploring AI agents
          </h2>
          <div className="absolute top-[302px] flex gap-4 justify-center" style={{ left: CTA_TEXT_LEFT, textTransform: 'uppercase', paddingLeft: '10%' }}>
            <button className="h-[60px] min-w-[200px] rounded-[10px] px-10 text-sm uppercase tracking-[1.4px] text-white" style={{ background: "linear-gradient(188.63deg, #2864e4 35.4%, #1e9aff 67.2%, #c6f8ff 151.2%)" }}>Explore Agents</button>
            <button className="h-[62px] min-w-[200px] rounded-[10px] border border-[#2864e4] bg-white px-10 text-sm uppercase tracking-[1.4px]" style={{ color: "#2864e4" }}>Start Building</button>
          </div>
          <p
            style={{
              margin: 0,
              position: "absolute",
              left: CTA_TEXT_LEFT,
              top: 407,
              width: CTA_BODY_WIDTH,
              textAlign: "center",
              // color: "#303030",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "10px",
              lineHeight: "16px",
              letterSpacing: "3.6px",
              textTransform: "uppercase",
              verticalAlign: "middle",
              paddingLeft: '13%'
            }}
          >
            Join thousands of users and developers
            <br />
            already using Shekel
          </p>
        </div>
        <Image
          src="/section-8/rocket.webp"
          alt=""
          width={560}
          height={620}
          className="pointer-events-none absolute left-[-126px] top-[-84px] z-20 animate-float rotate-[25deg] "
          style={{ transform: "scaleX(-1) rotate(-30deg)" }}
        />
      </div>
    </section>
  );
}

function Mobile() {
  return (
    <section className="mx-4 rounded-2xl p-6 md:hidden dark:opacity-50 dark:text-black" style={{ backgroundImage: "url('/section-7-create-ai-agent-page/cta-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <h2 style={{ margin: 0,fontFamily: typography.fonts.inter, fontSize: "clamp(32px,9vw,44px)", lineHeight: 1.1 }}>Ready to launch your AI agent?</h2>
      <div className="mt-4 grid gap-2">
        <button className="rounded-xl py-3 text-sm uppercase tracking-[1.4px] text-white" style={{ background: colors.brand.blue }}>Publish Agent</button>
        <button className="rounded-xl border border-[#2864e4] bg-white py-3 text-sm uppercase tracking-[1.4px]" style={{ color: "#2864e4" }}>Explore Agents</button>
      </div>
    </section>
  );
}

export default function CreateAgentCta() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
