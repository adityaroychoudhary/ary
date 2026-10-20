export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    slug: "synapse",
    title: ":Synapse//",
    description: "Minimalist publishing platform and personal knowledge garden.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/adityaroychoudhary",
  },
  {
    slug: "hypr-dots",
    title: "Hyprland Rice & Dotfiles",
    description: "Monochromatic Wayland environment with custom Waybar & Zsh scripts.",
    tech: ["Hyprland", "CSS", "Shell"],
    href: "https://github.com/adityaroychoudhary",
  },
  {
    slug: "447-studio",
    title: "447 Studio",
    description: "Brand showcase and interactive web presence for a design studio.",
    tech: ["React", "Next.js", "Framer Motion"],
    href: "https://github.com/adityaroychoudhary",
  },
  {
    slug: "wikifetch",
    title: "WikiFetch",
    description: "Discord utility bot for instant, summarized Wikipedia knowledge retrieval.",
    tech: ["Node.js", "Discord.js", "REST API"],
    href: "https://github.com/adityaroychoudhary",
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Telemetry",
    description: "Real-time match statistics and team performance aggregation pipeline.",
    tech: ["MongoDB", "Next.js", "shadcn/ui"],
    href: "https://github.com/adityaroychoudhary",
  },
];

export const links = {
  github: "https://github.com/adityaroychoudhary",
  lotgh: "https://grokipedia.com/page/Legend_of_the_Galactic_Heroes",
};

export const contact = {
  email: "ar006985@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/adityaroychoudhary" },
    { label: "Instagram", href: "https://instagram.com/ssigmaadi" },
    { label: "Mastodon", href: "https://mastodon.social/@adityaroychoudhary" },
    { label: "X [Twitter]", href: "https://x.com/adityaroych" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/aditya-roychoudhary-075930283/" },
  ],
};
