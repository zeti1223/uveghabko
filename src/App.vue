<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import CompareSection from './components/CompareSection.vue'
import ThicknessSection from './components/ThicknessSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import ConsequencesSection from './components/ConsequencesSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a
    class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-ink focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md focus:outline-3 focus:outline-amber font-medium"
    href="#tartalom"
  >
    Ugrás a tartalomhoz
  </a>
  <SiteHeader />
  <main id="tartalom">
    <HeroSection />
    <CompareSection />
    <ThicknessSection />
    <BenefitsSection />
    <PhotoGallery />
    <ConsequencesSection />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
