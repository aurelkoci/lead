<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
    <div
      class="absolute inset-x-0 -top-56 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1400/900] w-[95rem] max-w-none -translate-x-1/2 rotate-12 bg-linear-to-tr from-blue-400 via-blue-500 to-indigo-600 opacity-40 sm:left-[calc(50%-52rem)] sm:w-[140rem] dark:from-blue-500 dark:via-blue-600 dark:to-indigo-500 dark:opacity-25"
        style="clip-path: polygon(72% 38%, 100% 60%, 96% 24%, 84% 2%, 78% 5%, 70% 30%, 60% 56%, 50% 66%, 44% 56%, 42% 34%, 24% 74%, 0% 62%, 16% 100%, 30% 76%, 78% 98%, 72% 38%);"
      />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
        Kontaktoni direkt me ne.
      </h2>
      <p class="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
        Mund të na kontaktoni për çdo pyetje apo informacion. Ne do t'ju përgjigjemi sa më shpejt të jetë e mundur.
      </p>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
      @submit="onSubmit"
    >
      <UFormField
        label="Name"
        name="name"
        required
      >
        <UInput
          v-model="state.name"
          trailing-icon="i-lucide-user"
          placeholder="Enter your name"
          size="md"
          class="w-full"
          color="primary"
        />
      </UFormField>
      <UFormField
        label="Last Name"
        name="lastName"
        required
      >
        <UInput
          v-model="state.lastName"
          trailing-icon="i-lucide-user"
          placeholder="Enter your last name"
          size="md"
          class="w-full"
          color="primary"
        />
      </UFormField>
      <UFormField
        label="Email"
        name="email"
        required
      >
        <UInput
          v-model="state.email"
          trailing-icon="i-lucide-at-sign"
          placeholder="Enter your email"
          size="md"
          class="w-full"
          color="primary"
        />
      </UFormField>
      <UFormField
        label="Phone"
        name="telephone"
        required
      >
        <UFieldGroup class="w-full">
          <USelectMenu
            v-model="countryCode"
            :items="phoneCodes"
            value-key="code"
            :search-input="{
              placeholder: 'Search country...',
              icon: 'i-lucide-search',
              loading: status === 'pending'
            }"
            :filter-fields="['name', 'code', 'dialCode']"
            :content="{ align: 'start' }"
            :ui="{
              base: 'pe-8',
              content: 'w-48',
              placeholder: 'hidden',
              trailingIcon: 'size-4'
            }"
            trailing-icon="i-lucide-chevrons-up-down"
            @update:open="onOpen"
          >
            <span class="size-5 flex items-center text-lg">
              {{ country?.emoji || "🇦🇱" }}
            </span>

            <template #item-leading="{ item }">
              <span class="size-5 flex items-center text-lg">
                {{ item.emoji }}
              </span>
            </template>

            <template #item-label="{ item }">
              {{ item.name }} ({{ item.dialCode }})
            </template>
          </USelectMenu>

          <UInput
            v-model="phone"
            v-maska="mask"
            color="primary"
            class="w-full"
            :placeholder="mask.replaceAll('#', '_')"
            :style="{
              '--dial-code-length': `${dialCode.length + 1.5}ch`
            }"
            :ui="{
              base: 'ps-(--dial-code-length)',
              leading:
                'pointer-events-none text-base md:text-sm text-muted'
            }"
          >
            <template #leading>
              {{ dialCode }}
            </template>
          </UInput>
        </UFieldGroup>
      </UFormField>
      <UFormField
        label="Message"
        name="message"
        required
      >
        <UTextarea
          v-model="state.message"
          class="w-full"
          placeholder="Enter your message"
          size="md"
          color="primary"
          autoresize
        />
      </UFormField>
      <UFormField
        label="Turnstile"
        name="token"
        required
      >
        <NuxtTurnstile
          ref="turnstileRef"
          v-model="token"
        />
      </UFormField>

      <UFormField
        name="agreed"
        required
      >
        <div class="flex items-center space-x-2 mt-4">
          <UCheckbox
            v-model="state.agreed"
            required
            color="info"
          />
          <label
            class="text-sm cursor-pointer"
            @click="state.agreed = true"
          >
            Kam lexuar dhe pranoj
            <NuxtLink
              to="/politika-e-privatesis"
              class="text-blue-600 underline"
            >Politikën e Privatësisë</NuxtLink> dhe Kushtet e Përdorimit
            <NuxtLink
              to="/kushtet-e-perdorimit"
              class="text-blue-600 underline"
            >Kushtet e Përdorimit</NuxtLink>.
          </label>
        </div>
      </UFormField>

      <UButton
        color="primary"
        type="submit"
        class="dark:text-brand-50"
        :loading="isLoading"
      >
        Submit
      </UButton>
    </UForm>
    <div
      class="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2
          class="text-3xl font-bold tracking-tight text-blue-900 dark:text-white"
        >
          Komunikoni me ne
        </h2>
        <p
          class="mt-6 text-lg leading-8 text-blue-900 dark:text-gray-300"
        >
          Për çdo kërkesë apo informacion mund të na shkruani direkte ketu.
        </p>
        <dl
          class="mt-10 space-y-4 text-base leading-7 text-blue-900 dark:text-gray-300"
        >
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Address</span>
              <BuildingOffice2Icon
                class="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <p>Tirane</p>
              <p>IRANË Rruga "Liman Kaba"</p>
              <p>
                Rezidenca Olimpik, Hyrja 1, Ap 25 1019
              </p>
            </dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telephone</span>
              <PhoneIcon
                class="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a
                class="dark:hover:text-white hover:text-blue-500 text-blue-900 dark:text-gray-300"
                href="tel:+355693224922"
              >+355 693224922</a>
            </dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telephone</span>
              <PhoneIcon
                class="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Email</span>
              <EnvelopeIcon
                class="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a
                class="dark:hover:text-white hover:text-blue-500 text-blue-900 dark:text-gray-300"
                href="mailto:info@lead.al"
              >info@lead.al</a>
            </dd>
          </div>
        </dl>
        <div class="pt-10 lg:flex w-full">
          <a
            href="https://goo.gl/maps/Dm1Z8ZSb8raEzPLGA"
            target="_blank"
          ><NuxtImg
            class="rounded-xl w-full hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105"
            src="maps.png"
            alt="KKG Map"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'
