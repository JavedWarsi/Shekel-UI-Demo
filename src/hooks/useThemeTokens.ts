"use client";

import { useMemo } from "react";
import { radiuses, typography } from "@/tokens/design-tokens";

/**
 * useThemeTokens
 * 
 * Returns design tokens mapped to CSS variables.
 * This fixes hydration flicker and theme toggle issues while preserving the original UI.
 * CSS variables are defined in globals.css for both light and dark modes.
 */
export function useThemeTokens() {
  const colors = useMemo(() => ({
    white: 'var(--theme-bg)', // Maps to #ffffff in light, #000000 in dark
    black: 'var(--theme-text)', // Maps to #000000 in light, #ffffff in dark
    brand: {
      blueStart: 'var(--brand-blue-start)',
      blueEnd: 'var(--brand-blue-end)',
      blue: 'var(--brand-blue)',
      cyan: 'var(--brand-cyan)',
    },
    text: {
      networkPill: 'var(--text-network-pill)',
      dark: 'var(--text-dark)',
      body: 'var(--text-body)',
      heading: 'var(--text-heading)',
      bodyMuted: 'var(--text-body-muted)',
      inputLabel: 'var(--text-input-label)',
      badgeDark: 'var(--text-badge-dark)',
      nodeLabel: 'var(--text-node-label)',
      badgePurple: 'var(--text-badge-purple)',
      badgeBlue: 'var(--text-badge-blue)',
      badgeUpcoming: 'var(--text-badge-upcoming)',
    },
    background: {
      networkPill: 'var(--bg-network-pill)',
      section: 'var(--bg-section)',
      sectionAlt: 'var(--bg-section-alt)',
      badgePurple: 'var(--bg-badge-purple)',
      badgeBlue: 'var(--bg-badge-blue)',
      badgeDark: 'var(--bg-badge-dark)',
      trustSection: 'var(--bg-trust-section)',
      trustCard: 'var(--bg-trust-card)',
      faq: 'var(--bg-faq)',
    },
    overlay: {
      blueSubtle: 'var(--overlay-blue-subtle)',
      blueFaint: 'var(--overlay-blue-faint)',
      whiteGlass: 'var(--overlay-white-glass)',
      whiteBorder: 'var(--overlay-white-border)',
      whiteNode: 'var(--overlay-white-node)',
      badgeShadowPurple: 'var(--overlay-badge-shadow-purple)',
      badgeShadowBlue: 'var(--overlay-badge-shadow-blue)',
    },
    border: {
      card: 'var(--border-card)',
      networkPill: 'var(--border-network-pill)',
      timeline: 'var(--border-timeline)',
      footer: 'var(--border-footer)',
      footerStrong: 'var(--border-footer-strong)',
    }
  }), []);

  return useMemo(
    () => ({
      colors,
      typography,
      radiuses,
      isDark: false, // CSS handles theme now.
    }),
    [colors]
  );
}
