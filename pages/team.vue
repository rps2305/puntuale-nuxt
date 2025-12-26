<script setup lang="ts">
import type { HeroCta } from '~/types/content';
import type { TeamData } from '~/types/team';

interface TeamPage {
  title: string;
  description?: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
  cta?: HeroCta;
}

const { data: page } = await useAsyncData('team-page', () =>
  queryContent<TeamPage>().where({ path: '/team', extension: 'md' }).findOne(),
);

const { data: team } = await useAsyncData('team-data', () =>
  queryContent<TeamData>().where({ path: '/team', extension: 'json' }).findOne(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Team page not found' });
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
    <TeamGrid v-if="team?.members?.length" :members="team.members" />
  </div>
</template>
