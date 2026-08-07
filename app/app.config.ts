export default defineAppConfig({
  global: {
    picture: {
      dark: 'img/Logo_lead_l.svg',
      light: 'img/Logo_lead_D.svg',
      alt: 'Lead Logo'
    },
    meetingLink: '/kontakt',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  pageHero: {
    slots: {
      root: 'relative isolate',
      container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24',
      wrapper: '',
      header: '',
      headline: 'mb-4',
      title: 'text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted',
      description: 'text-lg sm:text-xl/8 text-muted',
      body: 'mt-10',
      footer: 'mt-10',
      links: 'flex flex-wrap gap-x-6 gap-y-3'
    },
    variants: {
      orientation: {
        horizontal: {
          container: 'lg:grid-cols-2 lg:items-center',
          description: 'text-pretty'
        },
        vertical: {
          container: '',
          headline: 'justify-center',
          wrapper: 'text-center',
          description: 'text-balance',
          links: 'justify-center'
        }
      },
      reverse: {
        true: {
          wrapper: 'order-last'
        }
      },
      headline: {
        true: {
          headline: 'font-semibold text-primary flex items-center gap-1.5'
        }
      },
      title: {
        true: {
          description: 'mt-6'
        }
      }
    }
  },
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    },
    colors: {
      primary: 'primary',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Të gjitha të drejtat e rezervuara Lead • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-facebook',
        'to': 'https://www.facebook.com/ardit.ing.7/',
        'target': '_blank',
        'aria-label': 'Lead on Facebook'
      }
    ]
  },
  carousel: {
    items: [
      '/carousel/1-1.webp',
      '/carousel/1-2.webp',
      '/carousel/1-3.webp',
      '/carousel/1-4.webp',
      '/foto/5.webp',
      '/foto/6.webp',
      '/foto/7.webp'
    ]
  }
})
