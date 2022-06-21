<script setup lang="ts">
import LayoutSlider from './layout/LayoutSlider.vue';
import WorkflowUpdateCardStatus from './components/workflows/WorkflowUpdateCardStatus.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <LayoutSlider />
      <WorkflowUpdateCardStatus />
    </div>
  </header>
</template>

<style>
@import "@/assets/base.css";
</style>
