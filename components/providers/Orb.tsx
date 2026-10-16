"use client";

import React from "react";

interface OrbProps {
  className?: string;
  size?: number; // width/height in pixels
}

const DOTS = [
  { cx: 12.0, cy: 5.5, delay: "-0.28s" },
  { cx: 16.6, cy: 7.4, delay: "-1.35s" },
  { cx: 18.5, cy: 12.0, delay: "-0.62s" },
  { cx: 16.6, cy: 16.6, delay: "-1.80s" },
  { cx: 12.0, cy: 18.5, delay: "-0.95s" },
  { cx: 7.4, cy: 16.6, delay: "-0.10s" },
  { cx: 5.5, cy: 12.0, delay: "-1.55s" },
  { cx: 7.4, cy: 7.4, delay: "-0.80s" },
];

export function Orb({ className = "", size = 24 }: OrbProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 text-white ${className}`}
      aria-hidden="true"
    >
      <style>{`
        .orb-dot {
          animation: orb-twinkle 1.9s cubic-bezier(0.33, 1, 0.68, 1) infinite both;
          transform-origin: center;
        }

        @keyframes orb-twinkle {
          0%, 100% {
            opacity: 0.12;
            transform: scale(0.85);
          }
          18% {
            opacity: 1;
            transform: scale(1.25);
          }
          40% {
            opacity: 0.45;
            transform: scale(1);
          }
          70% {
            opacity: 0.12;
            transform: scale(0.85);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orb-dot {
            animation: none;
            opacity: 0.35;
          }
        }
      `}</style>
      {DOTS.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={1.5}
          fill="currentColor"
          className="orb-dot"
          style={{ animationDelay: dot.delay }}
        />
      ))}
    </svg>
  );
}

export default Orb;
