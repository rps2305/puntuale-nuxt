---
title: Getting Started with Nuxt Modules
description: Learn how to use Nuxt modules to enhance your application
date: 2025-12-26
tags:
  - nuxt
  - tutorial
  - modules
image: /blog-hero.jpg
---

# Getting Started with Nuxt Modules

Nuxt modules are the building blocks that extend the core framework functionality. In this article, we'll explore how to use some of the most popular Nuxt modules.

## What are Nuxt Modules?

Nuxt modules are JavaScript functions that are called sequentially when booting Nuxt. They can extend the core framework, add integrations, inject content, and configure webpack.

## Featured Modules

### @nuxt/image

The `@nuxt/image` module provides optimized images with built-in presets for social media platforms:

```vue
<NuxtImg src="/hero.jpg" preset="twitter" />
```

Available presets include Twitter, Facebook, LinkedIn, Instagram (square and portrait), and YouTube.

### @nuxt/ui

Beautiful UI components that work out of the box:

```vue
<UButton>Click me</UButton>
<UInput v-model="text" />
```

### @nuxt/content

A git-based headless CMS for your Nuxt application. Write your content in Markdown files and query them using a MongoDB-like API.

### @nuxt/icon

Access thousands of icons from all major icon libraries:

```vue
<Icon name="i-heroicons-star" />
```

## Best Practices

1. Always read the module documentation
2. Configure modules in `nuxt.config.ts`
3. Test module integrations thoroughly
4. Keep modules updated

## Conclusion

Nuxt modules provide powerful functionality that can significantly speed up development. Start with the basics and gradually add more modules as needed.
