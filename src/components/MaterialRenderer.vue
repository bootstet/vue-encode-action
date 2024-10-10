<script setup lang="ts">
import { DropResult } from 'smooth-dnd';
import { ref, toRaw}  from 'vue'

import { blocks } from '../mock/blocks'
import { arrayMove} from '../utils/array'
import { SmoothDndContainer } from './SmoothDnd/SmoothDndContainer';
import { SmoothDndDraggable } from './SmoothDnd/SmoothDndDraggable';

const applyDrag = <T extends unknown[]>(arr: T, dragResult: DropResult) => {
    console.log('🚀 ~ applyDrag ~ arr:', arr, dragResult)
    const { removedIndex, addedIndex, payload } = dragResult

    const result = [...arr]

    // 没做操作
    if (addedIndex === null) return result

    // 添加
    if (addedIndex !== null && removedIndex === null) {
        result.splice(addedIndex, 0, {
            id: `${Math.random()}`,
            ...payload
        })
    }

    // 移动
    if (addedIndex !== null && removedIndex !== null) {
        return arrayMove(result, removedIndex, addedIndex)
    }

    return result
}

const blocksData  = ref(blocks)
// :is="$blockMap[block.type].material" 


</script>

<template>
  <div>
    <div>
      <SmoothDndContainer 
        group-name="blocks"
        @drop="blocksData = applyDrag(toRaw(blocksData), $event)"
      >
        <SmoothDndDraggable
          v-for="block in blocksData" 
          :key="block.id"
        >
          <component 
            :is="$blockMap[block.type].material" 
          />
        </SmoothDndDraggable>
      </SmoothDndContainer>
    </div>
  </div>
</template>

<style scoped>
</style>
