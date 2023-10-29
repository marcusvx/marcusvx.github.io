<script setup>
import MainHeader from '@/components/MainHeader.vue'
import HomeHero from '@/components/HomeHero.vue'
import AboutMe from '@/components/AboutMe.vue'
import TechnicalSkills from '@/components/TechnicalSkills.vue'
</script>

<template>
  <MainHeader />
  <HomeHero />
  <AboutMe />
  <TechnicalSkills :key="$i18n.locale" />
</template>

<style scoped></style>
