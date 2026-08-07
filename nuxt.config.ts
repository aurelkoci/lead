// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/seo',
    'nuxt-skew-protection',
    '@nuxtjs/turnstile',
    '@nuxtjs/i18n'
  ],
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
        '@headlessui/vue',
        '@heroicons/vue/24/outline',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vue/devtools-core',
        'maska/vue',
        'zod'
      ]
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
  i18n: {
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    defaultLocale: 'sq',
    locales: [{
      code: 'sq',
      name: 'Shqip'
    }, {
      code: 'en',
      name: 'English'
    }, {
      code: 'it',
      name: 'Italiano'
    }],
    pages: {
      'index': {
        sq: '/',
        en: '/',
        it: '/'
      },
      'kompania': {
        sq: '/kompania',
        en: '/company',
        it: '/azienda'
      },
      'kompania-rreth-nesh': {
        sq: '/kompania/rreth-nesh',
        en: '/company/about-us',
        it: '/azienda/chi-siamo'
      },
      'kompania-ekipi': {
        sq: '/kompania/ekipi',
        en: '/company/team',
        it: '/azienda/team'
      },
      'kompania-misioni': {
        sq: '/kompania/misioni',
        en: '/company/mission',
        it: '/azienda/missione'
      },
      'sherbime': {
        sq: '/sherbime',
        en: '/services',
        it: '/servizi'
      },
      'sherbime-arkitekture': {
        sq: '/sherbime/arkitekture',
        en: '/services/architecture',
        it: '/servizi/architettura'
      },
      'sherbime-inxhinieri': {
        sq: '/sherbime/inxhinieri',
        en: '/services/engineering',
        it: '/servizi/ingegneria'
      },
      'sherbime-mbikeqyrje': {
        sq: '/sherbime/mbikeqyrje',
        en: '/services/supervision',
        it: '/servizi/supervisione'
      },
      'sherbime-kolaudim': {
        sq: '/sherbime/kolaudim',
        en: '/services/commissioning',
        it: '/servizi/collaudo'
      },
      'sherbime-eficence-energjetike': {
        sq: '/sherbime/eficence-energjetike',
        en: '/services/energy-efficiency',
        it: '/servizi/efficienza-energetica'
      },
      'projekte': {
        sq: '/projekte',
        en: '/projects',
        it: '/progetti'
      },
      'projekte-slug': {
        sq: '/projekte/[...slug]',
        en: '/projects/[...slug]',
        it: '/progetti/[...slug]'
      },
      'kontakt': {
        sq: '/kontakt',
        en: '/contact',
        it: '/contatto'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  },
  turnstile: {
    siteKey: process.env.CLOUDFLARE_TURNSTILE_SITEKEY
    // addValidateEndpoint: true
  }

})
