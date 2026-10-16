"use client";

import { useSyncExternalStore } from "react";
import { Dithering } from "@paper-design/shaders-react";

const query = "(prefers-color-scheme: dark)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function useIsDark() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches, // client
    () => false // server fallback
  );
}

// hex approximations of your --bg values
const BG_LIGHT = "#eeeeee"; // oklch(0.95 0 0)
const BG_DARK = "#131313"; // oklch(0.18 0 0)

export default function DitherBanner() {
  const isDark = useIsDark();

  return (
    <div className="w-full aspect-video h-8 rounded-2xl">
      <Dithering
        style={{ width: "100%", height: "100%" }}
        colorBack={isDark ? BG_DARK : BG_LIGHT}
        colorFront="#fdfd96"
        shape="dots"
        type="random"
        size={2.0}
        speed={1.42}
        scale={0.6}
      />
    </div>
  );
}
