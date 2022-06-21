<script setup lang="ts">
import { inject } from 'vue'
import LayoutSlider from './layout/LayoutSlider.vue';
import WorkflowUpdateCardStatus from './components/workflows/WorkflowUpdateCardStatus.vue';
import { SLIDER } from './constants/events';

// figure out how to not any this
const emitter: any = inject('emitter'); // Inject `emitter`
// defineEmits([SLIDER.SLIDER_SHOW, SLIDER.SLIDER_HIDE])
const handleShow = () => {
  emitter.emit(SLIDER.SLIDER_SHOW);
}
</script>

<template>
  <LayoutSlider>
    <WorkflowUpdateCardStatus />
    <p @click="handleShow">display card status</p>
    <p @click="$emit(SLIDER.SLIDER_HIDE)">reset</p>
  </LayoutSlider>
</template>

<style>
@import "@/assets/base.css";
</style>
