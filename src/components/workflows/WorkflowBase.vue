<script lang="ts" setup>
import { defineProps } from 'vue';
import { WORKFLOW_EVENTS } from '../../constants/events';

type WorkflowBaseProps = {
  title: string;
  footer: string;
}

const props = defineProps<WorkflowBaseProps>();
defineEmits([WORKFLOW_EVENTS.WORKFLOW_NEXT])

</script>
<template>
<h3>{{props.title}}</h3>
<slot>slot content</slot>
<p @click="$emit(WORKFLOW_EVENTS.WORKFLOW_NEXT)">{{props.footer}}</p>
</template>
