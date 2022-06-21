<script lang="ts" setup>
/* eslint-disable */
import { ref } from 'vue';
import WorkflowBase from './WorkflowBase.vue';
import { WORKFLOW } from '../../constants/events';
import { useWorkflow } from '../../composable/use_workflow';
import WorkflowUpdateCardStatusOne from './WorkflowUpdateCardStatusOne.vue';
import WorkflowUpdateCardStatusTwo from './WorkflowUpdateCardStatusTwo.vue';
import WorkflowUpdateCardStatusThree from './WorkflowUpdateCardStatusThree.vue';

const { state, handleNextStep, handlePrevStep } = useWorkflow(2);

// Why do i need to ref global constants, i have no idea eitehr
const EVENTS = ref({
  WORKFLOW_NEXT: WORKFLOW.WORKFLOW_NEXT,
  WORKFLOW_PREV: WORKFLOW.WORKFLOW_PREV,
});

</script>
<template>
<WorkflowBase
  title="One"
  footer="footer"
  @[EVENTS.WORKFLOW_NEXT]="handleNextStep"
  @[EVENTS.WORKFLOW_PREV]="handlePrevStep"
>
  <WorkflowUpdateCardStatusOne v-if="state.step === 0"/>
  <WorkflowUpdateCardStatusTwo v-if="state.step === 1"/>
  <WorkflowUpdateCardStatusThree v-if="state.step === 2"/>
</WorkflowBase>
</template>
