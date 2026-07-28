<script setup lang="ts">
const services = [
  {
    Title: 'Projektim Arkitektonik',
    Desc: 'Studim dhe projektim urban e arkitektonik për objekte civile, industriale dhe publike.',
    Icon: 'i-lucide-building-2',
    Link: '/sherbime/arkitekture'
  },
  {
    Title: 'Projektim Inxhinierik',
    Desc: 'Projektime konstruktive, instalatore, hidraulike, rrugore dhe topografike.',
    Icon: 'i-lucide-hard-hat',
    Link: '/sherbime/inxhinieri'
  },
  {
    Title: 'Mbikëqyrje Punimesh',
    Desc: 'Monitorim i zbatimit të punimeve në ndërtim për të garantuar standardet dhe cilësinë.',
    Icon: 'i-lucide-eye',
    Link: '/sherbime/mbikeqyrje'
  },
  {
    Title: 'Kolaudim Veprash',
    Desc: 'Certifikim dhe kolaudim ligjor i punimeve të zbatimit në ndërtim.',
    Icon: 'i-lucide-clipboard-check',
    Link: '/sherbime/kolaudim'
  },
  {
    Title: 'Efiçencë Energjetike',
    Desc: 'Projektimi i impianteve për prodhimin e energjisë nga burime të rinovueshme.',
    Icon: 'i-lucide-sun',
    Link: '/sherbime/eficence-energjetike'
  }
]
</script>

<template>
  <UPage>
    <UContainer class="py-10 lg:py-14">
      <header>
        <UPageHero
          title="Shërbimet Tona"
          description="Zgjidhje të plota inxhinierike të bazuara në standardet më të larta (KTP/KTZ) dhe zhvillimin e qëndrueshëm."
          :ui="{
            title: 'text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-highlighted',
            description: 'mt-4 max-w-3xl text-base sm:text-lg text-toned'
          }"
        />
      </header>

      <section
        class="mt-10 lg:mt-12"
        aria-labelledby="services-heading"
      >
        <h2
          id="services-heading"
          class="sr-only"
        >
          Lista e shërbimeve
        </h2>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="service in services"
            :key="service.Title"
            class="h-full"
            :ui="{
              body: 'h-full flex flex-col gap-4',
              root: 'ring ring-inset ring-default/60 hover:ring-primary/40 transition-colors duration-200'
            }"
          >
            <UIcon
              :name="service.Icon"
              class="text-green-700 text-3xl"
            />

            <h3 class="text-lg font-semibold text-highlighted">
              {{ service.Title }}
            </h3>

            <p class="text-sm leading-6 text-toned">
              {{ service.Desc }}
            </p>

            <div class="mt-auto pt-2">
              <UButton
                :to="service.Link"
                label="Zbulo më shumë"
                variant="subtle"
                color="primary"
                icon="i-lucide-arrow-right"
                trailing
              />
            </div>
          </UCard>
        </div>
      </section>
    </UContainer>
  </UPage>
</template>
