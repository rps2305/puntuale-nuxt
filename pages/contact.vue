<script setup lang="ts">
import type { ContactForm, HeroCta } from '~/types/content';

interface ContactPage {
  title: string;
  description?: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
  cta?: HeroCta;
  form?: ContactForm;
  locations?: ReadonlyArray<{ title: string; detail: string }>;
}

const { data: page } = await useAsyncData<ContactPage | null>('contact', () =>
  (queryCollection('content')
    .path('/contact')
    .where('extension', '=', 'md')
    .first() as Promise<ContactPage | null>),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Contact page not found' });
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
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <ContactPanel v-if="page.form" :form="page.form" />
    <section v-if="page.locations?.length" class="section">
      <div class="shell">
        <div class="section-tight">
          <span class="pill">
            <Icon name="i-heroicons-map-pin" />
            Pockets of time
          </span>
          <h2 class="hero-title">Where we keep the clocks running</h2>
        </div>
        <div class="card-grid">
          <article v-for="item in page.locations" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
