<script setup lang="ts">
import type { StatItem } from '~/types/content';

defineProps<{
  stats: ReadonlyArray<StatItem>;
}>();
</script>

<template>
  <section class="section-tight">
    <div class="shell">
      <div class="stat-grid">
        <div v-for="stat in stats" :key="stat.label">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div v-if="stat.detail" class="footer-note">{{ stat.detail }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
