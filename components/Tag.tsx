export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 text-xs text-[var(--muted)]">
      {label}
    </span>
  );
}
