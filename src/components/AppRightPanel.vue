<script setup lang="ts">
  
import { computed } from 'vue'

import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { blocks } from '@/mocks/blocks'
import { useAppEditorStore } from '@/stores/appEditor'


const appEditorStore = useAppEditorStore()

const blocksMap = computed(() => {
  return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
})


const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null
  return blocksMap.value[appEditorStore.currentBlockId]
})
</script>

<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">{{ currentBlockInfo.type }}</div>
    </template>
  </div>
</template>

<style scoped>
.app-right-panel-wrapper {
  position: relative;
  z-index: 4;
  width: var(--panel-width);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}
</style>
