<script setup>
defineProps({
  darkBg: Boolean
})
</script>

<template>
  <div class="section-header">
    <h2 class="main-heading">
      <slot name="title"></slot>
    </h2>
    <p class="subtitle" :class="darkBg ? 'dark-bg' : ''" v-if="$slots.subTitle">
      <slot name="subTitle"></slot>
    </p>
    <div class="heading-line" :class="darkBg ? 'dark-bg' : ''"></div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/index.scss';
@import '../styles/variables.scss';

.section-header {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 12px;

  .subtitle {
    position: relative;

    &.dark-bg {
      color: $white;
    }
  }

  .main-heading {
    @extend .main-heading;
    margin: 0;
  }

  .heading-line {
    background: $colorDefault;
    display: inline-block;
    height: 3px;
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
    width: 100px;

    &.dark-bg {
      background: $white;
    }
  }
}
</style>
