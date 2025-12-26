<template>
  <UApp>
    <div>
      <header class="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50">
        <UContainer>
          <nav class="flex items-center justify-between h-16">
            <NuxtLink
              to="/"
              class="flex items-center gap-3 mr-4"
            >
              <UIcon
                name="i-heroicons-clock"
                class="h-10 w-10 text-primary-500"
              />
              <div>
                <div class="text-xl font-bold text-gray-900 dark:text-white leading-tight">Puntuale</div>
                <div class="text-xs text-primary-600 tracking-widest">ON TIME</div>
              </div>
            </NuxtLink>

            <div class="hidden md:flex items-center gap-6">
              <UButton
                to="/"
                variant="link"
                color="neutral"
              >
                Home
              </UButton>
              <UButton
                to="/about"
                variant="link"
                color="neutral"
              >
                About
              </UButton>
              <UButton
                to="/solutions"
                variant="link"
                color="neutral"
              >
                Solutions
              </UButton>
              <UButton
                to="/team"
                variant="link"
                color="neutral"
              >
                Team
              </UButton>
              <UButton
                to="/contact"
                variant="link"
                color="neutral"
              >
                Contact
              </UButton>
              <UButton
                to="/blog"
                variant="link"
                color="neutral"
              >
                Blog
              </UButton>
            </div>

            <div class="flex items-center gap-4">
              <UColorModeButton />
              <UButton
                to="/contact"
                color="primary"
                variant="solid"
                size="sm"
              >
                Get Started
              </UButton>
              <UButton
                icon="i-heroicons-bars-3"
                color="neutral"
                variant="ghost"
                class="md:hidden"
                aria-label="Open menu"
                @click="mobileMenuOpen = !mobileMenuOpen"
              />
            </div>
          </nav>

          <div
            v-if="mobileMenuOpen"
            class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div class="flex flex-col gap-3">
              <UButton
                to="/"
                variant="link"
                color="neutral"
                @click="mobileMenuOpen = false"
              >
                Home
              </UButton>
              <UButton
                to="/about"
                variant="link"
                color="neutral"
                @click="mobileMenuOpen = false"
              >
                About
              </UButton>
              <UButton
                to="/solutions"
                variant="link"
                color="neutral"
                @click="mobileMenuOpen = false"
              >
                Solutions
              </UButton>
              <UButton
                to="/team"
                variant="link"
                color="neutral"
                @click="mobileMenuOpen = false"
              >
                Team
              </UButton>
              <UButton
                to="/contact"
                variant="link"
                color="neutral"
                @click="mobileMenuOpen = false"
              >
                Contact
              </UButton>
              <UButton
                to="/blog"
                variant="link"
                color="neutral"
                @click="mobileMenuOpen = false"
              >
                Blog
              </UButton>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                <div class="flex gap-4 justify-center">
                  <UButton
                    icon="i-simple-icons-facebook"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    aria-label="Facebook"
                  />
                  <UButton
                    icon="i-simple-icons-instagram"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    aria-label="Instagram"
                  />
                  <UButton
                    icon="i-simple-icons-spotify"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    aria-label="Spotify"
                  />
                  <UButton
                    icon="i-simple-icons-youtube"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    aria-label="YouTube"
                  />
                  <UButton
                    icon="i-simple-icons-linkedin"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    aria-label="LinkedIn"
                  />
                  <UButton
                    icon="i-simple-icons-github"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    aria-label="GitHub"
                  />
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </header>

      <main>
        <NuxtPage />
      </main>

      <footer class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <UContainer class="py-12">
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 class="font-bold text-lg mb-4">
                Puntuale
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Problems for your solutions
              </p>
              <div class="flex gap-4">
                <UButton
                  icon="i-simple-icons-facebook"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  aria-label="Facebook"
                />
                <UButton
                  icon="i-simple-icons-instagram"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  aria-label="Instagram"
                />
                <UButton
                  icon="i-simple-icons-spotify"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  aria-label="Spotify"
                />
                <UButton
                  icon="i-simple-icons-youtube"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  aria-label="YouTube"
                />
                <UButton
                  icon="i-simple-icons-linkedin"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  aria-label="LinkedIn"
                />
                <UButton
                  icon="i-simple-icons-github"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  aria-label="GitHub"
                />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-4">
                Quick Links
              </h3>
              <ul class="space-y-2">
                <li>
                  <UButton
                    to="/"
                    variant="link"
                    color="neutral"
                  >
                    Home
                  </UButton>
                </li>
                <li>
                  <UButton
                    to="/about"
                    variant="link"
                    color="neutral"
                  >
                    About Us
                  </UButton>
                </li>
                <li>
                  <UButton
                    to="/solutions"
                    variant="link"
                    color="neutral"
                  >
                    Solutions
                  </UButton>
                </li>
                <li>
                  <UButton
                    to="/team"
                    variant="link"
                    color="neutral"
                  >
                    Team
                  </UButton>
                </li>
                <li>
                  <UButton
                    to="/contact"
                    variant="link"
                    color="neutral"
                  >
                    Contact
                  </UButton>
                </li>
                <li>
                  <UButton
                    to="/blog"
                    variant="link"
                    color="neutral"
                  >
                    Blog
                  </UButton>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-4">
                Contact
              </h3>
              <div class="space-y-2">
                <div class="text-gray-600 dark:text-gray-400">
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="inline mr-2"
                  />
                  <div class="inline-block">
                    <div>Innovation Street 123</div>
                    <div>1000 AA Amsterdam</div>
                    <div>Netherlands</div>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="inline mr-2"
                  />
                  <span>
                    info@puntuale.nl
                  </span>
                </p>
                <p class="text-gray-600 dark:text-gray-400">
                  <UIcon
                    name="i-heroicons-phone"
                    class="inline mr-2"
                  />
                  <span>
                    +31 20 123 4567
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 Puntuale. All rights reserved.</p>
          </div>
        </UContainer>
      </footer>
    </div>
  </UApp>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);

const colorMode = useColorMode();

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white');

onMounted(() => {
  document.body.classList.add('loaded');
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://rps2305.github.io',
    },
  ],
  style: [
    {
      innerHTML: 'img { max-width: 100%; height: auto; display: block; }',
    },
  ],
});

useSeoMeta({
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterCard: 'summary_large_image',
});
</script>
