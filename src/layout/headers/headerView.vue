<template>
  <header>
    <h1><a href="javascript:;">Vue</a></h1>
    <div class="mnavBtnBox">
        <button type="button" class="mnavBtn mnavOpen">열기</button>
    </div>
    <nav class="gnb">
        <ul class="gnbList">
            <li v-for="(item, idx) in menu" :key="idx">
              <a href="javascript:;" @mouseover=gnbOn($event) @mouseleave=gnbOver($event)>{{ item.dep1 + (idx + 1)}}</a>
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

  type menuType = {
    dep1:string,
    dep2:string[]
  }

  function gnbOn(e:MouseEvent) {
    if (e.target instanceof HTMLElement) {
      e.target.closest('li')?.classList.add('on')
      const dep2 = e.target.closest('li')?.lastElementChild
      if (dep2 instanceof HTMLElement) {
        dep2.style.height = dep2.children.length * 36 + 'px';
      }
    }
  }
  function gnbOver(e:MouseEvent) {
    if (e.target instanceof HTMLElement) {
      e.target.closest('li')?.classList.remove('on')
      const dep2 = e.target.closest('li')?.lastElementChild
      if (dep2 instanceof HTMLElement) {
        dep2.style.height = 0 + 'px';
      }
    }
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