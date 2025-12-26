<script setup lang="ts">
import type { ContactForm } from '~/types/content';

defineProps<{
  form: ContactForm;
}>();

const fieldType = (type: ContactForm['fields'][number]['type']) =>
  type === 'textarea' ? 'textarea' : 'input';
</script>

<template>
  <section class="section">
    <div class="shell">
      <div class="form-panel">
        <div>
          <span class="pill">
            <Icon name="i-heroicons-paper-airplane" />
            {{ form.title }}
          </span>
          <h2 class="hero-title">{{ form.description }}</h2>
        </div>
        <form class="form-grid">
          <component
            :is="fieldType(field.type)"
            v-for="field in form.fields"
            :key="field.name"
            :type="field.type === 'textarea' ? undefined : field.type"
            :name="field.name"
            :placeholder="field.placeholder"
            :aria-label="field.label"
          />
          <button type="button" class="button button-primary">{{ form.submitLabel }}</button>
        </form>
        <p v-if="form.note" class="footer-note">{{ form.note }}</p>
      </div>
    </div>
  </section>
</template>
