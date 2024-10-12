<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components'
import { graphic, use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { computed, provide, ref } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'

import { chartTransformer } from '../../transformers/chart'

use([SVGRenderer, LineChart, BarChart, PieChart, TitleComponent, LegendComponent, ToolboxComponent, GridComponent, TooltipComponent])


const chartType = ref('line')
const option = computed(() => chartTransformer.transform({ type: chartType.value, dimensions: [], measures: [], data: {} }))
console.log('🚀 ~ option:', option)
</script>

<template>
    <div class="charts-wrapper">
        <button @click="chartType = 'line'">line</button>
        <button @click="chartType = 'bar'">bar</button>
        <button @click="chartType = 'pie'">pie</button>
        <v-chart :option="option"></v-chart>
    </div>
</template>

<style scoped>
.charts-wrapper {
    width: 100%;
    height: 400px;
}
</style>
