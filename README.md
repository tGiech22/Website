# Tony Giech — Personal Portfolio

Personal portfolio and photography site built with Next.js, TypeScript, and Tailwind CSS.

## Live site

Deploy to [Vercel](https://vercel.com) from this repo.

## Pages

- `/` — portfolio: hero, experience, work/projects, skills, about, and contact sections.
- `/photography` — photography gallery served from object storage + CDN.

## Features

- Light and dark themes with a header toggle. Defaults to the visitor's OS preference, remembers the manual choice in `localStorage`, and renders with no flash on load.
- Responsive layout styled with Tailwind CSS v4 and CSS custom properties.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Site content lives in [`data/site.ts`](./data/site.ts). Update experience, projects, skills, and contact info there.

Photography uses [`data/photos.ts`](./data/photos.ts) with images served from object storage + CDN. See [docs/PHOTOGRAPHY.md](./docs/PHOTOGRAPHY.md).

See [CHECKLIST.md](./CHECKLIST.md) for the full launch checklist.

## Testing

Component and data tests run with [Vitest](https://vitest.dev):

```bash
npx vitest        # watch mode
npx vitest run    # single run
```

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Vitest + Testing Library

## Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```
