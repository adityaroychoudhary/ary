import type { CSSProperties, ElementType, ReactNode } from "react";

export const sectionOrder = (n: number) => ({ "--s": n }) as CSSProperties;

type RevealProps = {
  as?: ElementType;
  index?: number;
  className?: string;
  children: ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  index = 0,
  className = "",
  children,
}: RevealProps) {
  return (
    <Tag
      className={`fade-in ${className}`}
      style={{ "--i": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
