# Puntuale-Nuxt

Marketing site for Puntuale, an imaginary time management studio with the slogan
"Problems for all your solutions." Built with Nuxt 4 and Nuxt Content.

## Stack

- Nuxt 4 (Vue 3)
- @nuxt/content for Markdown content
- @nuxt/image for image optimization (WebP)
- @nuxt/fonts for typography
- @nuxt/icon for icons
- shadcn-nuxt for UI primitives

## Content & Images

- All page content lives in `content/` as Markdown/JSON with frontmatter metadata.
- Images are sourced from Pexels, converted to WebP, and stored in `public/images`.
- `NuxtImg` presets are configured in `nuxt.config.ts`.

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Useful Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run generate  # Static site generation
npm run preview   # Preview production build
```

## Project Structure

- `app/` — Nuxt app shell
- `assets/` — global styles
- `components/` — Vue components (auto-imported)
- `content/` — Markdown/JSON content
- `layouts/` — layout components
- `pages/` — file-based routing
- `public/` — static assets (images, favicon)
- `types/` — shared TypeScript types

## Notes

- Nuxt 4 requires Node `>=20.19.0` (or `>=22.12.0`). If you see engine warnings,
  upgrade Node to avoid potential build/runtime issues.
