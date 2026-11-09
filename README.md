# ASKNIGHTS

Public Next.js draft for the ASKNIGHTS NFT art programme: marketing pages plus a private monthly showcase.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/eclejians-projects/v0-new-as)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## Overview

ASKNIGHTS focuses on selective NFT art curation, responsible tokenisation, recognition, and preservation. This repository is a public draft site — the showcase section is intentionally `noindex` and gated for unreleased works.

### What’s included

- Marketing home with programme overview and showcase teaser
- Private daily showcase draft (`/showcase`)
- About, contact, and legal placeholders (`/privacy`, `/terms` marked for review)

## Tech Stack

- **Framework**: Next.js 15.2.9 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React
- **Font**: Inter (via `next/font`)
- **Deployment**: Vercel

## Branch policy

We work carefully because this site can affect real people.

- **`dev`** — private working line. All experiments, drafts, and untested changes go here first.
- **`main`** — public line. Promote from `dev` only after things work, after testing, and when we are confident it will not harm others.

Do not push unfinished work straight to `main`. Trial and error belongs on `dev`.

## Local Development

```sh
git clone https://github.com/basti4nos/NewAS.git
cd NewAS
git checkout dev
pnpm install
pnpm dev
```

App: [http://localhost:3000](http://localhost:3000)

```sh
pnpm build
pnpm start
```


## Environment Variables

See `.env.example`. The marketing site runs without secrets. For the private showcase draft:

- `SHOWCASE_PREVIEW=1` unlocks the full schedule locally
- `SHOWCASE_PREVIEW_SECRET` unlocks unreleased works when the URL includes `?preview=<secret>`

Bare `?preview=1` no longer unlocks anything unless that secret is literally `1`.

## Project Structure

```
├── app/                 # App Router pages, metadata, OG images
├── components/          # Landing, showcase, and shared UI
├── data/showcase/       # Curated showcase collection
├── lib/                 # Showcase helpers and site constants
├── public/              # Manifest and static assets
└── scripts/             # Showcase data checks
```

## Notes

- `/showcase` is a private draft: `robots` disallow + `X-Robots-Tag: noindex`
- Privacy and terms pages are placeholders pending legal review
- Official logo / brand tokens are not yet in this public repo

## Contact

- Email: contact@asknights.org
- Repository: [https://github.com/basti4nos/NewAS](https://github.com/basti4nos/NewAS)
- Project site: [https://asknights.org](https://asknights.org)
