import Image from "next/image";
import type { Photo } from "@/data/photos";
import { getPhotoUrl } from "@/lib/photo-url";

export function PhotoCard({ photo }: { photo: Photo }) {
  const src = getPhotoUrl(photo.path);

  return (
    <figure className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </a>
      {(photo.caption || photo.tags) && (
        <figcaption className="space-y-2 px-4 py-3">
          {photo.caption && (
            <p className="text-sm leading-relaxed text-[var(--foreground)]">{photo.caption}</p>
          )}
          {photo.tags && photo.tags.length > 0 && (
            <p className="text-xs text-[var(--muted)]">{photo.tags.join(" · ")}</p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
