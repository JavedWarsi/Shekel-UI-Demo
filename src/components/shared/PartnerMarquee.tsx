"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Float } from "./motion/Float";
import { colors } from "@/tokens/design-tokens";
import { type CSSProperties, useEffect, useState } from "react";

interface Partner {
  name: string;
  src: string;
  w: number;
  h: number;
}

const DEFAULT_PARTNERS: Partner[] = [
  { name: "OpenAI", src: "/images/hero/openai.png", w: 103, h: 28 },
  { name: "Google AI", src: "/images/hero/google-ai.png", w: 134, h: 73 },
  { name: "Anthropic", src: "/images/hero/anthropic.svg", w: 185, h: 123 },
  { name: "Azure", src: "/images/hero/azure.png", w: 90, h: 26 },
  { name: "Meta", src: "/images/hero/meta.png", w: 140, h: 44 },
  { name: "Notion", src: "/images/hero/notion.png", w: 102, h: 72 },
  { name: "Slack", src: "/images/hero/slack.png", w: 103, h: 42 },
  { name: "AWS", src: "/images/hero/aws.png", w: 50, h: 50 },
];

interface PartnerMarqueeProps {
  partners?: Partner[];
  speed?: number;
  className?: string;
  containerWidth?: number;
  gap?: number;
}

export function PartnerMarquee({
  partners = DEFAULT_PARTNERS,
  speed = 26,
  className,
  containerWidth = 1291,
  gap = 56,
  style,
}: PartnerMarqueeProps & { style?: CSSProperties }) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && !prefersReducedMotion;

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-300 bg-white dark:bg-black border-y border-black/10 dark:border-white/20 ${className || ""}`}
      style={{
        width: containerWidth,
        height: 89,
        ...style,
      }}
    >
      <motion.div
        className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center"
        style={{
          transformPerspective: 1000,
          rotateX: 4,
          transformOrigin: "50% 100%",
        }}
        animate={shouldAnimate ? { x: ["0%", "-50%"] } : undefined}
        transition={
          shouldAnimate
            ? { duration: speed, ease: "linear", repeat: Infinity }
            : undefined
        }
      >
        {[0, 1].map((copyIdx) => (
          <div
            key={copyIdx}
            className="flex items-center"
            style={{ minWidth: containerWidth, height: 89, gap, padding: "0 28px" }}
          >
            {partners.map((p, i) => (
              <Float
                key={`${copyIdx}-${p.name}-${i}`}
                motion3d
                amplitude={3}
                rotate={1}
                duration={4 + (i % 3)}
                className="relative flex-shrink-0"
                style={{ width: p.w, height: p.h }}
              >
                <motion.div
                   whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                   className="relative h-full w-full"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes={`${p.w}px`}
                    className="object-contain dark:invert-0 invert opacity-20 dark:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              </Float>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Fade overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[40px] bg-gradient-to-r from-white dark:from-black to-transparent transition-all duration-300"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[40px] bg-gradient-to-l from-white dark:from-black to-transparent transition-all duration-300"
      />
    </div>
  );
}
