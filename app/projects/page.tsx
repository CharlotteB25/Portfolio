import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = { title: "Projects — Charlotte Billiet" };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="section py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="title text-[clamp(2.25rem,6vw,3.5rem)] leading-tight text-ink-700">
          Projects
        </h1>

        <p className="text-ink-700 text-lg max-w-3xl">
          A selection of projects showcasing my skills in full-stack
          development, front-end design, and collaborative work. Each project
          highlights my commitment to creating efficient, user-friendly, and
          visually appealing digital experiences.
        </p>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-7
        "
      >
        {projects.map((p, i) => (
          <div key={i}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
