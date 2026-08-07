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
    :ui="{ container: 'h-screen' }"
    class="absolute w-full h-10/12 mx-auto rounded-lg shadow-lg shadow-accented/10 overflow-hidden"
  >
    <div class=" w-full h-full relative rounded-lg overflow-hidden">
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
