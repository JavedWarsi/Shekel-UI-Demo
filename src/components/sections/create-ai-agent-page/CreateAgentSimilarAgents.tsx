"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CARDS = [
  {
    name: "CopyGenius Pro",
    rating: "4.7",
    icon: "/section-6-create-ai-agent-page/card-1-glow copy.png",
  },
  {
    name: "VideoCraft AI",
    rating: "4.9",
    icon: "/section-6-create-ai-agent-page/card-2-glow copy.png",
  },
  {
    name: "MetricMaster",
    rating: "4.5",
    icon: "/section-6-create-ai-agent-page/card-3-glow.png",
  },
];

export default function CreateAgentSimilarAgents() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="w-full">
      <div className="w-full px-4 md:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between">
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontSize: 48,
              fontWeight: 600,
              color: isDark ? "#ffffff" : "#191c1e",
            }}
          >
            Similar{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
              }}
            >
              Agents
            </span>
          </h2>

          <Link
            href="/marketplace"
            className={`hidden items-center gap-1 uppercase md:flex ${
              isDark ? "text-white" : "text-black"
            }`}
            style={{
              letterSpacing: "1.4px",
              fontSize: 14,
            }}
          >
            Explore More Agents

            <Image
              src="/section-6-create-ai-agent-page/link-arrow.svg"
              alt=""
              width={9}
              height={9}
              className={isDark ? "invert" : ""}
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-10">
          {CARDS.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                isDark
                  ? "border border-white/10 bg-[#0F172A]"
                  : "bg-[#f2f4f7]"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                  isDark ? "bg-[#1E293B]" : "bg-white"
                } bg-[#1E293B]`}
              >
                <Image src={c.icon} alt="" width={20} height={20} />
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  color: isDark ? "#ffffff" : "#191c1e",
                  fontSize: 14,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 600,
                }}
              >
                {c.name}
              </h3>

              {/* Rating */}
              <p
                style={{
                  margin: "6px 0 18px",
                  color: isDark ? "#94A3B8" : "#727785",
                  fontFamily: typography.fonts.inter,
                }}
              >
                ★ {c.rating}
              </p>

              {/* Button */}
              <Link
                href="/agent-detail"
                className={`block rounded-xl py-3 text-center font-semibold transition-all duration-300 ${
                  isDark
                    ? "border border-white/10 bg-[#1E293B] text-white hover:bg-[#334155]"
                    : "bg-white text-[#191c1e]"
                }`}
                style={{
                  borderRadius: radiuses.inputIcon,
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(193,198,213,0.1)",
                }}
              >
                Run Agent
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}