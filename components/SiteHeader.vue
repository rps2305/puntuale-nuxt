<script setup lang="ts">
interface SiteNav {
  brand: string;
  nav: ReadonlyArray<{ label: string; href: string }>;
  cta: { label: string; href: string };
}

const { data: site } = await useAsyncData('site-nav', () =>
  queryContent<SiteNav>().where({ path: '/site', extension: 'json' }).findOne(),
);
</script>

<template>
  <header class="site-header">
    <div class="site-header-inner">
      <NuxtLink to="/" class="site-brand">
        <Icon name="i-heroicons-clock" />
        {{ site?.brand || 'Puntuale' }}
      </NuxtLink>
      <nav class="nav-links">
        <NuxtLink v-for="item in site?.nav" :key="item.href" :to="item.href">
          {{ item.label }}
        </NuxtLink>
        <NuxtLink v-if="site?.cta" :to="site.cta.href" class="button button-secondary">
          {{ site.cta.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
