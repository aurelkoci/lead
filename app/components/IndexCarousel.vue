<script setup lang="ts">
const items = [
  '/foto/1.webp',
  '/foto/2.webp',
  '/foto/3.webp',
  '/foto/4.webp',
  '/foto/5.webp',
  '/foto/6.webp',
  '/foto/7.webp'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    :autoplay="{ delay: 3000 }"
    :items="items"
    class="absolute w-full mx-auto rounded-lg shadow-lg shadow-accented/10 "
  >
    <div class="relative w-full h-full">
      <img
        :src="item"
        width="640"
        height="640"
        class="rounded-lg w-full h-full object-cover"
        loading="lazy"
      ><div class="absolute inset-0 bg-black/40 rounded-lg" />
    </div>
  </UCarousel>
</template>
