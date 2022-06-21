<script setup lang="ts">
import { ref, inject } from 'vue';
import { SLIDER } from '../constants/events';
type SliderState = {
  open: boolean;
}

const state = ref<SliderState>({
  open: false,
})

const handleOpen = () => {
  console.log('ive been called to open')
  state.value.open = true;
}

const handleClose = () => {
  console.log('ive been called to closev')
  state.value.open = false;
}

const emitter = inject('emitter'); // Inject `emitter`

emitter.on(SLIDER.SLIDER_SHOW, handleOpen);

</script>
<template>
<div>
  <div v-if="state.open">im here</div>
  <slot>
  placeholder
  </slot>
</div>
</template>
