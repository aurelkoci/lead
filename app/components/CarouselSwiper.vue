<template>
  <!-- Id 'product-gallery' është shumë e rëndësishme për PhotoSwipe -->
  <div
    id="product-gallery"
    class="w-full relative group"
  >
    <!-- Swiper Carousel -->
    <Swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :navigation="true"
      :pagination="{ clickable: true }"
      :loop="false"
      :grab-cursor="true"
      class="rounded-lg bg-gray-100 shadow-sm"
    >
      <SwiperSlide
        v-for="(img, index) in images"
        :key="index"
      >
        <!-- Tag-u 'a' ushqen PhotoSwipe.
                     Shënim: PhotoSwipe kërkon dimensione. Këtu po supozojmë një standard 1200x1200px. -->
        <a
          :href="img.src"
          :data-pswp-width="img.width"
          :data-pswp-height="img.height"
          target="_blank"
          class="block aspect-h-1 aspect-w-1 w-full overflow-hidden"
        >
          <img
            :src="img.src"
            :srcset="`${img.srcset}, ${img.placeholder}`"
            :alt="`${productName} - Foto ${index + 1}`"
            :placeholder="img.placeholder"
            class="h-full w-full object-contain object-center cursor-zoom-in transition-transform duration-500 hover:scale-105"
          >
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// 1. Importet e Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 2. Importet e PhotoSwipe
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const props = defineProps({
  images: Array,
  productName: String

})

console.log(props.images)
console.log(props.productName)

let lightbox = null

onMounted(() => {
  // Inicializimi i PhotoSwipe duke i thënë të dëgjojë për klikime te tag-u 'a' brenda '#product-gallery'
  lightbox = new PhotoSwipeLightbox({
    gallery: '#product-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
    // Këto opsione e bëjnë eksperiencën shumë të butë në mobile
    bgOpacity: 0.9,
    wheelToZoom: true,
    padding: { top: 20, bottom: 20, left: 20, right: 20 }
  })

  lightbox.init()
})

// Pastrimi i memorjes kur ndërrojmë faqe për të shmangur Memory Leaks
onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy()
    lightbox = null
  }
})
</script>

<style>
/* Modifikim i vogël për ngjyrat e shigjetave të Swiper që t'i përshtatet markës tënde (SDA) */
.swiper-button-next,
.swiper-button-prev {
    color: #0273B3 !important;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 24px;
    border-radius: 50%;
    transform: scale(0.6);
}

.swiper-pagination-bullet-active {
    background-color: #0273B3 !important;
}
</style>
