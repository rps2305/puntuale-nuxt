<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="/images/pages/home-hero.jpg"
        width="1200"
        height="800"
        format="webp"
        fit="cover"
        alt="Puntuale - Problems for your solutions"
        class="w-full h-full object-cover"
        loading="eager"
        preload
        :sizes="'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw'"
        :srcset="`
          /images/pages/home-hero.webp 480w,
          /images/pages/home-hero.webp 768w,
          /images/pages/home-hero.webp 1024w,
          /images/pages/home-hero.webp 1200w
        `"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Problems for your<br>
            <span class="text-primary-300">solutions</span>
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            We transform complex business challenges into innovative, actionable solutions.
          </p>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <section class="text-center mb-20">
        <UBadge
          variant="subtle"
          color="primary"
          class="mb-6"
        >
          Welcome to Puntuale
        </UBadge>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Let Puntuale guide your digital transformation journey
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Transform your business challenges into opportunities with our expert solutions.
        </p>
        <div class="flex gap-4 justify-center">
          <UButton
            to="/contact"
            size="lg"
            color="primary"
            variant="solid"
          >
            Get Started
          </UButton>
          <UButton
            to="/about"
            size="lg"
            color="neutral"
            variant="outline"
          >
            About Puntuale
          </UButton>
        </div>
      </section>

      <section class="max-w-4xl mx-auto mb-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              About Puntuale
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Founded with a vision to revolutionize how businesses approach technology and innovation, Puntuale has grown into a trusted partner for organizations seeking digital excellence. Our journey began with a simple belief: that every problem has an innovative solution waiting to be discovered.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Today, we are proud to serve clients across multiple industries, helping them navigate the complexities of digital transformation with confidence and clarity. Our team combines deep technical expertise with strategic thinking to deliver solutions that don't just work – they transform.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              At the heart of everything we do is our commitment to our clients' success. We don't just deliver projects; we build lasting partnerships grounded in trust, transparency, and mutual growth. When you work with Puntuale, you're not just getting a service provider – you're gaining a dedicated partner invested in your success.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </p>
            </div>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">
                150+
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Happy Clients
              </p>
            </div>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">
                10+
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <div class="grid md:grid-cols-3 gap-8">
          <UCard>
            <div class="text-4xl mb-4">
              <UIcon
                name="i-heroicons-light-bulb"
                class="text-primary-500"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Innovation First
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              We embrace cutting-edge technologies to create solutions that stay ahead of the curve.
            </p>
          </UCard>

          <UCard>
            <div class="text-4xl mb-4">
              <UIcon
                name="i-heroicons-chart-bar"
                class="text-primary-500"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Data-Driven
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Our decisions are backed by comprehensive analytics and insights for measurable results.
            </p>
          </UCard>

          <UCard>
            <div class="text-4xl mb-4">
              <UIcon
                name="i-heroicons-users"
                class="text-primary-500"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Expert Team
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Our diverse team of specialists brings decades of combined experience to every project.
            </p>
          </UCard>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Discover More
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <UCard class="hover:shadow-lg transition-all">
            <div class="text-center">
              <div class="text-5xl mb-4">
                <UIcon
                  name="i-heroicons-cube"
                  class="text-primary-500"
                />
              </div>
              <h3 class="text-2xl font-bold mb-3">
                Our Solutions
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Explore our comprehensive range of innovative solutions designed to help your business thrive.
              </p>
              <UButton
                to="/solutions"
                color="primary"
                variant="solid"
                size="lg"
              >
                Browse Solutions
              </UButton>
            </div>
          </UCard>

          <UCard class="hover:shadow-lg transition-all">
            <div class="text-center">
              <div class="text-5xl mb-4">
                <UIcon
                  name="i-heroicons-user-group"
                  class="text-primary-500"
                />
              </div>
              <h3 class="text-2xl font-bold mb-3">
                Our Team
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Meet the experts behind our success and learn about their expertise and experience.
              </p>
              <UButton
                to="/team"
                color="primary"
                variant="solid"
                size="lg"
              >
                Meet Our Team
              </UButton>
            </div>
          </UCard>
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-20">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to solve your problems?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join hundreds of companies that trust Puntuale for their digital transformation needs.
          </p>
          <UButton
            to="/contact"
            size="lg"
            color="primary"
            variant="solid"
            class="px-8"
          >
            Start Your Journey
          </UButton>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home - Puntuale',
  ogTitle: 'Puntuale - Problems for your solutions',
  description: 'Puntuale provides innovative solutions for your business problems. Problems for your solutions - our expert team delivers results.',
  ogDescription: 'Innovative solutions for your business problems',
  ogUrl: 'https://puntuale.nl',
  ogType: 'website',
  ogSiteName: 'Puntuale',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Puntuale - Problems for your solutions',
  twitterDescription: 'Innovative solutions for your business problems',
});

useSchemaOrg([
  defineOrganization({
    name: 'Puntuale',
    url: 'https://puntuale.nl',
    logo: 'https://puntuale.nl/logo.png',
    address: {
      streetAddress: 'Innovation Street 123',
      addressLocality: 'Amsterdam',
      postalCode: '1000 AA',
      addressCountry: 'NL',
    },
    contactPoint: {
      telephone: '+31-20-123-4567',
      contactType: 'customer service',
      email: 'info@puntuale.nl',
    },
  }),
  defineWebSite({
    name: 'Puntuale',
    url: 'https://puntuale.nl',
    description: 'Problems for your solutions',
  }),
]);
</script>
