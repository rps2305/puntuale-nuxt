const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  appDir: '.',
  app: {
    baseURL: siteUrl.startsWith('http') ? new URL(siteUrl).pathname : '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    'shadcn-nuxt',
  ],
  shadcn: {
    componentDir: [],
  },
  content: {},
  image: {
    format: ['webp'],
    quality: 80,
    presets: {
      hero: {
        modifiers: { format: 'webp', width: 1400, height: 900, fit: 'cover' },
      },
      card: {
        modifiers: { format: 'webp', width: 700, height: 480, fit: 'cover' },
      },
      portrait: {
        modifiers: { format: 'webp', width: 480, height: 600, fit: 'cover' },
      },
      twitter: {
        modifiers: { format: 'webp', width: 1200, height: 630, fit: 'cover' },
      },
    },
  },
  fonts: {
    families: [
      { name: 'Fraunces', provider: 'google' },
      { name: 'Space Grotesk', provider: 'google' },
    ],
  },
  icon: {
    size: '1.2em',
    class: 'icon',
  },
  nitro: {
    prerender: {
      ignore: ['/_ipx'],
      failOnError: false,
    },
  },
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
})
