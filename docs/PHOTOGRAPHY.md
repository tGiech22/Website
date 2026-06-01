# Photography storage (Option B — object storage + CDN)

Photos are **not** stored in the Git repo. They live in object storage (e.g. Cloudflare R2) and are served through a CDN. The site only stores metadata in `data/photos.ts`.

## How it works

```
Bucket (R2/S3)          CDN                    Website
─────────────────       ───────────────        ──────────────
gallery/2024/photo.webp → cdn.yoursite.com/... → data/photos.ts (path + caption)
```

1. Upload image to bucket at e.g. `gallery/2024/harbor-dusk.webp`
2. Set `NEXT_PUBLIC_PHOTO_CDN_URL` to your CDN base URL
3. Add an entry to `photos` in `data/photos.ts`
4. Redeploy (or rely on ISR if you add it later)

## Local development (before CDN is ready)

Leave `NEXT_PUBLIC_PHOTO_CDN_URL` unset. Put files in:

```
public/photos/gallery/2024/harbor-dusk.webp
```

Use the same `path` in `data/photos.ts`: `gallery/2024/harbor-dusk.webp`

## Cloudflare R2 setup (recommended)

1. Create an R2 bucket (e.g. `tony-photos`)
2. Upload photos under `gallery/YYYY/filename.webp`
3. Enable public access or connect a custom domain via Cloudflare
4. Copy the public URL (e.g. `https://photos.tonygiech.com` or `https://pub-xxx.r2.dev`)
5. Add to `.env.local`:

```bash
NEXT_PUBLIC_PHOTO_CDN_URL=https://photos.yourdomain.com
```

6. Add the hostname to `next.config.ts` `images.remotePatterns` (or restart dev after setting env — config reads it at build time)

## Upload workflow

**CLI (R2 via wrangler):**

```bash
npx wrangler r2 object put tony-photos/gallery/2025/street-01.webp --file=./exports/street-01.webp
```

**AWS S3:**

```bash
aws s3 cp ./exports/street-01.webp s3://your-bucket/gallery/2025/street-01.webp
```

Then add to `data/photos.ts`:

```typescript
{
  id: "street-01",
  path: "gallery/2025/street-01.webp",
  alt: "Description for accessibility",
  caption: "Optional caption shown under the image",
  year: 2025,
  tags: ["urban", "street"],
  width: 1600,
  height: 1067,
},
```

## Image prep

- Export as **WebP** (or AVIF), max width **1600px** for gallery
- Keep originals elsewhere; only optimized files go in the bucket
- `width` / `height` in the manifest prevent layout shift (check in Finder or `file` / image editor)

## Adding many photos

- Use folder structure: `gallery/2025/`, `gallery/2024/`
- One manifest entry per photo
- Optional: script to generate `photos.ts` entries from a folder listing
