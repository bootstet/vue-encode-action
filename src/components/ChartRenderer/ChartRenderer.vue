<script setup lang="ts">
import { ref } from 'vue'

// 基于 d3 引擎的图标渲染器
import D3ChartRenderer from './D3ChartRenderer.vue'
// 基于 echarts 引擎的图标渲染器
import EchartChartRenderer from './EchartChartRenderer.vue'
// 基于 zrender 引擎的图标渲染器
import ZrenderChartRenderer from './ZrenderChartRenderer.vue'

type ChartType = 'echarts' | 'd3' | 'zrender'

const chartType = ref<ChartType>('echarts')

const charts = {
  'echarts': EchartChartRenderer,
  'd3': D3ChartRenderer,
  'zrender': ZrenderChartRenderer,
}
</script>

<template>
  <button @click="chartType = 'echarts'">echarts</button>
  <button @click="chartType = 'd3'">d3</button>
  <button @click="chartType = 'zrender'">zrender</button>
  <div>
    <KeepLive>
      <component :is="charts[chartType]" />
    </KeepLive>
  </div>
</template>

<style scoped>
</style>
