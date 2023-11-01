<script setup>
defineProps({
  author: String,
  reference: String
})
</script>

<template>
  <section class="quote">
    <div class="container">
      <div class="quote-wrapper">
        <p class="words">
          <span class="quote-mark open">"</span>
          <slot></slot>
          <span class="quote-mark">"</span>
        </p>
        <p class="author">- {{ author }} -</p>
        <p class="reference">{{ reference }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../styles/index.scss';

.quote {
  padding: 80px 0;
  background-color: $dark2;

  .quote-wrapper {
    text-align: center;
    color: #fff;
    position: relative;

    p {
      font-size: 32px;
      width: 80%;
      margin: 0 auto;
      color: #fff;
    }

    .words {
      .quote-mark {
        font-size: 42px;

        &.open {
          margin-right: 10px;
        }
      }
    }

    .author {
      font-size: 16px;
      color: #ddd;
      margin-top: 30px;
      font-weight: bold;
    }

    .reference {
      font-size: 14px;
    }
  }
}
</style>
