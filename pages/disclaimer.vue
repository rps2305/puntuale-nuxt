<script setup lang="ts">
const { data: page } = await useAsyncData('disclaimer-page', () =>
  queryCollection('content').path('/disclaimer').first(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' });
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
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
  </div>
</template>
