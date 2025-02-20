<script setup>
import MainHeader from '@/components/MainHeader.vue'
import HomeHero from '@/components/HomeHero.vue'
import AboutMe from '@/components/AboutMe.vue'
import TechnicalSkills from '@/components/TechnicalSkills.vue'
import ProfessionalExperiences from '@/components/ProfessionalExperiences.vue'
import QuoteSection from '@/components/QuoteSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { provide, ref } from 'vue'

const darkMode = ref(false)
const toggleDarkMode = () => (darkMode.value = !darkMode.value)

provide('darkMode', { darkMode, toggleDarkMode })
</script>

<template>
  <div class="main-wrapper" :class="darkMode ? 'dark-mode' : 'light-mode'">
    <MainHeader />
    <HomeHero />
    <AboutMe />
    <TechnicalSkills :key="$i18n.locale" />
    <ProfessionalExperiences :key="$i18n.locale" />
    <QuoteSection author="Martin Fowler" :reference="$t('quote.reference')">
      {{ $t('quote.text') }}
    </QuoteSection>
    <SiteFooter />
  </div>
</template>

<style scoped></style>
