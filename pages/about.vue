<script setup lang="ts">
import type { FeatureItem, HeroCta, StatItem } from '~/types/content';

interface AboutPage {
  title: string;
  description?: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
  cta?: HeroCta;
  stats?: ReadonlyArray<StatItem>;
  values?: {
    title?: string;
    subtitle?: string;
    items: ReadonlyArray<FeatureItem>;
  };
  milestones?: ReadonlyArray<{ title: string; description: string }>;
}

const { data: page } = await useAsyncData<AboutPage | null>('about', () =>
  (queryCollection('content')
    .path('/about')
    .where('extension', '=', 'md')
    .first() as Promise<AboutPage | null>),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'About page not found' });
}

useHead({
  title: `${page.value.title} | Puntuale`,
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
      v-if="page.values"
      :title="page.values.title"
      :subtitle="page.values.subtitle"
      :items="page.values.items"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <section v-if="page.milestones?.length" class="section">
      <div class="shell">
        <div class="section-tight">
          <span class="pill">
            <Icon name="i-heroicons-map" />
            Milestones
          </span>
          <h2 class="hero-title">Moments when we caught time behaving</h2>
        </div>
        <div class="card-grid">
          <article v-for="item in page.milestones" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
