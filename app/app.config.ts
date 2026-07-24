export default defineAppConfig({
  global: {
    picture: {
      dark: 'img/Logo_lead_l.svg',
      light: 'img/Logo_lead_l.svg',
      alt: 'Lead Logo'
    },
    meetingLink: '/kontakt',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    },
    colors: {
      primary: 'blue',
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
      '/foto/1.webp',
      '/foto/2.webp',
      '/foto/3.webp',
      '/foto/4.webp',
      '/foto/5.webp',
      '/foto/6.webp',
      '/foto/7.webp'
    ]
  }
})
