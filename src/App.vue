<script setup lang="ts">
import { inject } from 'vue'
import LayoutSlider from './layout/LayoutSlider.vue';
import WorkflowUpdateCardStatus from './components/workflows/WorkflowUpdateCardStatus.vue';
import { SLIDER } from './constants/events';

// figure out how to not any this
const emitter: any = inject('emitter'); // Inject `emitter`

const handleOpen = () => {
  emitter.emit(SLIDER.SLIDER_SHOW, WorkflowUpdateCardStatus);
}
</script>

<template>
  <LayoutSlider/>
  <!-- <WorkflowUpdateCardStatus /> -->
  <p @click="handleOpen">display card status</p>
  <p @click="emitter.emit(SLIDER.SLIDER_HIDE)">reset</p>
</template>

<style>
@import "@/assets/base.css";
</style>
