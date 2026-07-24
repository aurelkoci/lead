<script setup lang="ts">
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
