"use client";

// ─────────────────────────────────────────────────────────────────────────────
// Hero.tsx  —  "Build AI workflows"
// Figma frame: 507:5657  "Frame 2147225665"
// Canvas: 1280 × 826 px   Page-y: 66   bg: black
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Ellipse 43662   (x=-19, y=-49)   1343×211   bg image
//   Ellipse 43664   (x=-98, y=-139)   163×163   bg image
//   Ellipse 43665   (x=1252, y=-82)   163×163   bg image
//   Frame 2147225678   (x=-4, y=737)   1291×89   bottom bar with icons
//   Container   (x=55, y=294)   478×84   Subheading text
//   Button Container  (x=313, y=414)   478×78   Explore Workflows button
//   Group 1000005054   (x=-145, y=-163)   2400.91650390625×1830   Main background grid
//   Button   (x=47, y=432)   253.02999877929688×60   Start Building button
//   Frame 2147225689   (x=35, y=109)   617×116   Main heading
//   Container (Workflow Input)  (x=791, y=76)   448×582.5   Workflow input card
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger } from "@/components/shared/motion/RevealStagger";

const CANVAS_W = 1280;
const CANVAS_H = 826;

/** Left-to-right order in the Figma strip — used for seamless RTL (negative X) marquee */
const WORKFLOW_PARTNER_LOGOS = [
  { src: "/section-1-workflows/logo-2.png", alt: "Partner", w: 103, h: 28 },
  { src: "/section-1-workflows/logo-3.png", alt: "Partner", w: 134, h: 73 },
  { src: "/section-1-workflows/logo-anthropic.png", alt: "Anthropic", w: 185, h: 123 },
  { src: "/section-1-workflows/logo-6.png", alt: "Partner", w: 90, h: 26 },
  { src: "/section-1-workflows/logo-7.png", alt: "Partner", w: 95, h: 19 },
  { src: "/section-1-workflows/logo-5.png", alt: "Partner", w: 102, h: 72 },
  { src: "/section-1-workflows/logo-8.png", alt: "Partner", w: 103, h: 42 },
  { src: "/section-1-workflows/logo-1.png", alt: "Partner", w: 50, h: 50 },
] as const;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const HEADING_GRADIENT = "linear-gradient(195.61deg, #ffffff 55.625%, rgba(255, 255, 255, 0) 110.73%)";
const BLUE_TEXT = "linear-gradient(90deg, #8ba6ff 0%, #c3b1ff 100%)";
const BUTTON_BG = "linear-gradient(180deg, #427dfa 0%, #8ab4f8 100%)";

const CARD_OVERLAY = "linear-gradient(52.46deg, rgba(182, 160, 255, 0.2) 0%, rgba(182, 160, 255, 0) 50%, rgba(0, 227, 253, 0.2) 100%)";
const CARD_BG = "black";
const CARD_BORDER = "rgba(255, 255, 255, 0.05)";

const BADGE_BG = "rgba(0, 227, 253, 0.1)";
const ACTIVE_NODE_COLOR = "#00e3fd";
/** Frame 2147225689 — not on radiuses scale */
const HEADING_GLASS_R = "18px";

type HeroStateProps = {
  promptGoal: string;
  onPromptChange: (value: string) => void;
  selectedAgent: string;
  onAgentChange: (value: string) => void;
  integrationKey: string;
  onIntegrationKeyChange: (value: string) => void;
  showIntegrationKey: boolean;
  onToggleIntegrationKey: () => void;
  temperature: number;
  onTemperatureChange: (value: number) => void;
  executionMode: "Precise" | "Creative";
  onExecutionModeChange: (value: "Precise" | "Creative") => void;
};

