<script setup lang="ts">
const route = useRoute();
const id = Number(route.params.id);

const { data: projects } = await useAsyncData('projects-data', async () => {
  const all = await queryCollection('content').all();
  return all.find((item) => item.stem === 'projects' && item.extension === 'json');
});

const projectList = computed(() => projects.value?.meta?.projects || []);
const project = computed(() => projectList.value.find((p: any) => p.id === id));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

useHead({
  title: `${project.value.title} | Puntuale`,
  meta: [
    { name: 'description', content: project.value.description || '' },
    { property: 'og:title', content: project.value.title },
    { property: 'og:description', content: project.value.description || '' },
  ],
});

function formatLabel(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}
</script>

<template>
  <div v-if="project">
    <ContentHero
      :title="project.title"
      :description="project.description"
      :tagline="`${project.client} · ${project.duration}`"
      :image="project.image"
      :image-alt="project.imageAlt"
    />
    <section class="section">
      <div class="shell">
        <NuxtLink to="/projects" class="button button-secondary" style="margin-bottom: 24px;">
          <Icon name="i-heroicons-arrow-left" />
          Back to all projects
        </NuxtLink>
        <div class="project-meta-section">
          <div class="meta-item">
            <span class="label">Client</span>
            <span class="value">{{ project.client }}</span>
          </div>
          <div class="meta-item">
            <span class="label">Duration</span>
            <span class="value">{{ project.duration }}</span>
          </div>
        </div>
        <div v-if="project.tags?.length" class="tag-row">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="content-prose" style="margin-top: 32px;">
          <h2>The Challenge</h2>
          <p>{{ project.description }}</p>
          <h2>Our Approach</h2>
          <p>We worked closely with the client to understand their unique challenges and developed a tailored solution that addressed their specific needs. Through iterative design and development, we created a system that integrates seamlessly with their existing workflow.</p>
          <h2>The Solution</h2>
          <p>The final deliverable exceeded expectations, providing measurable improvements in efficiency and user satisfaction. The solution is now serving as a foundation for ongoing enhancements and has become an integral part of their operations.</p>
        </div>
      </div>
    </section>
    <section v-if="project.stats" class="section">
      <div class="shell">
        <h2>Results</h2>
        <div class="stats-grid">
          <div v-for="(value, key) in project.stats" :key="key" class="stat-item">
            <div class="stat-value">{{ value }}</div>
            <div class="stat-label">{{ formatLabel(key) }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="shell">
        <div class="banner">
          <div>
            <h2>Ready to start your project?</h2>
            <p>Let's discuss how we can help transform your operations.</p>
          </div>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="button button-primary">
              Get in touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
