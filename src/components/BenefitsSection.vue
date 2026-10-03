<script setup>
import { benefits } from '../content.js'

const icons = ['shield-halved', 'droplet-slash', 'ban']
</script>

<template>
  <section id="elonyok" class="py-14 sm:py-20 md:py-24">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full">
      <div class="grid gap-4 mb-7 md:mb-12">
        <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-ink">
          Miért az üveghabkő a legbiztosabb befektetés?
        </h2>
        <p class="text-ink-soft max-w-[68ch]">
          A talaj felé történő hőveszteség a házak teljes energiafogyasztásának jelentős részét teszi ki. Az üveghabkő
          alkalmazása nem költség, hanem a legmagasabb megtérülésű beruházások egyike.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <article v-for="(b, i) in benefits" :key="b.title" class="border-t-4 border-teal pt-4.5 grid gap-3 content-start">
          <div class="text-2xl text-teal mb-1">
            <font-awesome-icon :icon="['fas', icons[i] || 'circle-check']" />
          </div>
          <h3 class="font-head font-semibold text-xl text-ink leading-snug">{{ b.title }}</h3>
          <p class="text-ink-soft">{{ b.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