export default function Hero() {
  const [promptGoal, setPromptGoal] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("Content AI");
  const [integrationKey, setIntegrationKey] = useState("");
  const [showIntegrationKey, setShowIntegrationKey] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [executionMode, setExecutionMode] = useState<"Precise" | "Creative">("Precise");

  return (
    <>
      <SectionDesktop
        promptGoal={promptGoal}
        onPromptChange={setPromptGoal}
        selectedAgent={selectedAgent}
        onAgentChange={setSelectedAgent}
        integrationKey={integrationKey}
        onIntegrationKeyChange={setIntegrationKey}
        showIntegrationKey={showIntegrationKey}
        onToggleIntegrationKey={() => setShowIntegrationKey((prev) => !prev)}
        temperature={temperature}
        onTemperatureChange={setTemperature}
        executionMode={executionMode}
        onExecutionModeChange={setExecutionMode}
      />
      <SectionMobile
        promptGoal={promptGoal}
        onPromptChange={setPromptGoal}
        selectedAgent={selectedAgent}
        onAgentChange={setSelectedAgent}
        integrationKey={integrationKey}
        onIntegrationKeyChange={setIntegrationKey}
        showIntegrationKey={showIntegrationKey}
        onToggleIntegrationKey={() => setShowIntegrationKey((prev) => !prev)}
        temperature={temperature}
        onTemperatureChange={setTemperature}
        executionMode={executionMode}
        onExecutionModeChange={setExecutionMode}
      />
    </>
  );
}

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 600,
        fontSize,
        lineHeight,
        /* style_ERYLUA letterSpacing −2.81% → em relative to font size */
        letterSpacing: "-0.0281em",
        color: colors.white,
      }}
    >
      <span
        style={{
          background: HEADING_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Build
      </span>{" "}
      <span
        style={{
          background: BLUE_TEXT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        AI workflows
      </span>
    </h1>
  );
}

function SectionSubheading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: colors.white,
      }}
    >
      Connect multiple AI agents, automate tasks, and execute workflows visually in seconds. Architect your intelligence with Shekel.
    </p>
  );
}

function StartBuildingButton({ width }: { width?: string | number }) {
  return (
    <button
      className="hover:opacity-90 transition-opacity"
      style={{
        width,
        background: BUTTON_BG,
        padding: "16px 32px",
        borderRadius: radiuses.cardSm,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          color: colors.white,
          lineHeight: "24px",
          textShadow: "0px 1px 2px rgba(0,0,0,0.15)",
        }}
      >
        Start Building
      </span>
    </button>
  );
}


function InputField({
  label,
  placeholder,
  value,
  onChange,
  isPassword = false,
  showPassword = false,
  onTogglePassword,
  inputPadding = "14px 16px",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  /** Goal / API key rows use different padding from Figma */
  inputPadding?: string;
}) {
  return (
    <div className="flex flex-col gap-[8.5px] w-full relative z-10">
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          color: "#adaaaa",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          lineHeight: "16px",
        }}
      >
        {label}
      </span>
      <div
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.3)",
          borderRadius: radiuses.cardSm,
          padding: inputPadding,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          className="w-full bg-transparent border-none text-white outline-none placeholder:text-[#81818a]"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: colors.white,
          }}
        />
        {isPassword && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-[17px] top-1/2 -translate-y-1/2"
            style={{ width: 22, height: 22 }}
          >
            <Image src="/section-1-workflows/icon-eye.svg" alt="Show password" fill className="object-contain" />
          </button>
        )}
      </div>
    </div>
  );
}

function SelectField({ label, value, onClick }: { label: string; value: string; onClick: () => void }) {
  return (
    <div className="flex flex-col gap-[8.5px] w-full relative z-10">
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          color: "#adaaaa",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          lineHeight: "16px",
        }}
      >
        {label}
      </span>
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left"
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.3)",
          borderRadius: radiuses.cardSm,
          height: 50,
          display: "flex",
          alignItems: "center",
          position: "relative",
          paddingLeft: 16,
          paddingRight: 16,
          color: colors.white,
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            color: colors.white,
            lineHeight: "24px",
          }}
        >
          {value}
        </span>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          style={{ width: 24, height: 24 }}
        >
          <Image src="/section-1-workflows/icon-dropdown.svg" alt="Select" fill className="object-contain" />
        </div>
      </button>
    </div>
  );
}

