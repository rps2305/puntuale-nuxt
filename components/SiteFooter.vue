<script setup lang="ts">
interface SiteFooterData {
  brand: string;
  footer: {
    summary: string;
    links: ReadonlyArray<{ label: string; href: string }>;
    social?: ReadonlyArray<{ label: string; href: string; icon: string }>;
    contact: ReadonlyArray<string>;
    address?: string;
    note: string;
  };
}

const { data: site } = await useAsyncData<SiteFooterData | null>('site-footer', () =>
  (queryCollection('content')
    .path('/site')
    .where('extension', '=', 'json')
    .first() as Promise<SiteFooterData | null>),
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
          <p class="footer-note">{{ site?.footer?.summary }}</p>
        </div>
        <div>
          <p class="footer-note">Navigate</p>
          <div class="list-grid">
            <NuxtLink
              v-for="item in site?.footer?.links"
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
            <span v-for="item in site?.footer?.contact" :key="item">{{ item }}</span>
          </div>
          <p v-if="site?.footer?.address" class="footer-address">
            {{ site.footer.address }}
          </p>
          <div v-if="site?.footer?.social?.length" class="footer-social">
            <a
              v-for="item in site.footer.social"
              :key="item.href"
              :href="item.href"
              target="_blank"
              rel="noreferrer"
              :aria-label="item.label"
              class="footer-social-link"
            >
              <Icon :name="item.icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-note">{{ site?.footer?.note }}</div>
    </div>
  </footer>
</template>
