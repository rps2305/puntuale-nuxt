---
title: Getting Started with Nuxt Modules
description: The toolkit we use to shape time systems for modern teams.
date: 2025-12-26
tags:
  - nuxt
  - tutorial
  - modules
image: /images/services.webp
imageAlt: Planner and notebook on a desk.
---

## Getting Started with Nuxt Modules

Nuxt modules are the building blocks that extend the core framework functionality. In this article, we'll explore how to use some of the most popular Nuxt modules.

## What are Nuxt Modules?

Nuxt modules are JavaScript functions that are called sequentially when booting Nuxt. They can extend the core framework, add integrations, inject content, and configure webpack.

## Featured Modules

### @nuxt/image

The `@nuxt/image` module provides optimized images with built-in presets for social media platforms:

```vue
<NuxtImg src="/images/hero.webp" preset="twitter" />
```

Available presets include Twitter, Facebook, LinkedIn, Instagram (square and portrait), and YouTube.

### @nuxt/icon

Bring in iconic, semantic cues for timing workflows:

```vue
<Icon name="i-heroicons-clock" />
```

### @nuxt/content

A git-based headless CMS for your Nuxt application. Write your content in Markdown files and query them using a MongoDB-like API.

### @nuxt/fonts

Lock typography into place so your cadence feels deliberate.

## Best Practices

1. Always read the module documentation
2. Configure modules in `nuxt.config.ts`
3. Test module integrations thoroughly
4. Keep modules updated

## Conclusion

Nuxt modules provide powerful functionality that can significantly speed up development. Start with the basics and gradually add more modules as needed.
