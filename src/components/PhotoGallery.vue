<script setup>
import { computed } from 'vue'
import { useGallery } from '../composables/useGallery.js'
import GalleryLightbox from './gallery/GalleryLightbox.vue'

const modules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url], i) => ({
    url,
    alt: `Üveghabkő lemezalap szigetelés és kivitelezés – ${i + 1}. referenciafotó`,
  }))

const COLS = 3
const lastSpan = computed(() => {
  const n = photos.length
  if (n < 3) return 1
  const cells = 4 + (n - 1)
  return 1 + ((COLS - (cells % COLS)) % COLS)
})

const gallery = useGallery(photos)
const isDev = import.meta.env.DEV
</script>

<template>
  <section v-if="photos.length" id="kepek" class="py-14 sm:py-20 md:py-24 bg-white border-y border-line">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full">
      <div class="grid gap-4 mb-7 md:mb-12">
        <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-ink">
          Képgaléria
        </h2>
      </div>
      <ul class="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:auto-rows-[clamp(140px,15vw,200px)] lg:grid-flow-dense">
        <li
          v-for="(p, i) in photos"
          :key="p.url"
          :class="{ 'lg:col-span-2 lg:row-span-2': i === 0 && photos.length >= 3 }"
          :style="i === photos.length - 1 && i > 0 && lastSpan > 1 ? { gridColumn: `span ${lastSpan}` } : undefined"
        >
          <button
            type="button"
            class="group block w-full h-full p-0 border-0 bg-glass-100 cursor-zoom-in rounded-md overflow-hidden aspect-[3/2] lg:aspect-auto"
            @click="gallery.show(i)"
            :aria-label="`${p.alt} megnyitása nagyban`"
          >
            <img :src="p.url" :alt="p.alt" loading="lazy" decoding="async" class="w-full h-full object-cover block transition-transform duration-350 ease-out group-hover:scale-105" />
          </button>
        </li>
      </ul>
    </div>

    <GalleryLightbox :photos="photos" :gallery="gallery" />
  </section>

  <section v-else-if="isDev" class="py-14 sm:py-20 md:py-24 bg-white border-y border-line">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full">
      <p class="p-6 border-2 border-dashed border-glass-300 rounded-md text-ink-soft">
        Még nincsenek képek. Másolja a fotókat a <code>src/assets/photos</code> mappába (01.jpg, 02.jpg, …), és itt
        automatikusan megjelenik a galéria. Az éles (build) oldalon ez a szakasz rejtve marad, amíg nincs kép.
      </p>
    </div>
  </section>
</template>

