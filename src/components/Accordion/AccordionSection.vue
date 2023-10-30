<script setup>
import { ref } from 'vue'

const accordion = ref(null)
defineProps({
  title: String
})
const toggleActive = () => {
  document.querySelectorAll('.accordion-item').forEach((element) => {
    if (element !== accordion.value) {
      element.children[0].classList.remove('active')
      element.children[1].style.maxHeight = 0
    }
  })

  const title = accordion.value.children[0]
  const content = accordion.value.children[1]
  content.style.maxHeight = title.classList.toggle('active') ? `${content.scrollHeight}px` : '0'
}
</script>

<template>
  <div class="accordion-item" ref="accordion">
    <div class="accordion-title" @click="toggleActive"><i class="fa fa-plus" /> {{ title }}</div>
    <div class="accordion-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../styles/variables';

.accordion-item {
  & .accordion-title {
    padding: 10px;
    margin: 0;
    cursor: pointer;
    position: relative;
    border: 1px solid #ccc;
    color: #333;
    transition: all 0.3s ease-in-out;

    & i {
      position: absolute;
      right: 20px;
      top: 50%;
      color: $dark;
      transform: translateY(-50%);
      transition: all 0.3s ease-in-out;
    }

    &.active {
      background: $dark;
      color: #fff;
      border-color: $dark;

      & i {
        transform: translateY(-50%) rotate(45deg);
        color: #fff;
      }

      & .accordion-content {
        transition: max-height 0.2s ease-out;
        max-height: 0;
        overflow: hidden;
      }
    }
  }

  & .accordion-content {
    transition: max-height 0.2s ease-out;
    max-height: 0;
    overflow: hidden;

    padding: 0 10px;
    margin: 0;
    color: #555;
    background: #f4f4f4;

    & p:first-child {
      padding-top: 12px;
    }

    & p:last-child {
      padding-bottom: 12px;
    }
  }
}
</style>
