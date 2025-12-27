<script setup lang="ts">
const { data: page } = await useAsyncData('blog-page', () =>
  queryCollection('content').path('/blog').first(),
);

const { data: posts } = await useAsyncData('blog-posts', async () => {
  const all = await queryCollection('content').where({ path: { $startsWith: '/blog' } }).all();
  return all.filter((post) => post._path !== '/blog');
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog page not found' });
}

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
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <section class="section">
      <div class="shell">
        <div class="blog-grid">
          <BlogCard
            v-for="post in posts || []"
            :key="post._path || post.title"
            :title="post.title"
            :description="post.meta?.description"
            :href="post._path || '/blog'"
            :image="post.meta?.image"
            :image-alt="post.meta?.imageAlt"
            :date="post.meta?.date"
            :tags="post.meta?.tags"
          />
        </div>
      </div>
    </section>
  </div>
</template>
