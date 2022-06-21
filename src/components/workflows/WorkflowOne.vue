<script lang="ts" setup>
/* eslint-disable */
import { ref } from 'vue';
import WorkflowBase from './WorkflowBase.vue';
import { WORKFLOW } from '../../constants/events';
import { useWorkflow } from '../../composable/use_workflow';
const { state, handleNextStep, handlePrevStep } = useWorkflow(2);

// Why do i need to ref global constants, i have no idea eitehr
const EVENTS = ref({
  WORKFLOW_NEXT: WORKFLOW.WORKFLOW_NEXT,
  WORKFLOW_PREV: WORKFLOW.WORKFLOW_PREV,
});

// const whoa = WORKFLOW_NEXT;
</script>
<template>
<WorkflowBase
  title="One"
  footer="footer"
  @[EVENTS.WORKFLOW_NEXT]="handleNextStep"
  @[EVENTS.WORKFLOW_PREV]="handlePrevStep"
>
  <div v-if="state.step === 0">workflow one content page one</div>
  <div v-else-if="state.step === 1">workflow one content page two</div>
  <div v-else-if="state.step === 2">workflow one content page three</div>
</WorkflowBase>
</template>
