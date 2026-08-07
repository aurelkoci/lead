<template>
  <div class="bg-white py-24 sm:py-32 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          Projektet e fundit
        </h2>
        <p class="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Projektet më të fundit nga kompania jonë.
        </p>
        <div class="mt-16 space-y-20 lg:mt-20">
          <article
            v-for="post in posts"
            :key="post.id"
            class="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div class="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
              <img
                :src="post.imageUrl"
                alt=""
                class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover dark:bg-gray-800"
              >
              <div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
            </div>
            <div>
              <div class="flex items-center gap-x-4 text-xs">
                <time
                  :datetime="post.datetime"
                  class="text-gray-500 dark:text-gray-400"
                >{{ post.date }}</time>
                <template
                  v-for="(category, index) in post.category"
                  :key="index"
                >
                  <span class="text-gray-500 dark:text-gray-400">·</span>
                  <a
                    :href="category.href"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                  >{{ category.title }}</a>
                </template>
              </div>
              <div class="group relative max-w-xl">
                <h3
                  cl
                  ass="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
                >
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 text-sm/6 text-gray-600 dark:text-gray-400">
                  {{ post.description }}
                </p>
              </div>
              <div class="mt-6 flex border-t border-gray-900/5 pt-6 dark:border-white/10">
                <div class="relative flex items-center gap-x-4">
                  <img
                    :src="post.author.imageUrl"
                    alt=""
                    class="size-10 rounded-full bg-gray-50 dark:bg-gray-800"
                  >
                  <div class="text-sm/6">
                    <p class="font-semibold text-gray-900 dark:text-white">
                      <a :href="post.author.href">
                        <span class="absolute inset-0" />
                        {{ post.author.name }}
                      </a>
                    </p>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ post.author.role }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: 'Plani i Mbrojtjes nga Zjarri: Impianti Fotovoltaik "HELIOS ENERGY" 2 MW',
    href: '/foto/1.webp',
    description: 'Projekt zbatimi që përcakton planin e evakuimit, rrugët e aksesit dhe masat e sigurisë për mbrojtjen nga zjarri të pajisjeve dhe kabinës së transformatorit në Darëzezë, Fier.',
    imageUrl: '/foto/1.webp',
    date: 'Korr 28, 2026',
    datetime: '2026-07-28',
    category: [
      { title: 'Projekt Zbatim', href: '/projekte/kategoria/projekt-zbatim' },
      { title: 'Mbrojtje nga Zjarri', href: '/projekte/kategoria/mbrojtje-zjarri' },
      { title: 'Efiçencë Energjetike', href: '/sherbime/eficence-energjetike' }
    ],
    author: {
      name: 'IDEAL Design & Services sh.p.k',
      role: 'Projektues',
      href: '#',
      imageUrl: '/logo/veko-logo-new.png'
    }
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.',
    imageUrl:
      '/foto/2.webp',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: [{ title: 'Sales', href: '/sales' }, { title: 'test', href: '/test' }, { title: 'Arkitektur', href: '/arkitektur' }],
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        '/logo/veko-logo-new.png'
    }
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Dolore commodo in nulla do nulla esse consectetur. Adipisicing voluptate velit sint adipisicing ex duis elit deserunt sint ipsum. Culpa in exercitation magna adipisicing id reprehenderit consectetur culpa eu cillum.',
    imageUrl:
      '/foto/3.webp',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: [{ title: 'Business', href: '/business' }, { title: 'Sales', href: '/sales' }],
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl:
        '/logo/veko-logo-new.png'
    }
  }
]
</script>
