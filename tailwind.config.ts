import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './content/**/*.{md,mdc}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
