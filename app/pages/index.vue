<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
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

console.log('page', page.value)
</script>

<template>
  <UPage v-if="page">
    <IndexCarousel :page="page" />
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-1 lg:gap-8'
      }"
    >
      <LandingAbout :page="page" />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingProjekt :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
