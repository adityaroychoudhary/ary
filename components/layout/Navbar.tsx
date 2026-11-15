"use client";

import { Fragment } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { TransitionLink } from "glimm/next";

const links = [
  { href: "/", label: "Main" },
  { href: "/projects", label: "Projects" },
  { href: "/personal", label: "Personal" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 fade-in [--i:1]">
      {links.map(({ href, label }, index) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Fragment key={href}>
            <TransitionLink
              href={href}
              className={`transition-colors hover:text-(--sd) ${isActive ? "underline underline-offset-[1.5px]" : ""
                }`}
            >
              {label}
            </TransitionLink>
            {index < links.length - 1 && (
              <span aria-hidden="true">{"/"}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
