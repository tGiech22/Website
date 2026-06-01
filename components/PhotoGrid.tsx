import { photos, photosByYear } from "@/data/photos";
import { PhotoCard } from "./PhotoCard";

export function PhotoGrid() {
  if (photos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)] px-6 py-16 text-center">
        <p className="text-lg font-medium">Gallery coming soon</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
          Upload photos to your CDN bucket, add an entry in{" "}
          <code className="rounded bg-[var(--background)] px-1.5 py-0.5 text-xs">
            data/photos.ts
          </code>
          , and they&apos;ll appear here. See{" "}
          <code className="rounded bg-[var(--background)] px-1.5 py-0.5 text-xs">
            docs/PHOTOGRAPHY.md
          </code>{" "}
          for the object storage setup.
        </p>
      </div>
    );
  }

  const grouped = photosByYear();

  return (
    <div className="space-y-12">
      {grouped.map(({ year, photos: yearPhotos }) => (
        <section key={year}>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
            {year}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yearPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
