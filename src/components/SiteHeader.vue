<script setup>
import { site } from '../content.js'
</script>

<template>
  <header class="sticky top-0 z-20 bg-[rgba(243,248,247,0.92)] backdrop-blur-md border-b border-line">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full flex items-center gap-6 min-h-16">
      <a class="inline-flex items-center gap-2.5 font-head font-bold text-xl text-ink no-underline mr-auto" href="#top" aria-label="uveghabko.hu – kezdőlap">
        <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="6" fill="#124a50" />
          <rect x="5" y="8" width="22" height="5" fill="#b4b5b0" />
          <rect x="5" y="13" width="22" height="12" fill="#a9cfc9" />
        </svg>
        {{ site.name }}
      </a>
      <nav class="hidden md:flex items-center gap-6.5" aria-label="Fő menü">
        <a class="text-ink-soft no-underline font-medium text-[0.97rem] hover:text-teal-dark hover:underline hover:underline-offset-4 transition-colors" href="#osszehasonlitas">Összehasonlítás</a>
        <a class="text-ink-soft no-underline font-medium text-[0.97rem] hover:text-teal-dark hover:underline hover:underline-offset-4 transition-colors" href="#vastagsag">Rétegvastagság</a>
        <a class="text-ink-soft no-underline font-medium text-[0.97rem] hover:text-teal-dark hover:underline hover:underline-offset-4 transition-colors" href="#elonyok">Előnyök</a>
        <a class="text-ink-soft no-underline font-medium text-[0.97rem] hover:text-teal-dark hover:underline hover:underline-offset-4 transition-colors" href="#kepek">Képek</a>
        <a class="text-ink-soft no-underline font-medium text-[0.97rem] hover:text-teal-dark hover:underline hover:underline-offset-4 transition-colors" href="#gyik">GYIK</a>
      </nav>
      <a class="inline-flex items-center gap-1.5 font-semibold text-sm py-2 px-4 rounded-md border-2 border-teal-dark bg-teal-dark text-white hover:bg-ink hover:border-ink transition-colors" href="#ajanlat">
        Árajánlat
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-xs" />
      </a>
    </div>
  </header>
</template>