function TemperatureSlider({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="flex flex-col gap-4 w-full relative z-10">
      <div className="flex items-center justify-between w-full">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            color: "#adaaaa",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            lineHeight: "16px",
          }}
        >
          Creativity (Temp)
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 14,
            color: ACTIVE_NODE_COLOR,
            lineHeight: "20px",
          }}
        >
          {value.toFixed(1)}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full h-2 rounded-full accent-[#00e3fd] bg-[#111111]"
      />
      <div className="flex items-center justify-between w-full">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 10,
            color: "#777575",
            lineHeight: "15px",
          }}
        >
          PRECISE
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 10,
            color: "#777575",
            lineHeight: "15px",
          }}
        >
          BALANCED
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 10,
            color: "#777575",
            lineHeight: "15px",
          }}
        >
          CREATIVE
        </span>
      </div>
    </div>
  );
}

function ExecutionModeToggle({
  mode,
  onChange,
}: {
  mode: "Precise" | "Creative";
  onChange: (mode: "Precise" | "Creative") => void;
}) {
  return (
    <div
      className="flex items-center justify-between w-full relative z-10 pt-[17px]"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 14,
          color: "rgba(255, 255, 255, 0.6)",
          lineHeight: "20px",
        }}
      >
        Execution Mode
      </span>
      <div
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.2)",
          borderRadius: radiuses.full,
          padding: 5,
          display: "flex",
          gap: 0,
        }}
      >
        <button
          type="button"
          onClick={() => onChange("Precise")}
          style={{
            background: mode === "Precise" ? "#262626" : "transparent",
            color: mode === "Precise" ? colors.white : "rgba(255, 255, 255, 0.4)",
            borderRadius: radiuses.full,
            padding: "6px 16px",
            border: "none",
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "16px",
            cursor: "pointer",
          }}
        >
          Precise
        </button>
        <button
          type="button"
          onClick={() => onChange("Creative")}
          style={{
            background: mode === "Creative" ? "#262626" : "transparent",
            color: mode === "Creative" ? colors.white : "rgba(255, 255, 255, 0.4)",
            borderRadius: radiuses.full,
            padding: "6px 16px",
            border: "none",
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "16px",
            cursor: "pointer",
          }}
        >
          Creative
        </button>
      </div>
    </div>
  );
}

function WorkflowCard({
  promptGoal,
  onPromptChange,
  selectedAgent,
  onAgentChange,
  integrationKey,
  onIntegrationKeyChange,
  showIntegrationKey,
  onToggleIntegrationKey,
  temperature,
  onTemperatureChange,
  executionMode,
  onExecutionModeChange,
}: HeroStateProps) {
  return (
    <div
      className="relative flex h-full w-full flex-col items-start gap-8"
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: "22.4px",
        padding: 32,
      }}
    >
      <div className="flex items-center justify-between w-full relative z-10">
        <div className="flex items-center gap-2">
          <div className="relative w-[20px] h-[16px]">
            <Image src="/section-1-workflows/icon-container.svg" alt="Container" fill className="object-contain" />
          </div>
          <span
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              color: colors.white,
              lineHeight: "28px",
            }}
          >
            Workflow Input
          </span>
        </div>
        <div
          style={{
            background: BADGE_BG,
            borderRadius: radiuses.tag,
            padding: "4px 8px",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 10,
              color: ACTIVE_NODE_COLOR,
              letterSpacing: "1px",
              textTransform: "uppercase",
              lineHeight: "15px",
            }}
          >
            ACTIVE NODE
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full relative z-10">
        <InputField
          label="Prompt Goal"
          placeholder="Type your workflow goal..."
          value={promptGoal}
          onChange={onPromptChange}
        />
        <SelectField
          label="Select AI Agent"
          value={selectedAgent}
          onClick={() => onAgentChange(selectedAgent === "Content AI" ? "Workflow AI" : "Content AI")}
        />
        <InputField
          label="Integration Key"
          placeholder="••••••••••••••••"
          isPassword
          value={integrationKey}
          onChange={onIntegrationKeyChange}
          showPassword={showIntegrationKey}
          onTogglePassword={onToggleIntegrationKey}
          inputPadding="12px 16px"
        />
        <TemperatureSlider value={temperature} onChange={onTemperatureChange} />
        <ExecutionModeToggle mode={executionMode} onChange={onExecutionModeChange} />
      </div>
    </div>
  );
}

