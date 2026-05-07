"use client";

import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 1200;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

// ── Chevron icon (for Getting Started & AI Agents rows)
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="#0B0B0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Plus icon (for Workflows & Usage rows)
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M8 3v10" stroke="#0B0B0B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// ── Category icon — Getting Started (star shape)
const IconGettingStarted = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L11.5 6.5L17 7.3L13 11.2L14 16.5L9 14L4 16.5L5 11.2L1 7.3L6.5 6.5L9 2Z"
      stroke="#2F80ED" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

// ── Category icon — AI Agents (person + arrow)
const IconAIAgents = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="6" r="3" stroke="#2F80ED" strokeWidth="1.4"/>
    <path d="M3 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#2F80ED" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M13 7l1.5 1.5L16 7" stroke="#2F80ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Category icon — Workflows (list + dot)
const IconWorkflows = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="4" width="14" height="3" rx="1.5" stroke="#2F80ED" strokeWidth="1.3"/>
    <rect x="2" y="10" width="9" height="3" rx="1.5" stroke="#2F80ED" strokeWidth="1.3"/>
    <circle cx="14" cy="11.5" r="2" stroke="#2F80ED" strokeWidth="1.3"/>
  </svg>
);

// ── Category icon — Usage (circle with check)
const IconUsage = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2C5.7 2 3 4.7 3 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" stroke="#2F80ED" strokeWidth="1.3"/>
    <path d="M6 8l2 2 4-4" stroke="#2F80ED" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Question row — chevron variant (top sections)
function QuestionRowChevron({ question }: { question: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "#fff", border: "1px solid #E5E7EB", borderRadius: 14,
      padding: "18px 20px", cursor: "pointer", gap: 12,
      boxShadow: "0px 4px 20px -2px rgba(0,0,0,0.05)",
    }}>
      <span style={{
        fontFamily: typography.fonts.inter, fontWeight: 600,
        fontSize: 15, lineHeight: "22px", color: "#0B0B0B",
      }}>{question}</span>
      <ChevronDown />
    </div>
  );
}

// ── Question row — plus variant (grid sections)
function QuestionRowPlus({ question }: { question: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "#fff", border: "1px solid #E5E7EB", borderRadius: 14,
      padding: "16px 16px", cursor: "pointer", gap: 8,
      boxShadow: "0px 4px 20px -2px rgba(0,0,0,0.05)",
    }}>
      <span style={{
        fontFamily: typography.fonts.inter, fontWeight: 600,
        fontSize: 13, lineHeight: "19px", color: "#0B0B0B",
      }}>{question}</span>
      <PlusIcon />
    </div>
  );
}

// ── Category header
function CategoryHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: "#DBEAFE",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {icon}
      </div>
      <span style={{
        fontFamily: typography.fonts.jakarta, fontWeight: 700,
        fontSize: 18, lineHeight: "24px", color: "#0B0B0B",
      }}>{title}</span>
    </div>
  );
}

