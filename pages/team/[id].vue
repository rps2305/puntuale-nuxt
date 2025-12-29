<script setup lang="ts">
const route = useRoute();
const memberId = computed(() => route.params.id as string | undefined);

const { data: team } = await useAsyncData('team-data', async () => {
  const all = await queryContent().find();
  return all.find((item) => item.stem === 'team' && item.extension === 'json');
});

const teamMembers = computed(() => team.value?.meta?.members || []);
const member = computed(() => teamMembers.value.find((m) => m.id === memberId.value));

if (memberId.value && !member.value) {
  throw createError({ statusCode: 404, statusMessage: 'Team member not found' });
}

useHead({
  title: `${member.value?.name} | Puntuale`,
  meta: [
    { name: 'description', content: `${member.value?.role} at Puntuale - ${member.value?.name}` },
    { property: 'og:title', content: member.value?.name },
    { property: 'og:description', content: `${member.value?.role} at Puntuale` },
  ],
});
</script>

<template>
  <div v-if="member">
    <ContentHero
      :title="member.name"
      :description="member.role"
      :tagline="`${member.department} • ${member.yearsExperience} years experience`"
      :image="member.image"
      :image-alt="`${member.name} - ${member.role}`"
    />
    <section class="section">
      <div class="shell">
        <div class="team-detail">
          <div class="team-detail__info">
            <div class="team-detail__section">
              <h3>Contact</h3>
              <p>
                <Icon name="i-heroicons-envelope" />
                <a :href="`mailto:${member.email}`">{{ member.email }}</a>
              </p>
            </div>
            <div class="team-detail__section">
              <h3>Skills</h3>
              <ul class="team-detail__skills">
                <li v-for="skill in member.skills" :key="skill">{{ skill }}</li>
              </ul>
            </div>
          </div>
          <div class="team-detail__back">
            <NuxtLink to="/team">
              <Icon name="i-heroicons-arrow-left" />
              Back to Team
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-detail {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.team-detail__info {
  display: grid;
  gap: 2rem;
}

.team-detail__section {
  display: grid;
  gap: 1rem;
}

.team-detail__section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
}

.team-detail__section p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
}

.team-detail__section a {
  color: #2563eb;
  text-decoration: none;
}

.team-detail__section a:hover {
  text-decoration: underline;
}

.team-detail__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.team-detail__skills li {
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.team-detail__back {
  margin-top: 2rem;
}

.team-detail__back a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
}

.team-detail__back a:hover {
  color: #111827;
}
</style>
