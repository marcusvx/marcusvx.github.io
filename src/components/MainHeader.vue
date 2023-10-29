<script setup>
import { ref } from 'vue'

const menuActive = ref(false)

function toggleMenu() {
  menuActive.value = !menuActive.value
}
</script>
<style lang="scss">
@import 'bulma/sass/utilities/_all.sass';
@import 'bulma/sass/components/navbar';
@import 'bulma/sass/components/menu';
@import 'bulma/sass/form/shared';
@import 'bulma/sass/form/select';
@import 'bulma/sass/form/tools';
@import 'bulma/sass/elements/icon';
</style>
<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item">
        <i class="fas fa-terminal" />
        marcusvinicius.info
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavbar"
        :class="menuActive ? 'is-active' : ''"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNavbar" class="navbar-menu" :class="menuActive ? 'is-active' : ''">
      <div class="navbar-start">
        <a class="navbar-item" href="#home"> {{ $t('menu.home') }} </a>
        <a class="navbar-item" href="#about"> {{ $t('menu.about') }} </a>
        <a class="navbar-item" href="#skills"> {{ $t('menu.skills') }} </a>
        <a class="navbar-item" href="#experiences"> {{ $t('menu.experiences') }} </a>
        <a class="navbar-item" href="#contact"> {{ $t('menu.contact') }} </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="control has-icons-left">
            <div class="select">
              <select v-model="$i18n.locale">
                <option
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                  :value="locale"
                >
                  {{ $t(locale) }}
                </option>
              </select>
            </div>
            <span class="icon is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
