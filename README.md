# Nuxt 4 Starter Website

A modern, responsive Nuxt 4 website with blog, products, and team pages. Built with Nuxt 4, Tailwind CSS, and Nuxt UI.

## Features

- 📄 File-based routing with multiple page types
- 🎨 Responsive design with Tailwind CSS
- 📝 Blog with markdown content
- 🛍️ Products showcase with dynamic routes
- 👥 Team member profiles
- 🌙 Dark mode support
- 🖼️ Optimized images with Nuxt Image
- 🤖 SEO-friendly with meta tags
- 🔍 Type-safe with TypeScript

## Prerequisites

- Node.js 18.x or higher
- pnpm, npm, yarn, or bun

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nuxt-app

# Install dependencies
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production
pnpm generate         # Generate static site

# Preview
pnpm preview          # Preview production build locally

# Quality Assurance
pnpm typecheck        # Run TypeScript type checking
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
```

## Project Structure

```
nuxt-app/
├── app/                    # App directory (Nuxt 4)
│   ├── pages/             # File-based routing
│   │   ├── blog/          # Blog pages
│   │   ├── products/      # Product pages with dynamic routes
│   │   └── team/          # Team member pages
│   ├── app.vue           # Root component
│   └── app.css            # Global styles
├── content/               # Markdown content
│   ├── blog/             # Blog posts
│   └── about.md          # About page content
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── products.json     # Product data
├── server/                # Server routes
│   └── api/              # API endpoints
├── components/            # Vue components (auto-imported)
├── composables/           # Vue composables (auto-imported)
├── utils/                 # Utility functions (auto-imported)
├── layouts/               # Layout components
└── nuxt.config.ts        # Nuxt configuration
```

## Development Guidelines

See [AGENTS.md](./AGENTS.md) for detailed development guidelines including:
- Code style conventions
- Component structure
- TypeScript best practices
- API call patterns
- Import style preferences
- Git commit conventions

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NUXT_PUBLIC_SITE_URL=https://your-site.com
NUXT_PUBLIC_SITE_NAME=Your Site Name
```

### Nuxt Modules

This project uses several Nuxt modules:
- `@nuxt/content` - Content management system
- `@nuxt/image` - Image optimization
- `@nuxtjs/tailwindcss` - Tailwind CSS integration
- `@nuxt/ui` - UI component library

## Deployment

### Static Site Generation

```bash
pnpm generate
```

The static files will be generated in `.output/public/` directory.

### Production Build

```bash
pnpm build
```

### Deployment Platforms

This project can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify
- Any Node.js hosting platform

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more details.

## Security

For security vulnerability reporting, see [security.txt](./public/security.txt).

## License

MIT

## Support

For issues and questions, please open an issue in the repository.
