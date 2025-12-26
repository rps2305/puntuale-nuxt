<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="/images/pages/contact-hero.jpg"
        width="1200"
        height="800"
        fit="cover"
        alt="Contact Puntuale"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <section class="max-w-4xl mx-auto mb-20">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Have a question or want to discuss a project? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="text-2xl text-primary-500">
                  <UIcon name="i-heroicons-map-pin" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">
                    Visit Us
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Innovation Street 123<br>
                    1000 AA Amsterdam<br>
                    Netherlands
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-2xl text-primary-500">
                  <UIcon name="i-heroicons-envelope" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">
                    Email Us
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    info@puntuale.nl<br>
                    support@puntuale.nl
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-2xl text-primary-500">
                  <UIcon name="i-heroicons-phone" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">
                    Call Us
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    +31 20 123 4567<br>
                    Mon-Fri 9:00-18:00 CET
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <UCard>
              <template #header>
                <h3 class="text-xl font-semibold">
                  Send us a message
                </h3>
              </template>

              <UForm
                :state="form"
                @submit="handleSubmit"
              >
                <div class="space-y-4">
                  <UFormField
                    label="Name"
                    name="name"
                    required
                  >
                    <UInput
                      v-model="form.name"
                      placeholder="Your name"
                    />
                  </UFormField>

                  <UFormField
                    label="Email"
                    name="email"
                    required
                  >
                    <UInput
                      v-model="form.email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </UFormField>

                  <UFormField
                    label="Subject"
                    name="subject"
                    required
                  >
                    <UInput
                      v-model="form.subject"
                      placeholder="Enter a subject"
                    />
                  </UFormField>

                  <UFormField
                    label="Message"
                    name="message"
                    required
                  >
                    <UTextarea
                      v-model="form.message"
                      placeholder="Your message..."
                      :rows="5"
                    />
                  </UFormField>

                  <UButton
                    type="submit"
                    color="primary"
                    variant="solid"
                    size="lg"
                    :loading="loading"
                    class="w-full md:w-auto"
                  >
                    Send Message
                  </UButton>
                </div>
              </UForm>
            </UCard>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Find Us
        </h2>
        <div class="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
          <p class="text-gray-600 dark:text-gray-400 text-center">
            <UIcon
              name="i-heroicons-map"
              class="text-6xl mb-4 block"
            />
            Interactive map would be displayed here<br>
            Innovation Street 123, Amsterdam
          </p>
        </div>
      </section>

      <section class="text-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Follow Us
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Stay connected with Puntuale on social media
        </p>
        <div class="flex justify-center gap-4">
          <UButton
            to="https://twitter.com/puntuale"
            external
            icon="i-simple-icons-x"
            color="neutral"
            variant="outline"
            size="lg"
          >
            Twitter
          </UButton>
          <UButton
            to="https://linkedin.com/company/puntuale"
            external
            icon="i-simple-icons-linkedin"
            color="neutral"
            variant="outline"
            size="lg"
          >
            LinkedIn
          </UButton>
          <UButton
            to="https://github.com/puntuale"
            external
            icon="i-simple-icons-github"
            color="neutral"
            variant="outline"
            size="lg"
          >
            GitHub
          </UButton>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;

  setTimeout(() => {
    console.log('Form submitted:', form);

    alert('Thank you for your message! We will get back to you soon.');

    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';

    loading.value = false;
  }, 1000);
};

useSeoMeta({
  title: 'Contact - Puntuale',
  description: 'Contact Puntuale for innovative solutions. Get in touch with our team for inquiries, project proposals, and partnerships.',
  ogTitle: 'Contact Puntuale',
  ogDescription: 'Get in touch with Puntuale for innovative business solutions.',
  ogUrl: 'https://puntuale.nl/contact',
});
</script>
