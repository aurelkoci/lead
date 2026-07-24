<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed w-7xl top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <!-- <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      content-orientation="vertical"
      class="grid grid-cols-3 items-center w-full bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5 [&>div]:min-w-0 [&>div]:col-span-1 [&>ul]:grid [&>ul]:grid-cols-1 [&>ul]:w-full *:[&>ul]:justify-center [&>ul]:gap-2"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton class="justify-self-end" />
      </template>
    </UNavigationMenu> -->
    <AppNavbarConctrained />
  </div>
</template>
