<template>
  <div class="py-12 sm:py-24">
    <UContainer class="max-w-3xl">
      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-white/10 p-8 sm:p-12">
        <!-- Header i Faqes -->
        <div class="mb-10 border-b border-gray-200 dark:border-white/10 pb-8">
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Politika e Privatësisë
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Përditësuar së fundmi: {{ new Date().toLocaleDateString('sq-AL', { month: 'long', year: 'numeric' }) }}
          </p>
        </div>

        <!-- Përmbajtja e Politikës -->
        <div class="space-y-8 text-gray-600 dark:text-gray-300 text-base/7">
          <section>
            <p>
              Në <strong>LEAD Consulting</strong>, ne e marrim shumë seriozisht privatësinë tuaj dhe mbrojtjen e të dhënave personale.
              Kjo politikë shpjegon qartë dhe thjesht se çfarë të dhënash mbledhim, pse i mbledhim dhe si i mbrojmë ato kur ju vizitoni faqen tonë të internetit.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Të dhënat që ne mbledhim
            </h2>
            <p>
              Parimi ynë kryesor është minimizimi i të dhënave. Ne mbledhim informacione personale <strong>vetëm</strong> kur ju vendosni të na i dërgoni ato vullnetarisht përmes formularit tonë të kontaktit. Këto të dhëna përfshijnë:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
              <li>Emrin tuaj</li>
              <li>Adresën e postës elektronike (Email)</li>
              <li>Përmbajtjen e mesazhit ose kërkesës suaj</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Si i përdorim të dhënat tuaja
            </h2>
            <p>
              Të dhënat që na dërgoni përdoren ekskluzivisht për qëllimin e vetëm të shërbimit ndaj klientit. Specifikisht:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
              <li>Për t'ju kthyer përgjigje pyetjeve dhe kërkesave tuaja për konsulencë inxhinierike.</li>
              <li>Për të dërguar oferta ose materiale teknike të kërkuara nga ju.</li>
            </ul>
            <p class="mt-3 font-medium text-gray-900 dark:text-white">
              Ne nuk i shesim, nuk i japim me qira dhe nuk i ndajmë kurrë të dhënat tuaja me asnjë palë të tretë.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Mbrojtja nga Spam (Cloudflare Turnstile)
            </h2>
            <p>
              Për të mbrojtur formularin tonë të kontaktit nga mesazhet e padëshiruara (spam) dhe robotët, ne përdorim <strong>Cloudflare Turnstile</strong>.
              Ndryshe nga mjetet e tjera të ngjashme (si p.sh. reCAPTCHA), Turnstile verifikon nëse vizitori është një qenie njerëzore pa përdorur "cookies" ndjekëse dhe pa mbledhur të dhëna personale për të monitoruar sjelljen tuaj në internet.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Mungesa e Mjeteve Gjurmuese (No Tracking)
            </h2>
            <p>
              Faqja jonë e internetit është ndërtuar me respekt absolut për privatësinë e vizitorit. Për këtë arsye:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
              <li><strong>Nuk përdorim</strong> mjete analitike nga palë të treta (si Google Analytics).</li>
              <li><strong>Nuk përdorim</strong> mjete gjurmimi për marketing (si Facebook Pixel).</li>
              <li><strong>Nuk monitorojmë</strong> historikun tuaj të shfletimit.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Siguria e të Dhënave
            </h2>
            <p>
              Mesazhet që dërgoni përmes formularit tonë përpunohen në mënyrë të sigurt nga infrastruktura jonë e pavarur (API privat i mbyllur) dhe mbrohen nga teknologjitë e standardeve më të larta të enkriptimit. Të dhënat mbahen vetëm për aq kohë sa është e nevojshme për të përfunduar komunikimin tonë me ju.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Të Drejtat Tuaja
            </h2>
            <p>
              Ju keni të drejtë të kërkoni informacion rreth të dhënave që ne kemi ruajtur nga korrespondenca juaj, si dhe të kërkoni fshirjen ose modifikimin e tyre në çdo moment.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Kontakti
            </h2>
            <p>
              Nëse keni pyetje ose shqetësime në lidhje me këtë Politikë të Privatësisë, ju lutemi na kontaktoni në:
            </p>
            <div class="mt-4 flex items-center gap-x-2 text-[#187A43] font-medium">
              <UIcon
                name="i-lucide-mail"
                class="size-5"
              />
              <a
                href="mailto:info@lead.al"
                class="hover:underline"
              >info@lead.al</a>
            </div>
          </section>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Politika e Privatësisë | LEAD Consulting',
  description: 'Njihuni me politikën tonë të privatësisë. Në LEAD Consulting, ne nuk i gjurmojmë përdoruesit tanë dhe ruajmë privatësinë tuaj me standardet më të larta.',
  robots: 'noindex, follow' // Praktikë e mirë për të mos lejuar Google të rankojë lart faqet ligjore në vend të shërbimeve tuaja
})
</script>
