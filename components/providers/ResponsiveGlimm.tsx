"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { GlimmProvider } from "glimm/next";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false // server snapshot: assume desktop
  );
}

export function ResponsiveGlimm({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <GlimmProvider
      palette={"spectrum"}
      easing="back"
      sweepMs={isMobile ? 1100 : 1000}
      outroMs={50}
      midpoint={0.5}
      bandTight={isMobile ? 12 : 25}
      direction={isMobile ? "ttb" : "rtl"}
    >
      {children}
    </GlimmProvider>
  );
}
