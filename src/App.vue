<script setup lang="ts">
import AppRightPanel from './components/AppRightPanel/AppRightPanel.vue'
import HelloWorld from './components/HelloWorld.vue'
import MaterialRenderer from './components/MaterialRenderer.vue'

</script>

<template>
  <AppRightPanel />
  <div draggable="true">
    我是普通div
  </div>
  <div :style="{width: '100px', height: '100px', background: 'pink'}">
12
</div>
  <HelloWorld msg="Vite + Vue + Vetur" />
  <MaterialRenderer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
