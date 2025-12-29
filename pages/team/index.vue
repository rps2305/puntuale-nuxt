<script setup lang="ts">
const { data: page } = await useAsyncData('team-page', async () => {
  const all = await queryContent().find();
  return all.find((item) => item.stem === 'team' && item.extension === 'md');
});

const { data: team } = await useAsyncData('team-data', async () => {
  const all = await queryContent().find();
  return all.find((item) => item.stem === 'team' && item.extension === 'json');
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Team page not found' });
}

const cta = computed(() => page.value?.cta);
const image = computed(() => page.value?.image);
const imageAlt = computed(() => page.value?.imageAlt);
const tagline = computed(() => page.value?.tagline);
const teamMembers = computed(() => team.value?.members || []);

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
    <TeamGrid v-if="teamMembers.length" :members="teamMembers" />
  </div>
</template>
