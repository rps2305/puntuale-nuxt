<script setup lang="ts">
import type { TeamMember } from '~/types/team';

defineProps<{
  members: ReadonlyArray<TeamMember>;
}>();
</script>

<template>
  <section class="section">
    <div class="shell">
      <div class="team-grid">
        <NuxtLink
          v-for="member in members"
          :key="member.id"
          :to="`/team/${member.id}`"
          class="team-card"
        >
           <NuxtImg :src="member.image" :alt="member.name" loading="lazy" width="480" height="600" format="webp" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
          <p class="footer-note">{{ member.department }}</p>
          <div class="tag-row">
            <span v-for="skill in member.skills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
