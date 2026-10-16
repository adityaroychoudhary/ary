import ProjectList from "@/components/sections/ProjectList";
import { sectionOrder } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div style={sectionOrder(1)}>
      <ProjectList items={projects} />
    </div>
  );
}
