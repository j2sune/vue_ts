<template>
  <div class="lazyload">
    <img data-lazy="/img/lazy1.jpg" alt="lazy1" class="lazy" />
    <img data-lazy="/img/lazy2.jfif" alt="lazy2" class="lazy" />
    <img data-lazy="/img/lazy3.jpg" alt="lazy3" class="lazy" />
    <img data-lazy="/img/lazy4.jfif" alt="lazy4" class="lazy" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { lazyLoad } from './../../assets/ts/main'

  onMounted(() => {
    lazyLoad()
  })
</script>