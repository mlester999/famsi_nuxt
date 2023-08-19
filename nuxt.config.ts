// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  components: [
    { path: '~/components/base', prefix: 'Base' },
    { path: '~/components/landing', prefix: 'Landing' },
    '~/components',
  ],
});
