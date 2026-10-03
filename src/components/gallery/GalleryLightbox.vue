<script setup>
const props = defineProps({
  photos: {
    type: Array,
    required: true,
  },
  gallery: {
    type: Object,
    required: true,
  },
})

const {
  open,
  closeBtn,
  thumbStrip,
  showThumbnails,
  isFullscreen,
  close,
  step,
  toggleFullscreen,
  onTouchStart,
  onTouchEnd,
} = props.gallery
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open !== null"
        class="fixed inset-0 z-[9999] bg-[rgba(6,14,16,0.96)] backdrop-blur-xl flex flex-col justify-between select-none overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Képnézegető"
        @click.self="close"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <div class="flex items-center justify-between p-3 sm:p-4 md:p-6 bg-gradient-to-b from-black/60 to-transparent z-10 gap-4">
          <div class="flex items-center gap-3.5 min-w-0">
            <span class="inline-flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold tabular-nums bg-white/12 border border-white/16 backdrop-blur-md py-1.5 px-3 rounded-full whitespace-nowrap">
              <font-awesome-icon :icon="['fas', 'layer-group']" class="text-xs text-glass-300" />
              {{ open + 1 }} / {{ photos.length }}
            </span>
            <span class="hidden sm:inline text-white/80 text-sm md:text-base font-medium truncate">{{ photos[open].alt }}</span>
          </div>

          <div class="flex items-center gap-2.5">
            <button
              class="w-10 h-10 text-base rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/16 text-white bg-white/10 hover:bg-white/22 hover:border-white/35 hover:scale-105 focus-visible:outline-2 focus-visible:outline-glass-300 focus-visible:outline-offset-2"
              :class="{ 'bg-teal border-glass-300': showThumbnails }"
              type="button"
              @click="showThumbnails = !showThumbnails"
              :aria-label="showThumbnails ? 'Bélyegképek elrejtése' : 'Bélyegképek mutatása'"
              title="Bélyegképek"
            >
              <font-awesome-icon :icon="['fas', 'images']" />
            </button>

            <button
              class="w-10 h-10 text-base rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/16 text-white bg-white/10 hover:bg-white/22 hover:border-white/35 hover:scale-105 focus-visible:outline-2 focus-visible:outline-glass-300 focus-visible:outline-offset-2"
              type="button"
              @click="toggleFullscreen"
              :aria-label="isFullscreen ? 'Kilépés a teljes képernyőből' : 'Teljes képernyő'"
              title="Teljes képernyő (F)"
            >
              <font-awesome-icon :icon="['fas', isFullscreen ? 'compress' : 'expand']" />
            </button>

            <button
              ref="closeBtn"
              class="w-10 h-10 text-base rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/16 text-white bg-white/14 hover:bg-red-600/85 hover:border-red-600/90 hover:scale-105 focus-visible:outline-2 focus-visible:outline-glass-300 focus-visible:outline-offset-2"
              type="button"
              @click="close"
              aria-label="Bezárás"
              title="Bezárás (Esc)"
            >
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>
          </div>
        </div>

        <div class="flex-1 flex items-center justify-between relative min-h-0 p-1 sm:p-2 md:p-4" @click.self="close">
          <button class="w-10 h-10 sm:w-13 sm:h-13 text-base sm:text-xl rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/18 text-white bg-white/10 hover:bg-white/25 hover:border-white/40 hover:scale-110 active:scale-95 backdrop-blur-md z-5 shrink-0 focus-visible:outline-2 focus-visible:outline-glass-300 focus-visible:outline-offset-2" type="button" @click="step(-1)" aria-label="Előző kép (Bal nyíl)" title="Előző kép">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>

          <div class="flex-1 h-full flex items-center justify-center p-2 min-w-0" @click.self="close">
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95"
              leave-active-class="transition duration-200 ease-in"
              leave-to-class="opacity-0 scale-105"
              mode="out-in"
            >
              <img
                :key="open"
                :src="photos[open].url"
                :alt="photos[open].alt"
                class="max-w-full max-h-full object-contain rounded-md shadow-[0_15px_50px_rgba(0,0,0,0.6)] select-none"
              />
            </Transition>
          </div>

          <button class="w-10 h-10 sm:w-13 sm:h-13 text-base sm:text-xl rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/18 text-white bg-white/10 hover:bg-white/25 hover:border-white/40 hover:scale-110 active:scale-95 backdrop-blur-md z-5 shrink-0 focus-visible:outline-2 focus-visible:outline-glass-300 focus-visible:outline-offset-2" type="button" @click="step(1)" aria-label="Következő kép (Jobb nyíl)" title="Következő kép">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>

        <Transition
          enter-active-class="transition duration-250 ease-out"
          enter-from-class="opacity-0 translate-y-5"
          leave-active-class="transition duration-250 ease-in"
          leave-to-class="opacity-0 translate-y-5"
        >
          <div v-if="showThumbnails" class="bg-gradient-to-t from-black/75 to-transparent pt-3 px-4 pb-5 z-10">
            <div ref="thumbStrip" class="flex gap-2 justify-start sm:justify-center overflow-x-auto py-1 px-2">
              <button
                v-for="(p, idx) in photos"
                :key="p.url"
                type="button"
                class="shrink-0 w-13 sm:w-16 h-9 sm:h-11 p-0 border-2 rounded overflow-hidden bg-black cursor-pointer opacity-50 transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
                :class="idx === open ? 'opacity-100 border-glass-300 shadow-[0_0_10px_rgba(169,207,201,0.5)] scale-105' : 'border-transparent'"
                @click="open = idx"
                :aria-label="`${idx + 1}. kép megtekintése`"
              >
                <img :src="p.url" :alt="p.alt" loading="lazy" class="w-full h-full object-cover block" />
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

