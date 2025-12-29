<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-data', async () => {
  try {
    return await queryContent('/projects').findOne();
  } catch (error) {
    console.warn('Projects data not found:', error);
    return null;
  }
});

// Handle missing content gracefully during prerendering
if (!projects.value && import.meta.server) {
  console.warn('Projects data not found during prerendering');
}

const cta = computed(() => projects.value?.cta);
const image = computed(() => projects.value?.image);
const imageAlt = computed(() => projects.value?.imageAlt);
const tagline = computed(() => projects.value?.tagline);
const projectList = computed(() => projects.value?.projects || []);

useHead({
  title: `${projects.value?.title} | Puntuale`,
  meta: [
    { name: 'description', content: projects.value?.description || '' },
    { property: 'og:title', content: projects.value?.title },
    { property: 'og:description', content: projects.value?.description || '' },
  ],
});
</script>

<template>
  <div v-if="projects">
    <ContentHero
      :title="projects.title"
      :description="projects.description"
      :tagline="tagline"
      :image="image"
      :image-alt="imageAlt"
      :cta="cta"
    />
    <section class="section">
      <div class="shell">
        <div class="content-prose">
          <h2>Featured projects</h2>
          <p>Every project is a collaboration built on trust, clear communication, and a shared commitment to delivering excellence. We work with clients across industries to transform their operations and create lasting impact.</p>
          <h2>Our approach</h2>
          <p>We believe that great projects are built on solid foundations. Our methodology emphasizes:</p>
          <ul>
            <li><strong>Deep discovery</strong>: Understanding your unique challenges and opportunities</li>
            <li><strong>Collaborative design</strong>: Working together to craft tailored solutions</li>
            <li><strong>Iterative development</strong>: Continuous refinement based on feedback</li>
            <li><strong>Measured delivery</strong>: Tracking success with meaningful metrics</li>
          </ul>
          <h2>Ready to transform your operations?</h2>
          <p>Let's discuss how we can help you achieve your goals.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="shell">
        <div class="project-grid">
          <ProjectCard
            v-for="project in projectList"
            :key="project.id"
            :title="project.title"
            :client="project.client"
            :duration="project.duration"
            :description="project.description"
            :href="`/projects/${project.id.toString()}`"
            :image="project.image"
            :image-alt="project.imageAlt"
            :tags="project.tags"
          />
        </div>
      </div>
    </section>
  </div>
</template>
