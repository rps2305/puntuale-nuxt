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
npm run dev         # Start dev server
npm run build       # Production build
npm run generate    # Static site generation
npm run preview     # Preview production build
npm run typecheck   # TypeScript type checking
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint issues
```

## GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup

1. **Go to GitHub repository Settings → Pages**
2. **Set Source to "GitHub Actions"**
3. **Add repository secret `SITE_URL`:**
   - For user/organization site: `https://your-username.github.io/`
   - For project site: `https://your-username.github.io/repository-name/`
4. **Push to `main` branch** to trigger deployment

### Workflow Features

- Automatic deployment on push to `main`
- TypeScript type checking
- ESLint validation
- Static site generation
- Manual deployment trigger available

The workflow file is located at `.github/workflows/deploy.yml`.

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

## Deployment Status

✅ **Latest deployment**: $(date) - All assets working correctly
