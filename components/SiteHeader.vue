<script setup lang="ts">
const { data: site } = await useAsyncData('site-nav', () =>
  queryContent('/site').findOne(),
);

const isOpen = ref(false);
const siteData = computed(() => site.value || {});
</script>

<template>
  <header class="site-header">
    <div class="site-header-inner">
      <NuxtLink to="/" class="site-brand">
        <Icon name="i-heroicons-clock" />
        <span>{{ siteData.brand || 'Puntuale' }}</span>
      </NuxtLink>

      <nav class="nav-links nav-desktop">
        <NuxtLink v-for="item in siteData.nav" :key="item.href" :to="item.href" class="nav-link">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <NuxtLink v-if="siteData.cta" :to="siteData.cta.href" class="button button-primary header-cta">
          {{ siteData.cta.label }}
        </NuxtLink>

        <button
          class="nav-toggle"
          aria-label="Toggle navigation"
          @click="isOpen = !isOpen"
        >
          <Icon v-if="!isOpen" name="i-heroicons-bars-3" />
          <Icon v-else name="i-heroicons-x-mark" />
        </button>
      </div>
    </div>

    <nav :class="['nav-links', 'nav-mobile', { 'nav-mobile-open': isOpen }]">
      <NuxtLink
        v-for="item in siteData.nav"
        :key="item.href"
        :to="item.href"
        class="nav-link"
        @click="isOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
      <NuxtLink
        v-if="siteData.cta"
        :to="siteData.cta.href"
        class="button button-primary"
        @click="isOpen = false"
      >
        {{ siteData.cta.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
