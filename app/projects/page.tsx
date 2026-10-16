import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <>
      <ul className="space-y-5 [--i:2]">
        {projects.map((project) => (
          <li key={project.slug}>
            <p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-text italic underline underline-offset-4"
                >
                  {project.title}
                </a>
              ) : (
                <span className="italic">{project.title}</span>
              )}
              <span className="ml-3">{project.description}</span>
            </p>

            <div className="mt-1.5 text-sm text-(--sd)">
              {project.tech.join(" · ")}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
