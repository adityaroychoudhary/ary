"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Main" },
  { href: "/projects", label: "Projects" },
  { href: "/personal", label: "Personal" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 fade-in [--i:1]">
      {links.map(({ href, label }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={`transition-colors hover:text-(--sd) ${isActive ? "underline underline-offset-[1.5px]" : ""
              }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
