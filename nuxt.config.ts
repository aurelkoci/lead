/* eslint-disable @stylistic/quote-props */
/* eslint-disable @stylistic/quotes */
/* eslint-disable @stylistic/comma-dangle */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "motion-v/nuxt",
    "@nuxtjs/seo",
    "nuxt-skew-protection",
    "@nuxtjs/turnstile",
    "@nuxtjs/i18n",
  ],
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
    },
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost",
    },
  },
  routeRules: {
    "/**": { prerender: true },
  },

  compatibilityDate: "2026-06-30",

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        "@unhead/schema-org/vue",
        "@headlessui/vue",
        "@heroicons/vue/24/outline",
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "@vue/devtools-core",
        "maska/vue",
        "zod",
      ],
    },
  },
  hooks: {
    async "nitro:config"(nitroConfig) {
      try {
        const response = await fetch("http://localhost/api/pages-list");

        // Nëse serveri lokal bie ose API nuk përgjigjet me status 200
        if (!response.ok) {
          console.error(`❌ API Error: Status ${response.status}`);
          return;
        }

        const data = await response.json();

        // Kujdes: Laravel shpesh e mbështjell json brenda një çelësi 'data' kur përdor Resources
        // Shih cili rast është i yti dhe rregullo variablën 'pagesArray'
        const pagesArray = Array.isArray(data) ? data : data.data || [];

        // Nëse prapë nuk kemi array pas verifikimeve
        if (!Array.isArray(pagesArray)) {
          console.error("❌ Data from API is not an array:", data);
          return;
        }

        // Tani mund të jemi të sigurt që .map nuk do japë undefined
        const routes = pagesArray.map((page) => `/${page.slug}`);

        nitroConfig.prerender = nitroConfig.prerender || {};
        nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];
        nitroConfig.prerender.routes.push(...routes);

        console.log(`✅ U shtuan ${routes.length} rrugë për gjenerim statik.`);
      } catch (error) {
        console.error("❌ Dështoi lidhja me Laravel API:", error);
      }
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    customRoutes: "config",
    defaultLocale: "sq",
    locales: [
      {
        code: "sq",
        name: "Shqip",
      },
      {
        code: "en",
        name: "English",
      },
      {
        code: "it",
        name: "Italiano",
      },
    ],
    pages: {
      index: {
        sq: "/",
        en: "/",
        it: "/",
      },
      kompania: {
        sq: "/kompania",
        en: "/company",
        it: "/azienda",
      },
      "kompania-rreth-nesh": {
        sq: "/kompania/rreth-nesh",
        en: "/company/about-us",
        it: "/azienda/chi-siamo",
      },
      "kompania-ekipi": {
        sq: "/kompania/ekipi",
        en: "/company/team",
        it: "/azienda/team",
      },
      "kompania-misioni": {
        sq: "/kompania/misioni",
        en: "/company/mission",
        it: "/azienda/missione",
      },
      sherbime: {
        sq: "/sherbime",
        en: "/services",
        it: "/servizi",
      },
      "sherbime-arkitekture": {
        sq: "/sherbime/arkitekture",
        en: "/services/architecture",
        it: "/servizi/architettura",
      },
      "sherbime-inxhinieri": {
        sq: "/sherbime/inxhinieri",
        en: "/services/engineering",
        it: "/servizi/ingegneria",
      },
      "sherbime-mbikeqyrje": {
        sq: "/sherbime/mbikeqyrje",
        en: "/services/supervision",
        it: "/servizi/supervisione",
      },
      "sherbime-kolaudim": {
        sq: "/sherbime/kolaudim",
        en: "/services/commissioning",
        it: "/servizi/collaudo",
      },
      "sherbime-eficence-energjetike": {
        sq: "/sherbime/eficence-energjetike",
        en: "/services/energy-efficiency",
        it: "/servizi/efficienza-energetica",
      },
      projekte: {
        sq: "/projekte",
        en: "/projects",
        it: "/progetti",
      },
      "projekte-slug": {
        sq: "/projekte/[slug]",
        en: "/projects/[slug]",
        it: "/progetti/[slug]",
      },
      kontakt: {
        sq: "/kontakt",
        en: "/contact",
        it: "/contatto",
      },
    },
  },
  ogImage: {
    zeroRuntime: true,
  },
  turnstile: {
    siteKey: process.env.CLOUDFLARE_TURNSTILE_SITEKEY,
    // addValidateEndpoint: true
  },
});
