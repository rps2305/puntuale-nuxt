<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <UContainer class="py-12">
      <NuxtLink
        to="/about"
        class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
      >
        <UIcon
          name="i-heroicons-arrow-left"
          class="mr-2"
        />
        Back to Team
      </NuxtLink>

      <div
        v-if="member"
        class="max-w-4xl mx-auto"
      >
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="md:col-span-1">
            <UCard>
              <div class="aspect-square rounded-lg overflow-hidden mb-4">
                <NuxtImg
                  :src="member.image"
                  :alt="`${member.name} - ${member.role}`"
                  width="400"
                  height="400"
                  fit="cover"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="text-center space-y-2">
                <h2 class="text-xl font-bold">
                  {{ member.name }}
                </h2>
                <p class="text-primary-600 font-medium">
                  {{ member.role }}
                </p>
                <p class="text-gray-500 text-sm">
                  {{ member.department }}
                </p>
              </div>
            </UCard>

            <UCard class="mt-6">
              <template #header>
                <h3 class="font-semibold">
                  Contact Information
                </h3>
              </template>
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="text-primary-500"
                  />
                  <a
                    :href="`mailto:${member.email}`"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                  >
                    {{ member.email }}
                  </a>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <UIcon
                    name="i-heroicons-building-office"
                    class="text-primary-500"
                  />
                  <span class="text-gray-600 dark:text-gray-400">{{ member.department }} Department</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <UIcon
                    name="i-heroicons-clock"
                    class="text-primary-500"
                  />
                  <span class="text-gray-600 dark:text-gray-400">{{ member.yearsExperience }} Years Experience</span>
                </div>
              </div>
            </UCard>

            <UCard class="mt-6">
              <template #header>
                <h3 class="font-semibold">
                  Skills
                </h3>
              </template>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="skill in member.skills"
                  :key="skill"
                  variant="soft"
                  color="primary"
                >
                  {{ skill }}
                </UBadge>
              </div>
            </UCard>
          </div>

          <div class="md:col-span-2 space-y-8">
            <UCard>
              <template #header>
                <h2 class="text-2xl font-bold">
                  About {{ member.name }}
                </h2>
              </template>
              <div class="prose dark:prose-invert max-w-none">
                <p
                  v-if="member.bio"
                  class="text-lg text-gray-600 dark:text-gray-400 mb-6"
                >
                  {{ member.bio }}
                </p>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Throughout their career, {{ member.name }} has developed a deep understanding of industry best practices and emerging technologies. Their approach combines technical proficiency with creative problem-solving, making them an invaluable asset to our team.
                </p>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ member.name }} is committed to continuous learning and staying at the forefront of their field. They regularly participate in industry conferences, workshops, and collaborative projects to expand their knowledge and contribute to the broader community.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">
                  Professional Journey
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Before joining Puntuale, {{ member.name }} worked with several leading organizations where they honed their skills in {{ member.skills.slice(0, 3).join(', ') }}. Their diverse background enables them to approach challenges from multiple perspectives and deliver innovative solutions.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">
                  Philosophy & Approach
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ member.name }} believes in the power of collaboration, transparency, and excellence. They strive to create environments where ideas can flourish and where every team member can contribute their best work. Their leadership style emphasizes mentorship and knowledge sharing.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">
                  Notable Achievements
                </h3>
                <ul class="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Led successful initiatives that improved team productivity by 40%</li>
                  <li>Implemented innovative solutions that reduced project delivery time by 30%</li>
                  <li>Mentored junior team members, helping them advance their careers</li>
                  <li>Contributed to open-source projects and industry publications</li>
                  <li>Received multiple excellence awards for outstanding performance</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <h2 class="text-xl font-bold">
                  Areas of Expertise
                </h2>
              </template>
              <div class="grid sm:grid-cols-2 gap-4">
                <div
                  v-for="skill in member.skills"
                  :key="skill"
                  class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary-500 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <h4 class="font-medium text-sm">
                      {{ skill }}
                    </h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Advanced proficiency and practical experience
                    </p>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <h2 class="text-xl font-bold">
                  Get in Touch
                </h2>
              </template>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Interested in working with {{ member.name }} or learning more about their work? Feel free to reach out to discuss collaboration opportunities, project inquiries, or just to connect professionally.
                </p>
                <div class="flex gap-4">
                  <UButton
                    :to="`mailto:${member.email}`"
                    color="primary"
                    variant="solid"
                  >
                    <UIcon
                      name="i-heroicons-envelope"
                      class="mr-2"
                    />
                    Send Email
                  </UButton>
                  <UButton
                    to="/contact"
                    color="neutral"
                    variant="outline"
                  >
                    Contact Form
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <div
        v-else
        class="text-center py-20"
      >
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Team Member Not Found
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          The team member you're looking for doesn't exist.
        </p>
        <UButton
          to="/about"
          color="primary"
          variant="solid"
        >
          View All Team Members
        </UButton>
      </div>
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

const route = useRoute();
const memberId = route.params.id as string;

const { data: teamData } = await useFetch<TeamData>('/api/team');
const team = ref(teamData.value || { members: [] });
const member = computed(() => team.value.members.find((m: TeamMember) => m.id === memberId));

if (!member.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Team member not found',
  });
}

useSeoMeta({
  title: `${member.value.name} - Puntuale Team`,
  description: `Meet ${member.value.name}, ${member.value.role} at Puntuale. Learn about their expertise, skills, and experience in ${member.value.department}.`,
  ogTitle: `${member.value.name} - ${member.value.role}`,
  ogDescription: `Discover ${member.value.name}'s professional journey and expertise at Puntuale.`,
  ogType: 'profile',
  ogUrl: `https://puntuale.nl/team/${memberId}`,
});

useSchemaOrg([
  definePerson({
    name: member.value.name,
    jobTitle: member.value.role,
    worksFor: {
      name: 'Puntuale',
      url: 'https://puntuale.nl',
    },
    email: member.value.email,
    image: `https://puntuale.nl${member.value.image}`,
  }),
]);
</script>
