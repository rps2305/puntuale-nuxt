<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="/images/pages/solutions-hero.jpg"
        width="1200"
        height="800"
        fit="cover"
        alt="Puntuale Solutions"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Solutions
          </h1>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <section class="max-w-4xl mx-auto mb-20">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Innovative Solutions for Your Business
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          At Puntuale, we offer a comprehensive range of solutions designed to help your business thrive in the digital age. From cutting-edge electronics to ergonomic furniture, our products are carefully selected to meet the highest standards of quality and performance.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Each solution in our catalog has been tested and proven to deliver exceptional results. We partner with industry leaders to bring you the best products at competitive prices, backed by our commitment to customer satisfaction.
        </p>
      </section>

      <section class="mb-20">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Browse All Solutions
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="product in products.items"
            :key="product.id"
            :to="`/products/${product.id}`"
            class="group"
          >
            <UCard class="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <div class="relative w-full h-48 overflow-hidden">
                <NuxtImg
                  :src="product.image"
                  :alt="product.name"
                  width="400"
                  height="225"
                  fit="cover"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <UBadge
                  :color="product.inStock ? 'success' : 'error'"
                  variant="solid"
                  class="absolute top-4 right-4"
                  size="sm"
                >
                  {{ product.inStock ? 'Available' : 'Coming Soon' }}
                </UBadge>
              </div>
              <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold group-hover:text-primary-600 transition-colors">{{ product.name }}</h3>
                  <p class="text-primary-600 font-bold">€{{ product.price.toFixed(2) }}</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-3">{{ product.category }}</p>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="tag in product.tags"
                    :key="tag"
                    variant="soft"
                    size="xs"
                    color="primary"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
              </div>
            </UCard>
          </NuxtLink>
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-20">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Need Help Choosing?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Our team of experts is ready to help you find the perfect solution for your needs. Contact us today for personalized recommendations.
          </p>
          <div class="flex gap-4 justify-center">
            <UButton
              to="/contact"
              size="lg"
              color="primary"
              variant="solid"
              class="px-8"
            >
              Get in Touch
            </UButton>
            <UButton
              to="/about"
              size="lg"
              color="neutral"
              variant="outline"
            >
              Learn About Us
            </UButton>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  image: string;
  tags: string[];
}

interface ProductsData {
  items: Product[];
}

const { data: productsData } = await useFetch<ProductsData>('/products.json');
const products = ref(productsData.value || { items: [] });

useSeoMeta({
  title: 'Solutions - Puntuale',
  description: 'Explore our comprehensive range of innovative solutions for your business. From electronics to furniture, find the perfect products for your needs.',
  ogTitle: 'Puntuale Solutions',
  ogDescription: 'Discover our complete catalog of premium solutions designed to help your business thrive.',
  ogUrl: 'https://puntuale.nl/solutions',
});
</script>
