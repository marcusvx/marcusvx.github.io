<template>
  <section id="hero" class="hero">
    <div class="content">
      <h1>
        {{ $t('hero.title') }}
      </h1>
      <div>
        <TypedText :text="$t('hero.subtitle')"></TypedText>
      </div>
      <a class="button" href="#about_me"> Read more </a>
      <a class="button" href="#contact_me"> Contact Me </a>
    </div>
  </section>
</template>

<style lang="scss">
@import '../styles/index.scss';
@import 'bulma/sass/components/navbar';

.hero {
  @extend .has-overlay;
  position: relative;
  width: 100%;
  height: calc(100vh - $navbar-height);
  overflow: hidden;
  background-size: cover;
  z-index: 1;
  background-color: $dark;

  .content {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    text-align: center;

    .button {
      @extend .main-btn;
      @extend .white-btn;
    }

    div {
      font-size: 18px;
      margin: 10px auto;
      color: #fff;
    }

    h1 {
      text-transform: none;
      color: #fff;
      font-size: 60px;
      display: inline-block;
      padding: 8px 30px;
      margin: 0;
    }
  }
}
</style>
<script setup>
import TypedText from '@/components/TypedText.vue'
</script>
