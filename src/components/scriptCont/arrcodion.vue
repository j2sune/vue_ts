<template>
  <div class="accordionBox bundleCont">
    <ul class="accordion">
      <li class="accordionSub" v-for="(item, idx) in arrcoList" :key="idx">
        <button href="javascript:;" class="accordionTit" @click="arrcodion($event)">{{ item.arrcoTit }}</button>
        <ul class="accordionsub2">
          <li v-for="(item2, idx2) in item.arrcoCont" :key="idx2">
            <button href="javascript:;">{{ item2 }}</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

  type arrcoType = {
    arrcoTit:string,
    arrcoCont:string[]
  }

  const arrcoList:arrcoType[] = [
      {
        arrcoTit: '1',
        arrcoCont: ['1-1', '1-2', '1-3']
      },
      {
        arrcoTit: '2',
        arrcoCont: ['2-1', '2-2', '2-3', '2-4']
      },
      {
        arrcoTit: '3',
        arrcoCont: ['3-1', '3-2', '3-3', '3-4', '3-5']
      }
  ]
      
  function arrcodion(event:MouseEvent) {
    if (event.target != null && event.target instanceof HTMLButtonElement) {
      const arrcoSub = event.target.closest('.accordionSub')
      const arrcoSubTop = arrcoSub?.getBoundingClientRect().top;
      const nowScroll = window.pageYOffset;

      if (arrcoSub?.classList.contains('aaactive')) {
        arrcoSub?.classList.remove('aaactive')
        if (arrcoSub?.lastElementChild != null) {
          (arrcoSub.lastElementChild as HTMLElement).style.height = '0px';
        }
      } else {
        arrcoSub?.classList.add('aaactive')
        if (arrcoSub?.lastElementChild != null) {
          (arrcoSub.lastElementChild as HTMLElement).style.height = (arrcoSub.lastElementChild.children.length  * 31) +'px';
          if (arrcoSubTop != undefined) {
            window.scrollTo(0, arrcoSubTop + nowScroll - 90)
          }
        }
      }
    }
  }
</script>
