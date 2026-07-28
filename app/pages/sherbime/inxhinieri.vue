<script setup lang="ts">
useSeoMeta({
  title: 'Projektim Inxhinierik & Infrastrukturë | LEAD Consulting',
  description:
    'Ekspertizë në projektimin e rrjeteve inxhinierike, infrastrukturës rrugore, sistemeve hidraulike (KUZ/KUSH) dhe strukturave komplekse.'
})

const subServices = [
  {
    title: 'Infrastrukturë Rrugore',
    description:
      'Projektimi i akseve rrugore, profileve tërthore, sinjalistikës dhe rikualifikimit total të blloqeve të banimit.',
    icon: 'i-lucide-map'
  },
  {
    title: 'Rrjete Hidraulike (KUZ/KUSH)',
    description:
      'Inxhinierimi i sistemeve të ujësjellësit, kanalizimeve të ujërave të zeza dhe atyre të shiut për funksionim afatgjatë.',
    icon: 'i-lucide-waves'
  },
  {
    title: 'Inxhinieri MEPS & Topografi',
    description:
      'Zgjidhje të integruara për instalime mekanike, elektrike dhe rilevime të sakta topografike të terrenit.',
    icon: 'i-lucide-settings-2'
  }
]
</script>

<template>
  <UContainer class="py-16 lg:py-24">
    <section class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Projektim Inxhinierik & Infrastrukturë
      </h1>
      <p class="mt-4 mx-auto max-w-3xl text-gray-600">
        Hartimi i projekteve të plota multidisiplinare për vepra publike, rrugore dhe rrjete të
        rëndësishme inxhinierike sipas standardeve bashkëkohore.
      </p>
    </section>

    <section class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
      <UCard
        v-for="service in subServices"
        :key="service.title"
        class="h-full"
      >
        <div class="space-y-4">
          <UIcon
            :name="service.icon"
            class="text-primary text-2xl"
          />
          <h3 class="text-lg font-semibold text-gray-900">
            {{ service.title }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600">
            {{ service.description }}
          </p>
        </div>
      </UCard>
    </section>

    <section class="mt-14 flex flex-wrap items-center justify-center gap-4">
      <UButton
        to="/projekte"
        color="primary"
        size="lg"
      >
        Portofoli i Projekteve
      </UButton>
      <UButton
        to="/kontakt"
        color="neutral"
        variant="outline"
        size="lg"
      >
        Kërko Konsulencë
      </UButton>
    </section>
  </UContainer>
</template>
