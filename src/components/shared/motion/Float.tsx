"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";

type FloatProps = {
  children: ReactNode;
  amplitude?: number;
  rotate?: number;
  duration?: number;
  /** Subtle perspective tilt (rotateX / rotateY) — opt-in so existing Float usages stay unchanged */
  motion3d?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Float({
  children,
  amplitude = 12,
  rotate = 0,
  duration = 6,
  motion3d = false,
  className,
  style,
}: FloatProps) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldReduceMotion = mounted ? prefersReducedMotion : false;
  const use3d = motion3d && !shouldReduceMotion;

  const animate =
    shouldReduceMotion
      ? {}
      : {
          y: [0, -amplitude, 0],
          rotate: rotate ? [0, rotate, -rotate, 0] : 0,
          ...(use3d
            ? {
                rotateX: [2, -1.2, 2],
                rotateY: [-2.8, 2.8, -2.8],
              }
            : {}),
        };

  const transition = {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  if (motion3d) {
    return (
      <div className={className} style={style}>
        <motion.div
          className="h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={animate}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