export default function FaqCategories() {
  return (
    <>
      {/* DESKTOP */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          // backgroundColor: "#EEF2F8",
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
        }}
      >
        <div
          className="absolute left-0 top-0 flex w-full flex-col items-center pt-24"
          style={{
            width: CANVAS_W, height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <div style={{ width: 1024, display: "flex", flexDirection: "column", gap: 96, padding: "0 32px" }}>

            {/* Getting Started */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CategoryHeader icon={<IconGettingStarted />} title="Getting Started" />
              <QuestionRowChevron question="What is Shekel?" />
              <QuestionRowChevron question="Technical knowledge required?" />
            </div>

            {/* AI Agents */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CategoryHeader icon={<IconAIAgents />} title="AI Agents" />
              <QuestionRowChevron question="What are AI agents?" />
              <QuestionRowChevron question="Creating own agents?" />
            </div>

            {/* Still Need Help */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fff", border: "1px solid #E5E7EB", borderRadius: 32,
              padding: "64px 40px", position: "relative", overflow: "hidden",
            }}>
              {/* Dashed line decoration */}
             

              <div style={{ display: "flex", flexDirection: "column", }}>
                <h2 style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 30, lineHeight: "36px", color: "#0B0B0B" }}>
                  Still need help?
                </h2>
                <p style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(0,0,0,0.55)", maxWidth: 442 }}>
                  If you couldn't find your answer, our team of AI specialists is here to assist you with technical integration or billing.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, zIndex: 1 }}>
                <button style={{
                  border: "1px solid #E5E7EB", borderRadius: 14, background: "#fff",
                  padding: "14px 40px", fontFamily: typography.fonts.inter, fontWeight: 600,
                  fontSize: 16, color: "#0B0B0B", cursor: "pointer",
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
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Bottom Grid — Workflows & Usage */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              {/* Workflows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CategoryHeader icon={<IconWorkflows />} title="Workflows" />
                <QuestionRowPlus question="What is a workflow?" />
                <QuestionRowPlus question="How they work?" />
              </div>
              {/* Usage */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CategoryHeader icon={<IconUsage />} title="Usage" />
                <QuestionRowPlus question="Running agents" />
                <QuestionRowPlus question="Connecting agents" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section
        className="block w-full px-4 py-8 md:hidden"
        style={{ backgroundColor: "#EEF2F8" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CategoryHeader icon={<IconGettingStarted />} title="Getting Started" />
            <QuestionRowChevron question="What is Shekel?" />
            <QuestionRowChevron question="Technical knowledge required?" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CategoryHeader icon={<IconAIAgents />} title="AI Agents" />
            <QuestionRowChevron question="What are AI agents?" />
            <QuestionRowChevron question="Creating own agents?" />
          </div>

          {/* Still Need Help — mobile */}
          <div style={{
            background: "#fff", border: "1px solid #E5E7EB", borderRadius: 20,
            padding: "28px 20px", display: "flex", flexDirection: "column", gap: 20,
            position: "relative", overflow: "hidden",
          }}>
            <svg style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: "90%", pointerEvents: "none" }}
              viewBox="0 0 300 40" fill="none">
              <line x1="0" y1="20" x2="128" y2="20" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 4"/>
              <line x1="172" y1="20" x2="300" y2="20" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 4"/>
              <g transform="translate(133,8)">
                <line x1="12" y1="0" x2="0" y2="12" stroke="#93C5FD" strokeWidth="1.2"/>
                <line x1="0" y1="0" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2"/>
                <line x1="12" y1="0" x2="24" y2="12" stroke="#93C5FD" strokeWidth="1.2"/>
                <line x1="24" y1="0" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2"/>
              </g>
            </svg>
            <div>
              <h2 style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 22, color: "#0B0B0B", marginBottom: 8 }}>
                Still need help?
              </h2>
              <p style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 13, lineHeight: "20px", color: "rgba(0,0,0,0.55)" }}>
                If you couldn't find your answer, our team of AI specialists is here to assist you with technical integration or billing.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{
                flex: 1, border: "1px solid #E5E7EB", borderRadius: 12, background: "#fff",
                padding: "12px 8px", fontFamily: typography.fonts.inter, fontWeight: 600,
                fontSize: 14, color: "#0B0B0B", cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>Contact Support</button>
              <button style={{
                flex: 1, border: "none", borderRadius: 12,
                background: "linear-gradient(160deg, #4a8af4 0%, #a8c4ff 100%)",
                padding: "12px 8px", fontFamily: typography.fonts.inter, fontWeight: 600,
                fontSize: 14, color: "#fff", cursor: "pointer",
              }}>Chat on WhatsApp</button>
            </div>
          </div>

          {/* Bottom Grid — mobile */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CategoryHeader icon={<IconWorkflows />} title="Workflows" />
              <QuestionRowPlus question="What is a workflow?" />
              <QuestionRowPlus question="How they work?" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CategoryHeader icon={<IconUsage />} title="Usage" />
              <QuestionRowPlus question="Running agents" />
              <QuestionRowPlus question="Connecting agents" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}