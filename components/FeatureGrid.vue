<script setup lang="ts">
import type { FeatureItem } from '~/types/content';

defineProps<{
  title?: string;
  subtitle?: string;
  items: ReadonlyArray<FeatureItem>;
}>();
</script>

<template>
  <section class="section">
    <div class="shell">
      <div v-if="title" class="section-tight">
        <span class="pill">
          <Icon name="i-heroicons-bolt" />
          {{ title }}
        </span>
        <h2 v-if="subtitle" class="hero-title">{{ subtitle }}</h2>
      </div>
      <div class="card-grid">
        <article v-for="item in items" :key="item.title" class="card">
          <Icon :name="item.icon || 'i-heroicons-light-bulb'" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
