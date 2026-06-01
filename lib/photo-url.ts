/**
 * Resolves a photo path to a full URL.
 *
 * - With NEXT_PUBLIC_PHOTO_CDN_URL set → object storage + CDN (Option B)
 * - Without it → local files in public/photos/ (dev / fallback)
 */
export function getPhotoUrl(path: string): string {
  const cdn = process.env.NEXT_PUBLIC_PHOTO_CDN_URL?.replace(/\/$/, "");
  const normalized = path.replace(/^\//, "");

  if (cdn) {
    return `${cdn}/${normalized}`;
  }

  return `/photos/${normalized}`;
}

export function getPhotoCdnHostname(): string | null {
  const cdn = process.env.NEXT_PUBLIC_PHOTO_CDN_URL;
  if (!cdn) return null;

  try {
    return new URL(cdn).hostname;
  } catch {
    return null;
  }
}
