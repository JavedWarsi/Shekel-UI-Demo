"use client";

import { useMemo, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { colors, radiuses, typography } from "@/tokens/design-tokens";
import { colorsDark } from "@/tokens/design-tokens-dark";

export function useThemeTokens() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial hydration, default to false (matching server default)
  const isDark = mounted && resolvedTheme === "dark";

  return useMemo(
    () => ({
      colors: isDark ? colorsDark : colors,
      typography,
      radiuses,
      isDark,
    }),
    [isDark]
  );
}
