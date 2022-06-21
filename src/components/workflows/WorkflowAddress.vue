<script lang="ts" setup>
/* eslint-disable */
import { ref } from 'vue';
import WorkflowBase from './WorkflowBase.vue';
import { WORKFLOW } from '../../constants/events';
import { useWorkflow } from '../../composable/use_workflow';
import WorkflowAddressOne from './WorkflowAddressOne.vue';
import WorkflowAddressTwo from './WorkflowAddressTwo.vue';
import WorkflowAddressThree from './WorkflowAddressThree.vue';

const { state, handleNextStep, handlePrevStep } = useWorkflow(2);

type WorkflowAddressProps = {
  color: string;
}

const props = defineProps<WorkflowAddressProps>();
// Why do i need to ref global constants, i have no idea eitehr
const EVENTS = ref({
  WORKFLOW_NEXT: WORKFLOW.WORKFLOW_NEXT,
  WORKFLOW_PREV: WORKFLOW.WORKFLOW_PREV,
});

</script>
<template>
<WorkflowBase
  title="ADDRESS"
  footer="footer"
  @[EVENTS.WORKFLOW_NEXT]="handleNextStep"
  @[EVENTS.WORKFLOW_PREV]="handlePrevStep"
>
  <p>Item passed in from where it was initiated: {{props.color}}</p>
  <WorkflowAddressOne v-if="state.step === 0"/>
  <WorkflowAddressTwo v-if="state.step === 1"/>
  <WorkflowAddressThree v-if="state.step === 2"/>
</WorkflowBase>
</template>
