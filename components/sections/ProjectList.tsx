import ExternalLink from "@/components/ui/ExternalLink";
import Reveal from "@/components/ui/Reveal";
import type { projects } from "@/lib/data";

type Props = {
  items: typeof projects;
  startIndex?: number;
};

export default function ProjectList({ items, startIndex = 0 }: Props) {
  return (
    <ul className="space-y-4">
      {items.map((project, i) => (
        <Reveal as="li" key={project.slug} index={startIndex + i}>
          <p>
            {project.href ? (
              <ExternalLink href={project.href} className="italic">
                {project.title}
              </ExternalLink>
            ) : (
              <span className="italic">{project.title}</span>
            )}
            <span className="ml-3">{project.description}</span>
          </p>

          <div className="mt-1.5 text-sm text-(--sd)">
            {project.tech.join(" · ")}
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
