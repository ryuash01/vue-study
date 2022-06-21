<script lang="ts" setup>
import * as EVENTS from '../../constants/events';

type WorkflowBaseProps = {
  title: string;
  footer: string;
}

const props = defineProps<WorkflowBaseProps>();
defineEmits([WORKFLOW_NEXT])

</script>
<template>
<div>
  <h3>{{props.title}}</h3>
  <slot>slot content</slot>
  <button @click="$emit(WORKFLOW_PREV)">prev</button>
  <button @click="$emit(WORKFLOW_NEXT)">next</button>
</div>
</template>
