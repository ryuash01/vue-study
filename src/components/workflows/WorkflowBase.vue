<script lang="ts" setup>
import { WORKFLOW } from '../../constants/events';

type WorkflowBaseProps = {
  title: string;
  footer: string;
}

const props = defineProps<WorkflowBaseProps>();
defineEmits([WORKFLOW.WORKFLOW_NEXT, WORKFLOW.WORKFLOW_PREV])

</script>
<template>
<div>
  <h3>TITLE: {{props.title}}</h3>
  <slot>slot content</slot>
  <button @click="$emit(WORKFLOW.WORKFLOW_PREV)">prev</button>
  <button @click="$emit(WORKFLOW.WORKFLOW_NEXT)">next</button>
</div>
</template>
