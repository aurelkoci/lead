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
                class="text-sm/6 font-semibold text-gray-900 transition-colors hover:text-[#187A43] dark:text-white dark:hover:text-[#187A43]"
              >{{ item.name }}</a>
              <AppNavbarPopover
                v-else
                :item="item"
              />
            </li>
          </template>
        </ul>
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
          <NuxtLink
            to="/"
            class="-m-1.5 p-1.5"
            @click="mobileMenuOpen = false"
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

          <div class="flex items-center gap-1">
            <ColorModeButton />
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
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
            <div class="space-y-2 py-6">
              <template
                v-for="item in navLinks[0]"
                :key="item.name"
              >
                <NuxtLink
                  v-if="!item.children"
                  :to="item.to"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 transition-colors hover:bg-[#187A43]/10 hover:text-[#187A43] dark:text-white dark:hover:bg-[#187A43]/20 dark:hover:text-[#187A43]"
                  @click="mobileMenuOpen = false"
                >
                  {{ item.name }}
                </NuxtLink>

                <Disclosure
                  v-else
                  v-slot="{ open }"
                  as="div"
                  class="-mx-3"
                >
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base/7 font-semibold text-gray-900 transition-colors hover:bg-[#187A43]/10 hover:text-[#187A43] dark:text-white dark:hover:bg-[#187A43]/20 dark:hover:text-[#187A43]">
                    <span>{{ item.name }}</span>
                    <UIcon
                      name="i-lucide-chevron-down"
                      class="size-4 transition-transform"
                      :class="open ? 'rotate-180 text-[#187A43]' : ''"
                    />
                  </DisclosureButton>

                  <DisclosurePanel class="mt-1 space-y-1 pl-3">
                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.name"
                      :to="child.to"
                      class="flex gap-x-3 rounded-lg px-3 py-2 transition-colors hover:bg-[#187A43]/10 dark:hover:bg-[#187A43]/20"
                      @click="mobileMenuOpen = false"
                    >
                      <UIcon
                        v-if="child.icon"
                        :name="child.icon"
                        class="mt-0.5 size-4 text-[#187A43]"
                      />
                      <div>
                        <p class="text-sm font-semibold text-gray-900 dark:text-white">
                          {{ child.name }}
                        </p>
                      </div>
                    </NuxtLink>
                  </DisclosurePanel>
                </Disclosure>
              </template>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <UBreadcrumb
    color="secondary"
    :items="navLinks"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { navLinks as sourceNavLinks } from '~/utils/links'

const mobileMenuOpen = ref(false)

// Keep desktop code unchanged by exposing href from to
const navLinks = sourceNavLinks.map(group =>
  group.map(item => ({
    ...item,
    href: item.to,
    children: item.children?.map(child => ({
      ...child,
      href: child.to
    }))
  }))
)
</script>
