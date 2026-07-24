import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  [
    {

      name: 'Kompania',
      href: '/kompania',
      children: [
        {
          name: 'Rreth nesh',
          description: 'Get a better understanding of your traffic',
          href: '#',
          icon: 'i-lucide-info'
        },
        {
          name: 'Teams',
          description: 'Speak directly to your customers',
          href: '#',
          icon: 'i-lucide-users'
        },
        {
          name: 'Missioni',
          description: 'Your customers\' data will be safe and secure',
          href: '#',
          icon: 'i-lucide-target'
        }
      ]
    },
    {

      name: 'Sherbime',
      href: '/sherbime',
      children: [
        {
          name: 'Projektim Arkitektonik',
          description: 'Get a better understanding of your traffic',
          href: '#',
          icon: 'i-lucide-building'
        },
        {
          name: 'Projektim inxhinierik',
          description: 'Speak directly to your customers',
          href: '#',
          icon: 'i-lucide-settings'
        },
        {
          name: 'Mbikqyrje punimesh',
          description: 'Your customers\' data will be safe and secure',
          href: '#',
          icon: 'i-lucide-shield-check'
        },
        {
          name: 'Kolaudim',
          description: 'Connect with third-party tools',
          href: '#',
          icon: 'i-lucide-clipboard-check'
        },
        {
          name: 'Kontrolli i cilsisë',
          description: 'Build strategic funnels that will convert',
          href: '#',
          icon: 'i-lucide-chart-line'
        }
      ]
    },
    {

      name: 'Projekte',
      href: '/projekte',
      children: [
        {
          name: 'Projektim Arkitektonik',
          description: 'Get a better understanding of your traffic',
          href: '#',
          icon: 'i-lucide-building'
        },
        {
          name: 'Projektim inxhinierik',
          description: 'Speak directly to your customers',
          href: '#',
          icon: 'i-lucide-settings'
        },
        {
          name: 'Mbikqyrje punimesh',
          description: 'Your customers\' data will be safe and secure',
          href: '#',
          icon: 'i-lucide-shield-check'
        },
        {
          name: 'Kolaudim',
          description: 'Connect with third-party tools',
          href: '#',
          icon: 'i-lucide-clipboard-check'
        },
        {
          name: 'Kontrolli i cilsisë',
          description: 'Build strategic funnels that will convert',
          href: '#',
          icon: 'i-lucide-chart-line'
        }
      ]
    },
    { name: 'Kontakt', href: '/kontakt' }
  ],
  [
    {
      avatar: {
        src: '/img/Logo_lead_l.svg',
        alt: 'Logo Lead',
        size: '2xl',
        loading: 'lazy',
        class: 'rounded-none w-full h-8 '
      },
      to: '/'
    }
  ]
]
