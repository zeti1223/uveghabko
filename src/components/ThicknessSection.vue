<script setup>
import LayerDiagram from './LayerDiagram.vue'
import { thicknessOptions, useThicknessCalc } from '../composables/useThicknessCalc.js'

const { d, displayR, displayXps, isChanging, fmt } = useThicknessCalc()
</script>

<template>
  <section id="vastagsag" class="py-14 sm:py-20 md:py-24 bg-white border-y border-line">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 md:gap-12 lg:gap-18 items-center">
      <div class="w-full max-w-[480px]">
        <LayerDiagram :thickness="d" :legend="false" />
      </div>
      <div class="flex flex-col">
        <div class="grid gap-4 mb-7">
          <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl max-w-[24ch] leading-tight text-ink">
            Válassza ki a rétegvastagságot
          </h2>
          <p class="text-ink-soft max-w-[68ch]">
            A hőellenállás a vastagsággal arányosan nő, minél vastagabb az üveghabkő réteg, annál kisebb a hőveszteség
            a talaj felé.
          </p>
        </div>

        <fieldset class="border-0 p-0 m-0 mb-7">
          <legend class="font-semibold mb-2.5 p-0 text-ink block">Üveghabkő rétegvastagság</legend>
          <div class="inline-flex border-2 border-teal-dark rounded-md overflow-hidden">
            <label v-for="(o, idx) in thicknessOptions" :key="o" class="cursor-pointer">
              <input type="radio" name="vastagsag" :value="o" v-model="d" class="peer sr-only" />
              <span
                class="block py-3 px-6 font-semibold text-teal-dark min-w-[5.5rem] text-center transition-colors peer-checked:bg-teal-dark peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-amber peer-focus-visible:-outline-offset-3 select-none"
                :class="{ 'border-r-2 border-teal-dark': idx < thicknessOptions.length - 1 }"
              >
                {{ o }} cm
              </span>
            </label>
          </div>
        </fieldset>

        <dl class="mb-4 grid gap-4" aria-live="polite">
          <div
            class="border-t pt-3 transition-colors"
            :class="isChanging ? 'border-teal' : 'border-line'"
          >
            <dt class="text-ink-soft text-sm">Hőellenállás (R = d / λ)</dt>
            <dd class="mt-1 flex items-baseline gap-1.5">
              <span
                class="font-head font-bold text-2xl sm:text-3xl md:text-4xl tabular-nums tracking-tight transition-colors"
                :class="isChanging ? 'text-teal' : 'text-teal-dark'"
              >
                {{ fmt(displayR) }}
              </span>
              <span class="font-head font-medium text-base sm:text-lg text-ink-soft">m²K/W</span>
            </dd>
          </div>
          <div
            class="border-t pt-3 transition-colors"
            :class="isChanging ? 'border-teal' : 'border-line'"
          >
            <dt class="text-ink-soft text-sm">Ekkora hőellenálláshoz XPS-ből kb.</dt>
            <dd class="mt-1 flex items-baseline gap-1.5">
              <span
                class="font-head font-bold text-2xl sm:text-3xl md:text-4xl tabular-nums tracking-tight transition-colors"
                :class="isChanging ? 'text-teal' : 'text-teal-dark'"
              >
                {{ fmt(displayXps, 0) }}
              </span>
              <span class="font-head font-medium text-base sm:text-lg text-ink-soft">cm kellene</span>
            </dd>
          </div>
        </dl>
        <p class="text-sm text-ink-soft">
          Egyszerű számítás a táblázat λ-értékeivel (üveghabkő 0,086 W/mK, XPS 0,034 W/mK). A szerkezet tényleges
          U-értékét az energetikai számítás adja meg.
        </p>
      </div>
    </div>
  </section>
</template>

