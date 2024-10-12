<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as zrender from 'zrender'

const container = ref<HTMLElement | null>(null)

onMounted(() => {
    const zr = zrender.init(container.value, { renderer: 'svg' })
    console.log('🚀 ~ onMounted ~ zr:', zr)
    // 面向对象编程思想
    const rect = new zrender.Rect({
        shape: {
            x: 0,
            y: 0,
            width: 100,
            height: 100
        },
        style: {
            fill: 'red'
        }
    })

    const group = new zrender.Group()

    const arc = new zrender.Arc({
        shape: {
            cx: 100,
            cy: 100,
            r: 50,
            startAngle: 0,
            endAngle: Math.PI * 2
        },
        style: {
            fill: 'blue'
        }
    })

    const text = new zrender.Text({
        style: {
            text: 'Hello Zrender',
            x: 100,
            y: 100
        }
    })

    /**
     * 画一个“游泳圈”可视化图表
     */
    const pics = 8
    const eagle = (2 * Math.PI) / pics
    const r = 100
    const o = 100

    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']
    for (let index = 0; index < pics; index++) {
        // 极坐标系下
        const x = o + r
        const y = o + r
        // 极坐标系下的图表绘制，一定学三角函数
        // const rect = new zrender.Rect({
        //     shape: {
        //         x: x + r * Math.cos(eagle * index),
        //         y: y + r * Math.sin(eagle * index),
        //         width: 10,
        //         height: 10
        //     },
        //     style: {
        //         fill: '#000'
        //     }
        // })
        const arc = new zrender.Arc({
            shape: {
                cx: x + r * Math.cos(eagle * index),
                cy: y + r * Math.sin(eagle * index),
                r: 10,
                startAngle: 0,
                endAngle: Math.PI * 2
            },
            style: {
                fill: colors[index % colors.length]
            }
        })

        arc.animate('shape', true)
            .when(1000, {
                r: 20
            })
            .start()

        // zr.add(rect)
        zr.add(arc)
    }

    zr.add(group)

    group.add(arc)
    group.add(text)

    text.animate('style', true)
        .when(1000, {
            x: 200,
            y: 200,
            stroke: 'green'
        })
        .start()

    // zr.add(text)

    arc.draggable = 'horizontal'

    // zr.add(arc)

    zr.on('click', ev => {
        console.log('🚀 ~ onMounted ~ zr.on ~ click', ev.offsetX, ev.offsetY)
    })

    zr.add(rect)
})
</script>

<template>
    <div class="zrender-wrapper" ref="container"></div>
</template>

<style scoped>
.zrender-wrapper {
    height: 300px;
}
</style>
