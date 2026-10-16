"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    let target = window.scrollY;
    let current = window.scrollY;
    let frame = 0;

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const animate = () => {
      current += (target - current) * 0.12;

      if (Math.abs(target - current) < 0.5) {
        current = target;
      }

      window.scrollTo(0, current);

      if (current !== target) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        return;
      }

      event.preventDefault();
      target = Math.max(0, Math.min(target + event.deltaY, maxScroll()));

      if (!frame) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const syncScroll = () => {
      if (!frame) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
