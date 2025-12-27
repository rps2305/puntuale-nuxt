<script setup lang="ts">
interface SiteNav {
  brand: string;
  nav: ReadonlyArray<{ label: string; href: string }>;
  cta: { label: string; href: string };
}

const { data: site } = await useAsyncData<SiteNav | null>('site-nav', () =>
  (queryCollection('content')
    .path('/site')
    .where('extension', '=', 'json')
    .first() as Promise<SiteNav | null>),
);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <div class="site-header-inner">
      <div class="site-header-row">
        <NuxtLink to="/" class="site-brand" @click="closeMenu">
          <Icon name="i-heroicons-clock" />
          {{ site?.brand || 'Puntuale' }}
        </NuxtLink>
        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="primary-navigation"
          @click="toggleMenu"
        >
          <span class="sr-only">Toggle navigation</span>
          <Icon :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" />
        </button>
      </div>
      <nav
        id="primary-navigation"
        class="nav-links"
        :class="{ 'nav-links-open': isMenuOpen }"
      >
        <NuxtLink
          v-for="item in site?.nav"
          :key="item.href"
          :to="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          v-if="site?.cta"
          :to="site.cta.href"
          class="button button-secondary"
          @click="closeMenu"
        >
          {{ site.cta.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
