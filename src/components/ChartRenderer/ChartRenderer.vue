<script setup lang="ts">
import { computed } from 'vue'

import type { ChartBlockInfo } from '@/types/block'

import CanvasChartRenderer from './CanvasChartRenderer/CanvasChartRenderer.vue'
// 基于 d3 引擎的图标渲染器
// import D3ChartRenderer from './D3ChartRenderer.vue'
// 基于 echarts 引擎的图标渲染器
// import EchartChartRenderer from './EchartChartRenderer.vue'
import EchartsRenderer from './EchartsRenderer/EchartsRenderer.vue'
import SVGChartRenderer from './SVGChartRenderer/SVGChartRenderer.vue'
// 基于 zrender 引擎的图标渲染器
// import ZrenderChartRenderer from './ZrenderChartRenderer.vue'

// type ChartType = 'echarts' | 'd3' | 'zrender'

// const chartType = ref<ChartType>('echarts')

// const charts = {
//   'echarts': EchartChartRenderer,
//   'd3': D3ChartRenderer,
//   'zrender': ZrenderChartRenderer,
// }

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

console.log('blockInfo', props)
const renderer = computed(() => {
  if (!props.blockInfo) return ''
  switch (props.blockInfo.props.chartType) {
    case 'echarts': {
      return EchartsRenderer
    }
    case 'canvas': {
      return CanvasChartRenderer
    }
    case 'svg': {
      return SVGChartRenderer
    }
    default:
      return ''
  }
})

console.log(props, props)
</script>

<template>
  <!-- <button @click="chartType = 'echarts'">echarts</button>
  <button @click="chartType = 'd3'">d3</button>
  <button @click="chartType = 'zrender'">zrender</button>
  <div>
    <KeepLive>
      <component :is="charts[chartType]" />
    </KeepLive>
  </div> -->
  <component :is="renderer" class="chart-container" :block-info="blockInfo" />
</template>

<style scoped>
</style>
