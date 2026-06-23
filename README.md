# Tony Giech — Personal Portfolio

> A personal portfolio and photography website built with Next.js, TypeScript, and Tailwind CSS.

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/Tested_with-Vitest-6E9F18?logo=vitest&logoColor=white">
</p>

## Overview

A fast, responsive single-developer portfolio that showcases my work, experience, and photography. It is statically driven by typed content files, ships light and dark themes with no flash on load, and is deployed on Vercel.

## Features

- **Portfolio (`/`)** — hero, experience, work/projects, skills, about, and contact sections.
- **Photography (`/photography`)** — a gallery served from object storage and a CDN.
- **Theming** — light and dark modes with a header toggle. Defaults to the visitor's OS preference, persists manual choices in `localStorage`, and renders with no flash of incorrect theme on load.
- **Responsive design** — built with Tailwind CSS v4 and CSS custom properties.
- **Type-safe content** — site and photography content live in typed data files, keeping copy and code cleanly separated.

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router)             |
| UI         | React 19                            |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS v4                     |
| Testing    | Vitest + Testing Library            |
| Deployment | Vercel                              |

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

### Testing

Component and data tests run with [Vitest](https://vitest.dev):

```bash
npx vitest        # watch mode
npx vitest run    # single run
```

## Editing Content

Site content is centralized in typed data files — no component changes are needed to update copy.

- [`data/site.ts`](./data/site.ts) — experience, projects, skills, and contact info.
- [`data/photos.ts`](./data/photos.ts) — photography, served from object storage and a CDN. See [docs/PHOTOGRAPHY.md](./docs/PHOTOGRAPHY.md).

## Deployment

The site is deployed on [Vercel](https://vercel.com) directly from this repository. Pushes to the main branch trigger an automatic production deploy.