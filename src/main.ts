/* eslint-disable @typescript-eslint/no-unused-vars */
import { App, createApp } from 'vue'
import AppEle from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/main.css'
import { setup } from './setup'

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
app.use(createPinia())
app.use(router)

setup(app)

app.mount('#app')
 