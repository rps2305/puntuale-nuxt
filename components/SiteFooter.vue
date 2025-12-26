<script setup lang="ts">
interface SiteFooterData {
  brand: string;
  footer: {
    summary: string;
    links: ReadonlyArray<{ label: string; href: string }>;
    contact: ReadonlyArray<string>;
    note: string;
  };
}

const { data: site } = await useAsyncData('site-footer', () =>
  queryContent<SiteFooterData>().where({ path: '/site', extension: 'json' }).findOne(),
);
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="footer-grid">
        <div>
          <div class="site-brand">
            <Icon name="i-heroicons-clock" />
            {{ site?.brand || 'Puntuale' }}
          </div>
          <p class="footer-note">{{ site?.footer.summary }}</p>
        </div>
        <div>
          <p class="footer-note">Navigate</p>
          <div class="list-grid">
            <NuxtLink
              v-for="item in site?.footer.links"
              :key="item.href"
              :to="item.href"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <p class="footer-note">Signals</p>
          <div class="list-grid">
            <span v-for="item in site?.footer.contact" :key="item">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="footer-note">{{ site?.footer.note }}</div>
    </div>
  </footer>
</template>
