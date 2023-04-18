<template>
  <component :is="defaultLayout" :headerShow="headerShow">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { ref, watch } from 'vue';
  import type { Ref } from 'vue';
  import defaultLayout from './defaultLayout.vue'
  
  const route = useRoute();
  let headerShow :Ref<boolean> = ref(false)

  watch(route, (to) => {
    if(to.path != '/') {
      headerShow.value = true
    } else {
      headerShow.value = false
    }
  })
</script>