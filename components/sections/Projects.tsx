import { Link } from "next-view-transitions";
import ExternalLink from "@/components/ui/ExternalLink";
import Reveal, { sectionOrder } from "@/components/ui/Reveal";
import ProjectList from "@/components/sections/ProjectList";
import { links, projects } from "@/lib/data";

const featured = projects.slice(0, 5);

export default function Projects({ order }: { order: number }) {
  return (
    <section className="flex flex-col gap-8" style={sectionOrder(order)}>
      <Reveal className="flex flex-col gap-2">
        <h1>Projects</h1>
        <p>
          Selected works — more on{" "}
          <ExternalLink href={links.github}>Github ↗</ExternalLink>
          {" "}and{" "}
          <Link href="/projects" className="link-text">
            All projects →
          </Link>
        </p>
      </Reveal>
      <ProjectList items={featured} startIndex={1} />
    </section>
  );
}
