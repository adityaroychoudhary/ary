import type { CSSProperties } from "react";
import Reveal from "../ui/Reveal";
import { sectionOrder } from "../ui/Reveal";
import ExternalLink from "@/components/ui/ExternalLink";
import { links } from "@/lib/data";

const paragraphs = [
  <>Mostly self taught software engineer. Frontend and Backend. Still a student.</>,
  <>
    Currently learning more of backend, working on creating a personal brand
    showcase website, brushing up my skills by creating other smaller websites
    and apps, and previously worked on designing a website for{" "}
    <span className="link-text">447 Studio</span>.
  </>,
  <>
    I also dabble into some IT stuff if possible. If I&apos;m not doing that,
    you&apos;d usually find me in my linux install ricing my setup and working
    on it.
  </>,
  <>
    In my free time, I would usually be playing some music or watching
    something. As for my favourite anime, it would be{" "}
    <ExternalLink href={links.lotgh}>Legend of the Galactic Heroes ↗</ExternalLink>{" "}
    by far. Those who have seen it know ball.
  </>,
];

export default function About({ order }: { order: number }) {
  return (
    <section
      className="flex flex-col gap-4 text-justify"
      style={sectionOrder(order)}
    >
      {paragraphs.map((content, i) => (
        <Reveal as="p" key={i} index={i}>
          {content}
        </Reveal>
      ))}
    </section>
  );
}
