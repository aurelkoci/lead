<template>
  <div
    v-if="showNotice"
    class="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center"
  >
    <p class="text-sm">
      Përdorim vetëm cookies teknike për sigurinë e faqes.
      Lexo më shumë te <NuxtLink
        to="/politika-e-privatesis"
        class="underline"
      >Politika e Privatësisë</NuxtLink> dhe <NuxtLink
        to="/kushtet-e-perdorimit"
        class="underline"
      >Kushtet e Përdorimit</NuxtLink>.
    </p>
    <button
      class="bg-blue-600 px-4 py-2 rounded text-sm"
      @click="accept"
    >
      Në rregull
    </button>
  </div>
</template>

<script setup>
const showNotice = ref(false)

onMounted(() => {
  // Shfaqet vetëm nëse nuk është pranuar më parë
  if (!localStorage.getItem('cookies-accepted')) {
    showNotice.value = true
  }
})

const accept = () => {
  localStorage.setItem('cookies-accepted', 'true')
  showNotice.value = false
}
</script>
