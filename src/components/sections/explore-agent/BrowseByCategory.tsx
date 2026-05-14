"use client";

import Image from "next/image";
import Link from "next/link";
import { typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

// ─────────────────────────────────────────────────────────────────────────────
// BrowseByCategory.tsx
// Theme Toggle Fully Working
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 228;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const CATEGORIES = [
  { name: "Marketing", icon: "icon-marketing.svg", iconW: 30, iconH: 24 },
  { name: "Design", icon: "icon-design.svg", iconW: 30, iconH: 30 },
  { name: "Development", icon: "icon-development.svg", iconW: 30, iconH: 18 },
  { name: "Finance", icon: "icon-finance.svg", iconW: 30, iconH: 30 },
  { name: "Legal", icon: "icon-legal.svg", iconW: 27, iconH: 28.5 },
  { name: "Automation", icon: "icon-automation.svg", iconW: 33, iconH: 33 },
];

export default function BrowseByCategory() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ───────────────── Desktop ─────────────────

function SectionDesktop() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className={`relative hidden w-full overflow-hidden md:block transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        marginTop: 48,
      }}
    >
      <div
        className="absolute top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top center",
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
        }}
      >
        <div
          className="absolute flex flex-col"
          style={{
            left: 32,
            top: 0,
            width: 1216,
            gap: 48,
          }}
        >
          <SectionHeading />

          <div className="grid w-full grid-cols-6 gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryLink
                key={cat.name}
                category={cat}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────── Mobile ─────────────────

function SectionMobile() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className={`relative block w-full overflow-hidden md:hidden transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-6 px-6 py-12">
        <SectionHeading />

        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryLink
              key={cat.name}
              category={cat}
              mobile
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────── Heading ─────────────────

function SectionHeading() {
  const { isDark } = useThemeTokens();

  return (
    <h2
      className={`m-0 transition-colors duration-300 ${
        isDark ? "text-white" : "text-[#191C1E]"
      }`}
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize: "clamp(24px, 6vw, 30px)",
        lineHeight: "1.2",
        letterSpacing: "-0.025em",
      }}
    >
      Browse by category
    </h2>
  );
}

// ───────────────── Category Card ─────────────────

function CategoryLink({
  category,
  mobile = false,
}: {
  category: {
    name: string;
    icon: string;
    iconW: number;
    iconH: number;
  };
  mobile?: boolean;
}) {
  const { isDark } = useThemeTokens();

  return (
    <Link href="/marketplace" className="w-full">
      <div
        className={`
          flex flex-col items-center justify-center w-full
          transition-all duration-300
          hover:scale-105 cursor-pointer
          border
          ${
            isDark
              ? "bg-[#111827] border-white/10 hover:bg-[#1F2937]"
              : "bg-[#F2F4F7] border-transparent hover:bg-[#E9EEF5]"
          }
        `}
        style={{
          borderRadius: radiuses.card,
          padding: mobile ? "24px 16px" : 32,
          gap: 16,
          minHeight: 144,
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{ height: 33 }}
        >
          <Image
            src={`/section-4-explore-agent/${category.icon}`}
            alt={category.name}
            width={category.iconW}
            height={category.iconH}
            className={`object-contain transition-all duration-300 ${
              isDark ? "brightness-200" : ""
            }`}
          />
        </div>

        <span
          className={`transition-colors duration-300 ${
            isDark ? "text-white" : "text-[#191C1E]"
          }`}
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          {category.name}
        </span>
      </div>
    </Link>
  );
}