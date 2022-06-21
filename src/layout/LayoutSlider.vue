<script setup lang="ts">
import { ref, inject, Component, shallowRef, triggerRef } from 'vue';
import { Emitter } from 'mitt';
import { MITT_EVENT_TYPES, SLIDER } from '../constants/events';
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

const handleOpen = ({ component, props }: ComponentState) => {
  state.value.open = true;
  shallowState.value.component = component;
  shallowState.value.props = props;
  triggerRef(shallowState);
}

const handleClose = () => {
  state.value.open = false;
  handleResetComponentState();
}

const handleResetComponentState = () => {
  shallowState.value.component = null;
  shallowState.value.props = {};
}

const emitter = inject('emitter') as Emitter<MITT_EVENT_TYPES>;

emitter.on(SLIDER.SLIDER_SHOW, handleOpen);
emitter.on(SLIDER.SLIDER_HIDE, handleClose);

</script>
<template>
<div v-if="state.open && shallowState.component">
  <shallowState.component v-bind="shallowState.props" />
</div>
</template>
