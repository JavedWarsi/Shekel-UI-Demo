"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { typography } from "@/tokens/design-tokens";

const ITEMS = [
  {
    icon: "/section-4-create-ai-agent-page/icon-1.svg",
    title: "Marketplace Presence",
    body: "Your agent appears in our global marketplace, visible to thousands of potential users.",
  },
  {
    icon: "/section-4-create-ai-agent-page/icon-2.svg",
    title: "Organic Discovery",
    body: "Users can discover, search for, and run your agent for their specific business needs.",
  },
  {
    icon: "/section-4-create-ai-agent-page/icon-3.svg",
    title: "Earn Revenue",
    body: "You earn directly from every execution, providing a scalable passive income stream.",
  },
];

export default function PostPublishFlow() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <section className="px-4 md:px-8">
      <div
        className="mx-auto max-w-[1024px] rounded-[32px] p-6 md:p-10 transition-colors duration-300"
        style={{
          background: isDark ? "#111827" : "#ffffff",
          border: isDark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(193,198,213,0.2)",
        }}
      >
        <h2
          className="text-center"
          style={{
            margin: 0,
            color: isDark ? "#ffffff" : "#191c1e",
            fontFamily: typography.fonts.poppins,
            fontSize: 36,
            lineHeight: "42px",
            fontWeight: 500,
          }}
        >
          What happens after you publish?
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 text-center transition-colors duration-300"
              style={{
                background: isDark ? "#0f172a" : "#f8fafc",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(193,198,213,0.12)",
              }}
            >
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: isDark ? "rgba(59,130,246,0.15)" : "#daf2fd",
                }}
              >
                <Image src={item.icon} alt="" width={28} height={24} />
              </div>

              <h3
                style={{
                  margin: "18px 0 10px",
                  color: isDark ? "#ffffff" : "#191c1e",
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 30,
                  lineHeight: "36px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: isDark ? "#cbd5e1" : "#414753",
                  lineHeight: "22px",
                  fontFamily: typography.fonts.inter,
                  fontSize: 15,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}