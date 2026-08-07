<script setup lang="ts">
import { en, sq, it } from '@nuxt/ui/locale'

const locales = { en, sq, it }

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    class="
    w-48"
    @update:model-value="setLocale($event as 'en' | 'sq' | 'it')"
  />
</template>
