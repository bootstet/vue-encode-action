/* eslint-disable @typescript-eslint/no-unused-vars */
import { App, createApp } from 'vue'
import AppEle from './App.vue'
import { createPinia } from 'pinia'
import { createBlocks, createBlocksFn, initialBlocks } from './blocks'
import router from './router'


const bootstetPlugin = {
  install (app: App<Element>) {
    // 提供给 vue 所有后代子元素使用
    app.provide('superman', 'bootstet')
    // 绑定到 vue 的全局属性上
    app.config.globalProperties.$teacher = 'boot'
  }
}
// 注册插件
const app = createApp(AppEle)
app.use(bootstetPlugin)
// app.use(createBlocksFn)
// app.use(createBlocks())
app.use(initialBlocks)
app.use(createPinia())
app.use(router)

app.mount('#app')
 