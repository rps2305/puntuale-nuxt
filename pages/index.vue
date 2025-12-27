<script setup lang="ts">
import type { FeatureItem, HeroCta, ServiceItem, StatItem } from '~/types/content';

interface HomePage {
  title: string;
  description?: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
  cta?: HeroCta;
  stats?: ReadonlyArray<StatItem>;
  features?: {
    title?: string;
    subtitle?: string;
    items: ReadonlyArray<FeatureItem>;
  };
  services?: {
    title?: string;
    subtitle?: string;
    items: ReadonlyArray<ServiceItem>;
  };
  ctaPanel?: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

const { data: page } = await useAsyncData<HomePage | null>('home', () =>
  (queryCollection('content').path('/').first() as Promise<HomePage | null>),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Home page not found' });
}

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
      :tagline="page.tagline"
      :image="page.image"
      :image-alt="page.imageAlt"
      :cta="page.cta"
    />
    <StatsStrip v-if="page.stats?.length" :stats="page.stats" />
    <FeatureGrid
      v-if="page.features"
      :title="page.features.title"
      :subtitle="page.features.subtitle"
      :items="page.features.items"
    />
    <ServiceGrid
      v-if="page.services"
      :title="page.services.title"
      :subtitle="page.services.subtitle"
      :items="page.services.items"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <section v-if="page.ctaPanel" class="section">
      <div class="shell">
        <div class="banner">
          <div>
            <h2 class="hero-title">{{ page.ctaPanel.title }}</h2>
            <p>{{ page.ctaPanel.description }}</p>
          </div>
          <div class="hero-actions">
            <NuxtLink :to="page.ctaPanel.primary.href" class="button button-primary">
              {{ page.ctaPanel.primary.label }}
            </NuxtLink>
            <NuxtLink
              v-if="page.ctaPanel.secondary"
              :to="page.ctaPanel.secondary.href"
              class="button button-secondary"
            >
              {{ page.ctaPanel.secondary.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
