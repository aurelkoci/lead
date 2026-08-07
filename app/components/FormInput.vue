<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])

const input = ref(null)

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus()
  }
})

defineExpose({ focus: () => input.value.focus() })
</script>

<template>
  <input
    ref="input"
    class="block w-full rounded-md border-0 bg-gray-100  dark:bg-white/5 px-3.5 py-2 text-blue-950 dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>
