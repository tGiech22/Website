export type Photo = {
  id: string;
  /** Path relative to bucket root or public/photos/ — e.g. gallery/2024/harbor-dusk.webp */
  path: string;
  alt: string;
  caption?: string;
  year: number;
  tags?: string[];
  width: number;
  height: number;
  featured?: boolean;
};

export const photography = {
  title: "Photography",
  intro:
    "Outside of code, I shoot photography — mostly urban landscapes and travel. The same attention to light, composition, and detail shows up in how I build interfaces and debug systems.",
};

/**
 * Add entries here when you upload to your bucket (or public/photos/ locally).
 * Keep paths consistent between local dev and CDN — only the base URL changes via env.
 */
export const photos: Photo[] = [
  // Example — uncomment after adding the file to public/photos/gallery/2024/ or your CDN bucket:
  // {
  //   id: "harbor-dusk",
  //   path: "gallery/2024/harbor-dusk.webp",
  //   alt: "Boston harbor at blue hour",
  //   caption: "Long exposure from Seaport",
  //   year: 2024,
  //   tags: ["urban", "night"],
  //   width: 1600,
  //   height: 1067,
  //   featured: true,
  // },
];

export function photosByYear(): { year: number; photos: Photo[] }[] {
  const years = [...new Set(photos.map((p) => p.year))].sort((a, b) => b - a);

  return years.map((year) => ({
    year,
    photos: photos.filter((p) => p.year === year),
  }));
}

export function featuredPhotos(): Photo[] {
  return photos.filter((p) => p.featured);
}
