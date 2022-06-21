<script setup lang="ts">
import { ref, inject, Component, shallowRef } from 'vue';
import { SLIDER } from '../constants/events';
type SliderState = {
  open: boolean;
}


const state = ref<SliderState>({
  open: false,
})

const ShallowComponent = shallowRef<Component | null>(null);

const handleOpen = (component: Component) => {
  console.log('ive been called to open')
  state.value.open = true;
  ShallowComponent.value = component;
}

const handleClose = () => {
  console.log('ive been called to closev')
  state.value.open = false;
  ShallowComponent.value = null;
}

const emitter: any = inject('emitter'); // Inject `emitter`

emitter.on(SLIDER.SLIDER_SHOW, handleOpen);
emitter.on(SLIDER.SLIDER_HIDE, handleClose);

</script>
<template>
<div v-if="state.open && ShallowComponent">
  <ShallowComponent />
</div>
</template>
