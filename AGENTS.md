# AGENTS.md

This file provides guidelines for agentic coding agents working on this Nuxt 4 project.

## Development Commands

### Core Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

### Type Checking

- `npm run typecheck` - Run TypeScript type checking

### Linting

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

### Testing

No test framework is currently configured. To run tests, first set up Vitest or similar.

## Code Style Guidelines

### General Principles

- Use TypeScript for all new code
- Follow Vue 3 Composition API patterns
- Use `<script setup>` syntax for components
- Prefer auto-imports over explicit imports
- Keep components small and focused (single responsibility)

### Import Style

Avoid manual imports for:
- Vue composables (useFetch, useAsyncData, useState, etc.)
- Vue functions (ref, computed, watch, etc.)
- Components from `~/components` directory
- Utilities from `~/utils` directory

Only import explicitly for:
- Third-party libraries
- Types
- Configuration files

```vue
<!-- GOOD -->
<script setup>
const data = await useFetch('/api/data')
</script>

<!-- AVOID -->
<script setup>
import { useFetch } from '#app'
const data = await useFetch('/api/data')
</script>
```

### Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons at end of statements
- Add trailing commas in objects and arrays
- Maximum line length: 100 characters

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.vue`, `NavigationMenu.vue`)
- **Composables**: camelCase with 'use' prefix (e.g., `useAuth`, `useApiData`)
- **Functions**: camelCase (e.g., `formatDate`, `fetchUsers`)
- **Variables**: camelCase (e.g., `userName`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`, `MAX_RETRIES`)
- **Types/Interfaces**: PascalCase (e.g., `User`, `ApiResponse`)
- **Props**: camelCase (e.g., `pageTitle`, `itemCount`)

### TypeScript

- Always use TypeScript interfaces or types
- Avoid `any` type; use `unknown` when type is truly unknown
- Use generic types when appropriate
- Export types that are used across multiple files
- Use readonly arrays when data should not be modified

```typescript
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

const users: ReadonlyArray<User> = []
```

### Component Structure

```vue
<script setup lang="ts">
// 1. Imports (only for third-party libraries and types)
import type { User } from '~/types'

// 2. Props definition
const props = defineProps<{
  user: User
  title?: string
}>()

// 3. Emits definition
const emit = defineEmits<{
  update: [value: string]
  delete: [id: string]
}>()

// 4. Reactive state
const count = ref(0)
const computedValue = computed(() => count.value * 2)

// 5. Lifecycle hooks
onMounted(() => {
  console.log('Component mounted')
})

// 6. Methods
const increment = () => {
  count.value++
}

// 7. Watchers
watch(count, (newVal) => {
  console.log('Count changed:', newVal)
})
</script>

<template>
  <div>
    <!-- Template content -->
  </div>
</template>

<style scoped>
/* Component styles */
</style>
```

### Error Handling

- Always handle async errors with try-catch
- Use Nuxt's `useError` for page-level errors
- Provide user-friendly error messages
- Log errors appropriately for debugging

```typescript
const { data, error } = await useFetch('/api/data')

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage
  })
}

try {
  await doSomething()
} catch (err) {
  console.error('Operation failed:', err)
}
```

### API Calls

- Prefer Nuxt composables (`useFetch`, `useAsyncData`)
- Define proper types for API responses
- Handle loading and error states
- Use `pick` or `transform` to reduce payload size

```typescript
const { data, pending, error } = await useFetch('/api/users', {
  pick: ['id', 'name', 'email']
})
```

### Content Module Guidelines

- Create content in Markdown format in the `content/` directory
- Use frontmatter for metadata (title, description, date, tags)
- Structure content hierarchically
- Use proper headings (H2, H3) for content organization
- Add alt text for all images

### Nuxt Image Usage

- Use presets for social media images
- Specify width and height when possible
- Provide alt text for accessibility
- Use format optimization

```vue
<NuxtImg
  src="/hero.jpg"
  preset="twitter"
  alt="Hero image"
  loading="lazy"
/>
```

### Nuxt UI Components

- Use Nuxt UI components over custom implementations
- Follow component props API from documentation
- Utilize built-in dark mode support
- Leverage color tokens from Tailwind theme

```vue
<UButton color="primary" variant="solid" icon="i-heroicons-star">
  Featured
</UButton>
```

### Icon Usage

- Use Iconify icon names with `i-` prefix
- Search icons at https://icones.js.org
- Prefer Heroicons for consistency
- Use semantic icon names

```vue
<Icon name="i-heroicons-arrow-left" />
<Icon name="i-lucide-home" />
```

### Directory Structure

- `pages/` - File-based routing
- `components/` - Vue components (auto-imported)
- `composables/` - Vue composables (auto-imported)
- `utils/` - Utility functions (auto-imported)
- `content/` - Markdown content files
- `public/` - Static assets
- `assets/` - Source assets (compiled)
- `layouts/` - Layout components

## Git Guidelines

- Write meaningful commit messages
- Use conventional commit format: `type(scope): description`
  - `feat: add user authentication`
  - `fix: resolve image loading issue`
  - `docs: update AGENTS.md`
  - `chore: upgrade dependencies`

## Performance

- Lazy load heavy components
- Optimize images with appropriate presets
- Use dynamic imports for large libraries
- Implement caching strategies where appropriate
- Minimize bundle size by tree-shaking

## Testing

When adding tests:
- Use Vitest for unit tests
- Test components with Vue Test Utils
- Test composables independently
- Mock external dependencies
- Test for happy paths and error cases
