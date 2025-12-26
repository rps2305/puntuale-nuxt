export default defineNuxtConfig({

  modules: [
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@nuxt/eslint',
    // 'nuxt-security',
    '@vite-pwa/nuxt',
    '@dargmuesli/nuxt-cookie-control',
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    head: {
      title: 'Puntuale - Problems for your solutions',
      meta: [
        { name: 'description', content: 'Puntuale provides innovative solutions for your business problems. Problems for your solutions - our expert team delivers results.' },
        { name: 'keywords', content: 'Puntuale, business solutions, consulting, innovation, technology' },
        { property: 'og:title', content: 'Puntuale - Problems for your solutions' },
        { property: 'og:description', content: 'Innovative solutions for your business problems' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Puntuale' },
        { property: 'og:url', content: 'https://puntuale.nl' },
        { property: 'og:image', content: 'https://puntuale.nl/logo.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Puntuale - Problems for your solutions' },
        { name: 'twitter:description', content: 'Innovative solutions for your business problems' },
        { name: 'twitter:image', content: 'https://puntuale.nl/logo.svg' },
        { name: 'theme-color', content: '#10b981' },
        ...(process.env.NODE_ENV === 'development' ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon-192.png' },
        { rel: 'mask-icon', href: '/icon-512.svg', color: '#10b981' },
        { rel: 'canonical', href: 'https://puntuale.nl' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },

  css: ['~/app.css'],

  site: {
    url: 'https://puntuale.nl',
    name: 'Puntuale',
    description: 'Problems for your solutions',
  },

  content: {},

  mdc: {
    highlight: {
      noApiRoute: false,
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://puntuale.nl',
      siteName: 'Puntuale',
      siteDescription: 'Problems for your solutions',
      organization: {
        name: 'Puntuale',
        url: 'https://puntuale.nl',
        logo: 'https://puntuale.nl/logo.svg',
        address: {
          streetAddress: 'Innovation Street 123',
          addressLocality: 'Amsterdam',
          postalCode: '1000 AA',
          addressCountry: 'NL',
        },
        contactPoint: {
          telephone: '+31-20-123-4567',
          contactType: 'customer service',
          email: 'info@puntuale.nl',
        },
      },
    },
  },
  compatibilityDate: '2025-12-26',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
    },
  },

  cookieControl: {
    isAcceptNecessaryButtonEnabled: false,
    isControlButtonEnabled: true,
    barPosition: 'bottom-full',
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: true,
      },
    },
  },

  image: {
    format: ['webp', 'avif', 'jpg'],
    quality: 85,
    presets: {
      twitter: {
        modifiers: {
          width: 1200,
          height: 675,
          fit: 'cover',
        },
      },
      facebook: {
        modifiers: {
          width: 1200,
          height: 630,
          fit: 'cover',
        },
      },
      linkedin: {
        modifiers: {
          width: 1200,
          height: 627,
          fit: 'cover',
        },
      },
      instagramSquare: {
        modifiers: {
          width: 1080,
          height: 1080,
          fit: 'cover',
        },
      },
      instagramPortrait: {
        modifiers: {
          width: 1080,
          height: 1350,
          fit: 'cover',
        },
      },
      youtube: {
        modifiers: {
          width: 1280,
          height: 720,
          fit: 'cover',
        },
      },
      square: {
        modifiers: {
          width: 400,
          height: 400,
          fit: 'cover',
        },
      },
      landscape: {
        modifiers: {
          width: 800,
          height: 450,
          fit: 'cover',
        },
      },
      portrait: {
        modifiers: {
          width: 400,
          height: 600,
          fit: 'cover',
        },
      },
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Puntuale',
      short_name: 'Puntuale',
      description: 'Problems for your solutions',
      theme_color: '#10b981',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.(?:gstatic)?\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: false,
    },
  },
});
