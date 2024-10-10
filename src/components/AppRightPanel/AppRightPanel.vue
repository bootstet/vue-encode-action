<script setup lang="ts">
import { defineRule,useField, useForm } from 'vee-validate'
import { watch } from 'vue'

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required'
    }
    return true
})
defineRule('email', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true
    }
    // Check if email
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
        return 'This field must be a valid email'
    }
    return true
})

const { values, errors, setFieldValue } = useForm()


const {value: title, handleChange: handleTitleChange} = useField('title', 'required')
const {value: gender} = useField('gender', 'required')


watch(values, newVal => {
    console.log(newVal)
})

</script>

<template>
{{ errors }}
  <!-- <input
    v-model="title"
    :style="{ border: errors.title ? '1px  solid red' : '1px solid transparent'}"
    > -->
  <input
    :value="title"
    :style="{ border: errors.title ? '1px  solid red' : '1px solid transparent'}"
    @change="handleTitleChange"
    >
  <select v-model="gender">
    <option>男</option>
    <option>女</option>
  </select>
  <button @click="setFieldValue('gender', '')">clear</button>
</template>

<style scoped>
</style>
 