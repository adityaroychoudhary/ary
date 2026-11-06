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
    title: "Synapse",
    description:
      "Minimalist publishing platform and personal knowledge garden.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://synapse-personalblog.vercel.app",
  },
  {
    slug: "airchat",
    title: "AirChat",
    description:
      "A fast and performant chat app with securing messaging and live reactions.",
    tech: ["React", "Tailwind CSS", "Socket.io", "Express JS", "Mongo DB"],
    href: "https://airchat-ctlh.onrender.com",
  },
  {
    slug: "monograph",
    title: "Monograph",
    description:
      "A local-first screen time tracker.",
    tech: ["Rust", "React", "Tauri", "Cross-platform"],
    href: "https://github.com/adityaroychoudhary/monograph",
  },
  {
    slug: "wikifetch",
    title: "WikiFetch",
    description:
      "Discord utility bot for instant, summarized Wikipedia knowledge retrieval.",
    tech: ["Node.js", "Discord.js", "REST API"],
    href: "https://github.com/adityaroychoudhary",
  },
  {
    slug: "bffp",
    title: "Backend From First Principles",
    description:
      "A practical, framework-agnostic roadmap for learning backend engineering from first principles.",
    tech: ["Backend", "Roadmap", "Guide"],
    href: "https://github.com/adityaroychoudhary/backend-from-first-principles",
  },
];

export const links = {
  github: "https://github.com/adityaroychoudhary",
  lotgh: "https://grokipedia.com/page/Legend_of_the_Galactic_Heroes",
};

export const contact = {
  email: "ar006985@gmail.com",
  socials: {
    x: "https://x.com/adityaroych",
    mastodon: "https://mastodon.social/@adityaroychoudhary",
    github: "https://github.com/adityaroychoudhary",
    instagram: "https://instagram.com/ssigmaadi",
    // linkedin: "https://linkedin.com/in/aditya-roychoudhary-075930283/",
  },
};
