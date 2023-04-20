<template>
  <div class="container">
    <div class="bundle" v-for="(bdItem, idx) in codeList" :key="idx">
      <h2 class="mainTit">{{ bdItem.mainTit }}</h2>
      <button type="button" class="about popOpen" @click="popOpen($event)">작업 방식</button>
      <component :is="bdItem.componentName"></component>
			<component :is="search" v-if="bdItem.componentName == tooltip"></component>
      <popCont :codeList="bdItem.popInner" :nowScroll="ref(nowScroll)"></popCont>
    </div>
    <div class="bundle">
      <h2 class="mainTit">🚡 스크롤 탭</h2>
      <button type="button" class="about popOpen">작업 방식</button>
      <div class="tab2 bundleCont">
        <ul class="tab2box">
          <li class="tab2list">
            <a href="javascript:;" class="tab2tab">1번</a>
            <div class="tab2cont">
              <img src="/img/t1.jpg" alt="1번" class="tab2img" />
              <div class="tab2more">
                <p class="tab2txt">제목</p>
                <p class="tab2subt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis
                  quam ducimus velit laudantium similique quo quos, harum, commodi accusantium
                  officia ex a libero animi labore nesciunt laborum eum?
                </p>
              </div>
            </div>
          </li>
          <li class="tab2list">
            <a href="javascript:;" class="tab2tab">2번</a>
            <div class="tab2cont">
              <img src="/img/t2.jpeg" alt="2번" class="tab2img" />
              <div class="tab2more">
                <p class="tab2txt">제목</p>
                <p class="tab2subt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis
                  quam ducimus velit laudantium similique quo quos, harum, commodi accusantium
                  officia ex a libero animi labore nesciunt laborum eum?
                </p>
              </div>
            </div>
          </li>
          <li class="tab2list">
            <a href="javascript:;" class="tab2tab">3번</a>
            <div class="tab2cont">
              <img src="/img/t3.jpeg" alt="3번" class="tab2img" />
              <div class="tab2more">
                <p class="tab2txt">제목</p>
                <p class="tab2subt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis
                  quam ducimus velit laudantium similique quo quos, harum, commodi accusantium
                  officia ex a libero animi labore nesciunt laborum eum?
                </p>
              </div>
            </div>
          </li>
          <li class="tab2list">
            <a href="javascript:;" class="tab2tab">4번</a>
            <div class="tab2cont">
              <img src="/img/t4.jpg" alt="4번" class="tab2img" />
              <div class="tab2more">
                <p class="tab2txt">제목</p>
                <p class="tab2subt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis
                  quam ducimus velit laudantium similique quo quos, harum, commodi accusantium
                  officia ex a libero animi labore nesciunt laborum eum?
                </p>
              </div>
            </div>
          </li>
          <li class="tab2list">
            <a href="javascript:;" class="tab2tab">5번</a>
            <div class="tab2cont">
              <img src="/img/t5.jpg" alt="5번" class="tab2img" />
              <div class="tab2more">
                <p class="tab2txt">제목</p>
                <p class="tab2subt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis
                  quam ducimus velit laudantium similique quo quos, harum, commodi accusantium
                  officia ex a libero animi labore nesciunt laborum eum?
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="popup">
        <div class="popDim"></div>
        <div class="popCont">
          <div class="popTop">
            <h3 class="mainWork">주요 작업</h3>
            <button type="button" class="popClose">닫기</button>
          </div>
          <div class="aboutBox">
            <ul class="aboutList">
              <li>
                <p class="aboutTit">작업 요건</p>
                <p>
                  현재 스크롤 위치에 해당 되는 탭은 active 되어야 하며, 탭 클릭 시 클릭한 탭이
                  active 됨과 동시에 해당 탭의 위치로 스크롤 이동
                </p>
              </li>
              <li>
                <p class="aboutTit">1. 재미요소</p>
                <p>
                  기본 css img width 속성이 100%인데 세로로 긴 이미지의 경우 너무 많은 영역을
                  차지하기 때문에 width값 조정 코드 추가
                </p>
                <img src="/img/sctab1.png" alt="이미지 사이즈 조정" />
              </li>
              <li>
                <p class="aboutTit">2. 스크롤 이벤트 범위 지정</p>
                <p>
                  스크롤에 따라 반응 해야하기 때문에 너무 많은 이벤트 발생을 방지하고자 콘텐츠 범위
                  안에서만 작동하도록 설정한다.
                </p>
                <img src="/img/sctab2.png" alt="이벤트 범위 설정" />
              </li>
              <li>
                <p class="aboutTit">3. 탭 이동과 스크롤 활성화 구현</p>
                <p>
                  스크롤 위치에 따라서 active를 미리 걸어주면 클릭 이벤트는 클릭 시 이동만 걸어줘도
                  알아서 active 들어오고 빠진다.
                </p>
                <img src="/img/sctab3.png" alt="탭 이동, 스크롤 활성화" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bundle">
      <h2 class="mainTit">📷 레이지로딩</h2>
      <button type="button" class="about popOpen">작업 방식</button>
      <div class="lazyload buldleCont">
        <img data-lazy="/img/lazy1.jpg" alt="lazy1" class="lazy" />
        <img data-lazy="/img/lazy2.jfif" alt="lazy2" class="lazy" />
        <img data-lazy="/img/lazy3.jpg" alt="lazy3" class="lazy" />
        <img data-lazy="/img/lazy4.jfif" alt="lazy4" class="lazy" />
      </div>
      <div class="popup">
        <div class="popDim"></div>
        <div class="popCont">
          <div class="popTop">
            <h3 class="mainWork">주요 작업</h3>
            <button type="button" class="popClose">닫기</button>
          </div>
          <div class="aboutBox">
            <ul class="aboutList">
              <li>
                <p class="aboutTit">작업 요건</p>
                <p>
                  Lazy-loading : 페이지를 읽어들이는 시점에 중요하지 않은 리소스들을 스크롤이
                  도달했을 때 로딩
                </p>
                <p>반드시 이미지 크기 속성값이 미리 지정되어있어야 사용 가능하다.</p>
              </li>
              <li>
                <p class="aboutTit">1. 레이지로딩을 위한 html 세팅</p>
                <p>
                  src 속성을 집어넣지 않고, data-lazy 라는 속성을 이용해서 이미지 주소를 설정해준다.
                </p>
                <img src="/img/lazy1.png" alt="레이지로딩을 위한 html 세팅" />
              </li>
              <li>
                <p class="aboutTit">2. 레이지로딩 구현</p>
                <p>IntersectionObserver API 사용해서 구현하기</p>
                <p>함수 생성 시 화살표 함수 사용했다. 자세한 설명은 주석 확인</p>
                <img src="/img/lazy2.png" alt="레이지로딩 구현" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bundle">
      <h2 class="mainTit">🛝 드롭다운 selectBox</h2>
      <button type="button" class="about popOpen">작업 방식</button>
      <div class="dropDown bundleCont">
        <p class="dropBtn"><button type="button" value="1번입니다">번호 선택</button></p>
        <ul class="optionBox">
          <li class="optionList">
            <button type="button" class="optionBtn" value="1번입니다">1번입니다</button>
          </li>
          <li class="optionList">
            <button type="button" class="optionBtn" value="2번입니다">2번입니다</button>
          </li>
          <li class="optionList">
            <button type="button" class="optionBtn" value="3번입니다">3번입니다</button>
          </li>
          <li class="optionList">
            <button type="button" class="optionBtn" value="4번입니다">4번입니다</button>
          </li>
          <li class="optionList">
            <button type="button" class="optionBtn" value="5번입니다">5번입니다</button>
          </li>
        </ul>
      </div>
      <div class="popup">
        <div class="popDim"></div>
        <div class="popCont">
          <div class="popTop">
            <h3 class="mainWork">주요 작업</h3>
            <button type="button" class="popClose">닫기</button>
          </div>
          <div class="aboutBox">
            <ul class="aboutList">
              <li>
                <p class="aboutTit">작업 요건</p>
                <p>JS로 셀렉트박스 만들기</p>
              </li>
              <li>
                <p class="aboutTit">1. 레이지로딩을 위한 html 세팅</p>
                <p>
                  src 속성을 집어넣지 않고, data-lazy 라는 속성을 이용해서 이미지 주소를 설정해준다.
                </p>
                <img src="/img/lazy1.png" alt="레이지로딩을 위한 html 세팅" />
              </li>
              <li>
                <p class="aboutTit">2. 레이지로딩 구현</p>
                <p>IntersectionObserver API 사용해서 구현하기</p>
                <p>함수 생성 시 화살표 함수 사용했다. 자세한 설명은 주석 확인</p>
                <img src="/img/lazy2.png" alt="레이지로딩 구현" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bookmark">
      <div class="markbtnBox">
        <ul class="markBtnList"></ul>
        <!-- <p class="markNull">즐겨찾는 메뉴가 없습니다.</p> -->
      </div>
      <button type="button" class="markAdd">추가</button>
      <button type="button" class="markChange">변경</button>
      <div class="markPopWrap">
        <div class="markPopBox">
          <ul class="markPop">
            <li>
              <label for="mark01" class="markCheck">
                <input type="checkbox" class="mark" id="mark01" value="웹툰" />
                <span>웹툰</span>
              </label>
            </li>
            <li>
              <label for="mark02" class="markCheck">
                <input type="checkbox" class="mark" id="mark02" value="패션뷰티" />
                <span>패션뷰티</span>
              </label>
            </li>
            <li>
              <label for="mark03" class="markCheck">
                <input type="checkbox" class="mark" id="mark03" value="레시피" />
                <span>레시피</span>
              </label>
            </li>
            <li>
              <label for="mark04" class="markCheck">
                <input type="checkbox" class="mark" id="mark04" value="리빙" />
                <span>리빙</span>
              </label>
            </li>
            <li>
              <label for="mark05" class="markCheck">
                <input type="checkbox" class="mark" id="mark05" value="책방" />
                <span>책방</span>
              </label>
            </li>
            <li>
              <label for="mark06" class="markCheck">
                <input type="checkbox" class="mark" id="mark06" value="경제M" />
                <span>경제M</span>
              </label>
            </li>
            <li>
              <label for="mark07" class="markCheck">
                <input type="checkbox" class="mark" id="mark07" value="자동차" />
                <span>자동차</span>
              </label>
            </li>
            <li>
              <label for="mark08" class="markCheck">
                <input type="checkbox" class="mark" id="mark08" value="엔터" />
                <span>엔터</span>
              </label>
            </li>
            <li>
              <label for="mark09" class="markCheck">
                <input type="checkbox" class="mark" id="mark09" value="스포츠" />
                <span>스포츠</span>
              </label>
            </li>
            <li>
              <label for="mark10" class="markCheck">
                <input type="checkbox" class="mark" id="mark10" value="뉴스" />
                <span>뉴스</span>
              </label>
            </li>
            <li>
              <label for="mark11" class="markCheck">
                <input type="checkbox" class="mark" id="mark11" value="웹툰" />
                <span>웹툰</span>
              </label>
            </li>
            <li>
              <label for="mark12" class="markCheck">
                <input type="checkbox" class="mark" id="mark12" value="사전" />
                <span>사전</span>
              </label>
            </li>
          </ul>
          <p class="markPopBtn">
            <button type="button" class="markPopCancel">취소</button>
            <button type="button" class="markPopSave">저장</button>
          </p>
        </div>
        <div class="markPopDim"></div>
      </div>
    </div>
    <div class="sorting tableip">
      <div class="tableIns">
        <input type="text" id="prod" placeholder="상품명을 입력해주세요" />
        <input type="text" id="cate" placeholder="카테고리를 입력해주세요" />
        <input type="text" id="sale" placeholder="행사를 입력해주세요" />
        <button type="button" class="tableIbtn tableIadd">추가</button>
      </div>
      <table>
        <thead>
          <th><button type="button" class="sortBtn2" id="num">번호</button></th>
          <th><button type="button" class="sortBtn2" id="check">삭제여부</button></th>
          <th><button type="button" class="sortBtn2" id="prod">상품명</button></th>
          <th><button type="button" class="sortBtn2" id="cate">카테고리</button></th>
          <th><button type="button" class="sortBtn2" id="sale">행사</button></th>
        </thead>
        <tbody></tbody>
      </table>
      <button type="button" class="tableIbtn tableIdel">삭제</button>
    </div>
    <div class="toast">
      <button type="button" class="toastBtn" id="buy" value="구매 완료">구매</button>
      <button type="button" class="toastBtn" id="sell" value="판매 완료">판매</button>
      <button type="button" class="toastBtn" id="cancel" value="취소 완료">취소</button>
      <button type="button" class="toastBtn" id="cart" value="장바구니">장바구니</button>
      <button type="button" class="toastBtn" id="create" value="등록 완료">등록</button>
      <button type="button" class="toastBtn" id="delete" value="삭제 완료">삭제</button>
			<div class="toastPop"></div>
		</div>
    <div class="layerPop">
      <button class="layerPopOpen">레이어팝업 열기</button>
      <div class="layerPopBox" style="display: none">
        <div class="layerDim"></div>
        <div class="layerWrap">
          <div class="layerCon">
            <p>제목</p>
            <span>내용</span>
          </div>
          <div class="layerBtn">
            <button type="button" class="layerPopClose">닫기</button>
          </div>
        </div>
      </div>
    </div>
    <div class="category">
      <ul class="cateList">
        <li class="cateNow" cate-name="전체">
          <button type="button">전체 (<span class="cateCount"></span>)</button>
        </li>
        <li cate-name="세븐틴">
          <button type="button">SEVENTEEN (<span class="cateCount"></span>)</button>
        </li>
        <li cate-name="르세라핌">
          <button type="button">LE SSERAFIM (<span class="cateCount"></span>)</button>
        </li>
        <li cate-name="뉴진스">
          <button type="button">NewJeans (<span class="cateCount"></span>)</button>
        </li>
        <li cate-name="인피니트">
          <button type="button">INFINITE (<span class="cateCount"></span>)</button>
        </li>
      </ul>
      <div class="cateCont">
        <div class="cateDetail" cate-name="뉴진스">
          <div class="detailImg">
            <img
              src="http://www.kukinews.com/data/kuk/image/2023/01/02/kuk202301020267.jpg"
              alt="뉴진스"
            />
          </div>
          <p class="detailTit">뉴진스 OMG #1</p>
        </div>
        <div class="cateDetail" cate-name="뉴진스">
          <div class="detailImg">
            <img
              src="https://koreanmusicawards.com/wp-content/uploads/2023/02/2023_NewJeans.jpeg"
              alt="뉴진스"
            />
          </div>
          <p class="detailTit">뉴진스</p>
        </div>
        <div class="cateDetail" cate-name="세븐틴">
          <div class="detailImg">
            <img
              src="https://pbs.twimg.com/media/Fold3NPaAAEvHrc?format=jpg&name=4096x4096"
              alt="세븐틴 BSS"
            />
          </div>
          <p class="detailTit">세븐틴 BSS</p>
        </div>
        <div class="cateDetail" cate-name="르세라핌">
          <div class="detailImg">
            <img
              src="https://image.ytn.co.kr/general/jpg/2022/1025/202210251541092928_d.jpg"
              alt="LE SSERAFIM"
            />
          </div>
          <p class="detailTit">LE SSERAFIM</p>
        </div>
        <div class="cateDetail" cate-name="세븐틴">
          <div class="detailImg">
            <img
              src="https://image.ytn.co.kr/general/jpg/2022/0415/202204150908597171_d.jpg"
              alt="세븐틴"
            />
          </div>
          <p class="detailTit">세븐틴</p>
        </div>
        <div class="cateDetail" cate-name="세븐틴">
          <div class="detailImg">
            <img
              src="https://image.musinsa.com/mfile_s01/2022/05/06/c2a7d60832c85fcbe4e259eadecd11de125603.jpg"
              alt="세븐틴"
            />
          </div>
          <p class="detailTit">고잉세븐틴</p>
        </div>
      </div>
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

type codeListType = {
  componentName: Component
  mainTit: string
  mainWork: boolean
  popInner: popInn[]
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
    mainWork: false,
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
    mainWork: false,
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
    mainWork: false,
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
    mainWork: false,
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
    mainWork: false,
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
  }
]
</script>
<style lang="scss" scoped>
@import './../assets/layout';
</style>
