<script setup lang="ts">
// types
type GlobalNavProps = {
  title: string;
}

const props = defineProps<GlobalNavProps>()

</script>

<template>
  <div>{{props.title}}</div>
</template>
