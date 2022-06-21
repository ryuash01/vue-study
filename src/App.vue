<script setup lang="ts">
import { inject, Component } from 'vue'
import LayoutSlider from './layout/LayoutSlider.vue';
import WorkflowUpdateCardStatus from './components/workflows/WorkflowUpdateCardStatus.vue';
import WorkflowAddressVue from './components/workflows/WorkflowAddress.vue';
import GlobalWhatsNew from './components/globals/GlobalWhatsNew.vue';
import { SLIDER } from './constants/events';

// figure out how to not any this
const emitter: any = inject('emitter'); // Inject `emitter`

const handleOpen = (component: Component, props?: {[key: string]: any}) => {
  emitter.emit(SLIDER.SLIDER_SHOW, {
    component,
    props
  });
}

</script>

<template>
  <LayoutSlider/>
  <!-- <WorkflowUpdateCardStatus /> -->
  <p @click="handleOpen(WorkflowUpdateCardStatus, {color: 'blue'})">Change Card Status</p>
  <p @click="handleOpen(WorkflowAddressVue, {color: 'red'})">Change Address</p>
  <p @click="handleOpen(GlobalWhatsNew)">What's new</p>
  <p @click="emitter.emit(SLIDER.SLIDER_HIDE)">reset</p>
</template>

<style>
@import "@/assets/base.css";
</style>
