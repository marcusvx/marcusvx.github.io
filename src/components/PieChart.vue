<script setup>
import { onMounted, ref } from 'vue'
import { CountUp } from 'countup.js'
import EasyPieChart from 'easy-pie-chart/dist/easypiechart'

const chartRef = ref(null)
const numberRef = ref(null)
const props = defineProps({
  percent: Number,
  title: String
})

onMounted(() => {
  new EasyPieChart(chartRef.value, {
    barColor: '#eaeaea',
    trackColor: false,
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'round',
    size: 150,
    animate: 1500
  })

  new CountUp(numberRef.value, props.percent).start()
})
</script>

<template>
  <div class="chart" ref="chartRef" :data-percent="percent">
    <span> <span ref="numberRef"></span> % </span>
  </div>
  <h2>{{ title }}</h2>
</template>

<style lang="scss">
.chart {
  position: relative;
  display: inline-block;
  min-height: 155px;
  color: #eee;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

  > span {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 2.1rem;
  }
}
</style>