function PartnerLogoMarqueeDesktop({ active }: { active: boolean }) {
  return (
    <motion.div
      className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center"
      style={{
        transformPerspective: 1000,
        rotateX: 4,
        transformOrigin: "50% 100%",
      }}
      animate={active ? { x: ["0%", "-50%"] } : undefined}
      transition={active ? { duration: 26, ease: "linear", repeat: Infinity } : undefined}
    >
      {[0, 1].map((copyIdx) => (
        <div
          key={copyIdx}
          className="flex items-center"
          style={{ minWidth: 1291, height: 89, gap: 56, padding: "0 28px" }}
        >
          {WORKFLOW_PARTNER_LOGOS.map((p) => (
            <div
              key={`${copyIdx}-${p.src}`}
              className="relative flex-shrink-0"
              style={{ width: p.w, height: p.h }}
            >
              <Image src={p.src} alt={p.alt} fill sizes={`${p.w}px`} className="object-contain" />
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop({
  promptGoal,
  onPromptChange,
  selectedAgent,
  onAgentChange,
  integrationKey,
  onIntegrationKeyChange,
  showIntegrationKey,
  onToggleIntegrationKey,
  temperature,
  onTemperatureChange,
  executionMode,
  onExecutionModeChange,
}: HeroStateProps) {
  const prefersReducedMotion = useReducedMotion();
  const marqueeOn = !prefersReducedMotion;

  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: "#0B1120",
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {/* Background Grid */}
        <div
          className="absolute"
          style={{
            left: -145,
            top: -163,
            width: 2400.91650390625,
            height: 1830,
          }}
        >
          <Image src="/section-1-workflows/bg-grid.png" alt="" fill className="object-cover" priority />
        </div>

        {/* Ellipses */}
        <div
          className="absolute"
          style={{ left: -19, top: -49, width: 1343, height: 211 }}
        >
          <Image src="/section-1-workflows/ellipse-1.png" alt="" fill className="object-cover" priority />
        </div>
        <div
          className="absolute"
          style={{ left: -98, top: -139, width: 163, height: 163 }}
        >
          <Image src="/section-1-workflows/ellipse-2.png" alt="" fill className="object-cover" priority />
        </div>
        <div
          className="absolute"
          style={{ left: 1252, top: -82, width: 163, height: 163 }}
        >
          <Image src="/section-1-workflows/ellipse-3.png" alt="" fill className="object-cover" priority />
        </div>

        {/* Main Content */}
        <Reveal
          delay={0.1}
          className="absolute flex items-center justify-center"
          style={{
            left: 35,
            top: 109,
            width: 617,
            gap: 10,
            padding: 10,
            background: "rgba(0, 0, 0, 0.69)",
            backdropFilter: "blur(150.6px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: HEADING_GLASS_R,
            zIndex: 10,
          }}
        >
          <SectionHeading fontSize={64} lineHeight="72px" />
        </Reveal>

        <Reveal
          delay={0.3}
          className="absolute"
          style={{ left: 55, top: 294, width: 478, height: 84, zIndex: 10 }}
        >
          <SectionSubheading fontSize={20} lineHeight="28px" />
        </Reveal>

        <Reveal
          delay={0.5}
          className="absolute"
          style={{ left: 47, top: 432, width: 253, height: 60, zIndex: 10 }}
        >
          <StartBuildingButton width="100%" />
        </Reveal>

        {/* Workflow Input Card */}
        <Float>
          <div
            className="absolute"
            style={{
              left: 791,
              top: 76,
              width: 448,
              height: 582.5,
              padding: 4,
              borderRadius: radiuses.card,
            }}
          >
            <div
              className="absolute inset-[-0.5px]"
              style={{
                borderRadius: radiuses.card,
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div
              className="absolute inset-[-0.5px] opacity-50"
              style={{
                background: CARD_OVERLAY,
                borderRadius: radiuses.card,
                filter: "blur(24px)",
              }}
            />
            <WorkflowCard
              promptGoal={promptGoal}
              onPromptChange={onPromptChange}
              selectedAgent={selectedAgent}
              onAgentChange={onAgentChange}
              integrationKey={integrationKey}
              onIntegrationKeyChange={onIntegrationKeyChange}
              showIntegrationKey={showIntegrationKey}
              onToggleIntegrationKey={onToggleIntegrationKey}
              temperature={temperature}
              onTemperatureChange={onTemperatureChange}
              executionMode={executionMode}
              onExecutionModeChange={onExecutionModeChange}
            />
          </div>
        </Float>

        {/* Figma ornament — IMAGE-SVG 507:5752 */}
        <div
          className="pointer-events-none absolute z-[5]"
          style={{ left: 637, top: 161, width: 173.88, height: 149.25 }}
        >
          <Image src="/section-1-workflows/hero-decoration.svg" alt="" fill className="object-contain" />
        </div>

        {/* Bottom Logo Bar */}
        <div
          className="absolute"
          style={{
            left: -4,
            top: 737,
            width: 1291,
            height: 89,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background: colors.black,
            overflow: "hidden",
          }}
        >
          <PartnerLogoMarqueeDesktop active={marqueeOn} />
          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-[74px] z-10" style={{ background: "linear-gradient(90deg, #000 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-[76px] z-10" style={{ background: "linear-gradient(270deg, #000 0%, transparent 100%)" }} />
        </div>
        
        {/* Left Edge Fade for content above bar */}
        <div className="absolute left-0 top-[626px] w-[34px] h-[90px] z-10" style={{ background: "linear-gradient(90deg, #000 0%, transparent 100%)" }} />
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile({
  promptGoal,
  onPromptChange,
  selectedAgent,
  onAgentChange,
  integrationKey,
  onIntegrationKeyChange,
  showIntegrationKey,
  onToggleIntegrationKey,
  temperature,
  onTemperatureChange,
  executionMode,
  onExecutionModeChange,
}: HeroStateProps) {
  const prefersReducedMotion = useReducedMotion();
  const marqueeOn = !prefersReducedMotion;

  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: "#0B1120" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-50">
        <Image src="/section-1-workflows/bg-grid.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="relative flex flex-col gap-10 px-6 py-20 z-10">
        <Reveal delay={0.1}>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.69)",
              backdropFilter: "blur(150.6px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: radiuses.cardSm,
              padding: "16px",
              display: "inline-block",
            }}
          >
            <SectionHeading fontSize="clamp(32px, 8vw, 48px)" lineHeight="1.1" />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <SectionSubheading fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.5" />
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col gap-4 mt-4 w-full">
            <StartBuildingButton width="100%" />
          </div>
        </Reveal>

        {/* Workflow Input Card - Mobile */}
        <Reveal>
          <div
            className="w-full relative mt-8"
            style={{
              padding: 4,
              borderRadius: radiuses.card,
            }}
          >
            <div
              className="absolute inset-[-0.5px]"
              style={{
                borderRadius: radiuses.card,
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div
              className="absolute inset-[-0.5px] opacity-50"
              style={{
                background: CARD_OVERLAY,
                borderRadius: radiuses.card,
                filter: "blur(24px)",
              }}
            />
            <WorkflowCard
              promptGoal={promptGoal}
              onPromptChange={onPromptChange}
              selectedAgent={selectedAgent}
              onAgentChange={onAgentChange}
              integrationKey={integrationKey}
              onIntegrationKeyChange={onIntegrationKeyChange}
              showIntegrationKey={showIntegrationKey}
              onToggleIntegrationKey={onToggleIntegrationKey}
              temperature={temperature}
              onTemperatureChange={onTemperatureChange}
              executionMode={executionMode}
              onExecutionModeChange={onExecutionModeChange}
            />
          </div>
        </Reveal>

        {/* Logos Marquee - Mobile */}
        <div className="relative mt-8 h-[80px] w-full overflow-hidden rounded-xl border border-white/20 bg-black">
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
                style={{ minWidth: 720, height: 80, gap: 36, padding: "0 20px" }}
              >
                {WORKFLOW_PARTNER_LOGOS.map((p) => (
                  <div
                    key={`${copyIdx}-m-${p.src}`}
                    className="relative flex-shrink-0"
                    style={{ width: p.w * 0.82, height: p.h * 0.82 }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={`${Math.round(p.w * 0.82)}px`}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-black to-transparent" />
        </div>

      </div>
    </section>
  );
}
