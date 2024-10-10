<script setup lang="ts">
import { inject, ref } from 'vue'

defineProps<{ msg: string }>()
const teacher = inject('superman')

const count = ref(0)

</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      {{ $teacher }} ---
      {{ teacher }}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
