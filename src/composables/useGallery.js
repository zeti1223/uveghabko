import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

export function useGallery(photos) {
  const open = ref(null)
  const closeBtn = ref(null)
  const thumbStrip = ref(null)
  const showThumbnails = ref(true)
  const isFullscreen = ref(false)
  let lastFocus = null

  function show(i) {
    lastFocus = document.activeElement
    open.value = i
  }

  function close() {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {})
    }
    open.value = null
  }

  function step(dir) {
    if (open.value === null) return
    open.value = (open.value + dir + photos.length) % photos.length
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().then(() => {
        isFullscreen.value = true
      }).catch(() => {})
    } else {
      document.exitFullscreen?.().then(() => {
        isFullscreen.value = false
      }).catch(() => {})
    }
  }

  function onKey(e) {
    if (open.value === null) return
    if (e.key === 'Escape') close()
    else if (e.key === 'ArrowLeft') step(-1)
    else if (e.key === 'ArrowRight') step(1)
    else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
  }

  let touchStartX = 0
  let touchStartY = 0

  function onTouchStart(e) {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }
  }

  function onTouchEnd(e) {
    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStartX
      const deltaY = e.changedTouches[0].clientY - touchStartY
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          step(1)
        } else {
          step(-1)
        }
      }
    }
  }

  function scrollToActiveThumb() {
    nextTick(() => {
      if (!thumbStrip.value) return
      const activeEl = thumbStrip.value.querySelector('.lb-thumb-item.active')
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    })
  }

  function preloadAdjacent(idx) {
    if (idx === null || !photos.length) return
    const nextIdx = (idx + 1) % photos.length
    const prevIdx = (idx - 1 + photos.length) % photos.length
    const imgNext = new Image()
    imgNext.src = photos[nextIdx].url
    const imgPrev = new Image()
    imgPrev.src = photos[prevIdx].url
  }

  watch(open, async (v) => {
    if (v !== null) {
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
      preloadAdjacent(v)
      scrollToActiveThumb()
      await nextTick()
      closeBtn.value?.focus()
    } else {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      lastFocus?.focus?.()
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  })

  return {
    open,
    closeBtn,
    thumbStrip,
    showThumbnails,
    isFullscreen,
    show,
    close,
    step,
    toggleFullscreen,
    onTouchStart,
    onTouchEnd,
  }
}
