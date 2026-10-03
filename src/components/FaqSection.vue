<script setup>
import { ref } from 'vue'
import { faq } from '../content.js'

const openIndex = ref(0)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="gyik" class="py-14 sm:py-20 md:py-24 bg-white border-y border-line">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full">
      <div class="grid gap-4 mb-8 md:mb-12">
        <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-ink">
          Gyakori kérdések az üveghabkőről
        </h2>
        <p class="text-ink-soft max-w-[68ch]">
          Minden fontos tudnivaló a lemezalap alatti üveghab zúzalék szigetelésről, a rétegrendről, a beépítésről és a megtérülésről.
        </p>
      </div>

      <div class="grid gap-4 max-w-[920px]">
        <div
          v-for="(item, i) in faq"
          :key="item.question"
          class="border rounded-lg overflow-hidden transition-colors duration-250"
          :class="[
            openIndex === i
              ? 'border-teal/60 bg-bg shadow-xs'
              : 'border-line bg-bg/30 hover:bg-bg/70 hover:border-line/80'
          ]"
        >
          <button
            type="button"
            class="group w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 font-head font-semibold text-lg sm:text-xl text-ink cursor-pointer focus-visible:outline-3 focus-visible:outline-amber focus-visible:-outline-offset-2 select-none"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="transition-colors group-hover:text-teal-dark">{{ item.question }}</span>
            <span
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-out"
              :class="openIndex === i ? 'bg-teal-dark text-white rotate-180' : 'bg-glass-100 text-teal-dark group-hover:bg-glass-300/60'"
            >
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="text-xs transition-transform duration-300"
              />
            </span>
          </button>

          <div
            class="faq-content"
            :class="{ open: openIndex === i }"
          >
            <div class="faq-inner">
              <div class="px-5 pb-5 md:px-6 md:pb-6 text-ink-soft leading-relaxed border-t border-line/40 pt-4">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-content {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease;
}

.faq-content.open {
  grid-template-rows: 1fr;
  opacity: 1;
}

.faq-inner {
  overflow: hidden;
}
</style>
