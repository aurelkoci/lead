<script setup lang="ts">
const subServices = [
  {
    title: 'Planifikim & Rikualifikim Urban',
    desc: 'Hartimi i planeve të detajuara vendore dhe rikualifikimi i hapësirave publike, shesheve dhe blloqeve të banimit.',
    icon: 'i-lucide-map'
  },
  {
    title: 'Arkitekturë Publike & Civile',
    desc: 'Projektimi i objekteve arsimore, shëndetësore, industriale dhe rezidenciale duke zbatuar rigorozisht standardet KTP/KTZ.',
    icon: 'i-lucide-building'
  },
  {
    title: 'Peizazh & Ekoturizëm',
    desc: 'Integrimi i strukturave në zonat e mbrojtura natyrore, si ballkone panoramike dhe pika informacioni turistike, me ndikim minimal mjedisor.',
    icon: 'i-lucide-tree-pine'
  }
]
</script>

<template>
  <UContainer class="py-12 lg:py-16">
    <header class="max-w-4xl">
      <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl lg:text-5xl">
        Projektim Arkitektonik & Urbanistik
      </h1>
      <p class="mt-5 text-lg leading-8 text-gray-600">
        Ofrim i zgjidhjeve estetike, funksionale dhe të qëndrueshme për hapësira urbane, peizazhe dhe objekte publike e private, duke respektuar historikun dhe mjedisin.
      </p>
    </header>

    <section
      class="mt-12 lg:mt-14"
      aria-labelledby="expertise-heading"
    >
      <h2
        id="expertise-heading"
        class="sr-only"
      >
        Fushat e ekspertizës
      </h2>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <UCard
          v-for="item in subServices"
          :key="item.title"
          variant="subtle"
          class="h-full"
          :ui="{
            root: 'h-full ring ring-inset ring-default/70',
            body: 'h-full flex flex-col gap-4'
          }"
        >
          <UIcon
            :name="item.icon"
            class="text-green-700 text-3xl"
          />

          <h3 class="text-lg font-semibold text-highlighted">
            {{ item.title }}
          </h3>

          <p class="text-sm leading-6 text-toned">
            {{ item.desc }}
          </p>
        </UCard>
      </div>
    </section>

    <section class="mt-14 rounded-2xl border border-default bg-default/40 p-8 text-center lg:mt-16 lg:p-10">
      <p class="text-base text-toned sm:text-lg">
        Eksploroni projektet tona të arkitekturës dhe zhvillimit urban.
      </p>

      <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
        <UButton
          to="/projekte"
          label="Shiko Projektet"
          color="primary"
          variant="solid"
        />
        <UButton
          to="/kontakt"
          label="Kërko Konsulencë"
          color="neutral"
          variant="ghost"
        />
      </div>
    </section>
  </UContainer>
</template>
