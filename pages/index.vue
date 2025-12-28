<script setup lang="ts">
const page = queryContent('/index');

if (!page) {
  throw createError({ statusCode: 404, statusMessage: 'Home page not found' });
}

const stats = [
  {
    value: '11.2h',
    label: 'Recovered focus per team, per week',
    detail: 'Average across 34 operations squads'
  },
  {
    value: '92%',
    label: 'On-time delivery rate',
    detail: 'For roadmaps rebuilt with Puntuale'
  },
  {
    value: '3.4x',
    label: 'Faster decision cycles',
    detail: 'Measured after our Ritual Sprint'
  },
];

const features = {
  title: 'Signature moves',
  subtitle: 'Problems become elegant once we plot them on time.',
  items: [
    {
      title: 'The Tempo Audit',
      description: 'We map every meeting, handoff, and delay to see where minutes disappear.',
      icon: 'i-heroicons-clock'
    },
    {
      title: 'The Ritual Sprint',
      description: 'Two-week reset where we rebuild rituals around outcomes, not attendance.',
      icon: 'i-heroicons-sparkles'
    },
    {
      title: 'Focus Kitchens',
      description: 'Real-time facilitation that keeps strategy work from boiling over.',
      icon: 'i-heroicons-fire'
    },
    {
      title: 'Momentum OS',
      description: 'A lightweight operating system for teams that need new rhythms fast.',
      icon: 'i-heroicons-command-line'
    }
  ]
};

const services = {
  title: 'Timeware',
  subtitle: 'We design systems that hold your pace even when the schedule does not.',
  items: [
    {
      title: 'Calendar Intelligence',
      description: 'We turn calendar chaos into a portfolio view of energy, urgency, and flow.',
      image: '/images/services.webp',
      imageAlt: 'Minimal desk scene with planner and coffee.'
    },
    {
      title: 'Decision Ceremonies',
      description: 'Structured sessions that move decisions from draft to done in 48 hours.',
      image: '/images/about.webp',
      imageAlt: 'Team collaborating with notes and laptops.'
    },
    {
      title: 'Time Experience Design',
      description: 'We craft how time feels across your product, customer, and internal teams.',
      image: '/images/blog.webp',
      imageAlt: 'Colleagues walking through a bright office.'
    }
  ]
};

const tagline = 'Problems for all your solutions';
const image = '/images/hero.webp';
const imageAlt = 'Strategy team reviewing a timeline wall.';

const cta = {
  primary: {
    label: 'Start a timing audit',
    href: '/contact'
  },
  secondary: {
    label: 'Meet the team',
    href: '/team'
  }
};

const ctaPanel = {
  title: 'Ready for time to feel less expensive?',
  description: 'Book a sprint with our strategists and test what a calmer cadence feels like.',
  primary: {
    label: 'Book a sprint',
    href: '/contact'
  },
  secondary: {
    label: 'Read the playbook',
    href: '/blog'
  }
};
</script>

<template>
  <div>
    <ContentHero
      :title="'Puntuale'"
      :description="'Time strategy studio for teams that ship on schedule and breathe again.'"
      :tagline="tagline"
      :image="image"
      :image-alt="imageAlt"
      :cta="cta"
    />
    <StatsStrip :stats="stats" />
    <FeatureGrid
      :title="features.title"
      :subtitle="features.subtitle"
      :items="features.items"
    />
    <ServiceGrid
      :title="services.title"
      :subtitle="services.subtitle"
      :items="services.items"
    />
    <section class="section">
      <div class="shell">
        <ContentRenderer :value="page" class="content-prose" />
      </div>
    </section>
    <section class="section">
      <div class="shell">
        <div class="banner">
          <div>
            <h2 class="hero-title">{{ ctaPanel.title }}</h2>
            <p>{{ ctaPanel.description }}</p>
          </div>
          <div class="hero-actions">
            <NuxtLink :to="ctaPanel.primary.href" class="button button-primary">
              {{ ctaPanel.primary.label }}
            </NuxtLink>
            <NuxtLink
              v-if="ctaPanel.secondary"
              :to="ctaPanel.secondary.href"
              class="button button-secondary"
            >
              {{ ctaPanel.secondary.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
