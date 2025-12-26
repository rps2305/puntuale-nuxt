<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative min-h-96 lg:min-h-[500px]">
      <NuxtImg
        src="/images/pages/team-hero.jpg"
        width="1200"
        height="800"
        fit="cover"
        alt="Puntuale Team"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      <div class="absolute inset-0 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Team
          </h1>
        </div>
      </div>
    </div>

    <UContainer class="py-16">
      <section class="max-w-4xl mx-auto mb-20">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Meet the Experts Behind Puntuale
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Our team is composed of talented professionals who are passionate about delivering exceptional results. Each member brings unique skills, diverse experiences, and unwavering dedication to every project we undertake.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          From engineering and design to analytics and management, our collaborative approach ensures that we tackle every challenge from multiple perspectives, delivering innovative solutions that exceed expectations.
        </p>
      </section>

      <section class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-20">
        <h2 class="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Team Members
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <NuxtLink
            v-for="member in team.members"
            :key="member.id"
            :to="`/team/${member.id}`"
            class="group"
          >
            <UCard class="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div class="text-center relative z-10">
                <div class="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <NuxtImg
                    :src="member.image"
                    :alt="member.name"
                    width="200"
                    height="200"
                    fit="cover"
                    loading="lazy"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="font-semibold text-lg mb-1 group-hover:text-primary-600 transition-colors">{{ member.name }}</h3>
                <p class="text-primary-600 text-sm mb-1">{{ member.role }}</p>
                <p class="text-gray-500 text-xs mb-3">{{ member.department }}</p>
                <div class="flex flex-wrap gap-1 justify-center">
                  <UBadge
                    v-for="skill in member.skills.slice(0, 3)"
                    :key="skill"
                    variant="soft"
                    size="xs"
                    color="primary"
                  >
                    {{ skill }}
                  </UBadge>
                </div>
                <p class="text-xs text-gray-400 mt-2">{{ member.yearsExperience }} years exp</p>
              </div>
            </UCard>
          </NuxtLink>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Why Join Our Team?
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <UCard>
            <div class="text-4xl mb-4">
              <UIcon
                name="i-heroicons-academic-cap"
                class="text-primary-500"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Growth & Learning
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Continuous learning opportunities, mentorship programs, and professional development to help you advance your career.
            </p>
          </UCard>

          <UCard>
            <div class="text-4xl mb-4">
              <UIcon
                name="i-heroicons-globe-alt"
                class="text-primary-500"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Innovative Projects
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Work on cutting-edge projects with the latest technologies and methodologies in the industry.
            </p>
          </UCard>

          <UCard>
            <div class="text-4xl mb-4">
              <UIcon
                name="i-heroicons-heart"
                class="text-primary-500"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Collaborative Culture
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              A supportive environment where ideas are valued, and teamwork drives success.
            </p>
          </UCard>
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center">
        <h2 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Interested in Working With Us?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Check out our open positions or send us your resume.
        </p>
        <div class="flex gap-4 justify-center">
          <UButton
            to="/contact"
            size="lg"
            color="primary"
            variant="solid"
          >
            Contact Us
          </UButton>
          <UButton
            to="/about"
            size="lg"
            color="neutral"
            variant="outline"
          >
            Read Our Company Story
          </UButton>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  image: string;
  bio: string;
  skills: string[];
  yearsExperience: number;
}

interface TeamData {
  members: TeamMember[];
}

const { data: teamData } = await useFetch<TeamData>('/api/team');
const team = ref(teamData.value || { members: [] });

useSeoMeta({
  title: 'Team - Puntuale',
  description: 'Meet our team of experts at Puntuale. Learn about our talented professionals who deliver innovative solutions.',
  ogTitle: 'Puntuale Team',
  ogDescription: 'Discover the passionate team behind Puntuale\'s success and innovation.',
  ogUrl: 'https://puntuale.nl/team',
});
</script>
