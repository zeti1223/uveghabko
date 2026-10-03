import { computed, ref, watch } from 'vue'

const LAMBDA_GLASS = 0.086
const LAMBDA_XPS = 0.034

export const thicknessOptions = [30, 40, 50]

export function useThicknessCalc() {
  const d = ref(40)

  const displayR = ref(0)
  const displayXps = ref(0)
  const isChanging = ref(false)

  const fmt = (n, digits = 1) =>
    n.toLocaleString('hu-HU', { minimumFractionDigits: digits, maximumFractionDigits: digits })

  const r = computed(() => d.value / 100 / LAMBDA_GLASS)
  const xpsEq = computed(() => r.value * LAMBDA_XPS * 100)

  function animateTo(from, to, setter, digits = 1, duration = 700) {
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setter(from + (to - from) * eased)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  displayR.value = r.value
  displayXps.value = xpsEq.value

  watch(d, () => {
    isChanging.value = true
    setTimeout(() => { isChanging.value = false }, 600)

    animateTo(displayR.value, r.value, (v) => { displayR.value = v })
    animateTo(displayXps.value, xpsEq.value, (v) => { displayXps.value = v }, 0)
  })

  return {
    d,
    displayR,
    displayXps,
    isChanging,
    fmt,
  }
}
