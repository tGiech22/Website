import { site } from "@/data/site";

export function Footer() {
  const { contact } = site;

  return (
    <footer id="contact" className="border-t border-[var(--border)] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-[var(--muted)]">Open to SWE, data engineering, and AI engineering roles.</p>
        <ul className="mt-6 space-y-2 text-sm">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-[var(--muted)]">{contact.location}</li>
        </ul>
        <p className="mt-10 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
