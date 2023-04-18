<template>
  <div class="wrap">
    <defaultHeader v-if="props.headerShow"></defaultHeader>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import defaultHeader from './headers/headerView.vue'
  import type { Ref } from 'vue';
  const props = defineProps<{
    headerShow:Ref<boolean>
  }>()

</script>