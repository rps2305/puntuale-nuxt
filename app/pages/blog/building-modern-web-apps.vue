<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg?auto=compress&cs=tinysrgb&w=1600"
        width="1200"
        height="800"
        fit="cover"
        alt="Building Modern Web Apps"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <UBadge
            variant="subtle"
            color="primary"
            class="mb-4 text-white/90"
          >
            Technology
          </UBadge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Building Modern Web Apps
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
          <span>December 25, 2025</span>
          <span>5 min read</span>
        </div>

        <div class="prose dark:prose-invert max-w-none">
          <p>
            In today's fast-paced digital landscape, building modern web applications requires a combination of cutting-edge technologies, best practices, and a deep understanding of user needs. At Puntuale, we specialize in creating web applications that are not only functional but also scalable, secure, and user-friendly.
          </p>

          <h2>The Foundation: Choosing the Right Stack</h2>
          <p>
            Selecting the appropriate technology stack is crucial for the success of any web application. At Puntuale, we leverage modern frameworks like Nuxt.js, Vue.js, and React to build performant and maintainable applications. These frameworks provide excellent developer experience, strong community support, and a wealth of libraries to accelerate development.
          </p>

          <h2>Key Principles for Modern Web Apps</h2>
          <ul>
            <li><strong>Performance:</strong> Optimizing load times and interaction responsiveness</li>
            <li><strong>Accessibility:</strong> Ensuring your app is usable by everyone</li>
            <li><strong>Security:</strong> Implementing robust security measures from the start</li>
            <li><strong>Scalability:</strong> Designing architecture that can grow with your business</li>
            <li><strong>SEO:</strong> Optimizing for search engines to reach your audience</li>
          </ul>

          <h2>Best Practices We Follow</h2>
          <p>
            Our team at Puntuale follows industry best practices to deliver high-quality web applications. We prioritize code quality, continuous integration, and automated testing to ensure reliability and maintainability. Our agile development approach allows us to adapt to changing requirements and deliver value quickly.
          </p>

          <h2>Getting Started with Puntuale</h2>
          <p>
            Ready to build your next web application? Contact Puntuale today to discuss your project. Our team of experts is ready to help you transform your ideas into reality with modern, scalable web solutions.
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
  title: 'Building Modern Web Apps - Puntuale Blog',
  description: 'Learn about building modern web applications with best practices, technology choices, and expert insights from Puntuale.',
  ogTitle: 'Building Modern Web Apps',
  ogDescription: 'Discover the latest trends and best practices for building scalable, modern web applications.',
  ogType: 'article',
  ogUrl: 'https://puntuale.nl/blog/building-modern-web-apps',
  ogImage: 'https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
</script>
