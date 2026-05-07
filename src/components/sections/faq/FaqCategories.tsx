"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 1200;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 ICON PATHS — Simply update these paths to swap any icon
// ─────────────────────────────────────────────────────────────────────────────
const ICONS = {
  gettingStarted: "/section-2-faq/gettingstrt.svg",
  aiAgents: "/section-2-faq/aiagent.svg",
  workflows: "/section-2-faq/wf.svg",
  usage: "/section-2-faq/usage.svg",
  whatsappchat: "/section-2-faq/wpm.svg",
};

// ─────────────────────────────────────────────────────────────────────────────
// CategoryIcon — renders any SVG by file path via next/image
// ─────────────────────────────────────────────────────────────────────────────
function CategoryIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={22}
      height={22}
      style={{ objectFit: "contain", display: "block" }}
      unoptimized
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Row icons
// ─────────────────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M4 6L8 10L12 6" stroke="#0B0B0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M3 8h10M8 3v10" stroke="#0B0B0B" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function CategoryHeader({ iconSrc, title }: { iconSrc: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#DBEAFE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <CategoryIcon src={iconSrc} />
      </div>
      <span style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize: 18,
        lineHeight: "24px",
        color: "#0B0B0B",
      }}>
        {title}
      </span>
    </div>
  );
}

function QuestionRowChevron({ question }: { question: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "#fff", border: "1px solid #E5E7EB", borderRadius: 14,
      padding: "18px 20px", cursor: "pointer", gap: 12,
      boxShadow: "0px 4px 20px -2px rgba(0,0,0,0.05)",
    }}>
      <span style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 600, fontSize: 15, lineHeight: "22px", color: "#0B0B0B",
      }}>
        {question}
      </span>
      <ChevronDown />
    </div>
  );
}

