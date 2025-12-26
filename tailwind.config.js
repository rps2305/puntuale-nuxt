module.exports = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|neutral|gray|emerald|slate)-.*/,
      variants: ['hover', 'dark', 'dark:hover'],
    },
  ],
};
