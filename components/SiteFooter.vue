<script setup lang="ts">
const { data: site } = await useAsyncData('site-footer', () =>
  queryContent('/site').findOne(),
);

const siteData = computed(() => site.value || {});
const footerData = computed(() => siteData.value.footer || {});
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="site-brand">
            <Icon name="i-heroicons-clock" />
            {{ siteData.brand || 'Puntuale' }}
          </div>
          <p class="footer-note">{{ footerData.summary }}</p>
          <p v-if="footerData.address" class="footer-note">{{ footerData.address }}</p>
          <div class="social-links">
            <a href="#" aria-label="Twitter">
              <Icon name="i-heroicons-x-circle" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Icon name="i-simple-icons-linkedin" />
            </a>
            <a href="#" aria-label="GitHub">
              <Icon name="i-simple-icons-github" />
            </a>
          </div>
        </div>
        <div>
          <p class="footer-note">Explore</p>
          <div class="list-grid">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/team">Team</NuxtLink>
            <NuxtLink to="/blog">Insights</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </div>
        </div>
        <div>
          <p class="footer-note">Legal</p>
          <div class="list-grid">
            <NuxtLink
              v-for="item in footerData.legal"
              :key="item.href"
              :to="item.href"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <p class="footer-note">Connect</p>
          <div class="list-grid">
            <a v-for="item in footerData.contact" :key="item" :href="item.startsWith('+') ? `tel:${item}` : `mailto:${item}`">
              {{ item }}
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-note">{{ footerData.note }}</p>
        <p class="footer-note">
          Built with
          <a href="https://nuxt.com" target="_blank" rel="noopener">Nuxt</a>
          and
          <a href="https://content.nuxt.com" target="_blank" rel="noopener">Content</a>
        </p>
      </div>
    </div>
  </footer>
</template>
