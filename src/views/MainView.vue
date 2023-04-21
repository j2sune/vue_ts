<template>
  <div class="container">
    <div class="bundle" v-for="(bdItem, idx) in codeList" :key="idx">
      <h2 class="mainTit">{{ bdItem.mainTit }}</h2>
      <button v-if="bdItem.popInner != undefined" type="button" class="about popOpen" @click="popOpen($event)">작업 방식</button>
      <component :is="bdItem.componentName" class="bundleCont"></component>
			<component :is="search" v-if="bdItem.componentName == tooltip"></component>
      <popCont v-if="bdItem.popInner != undefined" :codeList="bdItem.popInner" :nowScroll="ref(nowScroll)"></popCont>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component, Ref } from 'vue'
import { ref } from 'vue'
import popCont from '../components/popupCont.vue'
import slide from '../components/scriptCont/silde.vue'
import tab from '../components/scriptCont/tab.vue'
import arrcodion from '../components/scriptCont/arrcodion.vue'
import tooltip from '../components/scriptCont/tooltip.vue'
import search from '../components/scriptCont/search.vue'
import sortTable from '../components/scriptCont/sortTable.vue'
import scrollTab from '../components/scriptCont/scrollTab.vue'
import lazyLoad from '../components/scriptCont/lazyLoad.vue' /* 여기까지 */
import dropDown from '../components/scriptCont/dropDown.vue' 
import bookmark from '../components/scriptCont/bookmark.vue'
import sortInputTable from '../components/scriptCont/sortInputTable.vue'
import toast from '../components/scriptCont/toast.vue'
import layerPop from '../components/scriptCont/layerPop.vue'
import category from '../components/scriptCont/category.vue'

type codeListType = {
  componentName: Component
  mainTit: string
  popInner?: popInn[]
}

type popInn = {
  tit: string
  cont: string
  img?: string
  alt?: string
}

const body = document.getElementsByTagName('body')[0]
let nowScroll: Ref<number> = ref(0)

function popOpen(e: MouseEvent) {
  if (e.target instanceof HTMLElement) {
    nowScroll.value = window.scrollY - 90
    body.style.top = '-' + nowScroll.value + 'px'
    body.classList.add('scrollFix')
    e.target.closest('.bundle')?.lastElementChild?.classList.add('open')
  }
}

