import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  [
    {
      locale: 'sq',
      items: [{
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
      }]
    },
    {
      locale: 'en',
      items: [{
        label: 'Company',
        to: '/en/company',
        children: [
          {
            label: 'About Us',
            description: 'Discover our history, values, and professional approach in the field of engineering.',
            to: '/en/company/about-us',
            icon: 'i-lucide-info'
          },
          {
            label: 'Team',
            description: 'Meet our multidisciplinary engineers and experts.',
            to: '/en/company/team',
            icon: 'i-lucide-users'
          },
          {
            label: 'Mission',
            description: 'Our vision for sustainable development and long-term structures.',
            to: '/en/company/mission',
            icon: 'i-lucide-target'
          }
        ]
      },
      {
        label: 'Services',
        to: '/en/services',
        children: [
          {
            label: 'Architectural Design',
            description: 'Study and urban and architectural design for civil, industrial and public buildings.',
            to: '/en/services/architecture',
            icon: 'i-lucide-building-2'
          },
          {
            label: 'Engineering Design',
            description: 'Structural, installation, hydraulic, road and topographic designs.',
            to: '/en/services/engineering',
            icon: 'i-lucide-hard-hat'
          },
          {
            label: 'Construction Supervision',
            description: 'Monitoring the implementation of construction works to ensure standards and quality.',
            to: '/en/services/commissioning',
            icon: 'i-lucide-eye'
          },
          {
            label: 'Commissioning',
            description: 'Certification and legal commissioning of construction works.',
            to: '/en/services/commissioning',
            icon: 'i-lucide-clipboard-check'
          },
          {
            label: 'Energy Efficiency',
            description: 'Design of plants for energy production from renewable sources.',
            to: '/en/services/energy-efficiency',
            icon: 'i-lucide-sun'
          }
        ]
      },
      {
        label: 'Projects',
        to: '/en/projects'
      },
      {
        label: 'Contact',
        to: '/en/contact'
      }]
    },
    {
      locale: 'it',
      items: [{
        label: 'Azienda',
        to: '/azienda',
        children: [
          {
            label: 'Chi siamo',
            description: 'Scoprite la nostra storia, i nostri valori e il nostro approccio professionale nel campo dell\'ingegneria.',
            to: '/azienda/chi-siamo',
            icon: 'i-lucide-info'
          },
          {
            label: 'Team',
            description: 'Incontrate i nostri ingegneri ed esperti multidisciplinari.',
            to: '/azienda/team',
            icon: 'i-lucide-users'
          },
          {
            label: 'Missione',
            description: 'La nostra visione per uno sviluppo sostenibile e strutture a lungo termine.',
            to: '/azienda/missione',
            icon: 'i-lucide-target'
          }
        ]
      },
      {
        label: 'Servizi',
        to: '/servizi',
        children: [
          {
            label: 'Progettazione Architettonica',
            description: 'Studio e progettazione urbana e architettonica per edifici civili, industriali e pubblici.',
            to: '/servizi/architettura',
            icon: 'i-lucide-building-2'
          },
          {
            label: 'Progettazione Ingegneristica',
            description: 'Progettazioni strutturali, impiantistiche, idrauliche, stradali e topografiche.',
            to: '/servizi/ingegneria',
            icon: 'i-lucide-hard-hat'
          },
          {
            label: 'Supervisione dei Lavori',
            description: 'Monitoraggio dell\'esecuzione dei lavori di costruzione per garantire standard e qualità.',
            to: '/servizi/supervisione',
            icon: 'i-lucide-eye'
          },
          {
            label: 'Collaudo',
            description: 'Certificazione e collaudo legale dei lavori di costruzione.',
            to: '/servizi/collaudo',
            icon: 'i-lucide-clipboard-check'
          },
          {
            label: 'Efficienza Energetica',
            description: 'Progettazione di impianti per la produzione di energia da fonti rinnovabili.',
            to: '/servizi/efficienza-energetica',
            icon: 'i-lucide-sun'
          }
        ]
      },
      {
        label: 'Progetti',
        to: '/progetti'
      },
      {
        label: 'Contatto',
        to: '/contatto'
      }]
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
