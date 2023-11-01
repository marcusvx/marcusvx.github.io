<script setup></script>

<template>
  <div class="section-header">
    <h2 class="main-heading">
      <slot name="title"></slot>
    </h2>
    <p class="subtitle" v-if="$slots.subTitle">
      <slot name="subTitle"></slot>
    </p>
    <div class="heading-line"></div>
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
  }

  .main-heading {
    font-size: 24px;
    margin: 0;
  }

  .heading-line {
    display: inline-block;
    height: 3px;
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
    width: 100px;
  }
}
</style>
