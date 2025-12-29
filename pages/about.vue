<script setup lang="ts">
const { data: page } = await useAsyncData('about', () =>
  queryContent('/about').findOne(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'About page not found' });
}

const stats = computed(() => page.value?.meta?.stats || []);
const values = computed(() => page.value?.meta?.values || { items: [] });
const milestones = computed(() => page.value?.meta?.milestones || []);
const cta = computed(() => page.value?.meta?.cta);
const image = computed(() => page.value?.meta?.image);
const imageAlt = computed(() => page.value?.meta?.imageAlt);
const tagline = computed(() => page.value?.meta?.tagline);


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
      :tagline="tagline"
      :image="image"
      :image-alt="imageAlt"
      :cta="cta"
    />
    <StatsStrip v-if="stats.length" :stats="stats" />
    <FeatureGrid
      v-if="values"
      :title="values.title"
      :subtitle="values.subtitle"
      :items="values.items"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <section v-if="milestones.length" class="section">
      <div class="shell">
        <div class="section-tight">
          <span class="pill">
            <Icon name="i-heroicons-map" />
            Milestones
          </span>
          <h2 class="hero-title">Moments when we caught time behaving</h2>
        </div>
        <div class="card-grid">
          <article v-for="item in milestones" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
