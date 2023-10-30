<script setup>
import MainHeader from '@/components/MainHeader.vue'
import HomeHero from '@/components/HomeHero.vue'
import AboutMe from '@/components/AboutMe.vue'
import TechnicalSkills from '@/components/TechnicalSkills.vue'
import ProfessionalExperiences from '@/components/ProfessionalExperiences.vue'
import QuoteSection from '@/components/QuoteSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <MainHeader />
  <HomeHero />
  <AboutMe />
  <TechnicalSkills :key="$i18n.locale" />
  <ProfessionalExperiences :key="$i18n.locale" />
  <QuoteSection author="Martin Fowler" :reference="$t('quote.reference')">
    {{ $t('quote.text') }}
  </QuoteSection>
  <ContactForm />
  <SiteFooter />
</template>

<style scoped></style>
