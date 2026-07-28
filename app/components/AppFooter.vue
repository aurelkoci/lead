<template>
  <footer class="bg-gray-50 border-t border-gray-200 dark:bg-gray-950 dark:border-white/10 mt-16">
    <UContainer class="py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Kolona 1: Brandi dhe Përshkrimi -->
        <div class="space-y-4">
          <NuxtLink
            to="/"
            class="block"
          >
            <span class="sr-only">LEAD Consulting</span>
            <img
              class="h-8 w-auto dark:hidden"
              src="/img/Logo_lead_l.svg"
              alt="LEAD Consulting Logo"
            >
            <img
              class="h-8 w-auto hidden dark:block"
              src="/img/Logo_lead_D.svg"
              alt="LEAD Consulting Logo"
            >
          </NuxtLink>
          <p class="text-sm/6 text-gray-600 dark:text-gray-400">
            Zgjidhje të plota inxhinierike, mbikëqyrje rigoroze dhe kolaudim i veprave publike e private, duke udhëhequr zhvillimin e qëndrueshëm sipas standardeve më të larta.
          </p>
          <div class="flex gap-x-4 pt-2">
            <!-- Ikonat Sociale -->
            <UButton
              icon="i-simple-icons-linkedin"
              color="neutral"
              variant="ghost"
              to="#"
              target="_blank"
              aria-label="LinkedIn"
              class="hover:text-[#187A43] dark:hover:text-[#187A43]"
            />
            <UButton
              icon="i-simple-icons-facebook"
              color="neutral"
              variant="ghost"
              to="#"
              target="_blank"
              aria-label="Facebook"
              class="hover:text-[#187A43] dark:hover:text-[#187A43]"
            />
            <UButton
              icon="i-simple-icons-instagram"
              color="neutral"
              variant="ghost"
              to="#"
              target="_blank"
              aria-label="Instagram"
              class="hover:text-[#187A43] dark:hover:text-[#187A43]"
            />
          </div>
        </div>

        <!-- Kolona 2: Kompania -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Kompania
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/kompania/rreth-nesh"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Rreth nesh
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kompania/ekipi"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Ekipet
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kompania/misioni"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Misioni & Vlerat
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projekte"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Portofoli i Projekteve
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kolona 3: Shërbimet -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Ekspertiza Inxhinierike
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/sherbime/arkitekture"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Projektim Arkitektonik
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/sherbime/inxhinieri"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Projektim Inxhinierik
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/sherbime/mbikeqyrje"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Mbikëqyrje Punimesh
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/sherbime/kolaudim"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Kolaudim Veprash
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/sherbime/eficence-energjetike"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                Efiçencë Energjetike
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kolona 4: Kontakt -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Na Kontaktoni
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-x-3">
              <UIcon
                name="i-lucide-map-pin"
                class="size-5 text-[#187A43] shrink-0 mt-0.5"
              />
              <span class="text-sm/6 text-gray-600 dark:text-gray-400">
                Tiranë, Shqipëri
              </span>
            </li>
            <li class="flex items-center gap-x-3">
              <UIcon
                name="i-lucide-phone"
                class="size-5 text-[#187A43] shrink-0"
              />
              <a
                href="tel:+355000000000"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                +355 6x xx xx xxx
              </a>
            </li>
            <li class="flex items-center gap-x-3">
              <UIcon
                name="i-lucide-mail"
                class="size-5 text-[#187A43] shrink-0"
              />
              <a
                href="mailto:info@lead.al"
                class="text-sm/6 text-gray-600 hover:text-[#187A43] dark:text-gray-400 dark:hover:text-[#187A43] transition-colors"
              >
                info@lead.al
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Pjesa e Poshtme: Copyright -->
      <div class="mt-12 border-t border-gray-900/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs/5 text-gray-500 dark:text-gray-400 text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} LEAD Consulting. Të gjitha të drejtat të rezervuara.
        </p>
        <div class="flex gap-x-6 text-xs/5 text-gray-500 dark:text-gray-400">
          <NuxtLink
            to="/politika-e-privatesis"
            class="hover:text-[#187A43] transition-colors"
          >Politika e Privatësisë</NuxtLink>
          <NuxtLink
            to="/kushtet-e-perdorimit"
            class="hover:text-[#187A43] transition-colors"
          >Kushtet e Përdorimit</NuxtLink>
        </div>
      </div>
      <div class="relative flex items-center justify-center py-8">
        <a
          href="https://avia.al"
          class="group flex text-gray-700 dark:text-white"
          @mouseover="show = !show"
        >
          <div>
            <p class="block text-center mt-2 text-xs group-hover:text-green-700">
              Designed & Development with
            </p>
          </div>
          <div class="relative">
            <span class="text-xs">❤️</span>
            <Transition>
              <span
                v-if="show"
                class="absolute text-xs inset-0 blur-sm animate-ping overflow-hidden"
              >❤️</span>
            </Transition>
          </div>
          <div>
            <p class="block text-center mt-2 text-xs group-hover:text-green-700">
              by avia.al
            </p>
          </div>
        </a>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
