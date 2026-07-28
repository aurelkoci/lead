<script setup lang="ts">
useSeoMeta({
  title: 'Efiçencë Energjetike & Parqe Fotovoltaike | LEAD Consulting',
  description:
    'Projektim dhe konsulencë për impiante të energjisë së rinovueshme dhe parqe fotovoltaike. Zgjidhje të qëndrueshme inxhinierike në Shqipëri.'
})

const subServices = [
  {
    title: 'Parqe Fotovoltaike',
    description:
      'Projektim i plotë dhe konsulencë inxhinierike për impiante diellore me kapacitete të larta (nga 2 MW deri në 100 MW).',
    icon: 'i-lucide-sun'
  },
  {
    title: 'Inxhinieri Mjedisore',
    description:
      'Zgjidhje teknike që garantojnë performancë optimale dhe përputhshmëri të plotë me kërkesat mjedisore.',
    icon: 'i-lucide-leaf'
  },
  {
    title: 'Rrjeti Mbështetës',
    description:
      'Projektimi i kabinave të transformatorëve dhe rrjetit të brendshëm elektrik për centralet moderne diellore.',
    icon: 'i-lucide-zap'
  }
]
</script>

<template>
  <UContainer class="py-16 lg:py-24">
    <section class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Efiçencë Energjetike & Energji e Rinovueshme
      </h1>
      <p class="mt-4 text-gray-600 max-w-3xl mx-auto">
        Projektimi i impianteve për prodhimin e energjisë nga burime të rinovueshme, duke
        udhëhequr tranzicionin drejt një zhvillimi të qëndrueshëm ekologjik.
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
          <p class="text-sm text-gray-600 leading-relaxed">
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
        Shiko Projektet
      </UButton>
      <UButton
        to="/kontakt"
        color="neutral"
        variant="outline"
        size="lg"
      >
        Na Kontaktoni
      </UButton>
    </section>
  </UContainer>
</template>
