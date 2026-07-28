import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  [
    {
      name: 'Kompania',
      href: '/kompania',
      children: [
        {
          name: 'Rreth nesh',
          description: 'Zbuloni historikun, vlerat dhe qasjen tonë profesionale në fushën e inxhinierisë.',
          href: '/kompania/rreth-nesh',
          icon: 'i-lucide-info'
        },
        {
          name: 'Ekipet',
          description: 'Njihuni me inxhinierët dhe ekspertët tanë multidisiplinarë.',
          href: '/kompania/ekipi',
          icon: 'i-lucide-users'
        },
        {
          name: 'Misioni',
          description: 'Vizioni ynë për zhvillim të qëndrueshëm dhe struktura afatgjata.',
          href: '/kompania/misioni',
          icon: 'i-lucide-target'
        }
      ]
    },
    {
      name: 'Shërbime',
      href: '/sherbime',
      children: [
        {
          name: 'Projektim Arkitektonik',
          description: 'Studim dhe projektim urban e arkitektonik për objekte civile, industriale dhe publike.',
          href: '/sherbime/arkitekture',
          icon: 'i-lucide-building-2'
        },
        {
          name: 'Projektim Inxhinierik',
          description: 'Projektime konstruktive, instalatore, hidraulike, rrugore dhe topografike.',
          href: '/sherbime/inxhinieri',
          icon: 'i-lucide-hard-hat'
        },
        {
          name: 'Mbikëqyrje Punimesh',
          description: 'Monitorim i zbatimit të punimeve në ndërtim për të garantuar standardet dhe cilësinë.',
          href: '/sherbime/mbikeqyrje',
          icon: 'i-lucide-eye'
        },
        {
          name: 'Kolaudim Veprash',
          description: 'Certifikim dhe kolaudim ligjor i punimeve të zbatimit në ndërtim.',
          href: '/sherbime/kolaudim',
          icon: 'i-lucide-clipboard-check'
        },
        {
          name: 'Efiçencë Energjetike',
          description: 'Projektimi i impianteve për prodhimin e energjisë nga burime të rinovueshme.',
          href: '/sherbime/eficence-energjetike',
          icon: 'i-lucide-sun'
        }
      ]
    },
    {
      name: 'Projekte',
      href: '/projekte'
    },
    {
      name: 'Kontakt',
      href: '/kontakt'
    }
  ],
  [
    {
      avatar: {
        src: '/img/Logo_lead_l.svg',
        alt: 'Logo Lead Consulting',
        size: '2xl',
        loading: 'lazy',
        class: 'rounded-none w-full h-8'
      },
      to: '/'
    }
  ]
]
