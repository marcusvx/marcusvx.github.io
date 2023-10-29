<template>
  <nav class="main-navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <i class="fas fa-terminal"/>
          marcusvinicius.info
        </a>
      </div>
      <div class="navbar-end">
        <div class="language-options">
          <!--        <button-->
          <!--            class="language-dropdown-link is-arrowless"-->
          <!--            @click="handleChangeLanguage">-->
          <!--          <i class="fa-solid fa-language"/> {LANGUAGES[context.value]}-->
          <!--        </button>-->
          <!--        {languageOptions.map(language => (-->
          <!--        <div :key="language.code" class="language-dropdown">-->
          <!--          <button onClick="handleChangeLanguage">{language.name}</button>-->
          <!--        </div>-->
          <!--        ))}-->
        </div>
        <div class="navbar-item">
          <MainMenu/>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
@import '../styles/index.scss';
@import 'bulma/sass/components/navbar';
@import 'bulma/sass/components/dropdown';
@import 'bulma/sass/elements/container';
@import 'bulma/sass/elements/button';
@import 'bulma/sass/helpers/other';

.main-navbar {
  @extend .navbar;
  @extend .is-fixed-top;

  .navbar-item {
    @extend .navbar-item;

    i {
      margin-right: 10px;
    }
  }

  .navbar-end {
    @extend .navbar-end;

    .language-options {
      @extend .navbar-item;
      @extend .has-dropdown;
      @extend .is-hoverable;

      .is-arrowless {
        @extend .navbar-link;
      }

      .language-dropdown-link {
        font-size: 0.8rem;
        border: none;
        background-color: inherit;

        i {
          margin-right: 8px;
        }

        ::after {
          border: none;
        }
      }

      .language-dropdown {
        @extend .navbar-dropdown;

        button {
          @extend .navbar-item;
          @extend .is-clickable;
          @extend .is-hoverable;
          border: none;
          background-color: inherit;
          font-size: 0.8rem;
        }
      }

      img:last-child {
        margin-left: 5px;
      }
    }
  }

  .navbar-brand {
    @extend .navbar-brand;
  }
}

</style>
<script setup>
import MainMenu from '@/components/MainMenu.vue';
</script>