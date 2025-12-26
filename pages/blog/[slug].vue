<script setup lang="ts">
interface BlogPostPage {
  title: string;
  description?: string;
  date?: string;
  tags?: ReadonlyArray<string>;
  image?: string;
  imageAlt?: string;
}

const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, async () => {
  const direct = await queryContent<BlogPostPage>().where({ path: `/blog/${slug}` }).findOne();
  if (direct) {
    return direct;
  }
  const all = await queryContent<BlogPostPage>('/blog').find();
  return all.find((entry) => entry.stem === `blog/${slug}`);
});

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' });
}

useHead({
  title: `${post.value.title} | Puntuale`,
  meta: [
    { name: 'description', content: post.value.description || '' },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description || '' },
  ],
});
</script>

<template>
  <div v-if="post">
    <ContentHero
      :title="post.title"
      :description="post.description"
      :tagline="post.date"
      :image="post.image"
      :image-alt="post.imageAlt"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="post" class="content-prose" />
        <div v-if="post.tags?.length" class="section-tight">
          <div class="tag-row">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
