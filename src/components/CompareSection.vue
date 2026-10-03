<script setup>
import { comparison } from '../content.js'
</script>

<template>
  <section id="osszehasonlitas" class="py-14 sm:py-20 md:py-24">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full">
      <div class="grid gap-4 mb-7 md:mb-12">
        <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-ink">
          Üveghabkő és hagyományos XPS lapok
        </h2>
        <p class="text-ink-soft max-w-[68ch]">
          Sokan automatikusan az XPS (extrudált polisztirol) lapokhoz nyúlnak a lemezalapok alatt, bízva a papíron
          látható hőszigetelési értékekben. Nézzük meg a különbségeket.
        </p>
      </div>

      <div class="overflow-x-auto border border-line bg-white rounded-md shadow-xs" tabindex="0" role="region" aria-label="Összehasonlító táblázat">
        <table class="w-full min-w-[680px] border-collapse text-base">
          <thead>
            <tr>
              <th scope="col" class="font-head font-semibold text-base text-left p-4 md:p-5 border-b border-line bg-glass-100 text-ink">Tulajdonság</th>
              <th scope="col" class="font-head font-semibold text-base text-left p-4 md:p-5 border-b border-line bg-teal-dark text-white">Üveghabkő (tömörítve)</th>
              <th scope="col" class="font-head font-semibold text-base text-left p-4 md:p-5 border-b border-line bg-glass-100 text-ink">Hagyományos XPS lapok</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in comparison" :key="row.label" class="border-b border-line last:border-b-0">
              <th scope="row" class="font-semibold text-left p-4 md:p-5 w-[26%] text-ink">{{ row.label }}</th>
              <td class="text-left p-4 md:p-5 bg-[rgba(169,207,201,0.22)] font-medium text-ink">{{ row.glass }}</td>
              <td class="text-left p-4 md:p-5 text-ink-soft">{{ row.xps }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 sm:mt-12 grid gap-3 border-l-4 border-teal pl-5">
        <h3 class="font-head font-semibold text-xl text-ink leading-snug">
          <font-awesome-icon :icon="['fas', 'circle-info']" class="text-teal mr-1.5" />
          Mit jelentenek ezek a számok a gyakorlatban?
        </h3>
        <p class="text-ink-soft max-w-[68ch]">
          Bár az XPS λ-értéke önmagában alacsonyabb, az üveghabkőből a kedvező ára és a beépítési technológiája miatt
          akár 30–50 cm-es, megszakítás nélküli réteget is leterítünk a ház alá. A szerkezet teljes hőellenállása
          (R = d / λ) a vastagsággal egyenesen arányosan nő. Egy 40 cm vastag tömörített üveghabkő réteg olyan
          hőpajzsot képez a talaj felé, amit XPS lapokból szinte megfizethetetlen és technikailag rendkívül
          kockázatos lenne kirakni.
        </p>
      </div>
    </div>
  </section>
</template>

