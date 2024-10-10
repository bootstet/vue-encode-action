/* eslint-disable @typescript-eslint/no-explicit-any */
// 定义物料

import { App, defineAsyncComponent, h } from 'vue'
import ImageBlock from './blocks/ImageBlock.vue'
import QuoteBlock from './blocks/QuoteBlock.vue'

const blocks = [
  {type: 'image', material: ImageBlock},
  {type: 'quote', material: QuoteBlock},
  // {type: 'chart', material: () => import('./blocks/ChartBlock.vue') }
  {type: 'chart', material: defineAsyncComponent(() => import('./blocks/ChartBlock.vue')) }
]

type ImageBlock = {
  id: string
  type: 'image'
  props: {
    url: string
  }
}

type QuoteBlock = {
  id: string
  type: 'quote'
  props: {
    content: string
  }
}


class BlockSuit {
  blocks: typeof blocks  = []
  constructor() {
    this.blocks = blocks
  }
  use(block: typeof blocks[number]) {
    this.blocks.push(block)
  }
}

const blockSuit = new BlockSuit()

const loadRemoteBlock = async () => {
  return new Promise((resolve) => {
      fetch(' https://cnodejs.org/api/v1/topics', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then(res => {
              return res.json()
          })
          .then(res => {
              console.log('🚀 ~ returnNewPromise ~ res:', res)
              // 来自于远程 CDN 上的物料
              const { content } = res.data[0]
              // ReactElement
              /**
               * React、Vue 只存在对象，数组
               */
              const component = h('div', { ref: 'Ref', style: { color: 'pink', 'background-color': 'red' } }, content)
              console.log('🚀 ~ returnNewPromise ~ component:', component)
              resolve(component)
          })
  })
}


blockSuit.use({
  type: 'button',
  material: defineAsyncComponent(() => loadRemoteBlock())
})

type BlockMeta = {
  type: string
  material: any
}


const blockMap = blocks.reduce((map, block) => {
  map[block.type] = {
    type: block.type,
    material: block.material
  }
  return map
}, {} as Record<string, BlockMeta>)

export const createBlocksFn = (app: App) => {
  // // 提供给 vue 所有后代子元素使用
  app.provide('blockMap', blockMap)
  // 绑定到 vue 的全局属性上
  app.config.globalProperties.$blockMap = blockMap
}

export const createBlocks = () => {
  return {
    install (app: App<Element>) {
      // 提供给 vue 所有后代子元素使用
      app.provide('blockMap', blockMap)
      // 绑定到 vue 的全局属性上
      app.config.globalProperties.$blockMap = blockMap
    }
  }
}

export const initialBlocks = {
  install (app: App<Element>) {
    // 提供给 vue 所有后代子元素使用
    app.provide('blockMap', blockMap)
    // 绑定到 vue 的全局属性上
    app.config.globalProperties.$blockMap = blockMap
  }
}