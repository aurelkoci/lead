<template>
  <header class="w-full max-w-(--ui-container) fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10 bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5">
    <nav
      class="mx-auto flex items-center justify-between p-2 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink
          href="/"
          class="-m-1.5 p-1.5"
        >
          <span class="sr-only">Lead</span>
          <img
            class="h-8 w-auto dark:hidden"
            src="/img/Logo_lead_l.svg"
            alt=""
          >
          <img
            class="h-8 w-auto not-dark:hidden"
            src="/img/Logo_lead_D.svg"
            alt=""
          >
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
            class="size-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <ul class="flex gap-x-6 text-sm/6 font-semibold leading-6 text-gray-900 dark:text-white">
          <template
            v-for="item in navLinks[0]"
            :key="item.name"
          >
            <li>
              <a
                v-if="!item.children"
                :href="item.href"
                class="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >{{ item.name }}</a>
              <AppNavbarPopover
                v-else
                :item="item"
              />
            </li>
          </template>
        </ul>
        <!-- <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm/6 font-semibold text-gray-900 dark:text-white"
        >{{ item.name }}</a>

        <AppNavbarPopover /> -->
        <!-- <Popover
          class="relative"
          @mouseenter="open = true"
          @mouseleave="open = false"
          @click="open = !open"
        >
          <PopoverButton
            class="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white"
            @click="open = !open"
          >
            <span>Kompania</span>
            <ChevronDownIcon
              class="size-5"
              aria-hidden="true"
            />
          </PopoverButton>
          <div class="w-20 h-4 absolute" />
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <template v-if="open">
              <PopoverPanel
                class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4"
              >
                <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <div class="p-4">
                    <div
                      v-for="item in solutions"
                      :key="item.name"
                      class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                      <div class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                        <component
                          :is="item.icon"
                          class="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <a
                          :href="item.href"
                          class="font-semibold text-gray-900 dark:text-white"
                        >
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
                    <a
                      v-for="item in callsToAction"
                      :key="item.name"
                      :href="item.href"
                      class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
                    >
                      <component
                        :is="item.icon"
                        class="size-5 flex-none text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </template>
          </transition>
        </Popover> -->
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ColorModeButton class="justify-self-end" />
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="-m-1.5 p-1.5"
          >
            <span class="sr-only">Lead</span>
            <img
              class="h-8 w-auto dark:hidden"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            >
            <img
              class="h-8 w-auto not-dark:hidden"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            >
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="size-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navLinks"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <UBreadcrumb color="secondary" :items="navLinks" />
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>
