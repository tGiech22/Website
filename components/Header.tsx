import { site } from "@/data/site";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {site.name}
        </a>
        <nav className="flex items-center gap-4 text-sm text-[var(--muted)]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden transition-colors hover:text-[var(--foreground)] sm:inline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--accent)] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
