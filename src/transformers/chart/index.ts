/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// 负责整体数据转换器的适配逻辑

import {} from './bar'
import {} from './line'
import {} from './pie'
import {} from './column'

// 跟后端定义一个数据，通用格式
// 前端根据不同的图表类型，转换生成不同图表数据

type ChartResData = {
    type: string
    dimensions: string[]
    measures: string[]
    data: { value: string | number; label: string }[]
}


const getXAxis = (data: ChartResData) => {
    return {
        type: 'category',
        data: /* data.dimensions || */ ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
}

const getYAxis = (data: ChartResData) => {
    return {
        type: 'value'
    }
}

const getSeries = (data: ChartResData) => {
    return [
        {
            data: /* data.measures || */ [150, 230, 224, 218, 135, 147, 260],
            type: data.type
        }
    ]
}

/**
 * 柱状图数据转换器
 */
const barTransformer = {
    name: 'bar',
    transform(data: ChartResData) {
        // 适配逻辑
        return {
            xAxis: getXAxis(data),
            yAxis: getYAxis(data),
            series: getSeries(data)
        }
    }
}

const lineTransformer = {
    name: 'line',
    transform(data: ChartResData) {
        // 适配逻辑
        return {
            xAxis: getXAxis(data),
            yAxis: getYAxis(data),
            series: getSeries(data)
        }
    }
}

/**
 * 图表数据转换器
 */
class ChartTransformer {
    private transformers = [barTransformer, lineTransformer]
    constructor() {
        // 初始化适配器
    }
    use(transformer: { name: string; transform: (data: ChartResData) => any }) {
        this.transformers.push(transformer)
    }
    transform(data: ChartResData) {
        // 适配逻辑
        const { type } = data
        const transformer = this.transformers.find(t => t.name === type)

        if (!transformer) {
            throw new Error('no transformer')
        }

        return transformer.transform(data)
    }
}
// 1. 定义转换器
const pieTransformer = {
    name: 'pie',
    transform(data: ChartResData) {
        // 适配逻辑
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: 10
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ]
                }
            ]
        }
    }
}

export const chartTransformer = new ChartTransformer()

// 2. 注册转换器
chartTransformer.use(pieTransformer)

/**
 * webpack
 * vite
 * babel
 * taro
 * vue
 * pinia
 */
