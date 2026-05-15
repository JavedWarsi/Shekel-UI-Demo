"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const LOGOS = [
  { src: "/section-3-pricing/logo-1.png", w: 210, h: 57 },
  { src: "/section-3-pricing/image 65.png", w: 226, h: 72 },
  { src: "/section-3-pricing/logo-2.png", w: 120, h: 72 },
  { src: "/section-3-pricing/logo-3.png", w: 119, h: 119 },
  { src: "/section-3-pricing/image 69.png", w: 239, h: 44 },
  { src: "/section-3-pricing/logo-4.png", w: 85, h: 89 },
  { src: "/section-3-pricing/logo-5.png", w: 223, h: 57 },
  { src: "/section-3-pricing/image 71.png", w: 141, h: 117 },
];
// const LOGOS = [
//   {
//     name: "OpenAI",
//     src: "/logos/openai.svg",
//   },
//   {
//     name: "Meta",
//     src: "/logos/meta.svg",
//   },
//   {
//     name: "AWS",
//     src: "/logos/aws.svg",
//   },
//   {
//     name: "Notion",
//     src: "/logos/notion.svg",
//   },
//   {
//     name: "Anthropic",
//     src: "/logos/anthropic.svg",
//   },
//   {
//     name: "Slack",
//     src: "/logos/slack.svg",
//   },
//   {
//     name: "Azure",
//     src: "/logos/azure.svg",
//   },
//   {
//     name: "Arc",
//     src: "/logos/arc.svg",
//   },
// ];

export default function TrustedTeams() {
  return (
    <section className="w-full px-4 sm:px-6 h-150 lg:px-8 py-16 md:py-24 bg-[#F7F8FC] dark:bg-[#05070C] border border-slate-900/10 shadow-inner relative overflow-hidden rounded-[32px]">
  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-40 dark:opacity-10"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)
      `,
      backgroundSize: "48px 48px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 85%)",
      WebkitMaskImage:
        "radial-gradient(circle at center, black 30%, transparent 85%)",
    }}
  />

  {/* Bottom Glow */}
  <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center gap-12 md:gap-16">
    
    {/* Heading */}
    <div className="flex flex-col gap-4">
      <h2
        className="text-[#0B0D12] dark:text-white tracking-[-0.03em]"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(36px, 5vw, 56px)",
          lineHeight: "1.05",
        }}
      >
        Trusted by creators and teams worldwide.
      </h2>

      <p className="text-[#4B5563] dark:text-slate-400 text-base md:text-lg font-medium">
        Join thousands using AI agents to automate workflows.
      </p>
    </div>

    {/* Logos */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-14 gap-y-12 items-center justify-items-center w-full max-w-5xl">
      {LOGOS.map((logo, i) => (
        <div
          key={i}
          className="group transition-all duration-300 opacity-80 hover:opacity-100"
        >
          <img
            src={logo.src}
            // alt={logo.name}
            className="
              h-[42px] md:h-[54px]
              w-auto object-contain
              grayscale group-hover:grayscale-0
              transition-all duration-300
              dark:invert dark:brightness-200
            "
          />
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
