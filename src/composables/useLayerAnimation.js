import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { ref } from 'vue'

export const SCALE = 3.2
export const SVG_TOP = 160

export function useLayerAnimation(getThickness) {
  const shown = ref(0)
  let raf = 0

  function animateTo(target) {
    cancelAnimationFrame(raf)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      shown.value = target
      return
    }
    const from = shown.value
    const start = performance.now()
    const dur = 750
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      shown.value = from + (target - from) * eased
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => animateTo(getThickness()))
  watch(getThickness, (v) => animateTo(v))
  onBeforeUnmount(() => cancelAnimationFrame(raf))

  const h = computed(() => shown.value * SCALE)
  const bottom = computed(() => SVG_TOP + h.value)

  return { shown, h, bottom }
}
