"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CARDS = [
  {
    icon: "/section-2-about/card-icon-1.svg",
    title: "Data Analyst",
    body: "Synthesizes market trends in real-time.",
  },
  {
    icon: "/section-2-about/card-icon-2.svg",
    title: "DevOps Pilot",
    body: "Automates CI/CD pipelines effortlessly.",
  },
  {
    icon: "/section-2-about/card-icon-3.svg",
    title: "Growth Agent",
    body: "Optimizes ad spend across channels.",
  },
  {
    icon: "/section-2-about/card-icon-4.svg",
    title: "Customer Logic",
    body: "Resolves tier-1 tickets instantly.",
  },
];

export default function WhatIsShekel() {
  const { isDark } = useThemeTokens();

  return (
    <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#05070C] md:px-16">
      <div className="mx-auto grid max-w-[1232px] gap-10 md:grid-cols-2 md:gap-20">
        
        {/* LEFT CONTENT */}
        <div>
          <h2
            className="text-black dark:text-white"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(34px, 5vw, 48px)",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
            }}
          >
            Autonomous operations,
            <br />
            curated by you.
          </h2>

          <p
            className="mt-6 max-w-[560px] text-black dark:text-gray-400"
            style={{
              marginBottom: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "29.25px",
            }}
          >
            Shekel is more than a marketplace. It is the infrastructure for
            the next generation of labor. We provide a modular system where
            specialized AI agents don&apos;t just complete tasks, they integrate
            into precision-engineered workflows that run your business.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            {/* Button 1 */}
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderRadius: radiuses.pill,
                background: "#1F1F23",
                fontFamily: typography.fonts.inter,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              Marketplace of 200+ Agents
            </button>

            {/* Button 2 */}
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderRadius: radiuses.pill,
                background: "#1F1F23",
                fontFamily: typography.fonts.inter,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              Visual Workflow Canvas
            </button>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className=" p-6 transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800 dark:shadow-lg"
              style={{
                borderRadius: 24,
                // borderRadius: radiuses.pill,
                // borderColor: isDark
                //   ? "rgba(255,255,255,0.1)"
                //   : "rgba(65,71,83,0.15)",
                // background: isDark
                //   ? "rgba(255,255,255,0.03)"
                //   : "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.5))",
                backdropFilter: "blur(6px)",
                boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
              }}
            >
              <div
                className="mb-4 inline-flex rounded-lg p-3"
                style={{
                  backgroundColor: isDark
                    ? "rgba(59,130,246,0.1)"
                    : "rgba(171,199,255,0.2)",
                }}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={20}
                  height={20}
                  className={isDark ? "brightness-200" : ""}
                />
              </div>

              <h3
                className="text-black dark:text-white"
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 22,
                  lineHeight: "30px",
                }}
              >
                {card.title}
              </h3>

              <p
                className="mt-2 text-black dark:text-gray-400"
                style={{
                  marginBottom: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22px",
                }}
              >
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}