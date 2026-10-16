"use client";

import { useEffect, useState } from "react";
import { Orb } from "@/components/providers/Orb";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // 1. Minimum pause so the loader animation has time to be seen
      setTimeout(() => {
        // Mark document as loaded to kick off .fade-in animations
        document.documentElement.setAttribute("data-loaded", "true");
        setMounted(true);
      }, 500);

      // 2. Remove loader from the DOM once the curtain fade-out finishes
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-(--bg) transition-opacity duration-500 ease-out ${mounted ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <Orb size={32} />
    </div>
  );
}
