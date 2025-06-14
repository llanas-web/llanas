// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-gtag'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  routeRules: {
    '/': { prerender: true },
    '/projects': { prerender: true },
  },

  nitro: {
    static: true,
    prerender: {
      routes: [
        '/',
        '/projects',
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-90653FTMCQ',
    config: {
      page_title: 'Développeur freelance à Perpignan - Applications mobiles, SaaS & e-commerce | Llanas.dev',
    },
  }
})