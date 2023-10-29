<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  value: Number,
  label: String
})

const numberRef = ref(null)
onMounted(() => {
  numberRef.value.style.width = props.value + '%'
})
</script>
<template>
  <div class="bar-group" data-max="100">
    <p class="bar-label">{{ label }}</p>
    <div ref="numberRef" class="bar-group-bar thick elastic" style="{ width: 0 }"></div>
  </div>
</template>
<style lang="scss">
@import '../styles/index.scss';

$barHeight: 15px;
.bar-group {
  text-align: left;
  position: relative;
  margin-bottom: 45px;

  .elastic {
    background: #fff;
    margin-bottom: 20px !important;
    transition-timing-function: cubic-bezier(0.5, 0.25, 0.375, 1.335);
    transition-duration: 1s;
  }
}

.bar-group-bar {
  margin-bottom: 20px;

  &.thick {
    width: 0;
    height: $barHeight;
    border-radius: 6px;
    margin-bottom: 5px;
    margin-top: 5px;
    transition: width 1s;

    &::before {
      display: block;
      content: '';
      position: absolute;
      z-index: 0;
      opacity: 0.1;
      width: 95%;
      height: $barHeight;
      border-radius: 6px;
      background: #fff;
    }
  }
}

.label {
  color: #fff;
  font-size: 15px;
}

.label-position {
  position: absolute;
  bottom: -25px;
}

.bar-label {
  @extend .label;
  display: inline-block;
  border: 1px solid #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background: #fff;
    color: #111;
  }
}
</style>
