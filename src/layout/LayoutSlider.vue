<script setup lang="ts">
import { ref, inject, Component, shallowRef } from 'vue';
import { SLIDER } from '../constants/events';
type SliderState = {
  open: boolean;
}

type ComponentState = {
  component: Component | null;
  props: {
    [key: string]: any;
  }
}

const state = ref<SliderState>({
  open: false,
})

const shallowState = shallowRef<ComponentState>({
  component: null,
  props: {}
});

// const handleOpen = (component: Component, props = {}) => {
  const handleOpen = ({ component, props }: ComponentState) => {
  console.log('ive been called to open')
  console.log(props,'props');
  state.value.open = true;
  shallowState.value.component = component;
  shallowState.value.props = props;
}

const handleClose = () => {
  console.log('ive been called to closev')
  state.value.open = false;
  handleResetComponentState();
}

const handleResetComponentState = () => {
  shallowState.value.component = null;
  shallowState.value.props = {};
}

const emitter: any = inject('emitter'); // Inject `emitter`

emitter.on(SLIDER.SLIDER_SHOW, handleOpen);
emitter.on(SLIDER.SLIDER_HIDE, handleClose);

</script>
<template>
<div v-if="state.open && shallowState.component">
  <shallowState.component :props="shallowState.props" />
</div>
</template>
