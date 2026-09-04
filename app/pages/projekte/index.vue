<script setup lang="ts">
import type { Collections, PagesenCollectionItem, PagessqCollectionItem, PagesitCollectionItem } from '@nuxt/content'

const { locale } = useI18n()
const localePath = useLocalePath()

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
const { data: projekte } = await useAsyncData('projekte' + locale.value, () => {
  return queryCollection(('projekte' + locale.value) as keyof Collections).order('id', 'DESC').all()
})

console.log('locale.value is', 'projekte' + locale.value)
console.log('page', page.value)
console.log('projekte', projekte.value)
if (!projekte.value) {
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

const projectLink = (path: string) => {
  const slug = path.split('/').at(-1)
  return localePath({ name: 'projekte-slug', params: { slug } })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        root: 'relative left-1/2 w-screen -translate-x-1/2',
        container: 'w-full max-w-none px-4 sm:px-6 lg:px-8'
      }"
    />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <UBlogPosts orientation="vertical">
        <Motion
          v-for="(post, index) in projekte"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost
            variant="naked"
            orientation="horizontal"
            :to="projectLink(post.path)"
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
          />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
