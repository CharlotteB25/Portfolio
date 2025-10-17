import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group wave-card rounded-2xl overflow-hidden transition ">
      {/* Top bar / visual */}

      <div className="p-5 space-y-3">
        {/* Title + year */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg text-ink-700 font-semibold  transition">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-sm px-2 py-0.5 rounded-full  border border-marigold/90 text-marigold/90 ">
              {project.year}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="text-sm text-ink-700/90 leading-relaxed">
          {project.summary}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-marigold/6 border border-marigold/90 text-marigold/85"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 text-sm pt-2">
          {project.demo && (
            <a
              className="link-underline hover:text-marigold transition"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          )}
          {project.repo && (
            <a
              className="link-underline hover:text-marigold transition"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
