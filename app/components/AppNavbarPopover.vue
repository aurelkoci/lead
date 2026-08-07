<template>
  <div
    class="relative"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @click="open = !open"
  >
    <NuxtLinkLocale
      :to="item.to"
      :class="[
        open
          ? 'inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white'
          : 'group inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white'
      ]"
    >
      <span>{{ t(item.label) }}</span>
      <UIcon
        name="i-lucide-chevron-down"
        :class="[
          open
            ? ' text-gray-900 dark:text-white transition-transform duration-400 rotate-180'
            : ' text-gray-700 dark:text-white/20',
          'size-5 text-sm/6 font-semibold'
        ]"
        aria-hidden="true"
      />
    </NuxtLinkLocale>
    <div class="w-20 h-4 absolute" />
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div v-if="open">
        <div
          class="bg-transparent absolute left-1/2 z-10 mt-3 w-screen max-w-md bg -translate-x-1/2 transform px-2 sm:px-0 rounded-3xl shadow-lg ring-1 ring-gray-900/5"
          static
        >
          <div
            class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
          >
            <div class="p-4">
              <div
                v-for="items in item.children"
                :key="items.label"
                class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <div
                  class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700"
                >
                  <UIcon
                    :name="items.icon"
                    class="size-5"
                  />
                </div>
                <div>
                  <NuxtLinkLocale
                    :to="items.to"
                    class="font-semibold text-gray-900 dark:text-white"
                  >
                    {{ t(items.label) }}
                    <span class="absolute inset-0" />
                  </NuxtLinkLocale>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    {{ t(items.description) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const { t } = useI18n()
const open = ref(false)
</script>
