# ASKNIGHTS

Draft website for ASKNIGHTS: NFT art curation, phygitals (physical-digital art), and Metaverse exposure. Founded in 2020.

Public site: [asknights.org](https://asknights.org)

This repository is a private draft of the public website. A preview of an earlier version is at [v0-new-as.vercel.app](https://v0-new-as.vercel.app). Search engines are asked not to index the draft unless `NEXT_PUBLIC_SITE_INDEXABLE=true` is set at build time.

Positioning used on the site: AI informs. Human curators decide.

## Programme

- ASKNIGHTS Magazine — curated editorial on digital art
- Exhibitions — Portals; Rare Bits & Bytes
- Preservation and archival of NFT art
- A curated marketplace, in development on testnet (coming soon)

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- A small set of shadcn/ui primitives (button, input, label, textarea)

Package manager: npm. The lockfile is `package-lock.json`.

## Local development

```sh
git clone https://github.com/basti4nos/NewAS.git
cd NewAS
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

```sh
npm run lint
npm run build
npm start
```

`npm run build` type-checks the project and runs ESLint.

## Environment

Copy `.env.example` to `.env.local` if you need to override the defaults. No secrets are required for the draft.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_INDEXABLE` | Set to `true` only when the site should be indexed. Any other value, including unset, sends `noindex, nofollow` and a `robots.txt` that disallows crawling. Inlined at build time. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional. Analytics stay disabled when this is empty. See `components/analytics.tsx`. |

## Brand

The colour palette on this draft is provisional: charcoal, soft white, and one brass accent. The official logo and design tokens live with the private dApp and were not available when this pass was made. Do not treat the monogram favicon as the official mark.

## Still to do

- Replace artwork placeholders with real works (`components/artwork-placeholder.tsx`)
- Publish Magazine essays
- Connect the contact form handler (`components/contact-form.tsx`) — no secrets in the client
- Choose a privacy-friendly analytics provider, or leave the hook disabled
- Legal review of `/privacy` and `/terms` before they are treated as published documents
- Add a public marketplace address only when one exists
- Swap in the official logo and palette if they are cleared for this public repository

## Licence

This repository does not include a licence file. An earlier README described the project as MIT-licensed. That was not accurate. Do not assume a right to reuse the code until the maintainer adds a licence.

## Accessibility notes

The layout uses semantic regions, a skip link, and visible focus. Motion is limited, and `prefers-reduced-motion` cuts remaining transitions. That is not a claim of WCAG conformance.
