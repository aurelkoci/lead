<script setup lang="ts">
useSeoMeta({
  title: 'Mbikëqyrje Punimesh & Menaxhim Kantieri | LEAD Consulting',
  description:
    'Monitorim ditor i kantierit, kontroll i cilësisë së materialeve dhe menaxhim i dokumentacionit teknik për investime të sigurta.'
})

const subServices = [
  {
    title: 'Monitorim në Kantier',
    description:
      'Supervizion i përditshëm i proceseve të ndërtimit, objekteve publike (si shkolla e spitale) dhe menaxhim i grafikun të punimeve.',
    icon: 'i-lucide-hard-hat'
  },
  {
    title: 'Kontrolli i Cilësisë',
    description:
      'Inspektim i certifikatave të cilësisë së materialeve dhe testimeve laboratorike (beton, hekur, asfalte) para vendosjes në vepër.',
    icon: 'i-lucide-microscope'
  },
  {
    title: 'Menaxhim Dokumentacioni',
    description:
      'Hartimi i librezave të masave, situacioneve përfundimtare dhe mbajtja e rregullt e ditarit e procesverbaleve të punimeve të maskuara.',
    icon: 'i-lucide-folder-check'
  }
]
</script>

<template>
  <UContainer class="py-16 lg:py-24">
    <section class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Mbikëqyrje e Punimeve & Kontrolli i Cilësisë
      </h1>
      <p class="mx-auto mt-4 max-w-3xl text-gray-600">
        Mbrojtja e investimit tuaj përmes monitorimit rigoroz në kantier, duke garantuar zbatimin
        besnik të projektit dhe afateve.
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
        Shiko Projektet
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
