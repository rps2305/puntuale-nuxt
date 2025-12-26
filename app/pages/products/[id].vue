<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <UContainer class="py-12">
      <NuxtLink
        to="/"
        class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
      >
        <UIcon
          name="i-heroicons-arrow-left"
          class="mr-2"
        />
        Back to Solutions
      </NuxtLink>

      <div
        v-if="product"
        class="max-w-6xl mx-auto"
      >
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <UCard class="overflow-hidden">
              <div class="aspect-square relative">
                <NuxtImg
                  :src="product.image"
                  :alt="`${product.name} - ${product.category}`"
                  width="600"
                  height="600"
                  fit="cover"
                  class="w-full h-full object-cover"
                />
                <UBadge
                  :color="product.inStock ? 'success' : 'error'"
                  variant="solid"
                  class="absolute top-4 right-4"
                  size="lg"
                >
                  {{ product.inStock ? 'In Stock' : 'Coming Soon' }}
                </UBadge>
              </div>
            </UCard>
          </div>

          <div class="space-y-6">
            <div>
              <UBadge
                variant="subtle"
                color="primary"
                class="mb-3"
              >
                {{ product.category }}
              </UBadge>
              <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {{ product.name }}
              </h1>
              <p class="text-3xl font-bold text-primary-600 mb-4">
                €{{ product.price.toFixed(2) }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <UBadge
                  v-for="tag in product.tags"
                  :key="tag"
                  variant="soft"
                  color="primary"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </div>

            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">
                  Quick Overview
                </h2>
              </template>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ product.name }} is a premium solution designed to enhance your workflow and productivity. Built with quality materials and cutting-edge technology, this {{ product.category.toLowerCase() }} delivers exceptional performance and reliability.
                </p>
                <p class="text-gray-600 dark:text-gray-400">
                  Perfect for professionals and enthusiasts alike, our {{ product.name }} combines functionality with elegant design. Experience the difference that quality craftsmanship and thoughtful engineering can make in your daily work or leisure activities.
                </p>
              </div>
            </UCard>

            <div class="flex gap-4">
              <UButton
                :disabled="!product.inStock"
                color="primary"
                variant="solid"
                size="lg"
                class="flex-1"
              >
                {{ product.inStock ? 'Get Started' : 'Notify When Available' }}
              </UButton>
              <UButton
                to="/contact"
                color="neutral"
                variant="outline"
                size="lg"
              >
                Request Info
              </UButton>
            </div>

            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">
                  Key Features
                </h2>
              </template>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in 5"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary-500 mt-0.5 flex-shrink-0"
                  />
                  <span class="text-gray-600 dark:text-gray-400">
                    Premium feature {{ index + 1 }}: Exceptional quality and performance designed for {{ product.tags[0] }} enthusiasts
                  </span>
                </li>
              </ul>
            </UCard>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="text-2xl text-primary-500">
                  <UIcon name="i-heroicons-shield-check" />
                </div>
                <h3 class="font-semibold">
                  Quality Guaranteed
                </h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Our {{ product.name }} comes with comprehensive warranty and quality assurance. We stand behind every product we offer, ensuring your complete satisfaction.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="text-2xl text-primary-500">
                  <UIcon name="i-heroicons-truck" />
                </div>
                <h3 class="font-semibold">
                  Fast Delivery
                </h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Get your {{ product.name }} quickly with our expedited shipping options. We partner with reliable carriers to ensure your order arrives safely and on time.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="text-2xl text-primary-500">
                  <UIcon name="i-heroicons-life-buoy" />
                </div>
                <h3 class="font-semibold">
                  Expert Support
                </h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Our dedicated support team is available to help you with any questions about your {{ product.name }}. From setup to troubleshooting, we're here for you.
            </p>
          </UCard>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold">
                Detailed Description
              </h2>
            </template>
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                The {{ product.name }} represents the pinnacle of {{ product.category.toLowerCase() }} design. Every aspect has been carefully engineered to provide an optimal experience, whether you're using it for work, play, or creative pursuits.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Crafted with premium materials, this product offers exceptional durability and longevity. The thoughtful design ensures comfort and ease of use, while advanced features deliver performance that exceeds expectations.
              </p>
              <h3 class="text-lg font-semibold mt-6 mb-3">
                Design Philosophy
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Our design philosophy centers on user experience. Every curve, button, and feature has been optimized to feel natural and intuitive. The result is a product that seamlessly integrates into your daily routine.
              </p>
              <h3 class="text-lg font-semibold mt-6 mb-3">
                Technical Excellence
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                Built using state-of-the-art manufacturing processes and quality-tested to meet rigorous standards, the {{ product.name }} delivers consistent, reliable performance that you can trust day after day.
              </p>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold">
                Specifications
              </h2>
            </template>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Category
                  </p>
                  <p class="font-medium">
                    {{ product.category }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Availability
                  </p>
                  <p
                    :class="product.inStock ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
                    class="font-medium"
                  >
                    {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
                  </p>
                </div>
              </div>

              <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Tags
                </p>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="tag in product.tags"
                    :key="tag"
                    variant="soft"
                    color="neutral"
                    size="sm"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
              </div>

              <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Warranty
                </p>
                <p class="font-medium">
                  2 Years Standard Warranty
                </p>
              </div>

              <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Support
                </p>
                <p class="font-medium">
                  24/7 Online Support Available
                </p>
              </div>

              <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Returns
                </p>
                <p class="font-medium">
                  30-Day Money-Back Guarantee
                </p>
              </div>

              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Price
                </p>
                <p class="text-2xl font-bold text-primary-600">
                  €{{ product.price.toFixed(2) }}
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <UCard class="mb-12">
          <template #header>
            <h2 class="text-2xl font-semibold">
              What Our Customers Say
            </h2>
          </template>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="index in 3"
              :key="index"
              class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="flex gap-1 mb-3">
                <UIcon
                  v-for="star in 5"
                  :key="star"
                  name="i-heroicons-star"
                  class="text-yellow-500 text-sm"
                />
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                "The {{ product.name }} exceeded my expectations. Excellent quality and performance. Highly recommended for anyone looking for a reliable {{ product.category.toLowerCase() }}."
              </p>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {{ String.fromCharCode(64 + index) }}
                </div>
                <div>
                  <p class="text-sm font-medium">
                    Customer {{ index }}
                  </p>
                  <p class="text-xs text-gray-500">
                    Verified Purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center">
          <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact Puntuale today to learn more about the {{ product.name }} and how it can transform your workflow. Our team is ready to assist you.
          </p>
          <div class="flex gap-4 justify-center">
            <UButton
              to="/contact"
              color="primary"
              variant="solid"
              size="lg"
            >
              Get in Touch
            </UButton>
            <UButton
              to="/"
              color="neutral"
              variant="outline"
              size="lg"
            >
              Browse All Solutions
            </UButton>
          </div>
        </div>
      </div>

      <div
        v-else
        class="text-center py-20"
      >
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Product Not Found
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          The solution you're looking for doesn't exist.
        </p>
        <UButton
          to="/"
          color="primary"
          variant="solid"
        >
          View All Solutions
        </UButton>
      </div>
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

const route = useRoute();
const productId = parseInt(route.params.id as string);

const { data: productsData } = await useFetch<ProductsData>('/products.json');
const products = ref(productsData.value || { items: [] });
const product = computed(() => products.value.items.find((p: Product) => p.id === productId));

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  });
}

useSeoMeta({
  title: `${product.value.name} - Puntuale Solutions`,
  description: `Discover ${product.value.name} at Puntuale. Premium ${product.value.category} with exceptional quality and performance. Starting from €${product.value.price.toFixed(2)}.`,
  ogTitle: `${product.value.name} - Premium Solution`,
  ogDescription: `Explore ${product.value.name}: ${product.value.tags.join(', ')}. Available at Puntuale.`,
  ogType: 'article',
  ogUrl: `https://puntuale.nl/products/${productId}`,
  ogImage: `https://puntuale.nl${product.value.image}`,
});

useSchemaOrg([
  defineProduct({
    name: product.value.name,
    image: `https://puntuale.nl${product.value.image}`,
    description: `${product.value.name} - Premium ${product.value.category} solution`,
    brand: {
      name: 'Puntuale',
    },
    offers: {
      price: product.value.price,
      priceCurrency: 'EUR',
      availability: product.value.inStock ? 'InStock' : 'OutOfStock',
    },
    category: product.value.category,
  }),
]);
</script>
