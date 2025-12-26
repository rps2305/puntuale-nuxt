<script setup lang="ts">
import type { HeroCta } from '~/types/content';

defineProps<{
  title: string;
  description?: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
  cta?: HeroCta;
}>();
</script>

<template>
  <section class="hero">
    <div class="shell hero-grid">
      <div>
        <span v-if="tagline" class="pill">
          <Icon name="i-heroicons-sparkles" />
          {{ tagline }}
        </span>
        <h1 class="hero-title">{{ title }}</h1>
        <p v-if="description" class="hero-lead">{{ description }}</p>
        <div v-if="cta" class="hero-actions">
          <NuxtLink
            v-if="cta.primary"
            :to="cta.primary.href"
            class="button button-primary"
          >
            {{ cta.primary.label }}
          </NuxtLink>
          <NuxtLink
            v-if="cta.secondary"
            :to="cta.secondary.href"
            class="button button-secondary"
          >
            {{ cta.secondary.label }}
          </NuxtLink>
        </div>
      </div>
      <div v-if="image" class="hero-media">
        <NuxtImg :src="image" preset="hero" :alt="imageAlt || title" />
      </div>
    </div>
  </section>
</template>
