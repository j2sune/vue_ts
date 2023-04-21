<template>
  <div class="tooltip" :class="toolOpen == true ? 'toolOn' : ''">
    <p class="toolTxt">설명 보기</p>
    <button type="button" class="toolBtn" @click="toolControl($event)">?</button>
    <div class="toolpopBox">
      좋아하는 맛이나 향을 더해도 OK<br />소중한 이들을 위한 선물로도 좋아요
      <button type="button" class="tooltipClose" @click="toolControl($event)">닫기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import type { Ref } from 'vue'
  import { tooltip } from '../../assets/ts/main'

  let toolOpen:Ref<boolean> = ref(false)

  onMounted(() => {
    tooltip()
  })

  function toolControl(e:MouseEvent) {
  if (e.target instanceof HTMLButtonElement) {
    if (e.target.classList.contains('toolBtn')) {
      toolOpen.value = true;
    } else {
      toolOpen.value = false;
    }
  }
}

</script>