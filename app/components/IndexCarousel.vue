<script setup lang="ts">
const { carousel } = useAppConfig()
const items = carousel.items
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
