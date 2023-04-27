<template>
  <div class="flickingWrap">
    <div class="flickingBox">
        <Flicking :options="{ align: 'prev', circular: true, moveType: ['strict', {count:1}], changeOnHold: true }" :plugins="plugins" @will-change="e => willChange(e.index, e.direction)" @changed="e => onChenge(e.index)" class="flickingBox"> <!-- circular : 루프 -->
        <div class="panel" v-for="(item, idx) in flickingList" :key="idx" :style="{backgroundColor: item.color}">
          {{ item.cont }}
        </div>
      </Flicking>
    </div>
    <div class="scrollBar"><div class="now"></div></div>
  </div>
</template>

<script setup lang="ts">
  import Flicking from '@egjs/vue3-flicking'
  import { AutoPlay } from "@egjs/flicking-plugins";
  import { onMounted } from 'vue'

  onMounted(() => {
    bar = document.getElementsByClassName('now');
    contentWidth = 100 / flickingList.length;
    (bar[0] as HTMLElement).style.width = contentWidth + '%';
  })

  const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];

  type flick = {
    cont:string,
    color:string
  }

  const flickingList:flick[] = [
    {cont:'1', color:'skyblue'},
    {cont:'2', color:'pink'},
    {cont:'3', color:'beige'},
    {cont:'4', color:'orange'},
  ]

  let bar:HTMLCollection
  let contentWidth:number
  let prevIdx:number
  let realCont = flickingList.length - 1

  function willChange(e:number, d:string) {

    (bar[0] as HTMLElement).style.left = contentWidth * e + '%';

    if ((prevIdx == 0 && d == 'PREV') || (prevIdx == realCont && d == 'NEXT') || (e == 0 && d == 'PREV' && prevIdx != 1)) {
      (bar[0] as HTMLElement).style.transition = '0s';
    } 
  }

  function onChenge(e:number) {
    prevIdx = e
    if (e == realCont || e == 0) {
      (bar[0] as HTMLElement).style.transition = '0.6s';
    } 
  }
</script>

<style>
  @import '@/../node_modules/@egjs/vue3-flicking/dist/flicking.css';
</style>