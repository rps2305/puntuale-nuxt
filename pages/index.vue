<script setup lang="ts">
const { data: page } = await useAsyncData('home', () =>
  queryCollection('content').path('/').first(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Home page not found' });
}

const stats = computed(() => page.value?.meta?.stats || []);
const features = computed(() => page.value?.meta?.features || { items: [] });
const services = computed(() => page.value?.meta?.services || { items: [] });
const ctaPanel = computed(() => page.value?.meta?.ctaPanel);
const cta = computed(() => page.value?.meta?.cta);
const image = computed(() => page.value?.meta?.image);
const imageAlt = computed(() => page.value?.meta?.imageAlt);
const tagline = computed(() => page.value?.meta?.tagline);


useHead({
  title: page.value.title,
  meta: [
    { name: 'description', content: page.value.description || '' },
    { property: 'og:title', content: page.value.title },
    { property: 'og:description', content: page.value.description || '' },
  ],
});
</script>

<template>
  <div v-if="page">
    <ContentHero
      :title="page.title"
      :description="page.description"
      :tagline="tagline"
      :image="image"
      :image-alt="imageAlt"
      :cta="cta"
    />
    <StatsStrip v-if="stats.length" :stats="stats" />
    <FeatureGrid
      v-if="features"
      :title="features.title"
      :subtitle="features.subtitle"
      :items="features.items"
    />
    <ServiceGrid
      v-if="services"
      :title="services.title"
      :subtitle="services.subtitle"
      :items="services.items"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <section v-if="ctaPanel" class="section">
      <div class="shell">
        <div class="banner">
          <div>
            <h2 class="hero-title">{{ ctaPanel.title }}</h2>
            <p>{{ ctaPanel.description }}</p>
          </div>
          <div class="hero-actions">
            <NuxtLink :to="ctaPanel.primary.href" class="button button-primary">
              {{ ctaPanel.primary.label }}
            </NuxtLink>
            <NuxtLink
              v-if="ctaPanel.secondary"
              :to="ctaPanel.secondary.href"
              class="button button-secondary"
            >
              {{ ctaPanel.secondary.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
