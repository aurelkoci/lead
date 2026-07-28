<script setup lang="ts">
const title = 'Misioni dhe Vlerat | LEAD Consulting'
const description = 'Vizioni ynë për zhvillim të qëndrueshëm dhe strukturat e sigurta inxhinierike.'

const values = [
  {
    title: 'Saktësia dhe Siguria',
    description: 'Zbatim rigoroz i Rregullave Teknike (KTP & KTZ) për të garantuar vepra të sigurta e jetëgjata.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Integriteti i Pavarur',
    description: 'Veprojmë si një palë e tretë e pavarur dhe e paanshme në mbikëqyrje dhe kolaudim.',
    icon: 'i-lucide-scale'
  },
  {
    title: 'Qëndrueshmëria',
    description: 'Fokus në energjinë e gjelbër dhe zhvillimin urban që respekton mjedisin dhe komunitetin.',
    icon: 'i-lucide-leaf'
  }
] as const

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Portfolio', { title, description })
</script>

<template>
  <main class="py-12 sm:py-16">
    <UContainer>
      <section class="rounded-3xl border border-default bg-(--ui-bg-elevated)/70 px-6 py-12 shadow-sm sm:px-10 lg:px-14">
        <div class="max-w-3xl space-y-6">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Misioni
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl">
            Misioni dhe Vlerat Tona
          </h1>
          <p class="text-lg leading-8 text-toned">
            Të udhëheqim (LEAD) me integritet dhe inovacione inxhinierike.
          </p>
        </div>
      </section>

      <section class="py-12">
        <div class="grid gap-6 lg:grid-cols-3">
          <UCard
            v-for="value in values"
            :key="value.title"
            variant="soft"
            class="border border-default"
            :ui="{
              body: 'p-6 sm:p-7'
            }"
          >
            <div class="space-y-5">
              <div class="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <UIcon
                  :name="value.icon"
                  class="size-6 text-primary"
                />
              </div>
              <div class="space-y-3">
                <h2 class="text-xl font-semibold tracking-tight text-highlighted">
                  {{ value.title }}
                </h2>
                <p class="leading-7 text-toned">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>
    </UContainer>
  </main>
</template>
