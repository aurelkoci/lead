<script setup>
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()
const routePath = computed(() => withoutTrailingSlash(route.path))
const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug)
const contentPath = computed(() => `/${locale.value}/projekte/${slug.value}`)

const { data: page } = await useAsyncData(routePath.value, () =>
  queryCollection('projekte' + locale.value).path(contentPath.value).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found dsds', fatal: true })
const { data: surround } = await useAsyncData(`${routePath.value}-surround`, () =>
  queryCollectionItemSurroundings('projekte' + locale.value, contentPath.value, {
    fields: ['description']
  })
)
const publicSurround = computed(() => surround.value?.map(item => item && {
  ...item,
  path: localePath({
    name: 'projekte-slug',
    params: { slug: item.path.split('/').at(-1) }
  })
}))

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

console.log('page', page.value)
console.log('surround', surround.value)

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

if (page.value.image) {
  useSeoMeta({ ogImage: page.value.image })
} else {
  defineOgImage('Portfolio', {
    title,
    description,
    headline: 'Projekte'
  })
}

const articleLink = computed(() => import.meta.client ? window.location.href : '')

// const formatDate = (dateString: string) => {
//   return new Date(dateString).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   })
// }
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer
      class="relative min-h-screen"
      src=""
    >
      <UPage v-if="page">
        <div class="flex flex-col gap-3 mt-8">
          <div class="flex text-xs text-muted items-center justify-center gap-2">
            <span v-if="page.date">
              {{ page.date }}
            </span>
            <span v-if="page.date && page.minRead">
              -
            </span>
            <span v-if="page.minRead">
              {{ page.minRead }} MIN READ
            </span>
          </div>

          <UPageHero
            v-if="page.image"
            :ui="{
              root: 'relative left-1/2 isolate min-h-[300px] w-screen -translate-x-1/2 overflow-hidden rounded-lg',
              container: 'relative z-10 min-h-[300px] w-full max-w-none flex items-center justify-center px-4 sm:px-6 lg:px-8',
              headline: 'absolute inset-0 z-0 m-0',
              title: 'relative z-10 text-3xl sm:text-5xl font-semibold text-white text-center drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]'
            }"
          >
            <template #headline>
              <NuxtImg
                :src="page.image"
                :alt="page.title"
                class="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-black/35" />
            </template>
            <template #title>
              {{ page.title }}
            </template>
          </UPageHero>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <UUser
              orientation="vertical"
              color="neutral"
              variant="outline"
              class="justify-center items-center text-center"
              v-bind="page.author"
            />
          </div>
        </div>
        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <div class="flex items-center justify-end gap-2 text-sm text-muted">
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="Copy link"
              @click="copyToClipboard(articleLink, 'Article link copied to clipboard')"
            />
          </div>
          <UContentSurround :surround="publicSurround" />
        </UPageBody>
      </UPage>
      <CarouselSwiper
        v-if="page.images && page.images.length"
        :images="page.images"
        :product-name="page.title"
      />
    </UContainer>
  </UMain>
</template>
