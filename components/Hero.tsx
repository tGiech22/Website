import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="px-6 pb-16 pt-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-[var(--accent)]">{site.role}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{site.education}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            View work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
