import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  [
    {
      label: 'Kompania',
      to: '/kompania',
      children: [
        {
          label: 'Rreth nesh',
          description: 'Zbuloni historikun, vlerat dhe qasjen tonë profesionale në fushën e inxhinierisë.',
          to: '/kompania/rreth-nesh',
          icon: 'i-lucide-info'
        },
        {
          label: 'Ekipet',
          description: 'Njihuni me inxhinierët dhe ekspertët tanë multidisiplinarë.',
          to: '/kompania/ekipi',
          icon: 'i-lucide-users'
        },
        {
          label: 'Misioni',
          description: 'Vizioni ynë për zhvillim të qëndrueshëm dhe struktura afatgjata.',
          to: '/kompania/misioni',
          icon: 'i-lucide-target'
        }
      ]
    },
    {
      label: 'Shërbime',
      to: '/sherbime',
      children: [
        {
          label: 'Projektim Arkitektonik',
          description: 'Studim dhe projektim urban e arkitektonik për objekte civile, industriale dhe publike.',
          to: '/sherbime/arkitekture',
          icon: 'i-lucide-building-2'
        },
        {
          label: 'Projektim Inxhinierik',
          description: 'Projektime konstruktive, instalatore, hidraulike, rrugore dhe topografike.',
          to: '/sherbime/inxhinieri',
          icon: 'i-lucide-hard-hat'
        },
        {
          label: 'Mbikëqyrje Punimesh',
          description: 'Monitorim i zbatimit të punimeve në ndërtim për të garantuar standardet dhe cilësinë.',
          to: '/sherbime/mbikeqyrje',
          icon: 'i-lucide-eye'
        },
        {
          label: 'Kolaudim Veprash',
          description: 'Certifikim dhe kolaudim ligjor i punimeve të zbatimit në ndërtim.',
          to: '/sherbime/kolaudim',
          icon: 'i-lucide-clipboard-check'
        },
        {
          label: 'Efiçencë Energjetike',
          description: 'Projektimi i impianteve për prodhimin e energjisë nga burime të rinovueshme.',
          to: '/sherbime/eficence-energjetike',
          icon: 'i-lucide-sun'
        }
      ]
    },
    {
      label: 'Projekte',
      to: '/projekte'
    },
    {
      label: 'Kontakt',
      to: '/kontakt'
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