const codeList: codeListType[] = [
  {
    componentName: slide,
    mainTit: '🖼️ 이미지 슬라이드',
    popInner: [
      {
        tit: '1. width 속성을 이용한 슬라이드 전체 넓이 구하기',
        cont: '(콘텐츠 가로 길이 * 갯수) 로 총 넓이 구해준다.',
        img: '/img/slide1.png',
        alt: '슬라이드의 너비 구하기'
      },
      {
        tit: '2. 슬라이드 제어 함수 생성',
        cont: 'translateX 속성을 이용, idx 라는 매개변수를 사용해서 현재 페이지와 클래스 제어 할 수 있도록 함수 생성 한다.',
        img: '/img/slide2.png',
        alt: '슬라이드 제어 함수 생성'
      },
      {
        tit: '3. 클릭 이벤트 적용',
        cont: '클릭할 때 매개변수를 담아서 제어 함수를 실행하고, 삽입되어있던 클래스를 지워준다. 슬라이드의 각 끝에 도달했을때는 작동하지 않도록 조건을 걸어준다.',
        img: '/img/slide3.png',
        alt: '슬라이드 작동'
      }
    ]
  },
  {
    componentName: tab,
    mainTit: '🚗 탭메뉴',
    popInner: [
      {
        tit: '1. 클릭한 객체의 인덱스 번호를 이용한 함수 생성',
        cont: '객체 갯수만큼 함수를 걸고 클릭할 때 마다 인덱스를 받은 이벤트리스너를 실행한다.',
        img: '/img/tab1.png',
        alt: '탭메뉴 작업 코드'
      }
    ]
  },
  {
    componentName: arrcodion,
    mainTit: '🪗 아코디언',
    popInner: [
      {
        tit: '작업 요건',
        cont: '아코디언은 토글 형태로 작동, 여러개 열려있을 수 있으며 오픈 할 때 클릭한 객체의 상단으로 스크롤이 이동한다.'
      },
      {
        tit: '1. 클릭 이벤트 작성',
        cont: '아코디언은 여러개 열려있을 수 있으며 오픈 할 때 클릭한 객체의 상단으로 스크롤이 이동한다.',
        img: '/img/arrco1.png',
        alt: '아코디언 클릭 이벤트'
      },
      {
        tit: '2. 이벤트 상세 구현',
        cont: '클릭 시 active 의 유무를 확인해서 토글 이벤트를 구현하고, active가 없는 객체 클릭 시 그 객체를 스크롤 제일 상단으로 이동시킨다. 아코디언이 열릴 때의 애니메이션을 위해 자식 갯수를 구해 높이값을 직접 설정해줬다.',
        img: '/img/arrco2.png',
        alt: '아코디언 세부 구현'
      },
      {
        tit: '3. 전체 열림, 닫힘 구현 (아코디언2)',
        cont: '전체 열림 클릭 시 버튼의 텍스트 변경 (닫힘 클릭에도 동일), 모든 아코디언 한 번에 열리고 닫히게 구현, 아코디언이 열릴 때의 애니메이션을 위해 자식 갯수를 구해 높이값을 직접 설정해줬다.',
        img: '/img/arrco3.png',
        alt: '아코디언 전체 열림, 닫힘'
      }
    ]
  },
  {
    componentName: tooltip,
    mainTit: '🗨️ 툴팁 & 검색 박스',
    popInner: [
      {
        tit: '작업 요건',
        cont: '스크롤에 따라서 가려지지 않도록 스스로 위치 이동'
      },
      {
        tit: '1. 툴팁 : scroll 이벤트를 이용한 제어',
        cont: 'getBoundingCilentRect() : 현재 스크롤 위치에서 콘텐츠까지의 거리',
        img: '/img/tooltip1.png',
        alt: '툴팁 제어 이벤트'
      },
      {
        tit: '2. 검색 박스 : keyup 이벤트를 이용한 제어',
        cont: 'keyup() : 키보드 입력 후 손을 뗐을 때 작동',
        img: '/img/search1.png',
        alt: '검색 박스 제어 이벤트'
      }
    ]
  },
  {
    componentName: sortTable,
    mainTit: '🪄 소팅 테이블',
    popInner: [
      {
        tit: '작업 요건',
        cont: '테이블의 자료는 배열로 되어있어 초기 로드 시 자동으로 구현되며, th 클릭 시 해당 열 정렬, 클릭 시 정렬 순서 : 오름차순 -> 내림차순 -> 초기값 반복'
      },
      {
        tit: '1. 테이블 구조 생성',
        cont: '정렬 구분자가 될 id 값을 삽입하여 버튼 생성',
        img: '/img/sort1.png',
        alt: '테이블 구조 생성'
      },
      {
        tit: '2. 배열 자료 생성 후 화면에 구현',
        cont: 'innerHTML 을 이용한 배열의 html화',
        img: '/img/sort2.png',
        alt: '배열 DOM 구현'
      },
      {
        tit: '3. 다른 행을 눌렀을 때 정렬 순서가 혼동되는 일이 없도록 정렬 선언',
        cont: '클릭에 따른 유동적인 변수값을 활용한다.',
        img: '/img/sort3.png',
        alt: '배열 DOM 구현'
      },
      {
        tit: '4. sortTable() 생성 - 생성 시 꼭 필요한 변수 제어',
        cont: '현재 클릭한 행의 id와 마지막으로 정렬 진행되었던 행의 id를 비교하며 정렬 진행한다.',
        img: '/img/sort4.png',
        alt: 'sortTable() - 변수 제어'
      },
      {
        tit: '4. sortTable() 생성 - number 타입에서의 데이터 정렬',
        cont: 'sort(), 클릭에 따른 유동적인 변수값을 활용한다 22',
        img: '/img/sort5.png',
        alt: 'sortTable() - 숫자 타입'
      },
      {
        tit: '4. sortTable() 생성 - string 타입에서의 데이터 정렬',
        cont: 'sort(), 클릭에 따른 유동적인 변수값을 활용한다 22, number 타입과 정렬 방식만 다르고 다 동일하다',
        img: '/img/sort6.png',
        alt: 'sortTable() - 문자 타입'
      }
    ]
  },
  {
    componentName: scrollTab,
    mainTit: '🚡 스크롤 탭',
    popInner: [
      {
        tit: '작업 요건',
        cont: '현재 스크롤 위치에 해당 되는 탭은 active 되어야 하며, 탭 클릭 시 클릭한 탭이 active 됨과 동시에 해당 탭의 위치로 스크롤 이동'
      },
      {
        tit: '1. 재미요소',
        cont: '기본 css img width 속성이 100%인데 세로로 긴 이미지의 경우 너무 많은 영역을 차지하기 때문에 width값 조정 코드 추가',
        img: '/img/sctab1.png',
        alt: '이미지 사이즈 조정'
      },
      {
        tit: '2. 스크롤 이벤트 범위 지정',
        cont: '스크롤에 따라 반응 해야하기 때문에 너무 많은 이벤트 발생을 방지하고자 콘텐츠 범위 안에서만 작동하도록 설정한다.',
        img: '/img/sctab2.png',
        alt: '이벤트 범위 설정'
      },
      {
        tit: '3. 탭 이동과 스크롤 활성화 구현',
        cont: '스크롤 위치에 따라서 active를 미리 걸어주면 클릭 이벤트는 클릭 시 이동만 걸어줘도 알아서 active 들어오고 빠진다.',
        img: '/img/sctab3.png',
        alt: '탭 이동, 스크롤 활성화'
      }
    ]
  },
  {
    componentName: lazyLoad,
    mainTit: '📷 레이지로딩',
    popInner: [
      {
        tit: '작업 요건',
        cont: 'Lazy-loading : 페이지를 읽어들이는 시점에 중요하지 않은 리소스들을 스크롤이 도달했을 때 로딩, 반드시 이미지 크기 속성값이 미리 지정되어있어야 사용 가능하다.'
      },
      {
        tit: '1. 레이지로딩을 위한 html 세팅',
        cont: 'src 속성을 집어넣지 않고, data-lazy 라는 속성을 이용해서 이미지 주소를 설정해준다.',
        img: '/img/lazy1.png',
        alt: '레이지로딩을 위한 html 세팅'
      },
      {
        tit: '2. 레이지로딩 구현',
        cont: 'IntersectionObserver API 사용해서 구현하기, 함수 생성 시 화살표 함수 사용했다. 자세한 설명은 주석 확인',
        img: '/img/lazy2.png',
        alt: '레이지로딩 구현'
      }
    ]
  },
  {
    componentName: dropDown,
    mainTit: '🛝 드롭다운 selectBox',
    popInner: [
      {
        tit: '작업 요건',
        cont: 'Lazy-loading : 페이지를 읽어들이는 시점에 중요하지 않은 리소스들을 스크롤이 도달했을 때 로딩, 반드시 이미지 크기 속성값이 미리 지정되어있어야 사용 가능하다.'
      },
      {
        tit: '1. 레이지로딩을 위한 html 세팅',
        cont: 'src 속성을 집어넣지 않고, data-lazy 라는 속성을 이용해서 이미지 주소를 설정해준다.',
        img: '/img/lazy1.png',
        alt: '레이지로딩을 위한 html 세팅'
      },
      {
        tit: '2. 레이지로딩 구현',
        cont: 'IntersectionObserver API 사용해서 구현하기, 함수 생성 시 화살표 함수 사용했다. 자세한 설명은 주석 확인',
        img: '/img/lazy2.png',
        alt: '레이지로딩 구현'
      }
    ]
  },
  {
    componentName: bookmark,
    mainTit: '🔖 북마크'
  },
  {
    componentName: sortInputTable,
    mainTit: '⌨️ 소팅테이블 + 입력 데이터'
  },
  {
    componentName: toast,
    mainTit: '🍞 토스트알림'
  },
  {
    componentName: layerPop,
    mainTit: '⚡ 레이어팝업'
  },
  {
    componentName: category,
    mainTit: '📚 카테고리'
  }
]
</script>
<style lang="scss" scoped>
@import './../assets/layout';
</style>
