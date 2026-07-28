<script setup lang="ts">
const title = 'Rreth Nesh | LEAD Consulting'
const description = 'LEAD Consulting është një kompani multidisiplinare që ofron zgjidhje të plota inxhinierike.'

const stats = [
  {
    value: '10+',
    label: 'Vite Eksperiencë'
  },
  {
    value: '100+',
    label: 'Projekte të Përfunduara'
  },
  {
    value: 'Staf',
    label: 'Multidisiplinar'
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
            Kompania
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl">
            Rreth LEAD Consulting
          </h1>
          <p class="text-lg leading-8 text-toned">
            Një palë e tretë e pavarur dhe e besueshme në inxhinieri dhe zhvillim.
          </p>
        </div>
      </section>

      <section class="grid gap-8 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch">
        <article class="space-y-6 text-base leading-8 text-toned">
          <h2 class="text-2xl font-semibold tracking-tight text-highlighted">
            Zgjidhje të plota nga koncepti deri te dorëzimi
          </h2>
          <p>
            LEAD Consulting ofron shërbime të integruara që mbulojnë të gjithë ciklin e zhvillimit të një projekti: nga projektimi arkitektonik dhe planifikimi urban, te koordinimi i disiplinave inxhinierike, mbikëqyrja rigoroze e punimeve dhe kolaudimi ligjor i veprave.
          </p>
          <p>
            Ekipi ynë kombinon përvojë në infrastrukturë, energji të rinovueshme dhe objekte publike e ushtarake, duke sjellë një qasje të disiplinuar, të dokumentuar dhe të orientuar te performanca afatgjatë e investimit.
          </p>
          <p>
            Në çdo angazhim, synojmë të jemi partneri teknik që ruan cilësinë, kontrollon riskun dhe garanton që zgjidhja finale të jetë funksionale, e sigurt dhe e qëndrueshme.
          </p>
        </article>

        <aside>
          <UCard
            variant="subtle"
            class="h-full overflow-hidden border border-default"
            :ui="{
              body: 'h-full p-0'
            }"
          >
            <div class="flex h-full min-h-80 flex-col justify-between bg-linear-to-br from-primary/15 via-bg to-primary/5 p-8">
              <div class="space-y-4">
                <div class="flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <UIcon
                    name="i-lucide-building-2"
                    class="size-7 text-primary"
                  />
                </div>
                <div>
                  <p class="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                    Partner teknik
                  </p>
                  <p class="mt-3 text-2xl font-semibold tracking-tight text-highlighted">
                    Inxhinieri, planifikim dhe kontroll cilësie në një strukturë të vetme.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 pt-8">
                <div class="rounded-2xl border border-default bg-default/70 p-4">
                  <p class="text-sm text-muted">
                    Fusha
                  </p>
                  <p class="mt-2 font-semibold text-highlighted">
                    Arkitekturë, Infrastrukturë, Energji
                  </p>
                </div>
                <div class="rounded-2xl border border-default bg-default/70 p-4">
                  <p class="text-sm text-muted">
                    Roli
                  </p>
                  <p class="mt-2 font-semibold text-highlighted">
                    Mbikëqyrje, Kolaudim, Konsulencë
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </aside>
      </section>

      <section class="pb-4">
        <div class="grid gap-4 md:grid-cols-3">
          <UCard
            v-for="item in stats"
            :key="item.label"
            variant="soft"
            class="border border-default"
          >
            <div class="space-y-2">
              <p class="text-3xl font-semibold tracking-tight text-highlighted">
                {{ item.value }}
              </p>
              <p class="text-sm uppercase tracking-[0.16em] text-muted">
                {{ item.label }}
              </p>
            </div>
          </UCard>
        </div>
      </section>
    </UContainer>
  </main>
</template>
