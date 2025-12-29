<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryContent(`/blog/${slug}`).findOne(),
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' });
}

const image = computed(() => post.value?.meta?.image);
const imageAlt = computed(() => post.value?.meta?.imageAlt);
const date = computed(() => post.value?.meta?.date);
const tags = computed(() => post.value?.meta?.tags || []);


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
      :description="post.meta?.description"
      :tagline="date"
      :image="image"
      :image-alt="imageAlt"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="post" class="content-prose" />
        <div v-if="tags.length" class="section-tight">
          <div class="tag-row">
            <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
