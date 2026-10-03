<script setup>
import { reactive } from 'vue'
import { site } from '../content.js'

const form = reactive({ name: '', contact: '', thickness: 'Még nem tudom', message: '' })

function send() {
  const subject = 'Árajánlatkérés – üveghabkő'
  const body = [
    `Név: ${form.name}`,
    `Telefon / e-mail: ${form.contact}`,
    `Tervezett rétegvastagság: ${form.thickness}`,
    '',
    form.message,
  ].join('\n')
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <section id="ajanlat" class="bg-teal-dark text-white py-14 sm:py-20 md:py-24">
    <div class="max-w-[1160px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-8 md:gap-12 lg:gap-18 items-start">
      <div class="grid gap-5">
        <h2 class="font-head font-bold text-2xl sm:text-3xl md:text-4xl max-w-[24ch] leading-tight text-white">
          Ne kössön kompromisszumot ott, ahol nincs második esély!
        </h2>
        <p class="text-glass-100 max-w-[68ch]">
          Mivel kizárólag az üveghabkő forgalmazására specializálódtunk, nem általános építőanyagot értékesítünk.
          Pontos statikai és energetikai számításokkal segítünk meghatározni a szükséges rétegvastagságot (30, 40 vagy
          50 cm) és a tömörítési tényezőket, hogy Ön egy életre letudhassa a ház energetikai alapozását.
        </p>
        <p class="text-lg sm:text-xl font-semibold leading-relaxed">
          <a class="text-white hover:underline underline-offset-4" :href="`mailto:${site.email}`">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2 opacity-85" />
            {{ site.email }}
          </a>
          <template v-if="site.phone">
            <br />
            <a class="text-white hover:underline underline-offset-4" :href="`tel:${site.phone.replace(/\s/g, '')}`">
              <font-awesome-icon :icon="['fas', 'phone']" class="mr-2 opacity-85" />
              {{ site.phone }}
            </a>
          </template>
        </p>
      </div>

      <form class="bg-white text-ink rounded-lg p-5 sm:p-7 md:p-8 grid gap-4 shadow-lg" @submit.prevent="send">
        <h3 class="font-head font-semibold text-xl text-ink leading-snug">Kérjen szakértői konzultációt és árajánlatot</h3>
        <label class="grid gap-1.5 font-semibold text-sm text-ink">
          Név
          <input v-model.trim="form.name" type="text" name="name" autocomplete="name" required class="font-body font-normal text-base py-2.5 px-3 border border-[#8ea6a4] rounded-md bg-white text-ink focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-1 focus-visible:border-teal-dark" />
        </label>
        <label class="grid gap-1.5 font-semibold text-sm text-ink">
          Telefonszám vagy e-mail cím
          <input v-model.trim="form.contact" type="text" name="contact" autocomplete="email" required class="font-body font-normal text-base py-2.5 px-3 border border-[#8ea6a4] rounded-md bg-white text-ink focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-1 focus-visible:border-teal-dark" />
        </label>
        <label class="grid gap-1.5 font-semibold text-sm text-ink">
          Tervezett rétegvastagság
          <select v-model="form.thickness" name="thickness" class="font-body font-normal text-base py-2.5 px-3 border border-[#8ea6a4] rounded-md bg-white text-ink focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-1 focus-visible:border-teal-dark">
            <option>Még nem tudom</option>
            <option>30 cm</option>
            <option>40 cm</option>
            <option>50 cm</option>
          </select>
        </label>
        <label class="grid gap-1.5 font-semibold text-sm text-ink">
          Üzenet (pl. alapterület, helyszín)
          <textarea v-model.trim="form.message" name="message" rows="4" class="font-body font-normal text-base py-2.5 px-3 border border-[#8ea6a4] rounded-md bg-white text-ink focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-1 focus-visible:border-teal-dark"></textarea>
        </label>
        <button class="inline-flex items-center justify-center font-semibold text-base py-3 px-5 rounded-md border-2 border-teal-dark bg-teal-dark text-white hover:bg-ink hover:border-ink transition-colors cursor-pointer justify-self-start" type="submit">
          <font-awesome-icon :icon="['fas', 'paper-plane']" class="mr-2" />
          Ajánlatkérés küldése
        </button>
        <p class="text-xs sm:text-sm text-ink-soft">A gomb megnyitja az e-mail programját a kitöltött üzenettel.</p>
      </form>
    </div>
  </section>
</template>

