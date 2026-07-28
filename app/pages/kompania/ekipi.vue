<script setup lang="ts">
const title = 'Ekipi Ynë | LEAD Consulting'
const description = 'Njihuni me ekspertët, inxhinierët dhe arkitektët e LEAD Consulting.'

const departments = [
  {
    title: 'Departamenti i Arkitekturës & Urbanistikës',
    icon: 'i-lucide-pen-tool',
    description: 'Projektim konceptual, planifikim urban dhe koordinim estetik-funksional për zhvillime publike dhe private.'
  },
  {
    title: 'Inxhinieria Konstruktive & Infrastruktura',
    icon: 'i-lucide-hard-hat',
    description: 'Zgjidhje strukturore dhe infrastrukturore të bazuara në performancë, siguri dhe optimizim teknik.'
  },
  {
    title: 'Mbikëqyrja & Kontrolli i Cilësisë',
    icon: 'i-lucide-clipboard-list',
    description: 'Monitorim i zbatimit, dokumentim teknik dhe verifikim i standardeve në çdo fazë të punimeve.'
  },
  {
    title: 'Inxhinieria Mjedisore & Energjetike',
    icon: 'i-lucide-sun',
    description: 'Ekspertizë në eficiencë energjetike, energji të rinovueshme dhe ndikim të përgjegjshëm mjedisor.'
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
            Ekipi
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl">
            Ekipi Ynë Multidisiplinar
          </h1>
          <p class="text-lg leading-8 text-toned">
            Forca jonë qëndron te bashkëpunimi i ekspertëve të fushave të ndryshme.
          </p>
        </div>
      </section>

      <section class="py-12">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <UCard
            v-for="department in departments"
            :key="department.title"
            variant="subtle"
            class="border border-default"
            :ui="{
              body: 'h-full p-6 sm:p-7'
            }"
          >
            <div class="flex h-full flex-col gap-5">
              <div class="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <UIcon
                  :name="department.icon"
                  class="size-6 text-primary"
                />
              </div>
              <div class="space-y-3">
                <h2 class="text-lg font-semibold tracking-tight text-highlighted">
                  {{ department.title }}
                </h2>
                <p class="leading-7 text-toned">
                  {{ department.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>
    </UContainer>
  </main>
</template>
