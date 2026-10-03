<script setup>
import { consequences } from '../content.js'

const icons = ['money-bill-wave', 'temperature-arrow-down', 'hammer']
</script>

<template>
  <section class="py-14 sm:py-20 md:py-24">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 md:gap-12 lg:gap-18 items-start">
      <div class="grid gap-4 mb-4 lg:mb-0">
        <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl max-w-[24ch] leading-tight text-ink">
          A pótolhatatlan hiba: mi történik, ha kihagyja?
        </h2>
        <p class="text-ink-soft max-w-[68ch]">
          Ha az építkezés fázisában megspórolja a megfelelő alap alatti hőszigetelést, ezekkel a következményekkel
          kell számolnia.
        </p>
      </div>
      <ul class="list-none m-0 p-0 grid gap-7">
        <li v-for="(c, i) in consequences" :key="c.title" class="border-l-4 border-amber pl-5 grid gap-2">
          <h3 class="font-head font-semibold text-xl text-ink leading-snug">
            <font-awesome-icon :icon="['fas', icons[i] || 'triangle-exclamation']" class="text-amber mr-1.5 text-lg" />
            {{ c.title }}
          </h3>
          <p class="text-ink-soft">{{ c.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

