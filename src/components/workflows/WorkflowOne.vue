<script lang="ts" setup>
/* eslint-disable */
import WorkflowBase from './WorkflowBase.vue';
import { WORKFLOW_EVENTS } from '../../constants/events';
import { useWorkflow } from '../../composable/use_workflow';
const { state, handleNextStep } = useWorkflow(1);
// console.log(state,'state')
// defineEmits([WORKFLOW_EVENTS.WORKFLOW_NEXT])
</script>
<template>
<WorkflowBase title="One" footer="footer" @[WORKFLOW_EVENTS.WORKFLOW_NEXT]="handleNextStep">
  <div v-if="state.step === 0">workflow one content page one</div>
  <div v-if="state.step === 1">workflow one content page two</div>
</WorkflowBase>
</template>
