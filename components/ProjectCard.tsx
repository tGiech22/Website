import type { Project } from "@/data/site";
import { StatusBadge } from "./StatusBadge";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.org && <p className="text-sm text-[var(--muted)]">{project.org}</p>}
        </div>
        {project.status && <StatusBadge status={project.status} />}
      </div>
      <p className="mt-3 leading-relaxed text-[var(--muted)]">{project.summary}</p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            Live site →
          </a>
        )}
      </div>
    </article>
  );
}
