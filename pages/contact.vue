<script setup lang="ts">
const { data: page } = await useAsyncData('contact', () =>
  queryCollection('content').path('/contact').first(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Contact page not found' });
}

const form = computed(() => page.value?.meta?.form);
const locations = computed(() => page.value?.meta?.locations || []);
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
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <ContactPanel v-if="form" :form="form" />
    <section v-if="locations.length" class="section">
      <div class="shell">
        <div class="section-tight">
          <span class="pill">
            <Icon name="i-heroicons-map-pin" />
            Pockets of time
          </span>
          <h2 class="hero-title">Where we keep the clocks running</h2>
        </div>
        <div class="card-grid">
          <article v-for="item in locations" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
