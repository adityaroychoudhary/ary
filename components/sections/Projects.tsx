import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="fade-in flex flex-col gap-8 [--i:7]">
      <div className="flex flex-col gap-2 [--i:8]">
        <h1>Projects</h1>
        <p>Selected works — more on  <a
          href="https://github.com/adityaroychoudhary"
          target="_blank"
          rel="noopener noreferrer"
          className="link-text"
        >
          github ↗
        </a></p>
      </div>
      <ul className="space-y-4 [--i:9]">
        {projects.map((project) => (
          <li key={project.slug}>
            <p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-text italic [--i:10]"
                >
                  {project.title}
                </a>
              ) : (
                <span className="italic [--i:11]">{project.title}</span>
              )}
              <span className="ml-3 [--i:12]">{project.description}</span>
            </p>

            <div className="mt-1.5 text-sm text-(--sd)">
              {project.tech.join(" · ")}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