function QuestionRowPlus({ question }: { question: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "#fff", border: "1px solid #E5E7EB", borderRadius: 14,
      padding: "16px 16px", cursor: "pointer", gap: 8,
      boxShadow: "0px 4px 20px -2px rgba(0,0,0,0.05)",
    }}>
      <span style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 600, fontSize: 13, lineHeight: "19px", color: "#0B0B0B",
      }}>
        {question}
      </span>
      <PlusIcon />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export default function FaqCategories() {
  return (
    <>
      {/* ═══════════ DESKTOP (≥ 768px) ═══════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
        }}
      >
        <div
          className="absolute left-0 top-0 flex w-full flex-col items-center pt-24"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <div style={{ width: 1024, display: "flex", flexDirection: "column", gap: 96, padding: "0 32px" }}>

            {/* Getting Started */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CategoryHeader iconSrc={ICONS.gettingStarted} title="Getting Started" />
              <QuestionRowChevron question="What is Shekel?" />
              <QuestionRowChevron question="Technical knowledge required?" />
            </div>

            {/* AI Agents */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CategoryHeader iconSrc={ICONS.aiAgents} title="AI Agents" />
              <QuestionRowChevron question="What are AI agents?" />
              <QuestionRowChevron question="Creating own agents?" />
            </div>

            {/* Still Need Help */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fff", border: "1px solid #E5E7EB", borderRadius: 32,
              padding: "64px 40px", position: "relative", overflow: "hidden",
            }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2 style={{
                  fontFamily: typography.fonts.jakarta, fontWeight: 700,
                  fontSize: 30, lineHeight: "36px", color: "#0B0B0B",
                }}>
                  Still need help?
                </h2>
                <p style={{
                  fontFamily: typography.fonts.inter, fontWeight: 400,
                  fontSize: 16, lineHeight: "24px",
                  color: "rgba(0,0,0,0.55)", maxWidth: 442,
                }}>
                  If you couldn't find your answer, our team of AI specialists is
                  here to assist you with technical integration or billing.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, zIndex: 1 }}>
                <button style={{
                  border: "1px solid #E5E7EB", borderRadius: 14, background: "#fff",
                  padding: "14px 40px", fontFamily: typography.fonts.inter,
                  fontWeight: 600, fontSize: 16, color: "#0B0B0B", cursor: "pointer",
                  boxShadow: "0px 4px 20px -2px rgba(0,0,0,0.05)",
                }}>
                  Contact Support
                </button>
                <button style={{
                  border: "none", borderRadius: 14, padding: "14px 32px",
                  background: "linear-gradient(160deg, #4a8af4 0%, #a8c4ff 100%)",
                  fontFamily: typography.fonts.inter, fontWeight: 600,
                  fontSize: 16, color: "#fff", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <img
                    src={ICONS.whatsappchat}
                    alt="WhatsApp"
                    style={{ width: 18, height: 18 }}
                  />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Bottom Grid — Workflows & Usage */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CategoryHeader iconSrc={ICONS.workflows} title="Workflows" />
                <QuestionRowPlus question="What is a workflow?" />
                <QuestionRowPlus question="How they work?" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CategoryHeader iconSrc={ICONS.usage} title="Usage" />
                <QuestionRowPlus question="Running agents" />
                <QuestionRowPlus question="Connecting agents" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ MOBILE (< 768px) ═══════════ */}
      <section
        className="block w-full px-4 py-8 md:hidden"
        style={{ backgroundColor: "#EEF2F8" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CategoryHeader iconSrc={ICONS.gettingStarted} title="Getting Started" />
            <QuestionRowChevron question="What is Shekel?" />
            <QuestionRowChevron question="Technical knowledge required?" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CategoryHeader iconSrc={ICONS.aiAgents} title="AI Agents" />
            <QuestionRowChevron question="What are AI agents?" />
            <QuestionRowChevron question="Creating own agents?" />
          </div>

          {/* Still Need Help — mobile */}
          <div style={{
            background: "#fff", border: "1px solid #E5E7EB", borderRadius: 20,
            padding: "28px 20px", display: "flex", flexDirection: "column", gap: 20,
            position: "relative", overflow: "hidden",
          }}>
            <svg
              style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: "90%", pointerEvents: "none" }}
              viewBox="0 0 300 40" fill="none"
            >
              <line x1="0" y1="20" x2="128" y2="20" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="172" y1="20" x2="300" y2="20" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 4" />
              <g transform="translate(133,8)">
                <line x1="12" y1="0" x2="0" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
                <line x1="0" y1="0" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
                <line x1="12" y1="0" x2="24" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
                <line x1="24" y1="0" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
              </g>
            </svg>

            <div>
              <h2 style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 22, color: "#0B0B0B", marginBottom: 8 }}>
                Still need help?
              </h2>
              <p style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 13, lineHeight: "20px", color: "rgba(0,0,0,0.55)" }}>
                If you couldn't find your answer, our team of AI specialists is
                here to assist you with technical integration or billing.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button style={{
                flex: 1, border: "1px solid #E5E7EB", borderRadius: 12, background: "#fff",
                padding: "12px 8px", fontFamily: typography.fonts.inter, fontWeight: 600,
                fontSize: 14, color: "#0B0B0B", cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                Contact Support
              </button>
              <button style={{
                flex: 1, border: "none", borderRadius: 12,
                background: "linear-gradient(160deg, #4a8af4 0%, #a8c4ff 100%)",
                padding: "12px 8px", fontFamily: typography.fonts.inter, fontWeight: 600,
                fontSize: 14, color: "#fff", cursor: "pointer",
              }}>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Bottom Grid — mobile */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CategoryHeader iconSrc={ICONS.workflows} title="Workflows" />
              <QuestionRowPlus question="What is a workflow?" />
              <QuestionRowPlus question="How they work?" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CategoryHeader iconSrc={ICONS.usage} title="Usage" />
              <QuestionRowPlus question="Running agents" />
              <QuestionRowPlus question="Connecting agents" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}