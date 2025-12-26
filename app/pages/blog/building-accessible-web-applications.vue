<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1600"
        width="1200"
        height="800"
        fit="cover"
        alt="Building Accessible Web Applications"
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
            Accessibility
          </UBadge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Building Accessible Web Applications
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
          <span>December 22, 2025</span>
          <span>7 min read</span>
        </div>

        <div class="prose dark:prose-invert max-w-none">
          <p>
            Web accessibility isn't just about compliance – it's about creating inclusive digital experiences that work for everyone. At Puntuale, we believe that great web applications should be usable by all people, regardless of their abilities or disabilities.
          </p>

          <h2>Why Accessibility Matters</h2>
          <p>
            Approximately 15% of the world's population lives with some form of disability. By building accessible web applications, you're not just following best practices – you're ensuring that millions of people can access your content and services. Accessibility also improves user experience for everyone and can even boost your SEO efforts.
          </p>

          <h2>Core Principles of Web Accessibility</h2>
          <ul>
            <li><strong>Perceivable:</strong> Information and UI components must be presentable in ways users can perceive</li>
            <li><strong>Operable:</strong> UI components and navigation must be operable</li>
            <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
            <li><strong>Robust:</strong> Content must be robust enough to be interpreted reliably by user agents</li>
          </ul>

          <h2>Practical Tips for Accessible Design</h2>
          <p>
            Implementing accessibility doesn't have to be overwhelming. Start with basics like using semantic HTML, providing alternative text for images, ensuring sufficient color contrast, and making all functionality available from keyboard. These simple steps can dramatically improve your application's accessibility.
          </p>

          <h2>Testing and Continuous Improvement</h2>
          <p>
            Accessibility testing should be part of your regular development workflow. Use automated tools to catch common issues, but also conduct manual testing with keyboard navigation and screen readers. At Puntuale, we integrate accessibility testing throughout our development process to ensure we deliver inclusive experiences.
          </p>

          <h2>Let's Build Accessible Solutions Together</h2>
          <p>
            Ready to make your web applications accessible to everyone? Puntuale's team of accessibility experts can help you audit, improve, and maintain accessible digital experiences. Contact us today to learn how we can help you reach all your users.
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
  title: 'Building Accessible Web Applications - Puntuale Blog',
  description: 'Learn how to build accessible web applications that work for everyone. Discover accessibility best practices and inclusive design principles.',
  ogTitle: 'Building Accessible Web Applications',
  ogDescription: 'Create inclusive digital experiences with accessibility best practices from Puntuale.',
  ogType: 'article',
  ogUrl: 'https://puntuale.nl/blog/building-accessible-web-applications',
  ogImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
</script>
