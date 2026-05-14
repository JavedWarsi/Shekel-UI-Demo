"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { typography, radiuses } from "@/tokens/design-tokens";

const LIGHT = {
  FORM_BG: "#f2f4f7",
  FIELD_BG: "#ffffff",
  LABEL: "#414753",
  PLACEHOLDER: "rgba(114,119,133,0.5)",
  BORDER: "rgba(193,198,213,0.15)",
  TEXT: "#191c1e",
  SUBTEXT: "#64748b",
  CARD: "#ffffff",
};

const DARK = {
  FORM_BG: "#111827",
  FIELD_BG: "#1f2937",
  LABEL: "#e5e7eb",
  PLACEHOLDER: "rgba(209,213,219,0.6)",
  BORDER: "rgba(255,255,255,0.08)",
  TEXT: "#ffffff",
  SUBTEXT: "#94a3b8",
  CARD: "#0f172a",
};

function Label({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "20px",
        color,
      }}
    >
      {children}
    </p>
  );
}

function InputLike({
  text,
  h = 48,
  themeColors,
}: {
  text: string;
  h?: number;
  themeColors: typeof LIGHT;
}) {
  return (
    <div
      style={{
        height: h,
        backgroundColor: themeColors.FIELD_BG,
        borderRadius: radiuses.icon,
        boxShadow: `0 0 0 1px ${themeColors.BORDER}`,
        padding: "12px 16px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: themeColors.PLACEHOLDER,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function LeftForm({ themeColors }: { themeColors: typeof LIGHT }) {
  return (
    <div className="flex flex-col gap-12">
      {/* Basic Information */}
      <div
        className="rounded-3xl p-8"
        style={{ background: themeColors.FORM_BG }}
      >
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/section-2-create-ai-agent-page/basic-icon.svg"
            alt=""
            width={20}
            height={20}
          />

          <h3
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "28px",
              color: themeColors.TEXT,
            }}
          >
            Basic Information
          </h3>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <Label color={themeColors.LABEL}>Agent Name</Label>

            <InputLike
              text="e.g. Content Strategist Pro"
              themeColors={themeColors}
            />
          </div>

          <div className="space-y-2">
            <Label color={themeColors.LABEL}>Description</Label>

            <InputLike
              text="Briefly describe what your agent does..."
              h={120}
              themeColors={themeColors}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Label color={themeColors.LABEL}>Category</Label>

              <div
                className="flex items-center justify-between"
                style={{
                  height: 48,
                  background: themeColors.FIELD_BG,
                  borderRadius: radiuses.icon,
                  boxShadow: `0 0 0 1px ${themeColors.BORDER}`,
                  padding: "12px 16px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: themeColors.TEXT,
                  }}
                >
                  Marketing & SEO
                </p>

                <Image
                  src="/section-2-create-ai-agent-page/chevron.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label color={themeColors.LABEL}>Agent Icon</Label>

              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed"
                  style={{
                    borderColor: "#c1c6d5",
                    background: themeColors.FIELD_BG,
                  }}
                >
                  <Image
                    src="/section-2-create-ai-agent-page/upload-icon.svg"
                    alt=""
                    width={22}
                    height={20}
                  />
                </div>

                <div
                  className="rounded-lg px-4 py-2"
                  style={{ background: themeColors.FIELD_BG }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: themeColors.TEXT,
                    }}
                  >
                    Upload Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div
        className="rounded-3xl p-8"
        style={{ background: themeColors.FORM_BG }}
      >
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/section-2-create-ai-agent-page/capability-icon.svg"
            alt=""
            width={16}
            height={20}
          />

          <h3
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "28px",
              color: themeColors.TEXT,
            }}
          >
            Capabilities
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <Label color={themeColors.LABEL}>Core Features</Label>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {[
                "SEO Optimization",
                "Social Media Scheduling",
                "Lead Generation",
                "Bulk Email Campaigns",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-xl p-4"
                  style={{
                    background: themeColors.FIELD_BG,
                    boxShadow: `0 0 0 1px ${themeColors.BORDER}`,
                  }}
                >
                  <div
                    className="h-5 w-5 rounded border"
                    style={{ borderColor: "#6b7280" }}
                  />

                  <p
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.inter,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: themeColors.TEXT,
                    }}
                  >
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label color={themeColors.LABEL}>Example Outputs</Label>

            <InputLike
              text="Type your first prompt example here to show users what to expect..."
              h={52}
              themeColors={themeColors}
            />
          </div>

          <div>
            <Label color={themeColors.LABEL}>Industry Tags</Label>

            <div className="mt-3 flex flex-wrap gap-2">
              {["#SaaS", "#Marketing", "#Automation"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    borderRadius: 9999,
                    background: "#b7eaff",
                    color: "#001f28",
                    padding: "6px 16px",
                    fontFamily: typography.fonts.inter,
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}

              <span
                style={{
                  borderRadius: 9999,
                  border: "2px dashed #c1c6d5",
                  color: themeColors.SUBTEXT,
                  padding: "6px 16px",
                  fontFamily: typography.fonts.inter,
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: 600,
                }}
              >
                + Add Tag
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Strategy */}
      <div
        className="rounded-3xl p-8"
        style={{ background: themeColors.FORM_BG }}
      >
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/section-2-create-ai-agent-page/pricing-icon.svg"
            alt=""
            width={22}
            height={16}
          />

          <h3
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "28px",
              color: themeColors.TEXT,
            }}
          >
            Pricing Strategy
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Pay-per-use",
              sub: "Charge for every successful execution.",
              price: "$0.05",
              unit: "/ RUN",
              icon: "/section-2-create-ai-agent-page/pricing-card-icon-1.svg",
              active: true,
            },
            {
              title: "Subscription",
              sub: "Set a monthly fee for unlimited access.",
              price: "$19.00",
              unit: "/ MO",
              icon: "/section-2-create-ai-agent-page/pricing-card-icon-2.svg",
            },
            {
              title: "Freemium",
              sub: "Free with limits, then scale up.",
              price: "Free",
              unit: "",
              icon: "/section-2-create-ai-agent-page/pricing-card-icon-3.svg",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-6"
              style={{
                background: themeColors.FIELD_BG,
                boxShadow: c.active
                  ? "0 0 0 2px #005ab6, 0 10px 15px -3px rgba(0,0,0,0.1)"
                  : `0 0 0 1px ${themeColors.BORDER}`,
              }}
            >
              <Image src={c.icon} alt="" width={28} height={26} />

              <p
                style={{
                  margin: "12px 0 0",
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: themeColors.TEXT,
                }}
              >
                {c.title}
              </p>

              <p
                style={{
                  margin: "2px 0 0",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: themeColors.SUBTEXT,
                }}
              >
                {c.sub}
              </p>

              <div className="mt-3 flex items-end gap-1">
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 28,
                    lineHeight: "28px",
                    color: themeColors.TEXT,
                  }}
                >
                  {c.price}
                </p>

                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: themeColors.SUBTEXT,
                  }}
                >
                  {c.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Configuration */}
      <div
        className="rounded-3xl p-8"
        style={{ background: themeColors.FORM_BG }}
      >
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/section-2-create-ai-agent-page/config-icon.svg"
            alt=""
            width={22}
            height={22}
          />

          <h3
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "28px",
              color: themeColors.TEXT,
            }}
          >
            Model Configuration
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <Label color={themeColors.LABEL}>Base Model</Label>

            <div
              className="flex items-center justify-between rounded-xl p-3"
              style={{
                background: themeColors.FIELD_BG,
                boxShadow: `0 0 0 1px ${themeColors.BORDER}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: themeColors.TEXT,
                }}
              >
                GPT-4o (Optimized)
              </p>

              <Image
                src="/section-2-create-ai-agent-page/chevron.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label color={themeColors.LABEL}>Output Format</Label>

            <div className="grid grid-cols-3 gap-4">
              {["Markdown", "JSON", "HTML"].map((v, i) => (
                <div
                  key={v}
                  className="rounded-lg py-2 text-center"
                  style={{
                    background: themeColors.FIELD_BG,
                    boxShadow:
                      i === 0
                        ? "0 0 0 1px #005ab6"
                        : `0 0 0 1px ${themeColors.BORDER}`,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: themeColors.LABEL,
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <Label color={themeColors.LABEL}>
            System Prompt / Instructions
          </Label>

          <div
            className="rounded-xl p-3"
            style={{
              minHeight: 144,
              background: themeColors.FIELD_BG,
              boxShadow: `0 0 0 1px ${themeColors.BORDER}`,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.mono,
                fontSize: 14,
                lineHeight: "20px",
                color: themeColors.SUBTEXT,
              }}
            >
              You are a professional marketing architect specializing in SaaS
              scaling...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightRail({ themeColors }: { themeColors: typeof LIGHT }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Live Preview */}
      <div
        className="rounded-[24px] p-6"
        style={{
          backgroundColor: themeColors.FORM_BG,
          boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
        }}
      >
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#2864e4",
            }}
          >
            Live Preview
          </span>

          <Image
            src="/section-2-create-ai-agent-page/preview-eye.svg"
            alt=""
            width={17}
            height={12}
          />
        </div>

        <div
          className="mt-6 rounded-2xl border p-4"
          style={{
            borderColor: themeColors.BORDER,
            background: themeColors.FIELD_BG,
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: "linear-gradient(180deg,#2864e4,#ecf2ff)",
              }}
            >
              <Image
                src="/section-2-create-ai-agent-page/preview-card-icon.svg"
                alt=""
                width={28}
                height={24}
              />
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 800,
                  fontSize: 18,
                  lineHeight: "22.5px",
                  color: themeColors.TEXT,
                }}
              >
                Content Strategist Pro
              </p>

              <p
                style={{
                  margin: "3px 0 0",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: themeColors.TEXT,
                }}
              >
                By You
              </p>
            </div>
          </div>

          <p
            style={{
              margin: "14px 0 0",
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "22.75px",
              color: themeColors.TEXT,
            }}
          >
            Professional content architect that generates SEO-optimized
            blueprints for...
          </p>

          <div className="mt-3 flex gap-2">
            {["#SEO", "#Marketing"].map((tag) => (
              <span
                key={tag}
                style={{
                  border: `1px solid ${themeColors.BORDER}`,
                  borderRadius: 6,
                  padding: "4px 8px",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 10,
                  lineHeight: "15px",
                  color: themeColors.TEXT,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className="mt-4 border-t pt-4"
            style={{ borderColor: themeColors.BORDER }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 500,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: themeColors.TEXT,
                  }}
                >
                  Price per run
                </p>

                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 32,
                    lineHeight: "28px",
                    background: "linear-gradient(180deg,#2864e4,#ecf2ff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  $0.05
                </p>
              </div>

              <div
                className="rounded-xl px-5 py-2"
                style={{
                  background: "linear-gradient(180deg,#2864e4,#ecf2ff)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#fff",
                  }}
                >
                  Try Agent
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between px-2">
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: themeColors.TEXT,
              }}
            >
              Completion Score
            </span>

            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 12,
                lineHeight: "16px",
                background: "linear-gradient(180deg,#2864e4,#ecf2ff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              85%
            </span>
          </div>

          <div
            style={{
              height: 6,
              borderRadius: 9999,
              background: "#e0e3e6",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "85%",
                height: "100%",
                background: "linear-gradient(180deg,#2864e4,#ecf2ff)",
              }}
            />
          </div>

          <p
            style={{
              margin: "10px 8px 0",
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 11,
              lineHeight: "13.75px",
              color: themeColors.TEXT,
            }}
          >
            Tip: Adding high-quality example outputs increases agent engagement
            by up to 40%.
          </p>
        </div>
      </div>

      {/* Help Card */}
      <div
        className="rounded-xl p-5"
        style={{
          background: themeColors.FIELD_BG,
          boxShadow: "0 1px 1px rgba(0,0,0,.05)",
        }}
      >
        <div
          className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg"
          style={{ background: "rgba(0,90,182,0.05)" }}
        >
          <Image
            src="/section-2-create-ai-agent-page/help-icon.svg"
            alt=""
            width={13}
            height={13}
          />
        </div>

        <p
          style={{
            margin: 0,
            fontFamily: typography.fonts.jakarta,
            fontWeight: 700,
            fontSize: 30,
            lineHeight: "22.5px",
            color: themeColors.TEXT,
          }}
        >
          Need help launching?
        </p>

        <p
          style={{
            margin: "10px 0 16px",
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22.75px",
            color: themeColors.SUBTEXT,
          }}
        >
          Get guidance to set up, optimize, and publish your AI agent faster.
        </p>

        <div
          className="rounded-xl py-2 text-center"
          style={{ background: "#2864e4" }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#fff",
            }}
          >
            Book a Demo
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1">
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                color: "#005ab6",
              }}
            >
              Contact Support
            </p>

            <Image
              src="/section-2-create-ai-agent-page/help-arrow.svg"
              alt=""
              width={9}
              height={9}
            />
          </div>

          <p
            style={{
              margin: "6px 0 0",
              fontFamily: typography.fonts.inter,
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "18px",
              color: themeColors.SUBTEXT,
            }}
          >
            Response within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AgentBuilderSection() {
  const { resolvedTheme } = useTheme();

  const themeColors = resolvedTheme === "dark" ? DARK : LIGHT;

  return (
    <section
      className="px-4 py-10 md:px-8 transition-colors duration-300"
      style={{
        background: resolvedTheme === "dark" ? "#020617" : "#ffffff",
      }}
    >
      <div className="mx-auto grid max-w-[1236px] gap-8 lg:grid-cols-[794.666px_373.333px]">
        <LeftForm themeColors={themeColors} />
        <RightRail themeColors={themeColors} />
      </div>
    </section>
  );
}