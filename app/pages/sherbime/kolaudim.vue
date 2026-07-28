<script setup lang="ts">
useSeoMeta({
  title: 'Kolaudim Veprash & Certifikim Ligjor | LEAD Consulting',
  description:
    'Kolaudim si palë e tretë e pavarur për objekte civile, publike dhe ushtarake. Garantojmë sigurinë dhe standardet KTP/KTZ.'
})

const subServices = [
  {
    title: 'Certifikim i Pavarur',
    description:
      'Hartimi i Akt-Kolaudimit përfundimtar, duke verifikuar saktësinë e zbatimit dhe fletë-analizat e materialeve.',
    icon: 'i-lucide-clipboard-check'
  },
  {
    title: 'Vepra Strategjike & Ushtarake',
    description:
      'Ekspertizë në kolaudimin e objekteve të rëndësisë së lartë, përfshirë bazat e NATO-s dhe institucionet e sigurisë.',
    icon: 'i-lucide-shield'
  },
  {
    title: 'Përputhshmëria me KTZ',
    description:
      'Kontroll rigoroz i respektimit të Kushteve Teknike të Zbatimit dhe ligjeve në fuqi për kontrollin e punimeve.',
    icon: 'i-lucide-book-open-check'
  }
]
</script>

<template>
  <UContainer class="py-16 lg:py-24">
    <section class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Kolaudim i Punimeve në Ndërtim
      </h1>
      <p class="mt-4 mx-auto max-w-3xl text-gray-600">
        Vlerësim i paanshëm, profesional dhe certifikim ligjor si palë e tretë e pavarur për vepra
        komplekse dhe strategjike.
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
        Projektet tona të Kolaudimit
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
