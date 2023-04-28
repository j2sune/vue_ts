<template>
  <div class="slide">
    <div class="slideBox">
      <div v-for="(item, idx) in slideData" :key="idx" class="slideList" :class="item.cname">
        <img :src="item.url" :alt="item.alt">
      </div>
    </div>
    <div class="slideNum">
      <p><span class="nowNum" id="nowNum">{{ nowIdx + 1 }}</span> / <span class="allNum" id="allNum">{{ slideData.length }}</span></p>
    </div>
    <div class="slideBtnBox">
      <button type="button" class="slideBtn slidePrev"  @click="slideSet(nowIdx - 1, $event)">이전</button>
      <button type="button" class="slideBtn slideNext" @click="slideSet(nowIdx + 1, $event)">다음</button>
    </div>
    <div class="slidePage">
      <ul class="slidePageList">
          <li v-for="(item, idx) in slideData" :key="idx">
            <button type="button" @click="slideSet(idx, $event)">{{ idx + 1 }}</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

  import type { Ref } from 'vue'
  import { onMounted, ref } from 'vue'

  type dataType = {
    cname:string,
    url:string,
    alt:string
  }

  const slideData:dataType[] = [
    {cname:'slide1', url:'img/1.png', alt:'슬라이드1'},
    {cname:'slide2', url:'img/2.png', alt:'슬라이드2'},
    {cname:'slide3', url:'img/3.png', alt:'슬라이드3'},
    {cname:'slide4', url:'img/4.png', alt:'슬라이드4'}
  ]

  let slideBox:HTMLElement | null;
  let slideList:HTMLCollection;
  let slideW:number;
  let slidePage:NodeList;
  let nowIdx:Ref<number> = ref(0);

  onMounted(() => {
    const slide:HTMLElement | null = document.querySelector('.slide');
    slideBox = document.querySelector('.slideBox');
    slideList = document.getElementsByClassName('slideList');
    if (slide != null) {
      slideW = slide.offsetWidth;
    }

    slideSet(nowIdx.value)
    
    if(slideBox instanceof HTMLElement) {
      slideBox.style.width = (slideW * slideList.length) + 'px';
    }

    for (let a = 0; a < slideList.length; a++) {
      (slideList[a] as HTMLElement).style.width = slideW + 'px'
    }

  })

  function slideSet(slideIdx:number, event?:MouseEvent) {
    const slideMove:number = slideIdx * slideW;
    const slidePrev:HTMLButtonElement | null = document.querySelector('.slidePrev');
    const slideNext:HTMLButtonElement | null = document.querySelector('.slideNext');
    slidePage = document.querySelectorAll('.slidePageList li');

    slideList[slideIdx].classList.add('slideOn');
    (slidePage[slideIdx] as HTMLElement).classList.add('slideBon');
    if(slideBox instanceof HTMLElement) {
      slideBox.style.transform = 'translateX(-'+slideMove+'px)';
    }

    if (slideIdx > 0 && slideIdx < slideList.length - 1) {
      nowIdx.value = slideIdx;
      if (slidePrev != null && slideNext != null) {
        slidePrev.disabled = false;
        slideNext.disabled = false;
      }
    } else if (slideIdx === 0) {
      nowIdx.value = 0;
      if (slidePrev != null && slideNext != null) {
        slidePrev.disabled = true;
        slideNext.disabled = false;
      }
    } else if (slideIdx === slideList.length - 1) {
      nowIdx.value = slideList.length - 1;
      if (slidePrev != null && slideNext != null) {
        slidePrev.disabled = false;
        slideNext.disabled = true;
      }
    }

    if (event?.target instanceof HTMLButtonElement) {
      if (event.target.classList.contains('slideNext')) {
        slideList[slideIdx - 1].classList.remove('slideOn');
        (slidePage[slideIdx - 1] as HTMLElement).classList.remove('slideBon');
      } else if (event.target.classList.contains('slidePrev')) {
        slideList[slideIdx + 1].classList.remove('slideOn');
        (slidePage[slideIdx + 1] as HTMLElement).classList.remove('slideBon');
      } else {
        slidePage.forEach((item, idx) => {
          if (idx != slideIdx) {
            (item as HTMLElement).classList.remove('slideBon')
            slideList[idx].classList.remove('slideOn')
          }
        })
      }
    }
  }

</script>