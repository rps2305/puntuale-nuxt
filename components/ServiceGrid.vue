<script setup lang="ts">
import type { ServiceItem } from '~/types/content';

defineProps<{
  title?: string;
  subtitle?: string;
  items: ReadonlyArray<ServiceItem>;
}>();
</script>

<template>
  <section class="section">
    <div class="shell">
      <div v-if="title" class="section-tight">
        <span class="pill">
          <Icon name="i-heroicons-swatch" />
          {{ title }}
        </span>
        <h2 v-if="subtitle" class="hero-title">{{ subtitle }}</h2>
      </div>
      <div class="card-grid">
        <article v-for="item in items" :key="item.title" class="media-card">
          <img v-if="item.image" :src="item.image" :alt="item.title" loading="lazy" width="700" height="480" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