import { vMaska } from 'maska/vue'
import { z } from 'zod'

type PhoneCode = {
  name: string
  code: string
  emoji: string
  dialCode: string
  mask: string
}
const toast = useToast()

const token = ref('')
const phone = ref('')
const countryCode = ref('SQ')
const turnstileRef = ref()
const stateAgreed = ref(false)
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  telephone: z.string().min(5).max(20),
  message: z.string().min(1, 'Message is required'),
  agreed: z.literal(true, {
    message: 'Duhet të pranoni politikën e privatësisë për të dërguar mesazhin'
  })
})
const isLoading = ref(false)

type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({
  name: undefined,
  lastName: undefined,
  email: undefined,
  telephone: undefined,
  message: undefined,
  agreed: undefined
})

const {
  data: phoneCodes,
  status,
  execute
} = await useLazyFetch<PhoneCode[]>('/data/CountryCodes.json', {
  key: 'api-phone-codes',
  immediate: false
})

const country = computed(() =>
  phoneCodes.value?.find(c => c.code === countryCode.value)
)
const dialCode = computed(() => country.value?.dialCode || '+355')
const mask = computed(() => country.value?.mask || '(###) ###-####')

function onOpen() {
  if (!phoneCodes.value?.length) {
    execute()
  }
}

watch(countryCode, () => {
  phone.value = ''
})

watch(phone, (newVal) => {
  const cleanNumber = newVal.replace(/\D/g, '').replace(/^0+/, '')

  state.telephone = dialCode.value + cleanNumber
}, { flush: 'post' })
async function onSubmit() {
  isLoading.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        emeri_dhe_mbiemeri: state.name + ' ' + state.lastName,
        email: state.email,
        telefon: state.telephone,
        mesazh: state.message,
        token: token.value
      }
    })

    if (response.success) {
      state.name = ''
      state.lastName = ''
      state.email = ''
      state.telephone = ''
      state.message = ''
      phone.value = ''
      token.value = ''
      stateAgreed.value = false
      if ('mailStatus' in response && response.mailStatus === 201) {
        toast.add({
          title: 'Mesazhi u dergua me sukses!',
          description: `Ne do t'ju kontaktojmë sa më shpejt të jetë e mundur`,
          icon: 'i-lucide-check-circle'
        })
      } else {
        toast.add({
          title: 'Mesazhi nuk u dergua!',
          description: `Ju lutemi provoni përsëri më vonë.`,
          icon: 'i-lucide-x-circle'
        })
      }
      isLoading.value = false
    } else {
      if (turnstileRef.value) {
        turnstileRef.value.reset()
      }
      isLoading.value = false
    }
  } catch (err) {
    if (turnstileRef.value) {
      turnstileRef.value.reset()
    }
    handleBackendErrors(err)
    isLoading.value = false
  }
}

function handleBackendErrors(err: unknown) {
  if (err instanceof Error) {
    toast.add({
      title: err.message || 'Mesazhi nuk u dergua!',
      description: `Ju lutemi provoni përsëri më vonë. Ose kontaktoni me ne direkt në info@lead.al`,
      icon: 'i-lucide-x-circle'
    })
  } else {
    toast.add({
      title: 'Mesazhi nuk u dergua! Ka ndodhur një gabim i panjohur.',
      description: `Ju lutemi provoni përsëri më vonë. Ose kontaktoni me ne direkt në info@lead.al`,
      icon: 'i-lucide-x-circle'
    })
  }
}

defineProps({
  errors: Object,
  success: String
})
</script>
