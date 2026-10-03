<script setup>
import LayerDiagram from './LayerDiagram.vue'
</script>

<template>
  <section id="top" class="bg-gradient-to-b from-glass-100 to-bg pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-20 md:pb-24">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 md:gap-12 lg:gap-18 items-center">
      <div class="flex flex-col">
        <h1 class="font-head font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] leading-[1.03] tracking-[-0.025em] mb-6 max-w-full lg:max-w-[15ch] text-ink">
          Amit a lemezalap alá tesz, az ott is marad – örökre.
        </h1>
        <p class="text-lg sm:text-xl text-ink mb-4 leading-relaxed">
          Családi ház építésekor a falakat átfestheti, a kazánt lecserélheti, a nyílászárókat utólag is beállíthatja.
          Egyetlen dolgot viszont soha többé nem tud javítani, cserélni vagy pótolni: a ház alatti hőszigetelést.
        </p>
        <p class="border-l-4 border-amber pl-4 my-5 md:my-6 font-medium text-ink-soft">
          <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="text-amber mr-1.5" />
          Ha itt spórol, vagy elavult technológiát választ, az épület teljes élettartamára (50–100 évre) bebetonoz
          egy folyamatos energetikai veszteséget.
        </p>
        <div class="flex flex-wrap gap-3.5">
          <a class="group inline-flex items-center justify-center font-semibold text-base py-3.5 px-5.5 rounded-md border-2 border-teal-dark bg-teal-dark text-white hover:bg-ink hover:border-ink transition-colors cursor-pointer" href="#ajanlat">
            Kérjen árajánlatot
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a class="inline-flex items-center justify-center font-semibold text-base py-3.5 px-5.5 rounded-md border-2 border-teal-dark bg-transparent text-teal-dark hover:bg-glass-100 transition-colors cursor-pointer" href="#osszehasonlitas">
            Üveghabkő és XPS összehasonlítása
          </a>
        </div>
      </div>
      <div class="w-full">
        <LayerDiagram :thickness="40" />
      </div>
    </div>
  </section>
</template>

