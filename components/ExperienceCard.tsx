import Image from "next/image";

import type { Experience } from "@/data/site";
import { Tag } from "./Tag";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {item.logo && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{item.company}</h3>
            <p className="text-[var(--muted)]">{item.role}</p>
          </div>
        </div>
        <div className="text-sm text-[var(--muted)] sm:text-right">
          <p>{item.dates}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-[var(--muted)]">{item.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
