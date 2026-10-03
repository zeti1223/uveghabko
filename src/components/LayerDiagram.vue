<script setup>
import { useId } from 'vue'
import { useLayerAnimation, SVG_TOP } from '../composables/useLayerAnimation.js'

const props = defineProps({
  thickness: { type: Number, default: 40 },
  legend: { type: Boolean, default: true },
})

const uid = useId()
const { h, bottom } = useLayerAnimation(() => props.thickness)

const layers = [
  { name: 'Padlóburkolat és aljzat', color: '#cfc9bd' },
  { name: 'Lemezalap (vasbeton)', color: '#b4b5b0' },
  { name: 'Üveghabkő, tömörítve', color: '#a9cfc9' },
  { name: 'Talaj', color: '#7a6650' },
]
</script>

<template>
  <figure class="m-0">
    <svg
      viewBox="0 0 480 400"
      role="img"
      :aria-label="`Metszet a ház aljáról: padló, lemezalap, ${thickness} centiméter üveghabkő, alatta a talaj`"
      class="block w-full h-auto overflow-visible"
    >
      <defs>
        <pattern :id="`glass-${uid}`" width="48" height="48" patternUnits="userSpaceOnUse">
          <rect width="48" height="48" fill="#bfe0db" />
          <circle cx="8" cy="9" r="6" fill="#9ccbc6" />
          <circle cx="30" cy="6" r="4" fill="#dff1ee" />
          <circle cx="41" cy="19" r="6.5" fill="#8fc2bd" />
          <circle cx="18" cy="27" r="7" fill="#d3ebe7" />
          <circle cx="5" cy="41" r="4.5" fill="#dff1ee" />
          <circle cx="32" cy="39" r="6" fill="#9ccbc6" />
          <circle cx="45" cy="44" r="3" fill="#d3ebe7" />
        </pattern>
        <pattern :id="`soil-${uid}`" width="36" height="36" patternUnits="userSpaceOnUse">
          <rect width="36" height="36" fill="#7a6650" />
          <circle cx="6" cy="8" r="2.4" fill="#5c4b3a" />
          <circle cx="24" cy="5" r="1.8" fill="#927b62" />
          <circle cx="15" cy="22" r="2.8" fill="#5c4b3a" />
          <circle cx="30" cy="27" r="2" fill="#927b62" />
          <circle cx="5" cy="32" r="1.6" fill="#927b62" />
        </pattern>
        <pattern :id="`concrete-${uid}`" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill="#b4b5b0" />
          <circle cx="5" cy="7" r="1.6" fill="#9c9e99" />
          <circle cx="20" cy="5" r="1.2" fill="#c8c9c5" />
          <circle cx="12" cy="19" r="1.8" fill="#9c9e99" />
          <circle cx="25" cy="24" r="1.3" fill="#c8c9c5" />
        </pattern>
        <marker :id="`arrow-${uid}`" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 1 L9 5 L0 9 z" fill="#c98618" />
        </marker>
        <clipPath :id="`stack-clip-${uid}`">
          <rect x="0" y="90" width="400" height="310" rx="8" />
        </clipPath>
      </defs>

      <g :clip-path="`url(#stack-clip-${uid})`">
        <rect x="0" :y="SVG_TOP" width="400" :height="400 - SVG_TOP" :fill="`url(#soil-${uid})`" />
        <rect x="0" y="90" width="400" height="20" fill="#cfc9bd" />
        <rect x="0" y="110" width="400" height="50" :fill="`url(#concrete-${uid})`" />
        <rect x="0" :y="SVG_TOP" width="400" :height="h" :fill="`url(#glass-${uid})`" />
        <line x1="0" :x2="400" :y1="SVG_TOP" :y2="SVG_TOP" stroke="#0e2328" stroke-opacity=".35" />
        <line x1="0" :x2="400" :y1="bottom" :y2="bottom" stroke="#0e2328" stroke-opacity=".35" />
      </g>

      <g stroke="#c98618" stroke-width="3" stroke-linecap="round" fill="none">
        <line x1="90" y1="30" x2="90" y2="146" stroke-dasharray="1 9" :marker-end="`url(#arrow-${uid})`" />
        <line x1="200" y1="30" x2="200" y2="146" stroke-dasharray="1 9" :marker-end="`url(#arrow-${uid})`" />
        <line x1="310" y1="30" x2="310" y2="146" stroke-dasharray="1 9" :marker-end="`url(#arrow-${uid})`" />
      </g>

      <g stroke="#0e2328" stroke-width="1.5">
        <line x1="422" :y1="SVG_TOP" x2="422" :y2="bottom" />
        <line x1="414" :y1="SVG_TOP" x2="430" :y2="SVG_TOP" />
        <line x1="414" :y1="bottom" x2="430" :y2="bottom" />
      </g>
      <text x="436" :y="SVG_TOP + h / 2 + 6" font-size="18" font-weight="650" fill="#0e2328" font-family="Public Sans Variable, sans-serif">
        {{ thickness }} cm
      </text>
    </svg>

    <figcaption v-if="legend">
      <ul class="list-none p-0 mt-4 grid grid-cols-1 min-[420px]:grid-cols-2 gap-x-4 gap-y-1.5 text-[0.92rem] text-ink-soft">
        <li v-for="l in layers" :key="l.name" class="flex items-center">
          <span class="inline-block w-3.5 h-3.5 rounded-xs mr-2 shadow-[inset_0_0_0_1px_rgba(14,35,40,0.3)] shrink-0" :style="{ backgroundColor: l.color }" aria-hidden="true"></span>
          <span>{{ l.name }}</span>
        </li>
      </ul>
    </figcaption>
  </figure>
</template>

