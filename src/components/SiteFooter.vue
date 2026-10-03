<script setup>
import { site } from '../content.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-[#b8cccc] py-8 text-sm">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full flex flex-col gap-6">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div class="font-head font-bold text-lg text-white">
          {{ site.name }}
        </div>
        <nav class="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm" aria-label="Lábléc navigáció">
          <a href="#top" class="text-[#b8cccc] hover:text-white transition-colors">Tetejére</a>
          <a href="#osszehasonlitas" class="text-[#b8cccc] hover:text-white transition-colors">Összehasonlítás</a>
          <a href="#vastagsag" class="text-[#b8cccc] hover:text-white transition-colors">Rétegvastagság</a>
          <a href="#elonyok" class="text-[#b8cccc] hover:text-white transition-colors">Előnyök</a>
          <a href="#kepek" class="text-[#b8cccc] hover:text-white transition-colors">Képek</a>
          <a href="#gyik" class="text-[#b8cccc] hover:text-white transition-colors">GYIK</a>
          <a href="#ajanlat" class="text-[#b8cccc] hover:text-white transition-colors">Árajánlat</a>
        </nav>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs opacity-75">
        <p>© {{ year }} {{ site.name }} – Minden jog fenntartva. Üveghabkő lemezalap alá.</p>
        <p class="sm:text-right">
          A weboldalt <a href="https://zeteny.cigoria.eu" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">Botyánszki Zétény</a> készítette
        </p>
      </div>
    </div>
  </footer>
</template>

