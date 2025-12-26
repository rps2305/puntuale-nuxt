<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="/images/pages/about-hero.jpg"
        width="1200"
        height="800"
        fit="cover"
        alt="About Puntuale"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About Puntuale
          </h1>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <section class="max-w-3xl mx-auto mb-20">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Story
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Puntuale was founded with a simple yet powerful mission: to provide innovative solutions for complex business problems. We believe that every challenge is an opportunity for growth and innovation.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Our team of experts combines deep industry knowledge with cutting-edge technology to deliver solutions that drive real business results. From digital transformation to data analytics, we're here to help you navigate the ever-changing business landscape.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          At Puntuale, we don't just solve problems - we create lasting value for our clients. Our approach is collaborative, transparent, and always focused on your success.
        </p>
      </section>

      <section class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Our Values
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard class="text-center">
            <div class="text-4xl mb-4 text-primary-500">
              <UIcon name="i-heroicons-sparkles" />
            </div>
            <h3 class="font-semibold text-lg mb-2">
              Innovation
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              We constantly explore new technologies and approaches to stay ahead of the curve.
            </p>
          </UCard>

          <UCard class="text-center">
            <div class="text-4xl mb-4 text-primary-500">
              <UIcon name="i-heroicons-shield-check" />
            </div>
            <h3 class="font-semibold text-lg mb-2">
              Integrity
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              We maintain the highest ethical standards in everything we do.
            </p>
          </UCard>

          <UCard class="text-center">
            <div class="text-4xl mb-4 text-primary-500">
              <UIcon name="i-heroicons-users" />
            </div>
            <h3 class="font-semibold text-lg mb-2">
              Collaboration
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              We work closely with our clients as partners, not just vendors.
            </p>
          </UCard>

          <UCard class="text-center">
            <div class="text-4xl mb-4 text-primary-500">
              <UIcon name="i-heroicons-rocket-launch" />
            </div>
            <h3 class="font-semibold text-lg mb-2">
              Excellence
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              We strive for perfection in every project, big or small.
            </p>
          </UCard>
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Our Team
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <NuxtLink
            v-for="member in team?.members ?? []"
            :key="member.id"
            :to="`/team/${member.id}`"
            class="group"
          >
            <UCard class="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div class="text-center relative z-10">
                <div class="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <NuxtImg
                    :src="member.image"
                    :alt="member.name"
                    width="200"
                    height="200"
                    fit="cover"
                    loading="lazy"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="font-semibold text-lg mb-1 group-hover:text-primary-600 transition-colors">{{ member.name }}</h3>
                <p class="text-primary-600 text-sm mb-1">{{ member.role }}</p>
                <p class="text-gray-500 text-xs mb-3">{{ member.department }}</p>
                <div class="flex flex-wrap gap-1 justify-center">
                  <UBadge
                    v-for="skill in member.skills.slice(0, 3)"
                    :key="skill"
                    variant="soft"
                    size="xs"
                    color="primary"
                  >
                    {{ skill }}
                  </UBadge>
                </div>
              </div>
            </UCard>
          </NuxtLink>
        </div>
      </section>

      <section class="text-center mb-20">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Ready to work together?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's discuss how Puntuale can help transform your business challenges into opportunities.
        </p>
        <UButton
          to="/contact"
          size="lg"
          color="primary"
          variant="solid"
        >
          Get in Touch
        </UButton>
      </section>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { data: team } = await useFetch('/api/team');

useSeoMeta({
  title: 'About - Puntuale',
  description: 'Learn about Puntuale - our mission, values, and the expert team behind our innovative solutions.',
  ogTitle: 'About Puntuale',
  ogDescription: 'Our mission is to provide innovative solutions for complex business problems.',
  ogUrl: 'https://puntuale.nl/about',
});
</script>
