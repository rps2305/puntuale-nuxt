// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  appDir: '.',
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/puntuale-nuxt/',
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  shadcn: {
    componentDir: [],
  },
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
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
    preset: 'github-pages',
  },
})
