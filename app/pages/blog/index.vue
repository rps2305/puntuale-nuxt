<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="/images/pages/blog-hero.jpg"
        width="1200"
        height="800"
        fit="cover"
        alt="Puntuale Blog"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Blog
          </h1>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Latest Insights
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Stay updated with our latest articles on technology, innovation, and business solutions.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <NuxtLink
            to="/blog/building-modern-web-apps"
            class="group"
          >
            <UCard class="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <div class="w-full h-48 overflow-hidden">
                <NuxtImg
                  src="/images/pages/hero.jpg"
                  width="800"
                  height="450"
                  fit="cover"
                  alt="Building Modern Web Apps"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <UBadge
                variant="subtle"
                color="primary"
                class="mb-3"
              >
                Technology
              </UBadge>
              <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                Building Modern Web Apps
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Discover the latest trends and best practices for building scalable, modern web applications.
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                December 25, 2025
              </p>
            </UCard>
          </NuxtLink>

          <NuxtLink
            to="/blog/getting-started-with-nuxt-modules"
            class="group"
          >
            <UCard class="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <div class="w-full h-48 overflow-hidden">
                <NuxtImg
                  src="/images/pages/hero.jpg"
                  width="800"
                  height="450"
                  fit="cover"
                  alt="Getting Started with Nuxt Modules"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <UBadge
                variant="subtle"
                color="success"
                class="mb-3"
              >
                Tutorial
              </UBadge>
              <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                Getting Started with Nuxt Modules
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                A comprehensive guide to understanding and using Nuxt modules for your projects.
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                December 20, 2025
              </p>
            </UCard>
          </NuxtLink>
        </div>

        <section class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Stay updated with our latest articles
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our newsletter for technology insights, tutorials, and business solutions from Puntuale.
          </p>
          <UInput
            placeholder="Enter your email"
            size="lg"
            class="max-w-md mx-auto"
          />
          <UButton
            size="lg"
            color="primary"
            variant="solid"
            class="mt-4"
          >
            Subscribe
          </UButton>
        </section>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog - Puntuale',
  description: 'Latest insights and articles from Puntuale on technology, innovation, and business solutions.',
  ogTitle: 'Puntuale Blog',
  ogDescription: 'Stay updated with our latest articles on technology and business solutions.',
  ogUrl: 'https://puntuale.nl/blog',
});
</script>
