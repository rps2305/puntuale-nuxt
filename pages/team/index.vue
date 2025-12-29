<script setup lang="ts">
const { data: page } = await useAsyncData('team-page', async () => {
  try {
    return await queryContent('/team').findOne();
  } catch (error) {
    console.warn('Team page not found:', error);
    return null;
  }
});

const { data: team } = await useAsyncData('team-data', async () => {
  try {
    const all = await queryContent().find();
    return all.find((item) => item.stem === 'team' && item.extension === 'json');
  } catch (error) {
    console.warn('Team data not found:', error);
    return null;
  }
});

// Handle missing content gracefully during prerendering
if (!page.value && import.meta.server) {
  console.warn('Team page data not found during prerendering');
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
