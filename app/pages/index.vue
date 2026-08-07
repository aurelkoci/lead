<script setup lang="ts">
// import { withLeadingSlash } from 'ufo'
import type { Collections, IndexsqCollectionItem, IndexenCollectionItem, IndexitCollectionItem } from '@nuxt/content'

// const route = useRoute()
const { locale } = useI18n()
// const slug = computed(() => Array.isArray(route.params.slug) ? withLeadingSlash(String(route.params.slug.join('/'))) : withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('index' + locale.value, async () => {
  // Build collection name based on current locale

  const collection = ('index' + locale.value) as keyof Collections
  const content = await queryCollection(collection).first() as IndexsqCollectionItem | IndexenCollectionItem | IndexitCollectionItem | null

  // Optional: fallback to default locale if content is missing
  if (!content && locale.value !== 'en') {
    return await queryCollection('indexsq').first()
  }

  return content
}, {
  watch: [locale] // Refetch when locale changes
})

// const { data: page } = await useAsyncData('index', () => {
//   return queryCollection('index').first()
// })
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png'
})
</script>

<template>
  <UPage v-if="page">
    <IndexCarousel :page="page" />
    <LandingHero
      :page="page"
    />
    <div class="overflow-x-hidden w-full">
      <UMarquee
        pause-on-hover
        class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
      >
        <Motion
          v-for="(img, index) in page.hero.images"
          :key="index"
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: index * 0.1
          }"
        >
          <NuxtImg
            width="234"
            height="234"
            class="rounded-lg aspect-square object-cover"
            :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
            v-bind="img"
          />
        </Motion>
      </UMarquee>
    </div>

    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-1 lg:gap-8'
      }"
    >
      <LandingAbout :page="page" />
      <LandingWorkExperience :page />
    </UPageSection>
    <IndexLandingProjekt />
    <!-- <LandingProjekt :page /> -->
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
