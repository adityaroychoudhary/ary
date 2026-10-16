import type { ComponentProps } from "react";

export default function ExternalLink({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`link-text ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
