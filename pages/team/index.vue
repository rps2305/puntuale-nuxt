<script setup lang="ts">
const { data: page } = await useAsyncData('team-page', async () => {
  try {
    const all = await queryContent().find();
    return all.find((item) => item.stem === 'team' && item.extension === 'md');
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
  title: `${page.value?.title || 'Team'} | Puntuale`,
  meta: [
    { name: 'description', content: page.value?.description || 'Our team' },
    { property: 'og:title', content: page.value?.title || 'Team' },
    { property: 'og:description', content: page.value?.description || 'Our team' },
  ],
});
</script>

<template>
  <div>
    <ContentHero
      :title="page?.title || 'Team'"
      :description="page?.description || 'Our team'"
      :tagline="tagline"
      :image="image"
      :image-alt="imageAlt"
      :cta="cta"
    />
    <section class="section">
      <div class="shell">
        <div class="content-prose">
          <h2>Meet the timekeepers</h2>
          <p>We are strategists, facilitators, and designers who treat time as a shared artifact. We bring calm to the schedule so teams can build what matters.</p>
          <h2>How we work together</h2>
          <ul>
            <li>We run remote-first with focused in-person sprints.</li>
            <li>We protect 50% of the week for deep work.</li>
            <li>We document every decision in a living timeline.</li>
          </ul>
        </div>
      </div>
    </section>
    <TeamGrid :members="teamMembers" />
    <!-- Debug info -->
    <div style="display: none;">{{ teamMembers.length }} members loaded</div>
  </div>
</template>
