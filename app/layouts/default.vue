<script setup lang="ts">
const toast = useToast()
const showNotice = ref(false)
function showToast() {
  toast.add({
    title: 'Cookies',
    description: 'Kjo faqe përdor vetëm cookies teknike të domosdoshme për funksionimin e sigurisë (Cloudflare) dhe për zgjedhjen e themës. Ne nuk përdorim cookies për marketing ose ndjekje të vizitorëve. Duke vazhduar shfletimin, ju pranoni përdorimin e tyre.',
    icon: 'i-lucide-cookie',
    duration: 0,
    actions: [
      {
        icon: 'i-lucide-check',
        label: 'Accept',
        color: 'success',
        variant: 'outline',
        onClick: () => {
          accept()
          toast.remove()
        }
      },
      {
        icon: 'i-lucide-info',
        label: 'Politika e Privatësisë',
        color: 'info',
        variant: 'link',
        onClick: () => {
          window.location.href = '/politika-e-privatesis'
          toast.remove()
        }
      },
      {
        icon: 'i-lucide-info',
        label: 'Kushtet e Përdorimit',
        color: 'info',
        variant: 'link',
        onClick: () => {
          window.location.href = '/kushtet-e-perdorimit'
          toast.remove()
        }
      }
    ],
    close: {
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }
  })
}
onMounted(() => {
  if (!localStorage.getItem('cookies-accepted')) {
    showToast()
  }
})

const accept = () => {
  localStorage.setItem('cookies-accepted', 'true')
  showNotice.value = false
}
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <AppNavbarConctrained />
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>
