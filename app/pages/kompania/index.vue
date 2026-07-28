<script setup lang="ts">
const title = 'Kompania | LEAD Consulting'
const description = 'Zbuloni kush jemi, misionin tonë dhe ekipin multidisiplinar të inxhinierëve.'

const pages = [
  {
    title: 'Rreth Nesh',
    description: 'Njihuni me profilin e LEAD Consulting dhe gamën e plotë të ekspertizës inxhinierike.',
    icon: 'i-lucide-info',
    to: '/kompania/rreth-nesh'
  },
  {
    title: 'Misioni',
    description: 'Shihni parimet që drejtojnë mënyrën si projektojmë, mbikëqyrim dhe validomë çdo vepër.',
    icon: 'i-lucide-target',
    to: '/kompania/misioni'
  },
  {
    title: 'Ekipi',
    description: 'Zbuloni strukturën multidisiplinare që bashkon arkitektë, inxhinierë dhe specialistë të cilësisë.',
    icon: 'i-lucide-users',
    to: '/kompania/ekipi'
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
            LEAD Consulting
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl">
            Kompania që koordinon projektimin, kontrollin dhe dorëzimin teknik me standard të lartë.
          </h1>
          <p class="text-lg leading-8 text-toned">
            Zbuloni kush jemi, si punojmë dhe cilat ekipe ndërtojnë zgjidhje të sigurta, të qëndrueshme dhe të verifikueshme për sektorin publik dhe privat.
          </p>
        </div>
      </section>

      <section class="py-12">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <UCard
            v-for="page in pages"
            :key="page.to"
            variant="subtle"
            class="border border-default"
            :ui="{
              body: 'p-6 sm:p-7',
              footer: 'pt-0 px-6 pb-6 sm:px-7 sm:pb-7'
            }"
          >
            <div class="space-y-5">
              <div class="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <UIcon
                  :name="page.icon"
                  class="size-6 text-primary"
                />
              </div>

              <div class="space-y-3">
                <h2 class="text-xl font-semibold tracking-tight text-highlighted">
                  {{ page.title }}
                </h2>
                <p class="leading-7 text-toned">
                  {{ page.description }}
                </p>
              </div>
            </div>

            <template #footer>
              <UButton
                :to="page.to"
                variant="soft"
                color="primary"
                trailing-icon="i-lucide-arrow-right"
              >
                Shiko faqen
              </UButton>
            </template>
          </UCard>
        </div>
      </section>
    </UContainer>
  </main>
</template>
