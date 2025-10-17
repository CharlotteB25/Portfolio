import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = { title: "Projects — Charlotte Billiet" };

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <section className="space-y-6 my-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-ink-700 dark:text-ink-700">
        A curated list of things I’ve built.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
