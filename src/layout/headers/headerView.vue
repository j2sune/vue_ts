<template>
  <header>
    <h1><a href="javascript:;">Vue</a></h1>
    <div class="mnavBtnBox">
        <button type="button" class="mnavBtn mnavOpen">열기</button>
    </div>
    <nav class="gnb">
        <ul class="gnbList">
            <li v-for="(item, idx) in menu" :key="idx">
              <a href="javascript:;" @mouseover=gnb($event) @mouseleave=gnb($event)>{{ item.dep1 + (idx + 1)}}</a>
              <ul class="gnbListSub">
                <li v-for="(item2, idx) in item.dep2" :key="idx">
                  <a href="javascript:;">{{ item2 }}</a>
                </li>
              </ul>
            </li>
        </ul>
        <div class="mnavBtnBox">
            <button type="button" class="mnavBtn mnavClose">닫기</button>
        </div>
    </nav>
    <div class="dim"></div>
  </header>
</template>

<script setup lang="ts">

  import { gnb } from './../../assets/ts/main'

  type menuType = {
    dep1:string,
    dep2:string[]
  }
  
  const menu:menuType[] = [
    {
      dep1: '메뉴',
      dep2: ['sub1-1', 'sub1-2', 'sub1-3', 'sub1-4', 'sub1-5']
    },
    {
      dep1: '메뉴',
      dep2: ['sub2-1']
    },
    {
      dep1: '메뉴',
      dep2: ['sub3-1', 'sub3-2']
    },
    {
      dep1: '메뉴',
      dep2: ['sub4-1', 'sub4-2', 'sub4-3', 'sub4-4', 'sub4-5']
    },
    {
      dep1: '메뉴',
      dep2: ['sub5-1']
    },
    {
      dep1: '메뉴',
      dep2: ['sub6-1']
    }
]
</script>