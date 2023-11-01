<script setup>
const props = defineProps({
  text: String
})
</script>

<style lang="scss">
.wrapper {
  animation:
    typing 2.4s steps(22),
    blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  padding-right: 2px;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
}
</style>

<template>
  <div class="wrapper" :style="{ width: `${props.text.length + 2}ch` }">
    <i class="fas fa-terminal" /> {{ text }}
  </div>
</template>
