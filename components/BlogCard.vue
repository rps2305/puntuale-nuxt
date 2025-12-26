<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  date?: string;
  tags?: ReadonlyArray<string>;
}>();
</script>

<template>
  <NuxtLink :to="href" class="blog-card">
    <NuxtImg
      v-if="image"
      :src="image"
      preset="card"
      :alt="imageAlt || title"
      loading="lazy"
    />
    <div class="list-grid">
      <span v-if="date" class="footer-note">{{ date }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="tags?.length" class="tag-row">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
