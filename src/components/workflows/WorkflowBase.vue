<script lang="ts" setup>
import { defineProps } from 'vue';
import { WORKFLOW_EVENTS } from '../../constants/events';

type WorkflowBaseProps = {
  title: string;
  footer: string;
}

const props = defineProps<WorkflowBaseProps>();
defineEmits([WORKFLOW_EVENTS.WORKFLOW_NEXT, WORKFLOW_EVENTS.WORKFLOW_PREV])

</script>
<template>
<h3>{{props.title}}</h3>
<slot>slot content</slot>
<p>{{props.footer}}</p>
<p @click="$emit(WORKFLOW_EVENTS.WORKFLOW_PREV)">prev</p>
<p @click="$emit(WORKFLOW_EVENTS.WORKFLOW_NEXT)">next</p>
</template>
