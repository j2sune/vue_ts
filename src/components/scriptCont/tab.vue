<template>
  <div class="tab bundleCont">
    <ul class="tabList">
      <li v-for="(item, idx) in tabList" :key="idx" :class="idx == activeTab ? 'tabOn' : ''">
        <button href="javascript:;" class="tabMenu" @click="tabControl(idx, $event)">tab{{ idx + 1 }}</button>
      </li>
    </ul>
    <div class="tabCont" v-if="activeTab === 0">{{ tabList[0].tabTit }}</div>
    <div class="tabCont" v-if="activeTab === 1">{{ tabList[1].tabTit }}</div>
    <div class="tabCont" v-if="activeTab === 2">{{ tabList[2].tabTit }}</div>
  </div>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { ref } from 'vue'

  let activeTab:Ref<number> = ref(0);

  type tabType = {
    tabIdx?:number,
    tabTit:string
  }

  const tabList:tabType[] = [
    {tabTit:'lorem1'},
    {tabTit:'lorem2'},
    {tabTit:'lorem3'}
  ]

  function tabControl(e:number, event:MouseEvent) {
    const tabList = document.querySelectorAll('.tabList li') as NodeList
    activeTab.value = e
    if (event.target instanceof HTMLButtonElement) {
      tabList.forEach((item) => {
        (item as Element).classList.remove('tabOn')
      })
      event.target.closest('li')?.classList.add('tabOn')
    }
  }
</script>