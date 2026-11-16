# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server on **port 5173** (not 3000)
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — `next lint` (ESLint, `eslint-config-next`)
- There is no test suite. The README is the stock create-next-app one.

## Architecture

Marketing site for a Dubai renovation/construction company (BA Tech L.L.C), built on **Next.js 13 Pages Router** with plain JavaScript (no TypeScript). The `@/*` alias maps to the repo root (`jsconfig.json`).

- `pages/_app.js` wraps every page with the shared `Header`/`Footer` (`components/updated-themes/layout/`), the WhatsApp widget, phone FAB and scroll-to-top. It also sets the site-wide default `<title>`/meta; pages override with their own `<Head>`.
- `pages/services/<service>/index.js` — one static page per service (electrician, AC, plumbing, painting, etc.).
- **Blog/portfolio content comes from a remote REST backend**, not local files. The base URL and endpoint keys live in `config/api.config.json`; use `buildUrl()`/`getUrl()` from `config/api.config.js`. `services/portfolioApi.service.js` wraps the portfolio endpoints; `pages/blogs/[slug].js` fetches client-side with axios via `useRouter().query`.
- `pages/api/sendEmail.js` — contact-form endpoint using nodemailer/Gmail; needs `EMAIL_USER` and `EMAIL_PASS` in `.env`.
- `data/*.json` holds small local datasets (gallery, hero, team).
- `next.config.js` whitelists the S3 image domain `travel-and-tourism.s3.amazonaws.com` for `next/image`; add any new remote image hosts there.

## Styling (mid-redesign — read before touching CSS)

The branch `redesigning-web` is migrating the site to a new design-token system, so old and new coexist:

- **Tokens** are CSS custom properties on `:root` in `styles/globals.css` (`--primary`, `--accent-soft`, `--ink*`, surfaces, etc.). Use tokens rather than hard-coded colors. Legacy variable names (`--dark-blue`, `--light-blue`, `--text-gray`) are kept as aliases but now hold new-palette values, so their names are misleading.
- **Two CSS directories**: `style/` (singular — newer per-section modules, including `redesign.module.css`) and `styles/` (plural — `globals.css` plus older modules). Both are CSS Modules imported via `@/style/...` or `@/styles/...`.
- **New home page** is composed from `components/redesign/*` (Hero, Stats, ServicesGrid, Journey, WhyChoose, Projects, CtaBand) styled by `style/redesign.module.css`. Other pages still use `components/updated-themes/*` and `components/updated-components/*`.
- Tailwind (with `@tailwindcss/typography`) is used alongside CSS Modules; `tailwind.config.js` content globs cover only `pages/` and `components/`.

## Gotchas

- `markdownUtilsm.mjs` is a stray, apparently unused helper (it passes un-awaited dynamic imports to `unified()`), so don't build on it.
- `.env` is tracked in git (`.gitignore` only ignores `.env*.local`) and holds email credentials — don't print or copy its values.
