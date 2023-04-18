<template>
  <div class="slide bundleCont">
    <div class="slideBox">
      <div v-for="(item, idx) in slideData" :key="idx" class="slideList" :class="item.cname">
        <img :src="item.url" :alt="item.alt">
      </div>
    </div>
    <div class="slideNum">
      <p><span class="nowNum" id="nowNum"></span> / <span class="allNum" id="allNum"></span></p>
    </div>
    <div class="slideBtnBox">
      <button type="button" class="slideBtn slidePrev"  @click="slideSet(nowIdx - 1, $event)">이전</button>
      <button type="button" class="slideBtn slideNext" @click="slideSet(nowIdx + 1, $event)">다음</button>
    </div>
    <div class="slidePage">
      <ul class="slidePageList">
          <li v-for="(item, idx) in slideData" :key="idx">
            <button type="button">{{ idx + 1 }}</button>
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
    {cname:'slide1', url:'/img/1.png', alt:'슬라이드1'},
    {cname:'slide2', url:'/img/2.png', alt:'슬라이드2'},
    {cname:'slide3', url:'/img/3.png', alt:'슬라이드3'},
    {cname:'slide4', url:'/img/4.png', alt:'슬라이드4'}
  ]

  let slideBox:HTMLElement;
  let slideList:HTMLCollection;
  let slideW:number;
  let nowNum:HTMLElement;
  let slidePage:NodeList;
  let nowIdx:Ref<number> = ref(0);

  onMounted(() => {
    const slide = document.querySelector('.slide') as HTMLElement;
    slideBox = document.querySelector('.slideBox') as HTMLElement;
    slideList = document.getElementsByClassName('slideList') as HTMLCollection;
    slideW = slide.offsetWidth;
    nowNum = document.getElementById('nowNum') as HTMLElement;
    const allNum = document.getElementById('allNum') as HTMLElement;

    slideSet(0)
    
    if(slideBox instanceof HTMLElement) {
      slideBox.style.width = (slideW * slideList.length) + 'px';
    }

    for (let a = 0; a < slideList.length; a++) {
      (slideList[a] as HTMLElement).style.width = slideW + 'px'
    }

    allNum.innerHTML = (slideList.length).toString()

  })

  function slideSet(slideIdx:number, event?:MouseEvent) {
    const slideMove = slideIdx * slideW;
    const slidePrev = document.querySelector('.slidePrev') as HTMLButtonElement;
    const slideNext = document.querySelector('.slideNext') as HTMLButtonElement;
    slidePage = document.querySelectorAll('.slidePageList li') as NodeList;

    slideList[slideIdx].classList.add('slideOn');
    (slidePage[slideIdx] as HTMLElement).classList.add('slideBon');
    slideBox.style.transform = 'translateX(-'+slideMove+'px)';

    nowNum.innerHTML = (slideIdx + 1).toString()

    if (slideIdx > 0 && slideIdx < slideList.length - 1) {
      nowIdx.value = slideIdx;
      slidePrev.disabled = false;
      slideNext.disabled = false;
    } else if (slideIdx === 0) {
      nowIdx.value = 0;
      slidePrev.disabled = true;
    } else if (slideIdx === slideList.length - 1) {
      nowIdx.value = slideList.length - 1;
      slideNext.disabled = true;
    }

    if (event?.target instanceof HTMLButtonElement) {
      if (event.target.classList.contains('slideNext')) {
        slideList[slideIdx - 1].classList.remove('slideOn');
        (slidePage[slideIdx - 1] as HTMLElement).classList.remove('slideBon');
      } else {
        slideList[slideIdx + 1].classList.remove('slideOn');
        (slidePage[slideIdx + 1] as HTMLElement).classList.remove('slideBon');
      }
    }
  }

</script>