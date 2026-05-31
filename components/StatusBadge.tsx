import type { Project } from "@/data/site";

const labels: Record<NonNullable<Project["status"]>, string> = {
  shipped: "Shipped",
  building: "Building",
  startup: "Live startup",
};

const styles: Record<NonNullable<Project["status"]>, string> = {
  shipped: "border-[var(--border)] text-[var(--muted)]",
  building: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  startup: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
};

export function StatusBadge({ status }: { status: NonNullable<Project["status"]> }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
