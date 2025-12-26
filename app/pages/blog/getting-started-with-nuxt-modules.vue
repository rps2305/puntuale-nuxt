<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1600"
        width="1200"
        height="800"
        fit="cover"
        alt="Getting Started with Nuxt Modules"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <UBadge
            variant="subtle"
            color="success"
            class="mb-4 text-white/90"
          >
            Tutorial
          </UBadge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Getting Started with Nuxt Modules
          </h1>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <article class="max-w-3xl mx-auto">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <UIcon
            name="i-heroicons-arrow-left"
            class="mr-2"
          />
          Back to Blog
        </NuxtLink>

        <div class="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
          <span>December 20, 2025</span>
          <span>7 min read</span>
        </div>

        <div class="prose dark:prose-invert max-w-none">
          <p>
            Nuxt modules are a powerful way to extend the functionality of your Nuxt applications. They provide reusable code that can be easily integrated into your projects, saving time and ensuring consistency across your development workflow. At Puntuale, we extensively use Nuxt modules to accelerate development and maintain code quality.
          </p>

          <h2>What are Nuxt Modules?</h2>
          <p>
            Nuxt modules are JavaScript packages that integrate seamlessly with the Nuxt framework. They can add new features, modify the configuration, or provide additional utilities. Modules can be created by anyone and shared with the community, making it easy to find solutions for common challenges.
          </p>

          <h2>Popular Nuxt Modules</h2>
          <p>
            There are hundreds of Nuxt modules available, covering everything from authentication to SEO optimization. Some of the most popular modules include:
          </p>
          <ul>
            <li><strong>@nuxt/image:</strong> Optimized image handling with automatic resizing and format conversion</li>
            <li><strong>@nuxt/content:</strong> Git-based headless CMS for content management</li>
            <li><strong>@nuxtjs/robots:</strong> Automatic robots.txt generation</li>
            <li><strong>@nuxtjs/sitemap:</strong> Dynamic sitemap generation</li>
            <li><strong>nuxt-schema-org:</strong> Schema.org integration for SEO</li>
          </ul>

          <h2>Installing and Using Modules</h2>
          <p>
            Getting started with Nuxt modules is straightforward. Simply install the module using npm or yarn, and add it to your `nuxt.config.ts` file. Most modules work out of the box, but some may require additional configuration.
          </p>

          <h2>Creating Custom Modules</h2>
          <p>
            For project-specific needs, you can create custom Nuxt modules. This allows you to encapsulate reusable logic and share it across multiple projects or even with the community. The Nuxt team provides excellent documentation on module development.
          </p>

          <h2>Best Practices</h2>
          <ul>
            <li>Always check module compatibility with your Nuxt version</li>
            <li>Review the documentation before installing a module</li>
            <li>Keep your modules up to date for security and performance</li>
            <li>Test thoroughly after adding or updating modules</li>
          </ul>

          <h2>Get Expert Help</h2>
          <p>
            At Puntuale, we have extensive experience working with Nuxt modules. Whether you need help selecting the right modules or building custom solutions, our team is here to assist. Contact us to discuss your next project.
          </p>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Share this article
              </p>
              <div class="flex gap-2">
                <UButton
                  icon="i-simple-icons-x"
                  variant="ghost"
                  color="neutral"
                  size="sm"
                />
                <UButton
                  icon="i-simple-icons-linkedin"
                  variant="ghost"
                  color="neutral"
                  size="sm"
                />
                <UButton
                  icon="i-simple-icons-facebook"
                  variant="ghost"
                  color="neutral"
                  size="sm"
                />
              </div>
            </div>
            <UButton
              to="/contact"
              color="primary"
              variant="solid"
            >
              Get in Touch
            </UButton>
          </div>
        </div>
      </article>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Getting Started with Nuxt Modules - Puntuale Blog',
  description: 'A comprehensive guide to understanding and using Nuxt modules for your projects. Learn best practices and popular modules.',
  ogTitle: 'Getting Started with Nuxt Modules',
  ogDescription: 'Learn how to use Nuxt modules to extend your application functionality.',
  ogType: 'article',
  ogUrl: 'https://puntuale.nl/blog/getting-started-with-nuxt-modules',
  ogImage: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
</script>
