import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  [
    {
      label: 'Projects',
      icon: 'i-lucide-folder',
      to: '/projects'
    },
    {
      label: 'Kompania',
      icon: 'i-lucide-building',
      to: '/company',
      children: [
        {
          label: 'About',
          icon: 'i-lucide-info',
          to: '/about'
        },
        {
          label: 'Teams',
          icon: 'i-lucide-users',
          to: '/teams'
        },
        {
          label: 'Mision & Vision',
          icon: 'i-lucide-eye',
          to: '/mission-vision'
        }
      ]
    },
    {
      label: 'Shërbimet',
      icon: 'i-lucide-briefcase',
      to: '/services',
      children: [
        {
          label: 'Arkitekturë dhe projektim',
          icon: 'i-lucide-clipboard',
          to: '/services/consulting'
        },
        {
          label: 'Projektim Inxhinierik',
          icon: 'i-lucide-paintbrush',
          to: '/services/design'
        },
        {
          label: 'Mbikqyrje punimesh dhe kontroll cilësie',
          icon: 'i-lucide-code',
          to: '/services/development'
        }
      ]
    },
    {
      label: 'About',
      icon: 'i-lucide-user',
      to: '/about'
    }
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
