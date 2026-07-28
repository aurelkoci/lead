<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'

const posts = ref<BlogPostProps[]>([
  {
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: '/foto/1.webp',
    date: '2024-11-25',
    authors: [
      {
        name: 'Veko',
        avatar: {
          src: '/logo/veko-logo-new.png',
          srcset: '/logo/veko-logo-new.png 2x',
          alt: 'Veko Logo'
        }
      }
    ]
  },
  {
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    authors: [
      {
        name: 'Veko',
        avatar: {
          src: '/logo/veko-logo-new.png',
          srcset: '/logo/veko-logo-new.png 2x',
          alt: 'Veko Logo'
        }
      }
    ]
  },
  {
    title: 'Nuxt 3.13',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    authors: [
      {
        name: 'Veko',
        avatar: {
          src: '/logo/veko-logo-new.png',
          srcset: '/logo/veko-logo-new.png 2x',
          alt: 'Veko Logo'
        }
      }
    ]
  }
])
</script>

<template>
  <UBlogPosts
    orientation="vertical"
    :posts="posts"
  />
</template>
