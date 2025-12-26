<script setup lang="ts">
interface BlogIndexPage {
  title: string;
  description?: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
}

interface BlogPost {
  path?: string;
  title: string;
  description: string;
  date?: string;
  tags?: ReadonlyArray<string>;
  image?: string;
  imageAlt?: string;
}

const { data: page } = await useAsyncData('blog-page', () =>
  queryContent<BlogIndexPage>().where({ path: '/blog' }).findOne(),
);

const { data: posts } = await useAsyncData('blog-posts', async () => {
  const all = await queryContent<BlogPost>('/blog').sort({ date: -1 }).find();
  return all.filter((post) => post.path !== '/blog');
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog page not found' });
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
            :key="post.path || post.title"
            :title="post.title"
            :description="post.description"
            :href="post.path || '/blog'"
            :image="post.image"
            :image-alt="post.imageAlt"
            :date="post.date"
            :tags="post.tags"
          />
        </div>
      </div>
    </section>
  </div>
</template>
