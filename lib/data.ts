export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  href: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  tech: string[];
  href: string;
  external?: boolean;
  featured?: boolean;
  media?: {
    type: "image" | "video" | "placeholder";
    src?: string;
    label?: string;
  };
}

export const socialLinks: SocialLink[] = [
  {
    id: "01",
    label: "Email",
    handle: "ar006985@gmail.com",
    href: "mailto:ar006985@gmail.com",
  },
  {
    id: "02",
    label: "GitHub",
    handle: "@adityaroychoudhary",
    href: "https://github.com/adityaroychoudhary",
    external: true,
  },
  {
    id: "03",
    label: "X / Twitter",
    handle: "@adityaroych",
    href: "https://x.com/adityaroych",
    external: true,
  },
];

export const projects: Project[] = [
  {
    slug: "synapse",
    title: ":Synapse//",
    description: "Minimalist publishing platform and personal knowledge garden.",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/adityaroychoudhary",
    external: true,
    featured: true,
    media: {
      type: "placeholder",
      label: "SYNAPSE // EDITORIAL UI",
    },
  },
  {
    slug: "hypr-dots",
    title: "Hyprland Rice & Dotfiles",
    description: "Monochromatic Wayland environment with custom Waybar & Zsh scripts.",
    year: "2026",
    tech: ["Hyprland", "CSS", "Shell"],
    href: "https://github.com/adityaroychoudhary",
    external: true,
    featured: true,
    media: {
      type: "placeholder",
      label: "ARCH // HYPRLAND WM",
    },
  },
  {
    slug: "447-studio",
    title: "447 Studio",
    description: "Brand showcase and interactive web presence for a design studio.",
    year: "2025",
    tech: ["React", "Next.js", "Framer Motion"],
    href: "https://github.com/adityaroychoudhary",
    external: true,
    featured: true,
    media: {
      type: "placeholder",
      label: "447 STUDIO // WEB",
    },
  },
  {
    slug: "wikifetch",
    title: "WikiFetch",
    description: "Discord utility bot for instant, summarized Wikipedia knowledge retrieval.",
    year: "2025",
    tech: ["Node.js", "Discord.js", "REST API"],
    href: "https://github.com/adityaroychoudhary",
    external: true,
    featured: true,
    media: {
      type: "placeholder",
      label: "WIKIFETCH // BOT",
    },
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Telemetry",
    description: "Real-time match statistics and team performance aggregation pipeline.",
    year: "2026",
    tech: ["MongoDB", "Next.js", "shadcn/ui"],
    href: "https://github.com/adityaroychoudhary",
    external: true,
    featured: true,
    media: {
      type: "placeholder",
      label: "PULSE // TELEMETRY",
    },
  },
];
