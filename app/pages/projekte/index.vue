<script setup lang="ts">
import type { Collections, PagesenCollectionItem, PagessqCollectionItem, PagesitCollectionItem } from '@nuxt/content'

const { locale } = useI18n()

const { data: page } = await useAsyncData('projekte-page' + locale.value, async () => {
  const collection = ('pages' + locale.value) as keyof Collections
  const content = await queryCollection(collection).first() as PagesenCollectionItem | PagessqCollectionItem | PagesitCollectionItem | null
  if (!content && locale.value !== 'en') {
    return await queryCollection('pagessq').first()
  }
  return content
})
if (!page.value) {
  throw createError({
    statusCode: 405,
    statusMessage: 'Page not found',
    fatal: true
  })
}
const { data: data } = await useAsyncData('projekte', async () => {
  const projekte = await queryCollection('projekte').path('en/projekte/*.yml').order('id', 'DESC').all()
  return projekte
})

console.log('locale.value is', locale.value)
console.log('projekte', data.value)
if (!data.value) {
  throw createError({
    statusCode: 406,
    statusMessage: 'projekti nuk u gjet',
    fatal: true
  })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Portfolio', { title, description })
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <UBlogPosts orientation="vertical">
        <Motion
          v-for="(post, index) in data"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <!-- <UBlogPost
            variant="naked"
            orientation="horizontal"
            :to="post.path"
            v-bind="post"
            :ui="{
              root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
              image:
                'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
              header:
                index % 2 === 0
                  ? 'sm:-rotate-1 overflow-visible'
                  : 'sm:rotate-1 overflow-visible'
            }"
          /> -->
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
