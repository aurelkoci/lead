<template>
  <div class="py-12 sm:py-24">
    <UContainer class="max-w-3xl">
      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-white/10 p-8 sm:p-12">
        <!-- Header i Faqes -->
        <div class="mb-10 border-b border-gray-200 dark:border-white/10 pb-8">
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Kushtet e Përdorimit
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Përditësuar së fundmi: {{ new Date().toLocaleDateString('sq-AL', { month: 'long', year: 'numeric' }) }}
          </p>
        </div>

        <!-- Përmbajtja e Kushteve -->
        <div class="space-y-8 text-gray-600 dark:text-gray-300 text-base/7">
          <section>
            <p>
              Mirë se vini në faqen zyrtare të <strong>LEAD Consulting</strong>. Duke aksesuar dhe përdorur këtë faqe interneti, ju pranoni të jeni të detyruar nga këto Kushte Përdorimi. Nëse nuk jeni dakord me ndonjë pjesë të këtyre kushteve, ju lutemi të mos e përdorni faqen tonë.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Qëllimi i Faqes dhe Shërbimet
            </h2>
            <p>
              Kjo faqe interneti ka karakter informativ dhe shërben për të prezantuar portofolin e projekteve dhe ekspertizën inxhinierike të LEAD Consulting (Projektim, Mbikëqyrje, Kolaudim, Efiçencë Energjetike).
              Informacioni i paraqitur këtu nuk përbën një kontratë zyrtare shërbimi apo këshillë teknike përfundimtare. Marrëdhëniet profesionale dhe shërbimet inxhinierike ofrohen vetëm pas nënshkrimit të kontratave përkatëse sipas ligjeve në fuqi (KTP/KTZ).
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Pronësia Intelektuale
            </h2>
            <p>
              I gjithë përmbajtja vizuale dhe tekstuale në këtë faqe është pronë ekskluzive e LEAD Consulting ose e licencuesve të saj. Kjo përfshin, por nuk kufizohet në:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
              <li>Logon dhe elementet e identitetit të brandit.</li>
              <li>Fotografitë e kantiereve, projekteve arkitektonike dhe inxhinierike.</li>
              <li>Tekstet, përshkrimet dhe grafikat e përdorura.</li>
            </ul>
            <p class="mt-3">
              Ndalohet rreptësisht riprodhimi, shpërndarja ose përdorimi i këtij materiali për qëllime tregtare pa lejen tonë paraprake me shkrim.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Përdorimi i Lejuar
            </h2>
            <p>
              Ju pajtoheni ta përdorni këtë faqe vetëm për qëllime të ligjshme. Ndalohet çdo veprim që:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
              <li>Cënon sigurinë e faqes ose të infrastrukturës sonë të serverave.</li>
              <li>Tentimi i dërgimit të mesazheve spam ose kodeve malinje përmes formularit tonë të kontaktit.</li>
              <li>Mbledhja e automatizuar e të dhënave (web scraping) nga portofoli ynë i projekteve.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Kufizimi i Përgjegjësisë
            </h2>
            <p>
              Pavarësisht se ne bëjmë çdo përpjekje për të mbajtur informacionin në faqe të saktë dhe të përditësuar, LEAD Consulting nuk mban përgjegjësi për:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
              <li>Saktësinë absolute ose vlefshmërinë e menjëhershme të çdo të dhëne të publikuar.</li>
              <li>Dëmet e drejtpërdrejta ose të tërthorta që mund të vijnë nga përdorimi i kësaj faqeje.</li>
              <li>Ndërprerjet e përkohshme të faqes për arsye mirëmbajtjeje teknike apo përditësimi (përfshirë shërbimet tona të API-t të kontaktit).</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Lidhjet (Links) me Palë të Treta
            </h2>
            <p>
              Kjo faqe mund të përmbajë lidhje drejt faqeve të tjera (p.sh. profilet tona sociale apo partnerë). Ne nuk kontrollojmë dhe nuk mbajmë përgjegjësi për përmbajtjen apo politikat e privatësisë së atyre faqeve.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Ndryshimet në Kushtet e Përdorimit
            </h2>
            <p>
              LEAD Consulting rezervon të drejtën të përditësojë ose të ndryshojë këto Kushte Përdorimi në çdo kohë, pa njoftim paraprak. Ndryshimet do të hyjnë në fuqi menjëherë pas publikimit të tyre në këtë faqe.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Kontakti ligjor
            </h2>
            <p>
              Për çdo pyetje apo sqarim në lidhje me këto Kushte Përdorimi, mund të na kontaktoni drejtpërdrejt:
            </p>
            <div class="mt-4 flex flex-col sm:flex-row gap-4">
              <div class="flex items-center gap-x-2 text-[#187A43] font-medium">
                <UIcon
                  name="i-lucide-mail"
                  class="size-5"
                />
                <a
                  href="mailto:info@lead.al"
                  class="hover:underline"
                >info@lead.al</a>
              </div>
              <div class="flex items-center gap-x-2 text-[#187A43] font-medium">
                <UIcon
                  name="i-lucide-phone"
                  class="size-5"
                />
                <a
                  href="tel:+355000000000"
                  class="hover:underline"
                >+355 6x xx xx xxx</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Kushtet e Përdorimit | LEAD Consulting',
  description: 'Kushtet e përdorimit dhe rregullat ligjore për aksesimin dhe përdorimin e faqes zyrtare të LEAD Consulting.',
  robots: 'noindex, follow' // Siguron që Google e skanon faqen por nuk e nxjerr atë si prioritet në rezultatet e kërkimit për shërbimet
})
</script>
