<script setup lang="ts">
import { ref } from 'vue';
type SliderState = {
  open: boolean;
}

const state = ref<SliderState>({
  open: false,
})


</script>
<template>
<div v-if="state.open">im here</div>
</template>
