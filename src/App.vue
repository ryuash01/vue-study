<script setup lang="ts">
import LayoutSlider from './layout/LayoutSlider.vue';
import WorkflowOne from './components/workflows/WorkflowOne.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <LayoutSlider />
      <WorkflowOne />
      <!-- <div>display workflow 1</div>
      <div>display workflow 2</div>
      <div>cancel</div> -->
    </div>
  </header>
</template>

<style>
@import "@/assets/base.css";
</style>
