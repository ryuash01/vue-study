<script setup lang="ts">
import { reactive, ref } from 'vue';
type GlobalCounterType = {
  counter: number;
}
const state = ref<GlobalCounterType>({
  counter: 0
})

const handleCount = () => {
  state.value.counter++;
}

const handleReset = () => {
  state.value.counter = 0;
}

</script>
<template>
  <div>
    <h3>Current count: {{state.counter}}</h3>
    <button @click="handleCount">Add count</button>
    <button @click="handleReset">Reset</button>
  </div>
</template>
