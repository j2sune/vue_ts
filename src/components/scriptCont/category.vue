<template>
  <div class="category">
    <ul class="cateList">
      <li v-for="(item, idx) in cateTab" :key="idx" :class="idx == nowCate ? 'cateNow' : ''" :cate-name=item.cate_code>
        <button type="button" @click="sendRequest('cateClick', item.cate_code), onCate(idx)">{{ item.cate_nm }} (<span class="cateCount" v-if="idx === 0">{{ cateAll }}</span>
          <span class="cateCount" v-else-if="cateCount[idx - 1] != undefined">{{ cateCount[idx - 1].count }}</span><span class="cateCount" v-else>0</span>)</button>
      </li>
    </ul>
    <div class="cateAdd">
        <button type="button" class="openAdd" @click="addClick($event)"><span class="hidden">등록</span></button>
        <div class="cateAddpop" v-if="addPop == true">
            <div class="PopWrap">
                <p class="popTit">이미지 등록</p>
                <div class="popInfo">
                    <p>
                        <label for="img_cate">카테고리</label>
                        <select name="" id="img_cate" v-model="inputTxt[0]">
                            <option value="101">SEVENTEEN</option>
                            <option value="102">LE SSERAFIM</option>
                            <option value="103">NewJeans</option>
                            <option value="104">INFINITE</option>
                        </select>
                    </p>
                    <p><label for="img_address">이미지 주소</label><input type="text" id="img_address" v-model="inputTxt[1]"></p>
                    <p><label for="img_tit">이미지 제목</label><input type="text" id="img_tit" v-model="inputTxt[2]"></p>
                    <p><label for="img_nm">닉네임</label><input type="text" id="img_nm" v-model="inputTxt[3]"></p>
                    <p><label for="img_pw">비밀번호</label><input type="text" id="img_pw" v-model="inputTxt[4]"></p>
                </div>
                <div class="popBtn">
                    <button type="button" class="cancel" @click="addClick($event)">취소</button>
                    <button type="button" class="add" @click="sendRequest('cateAdd', inputTxt)">등록</button>
                </div>
            </div>
            <div class="popDim"></div>
        </div>
    </div>
    <div class="cateCont">
      <div class="cateDetail" v-for="(item, idx) in cateData" :key="idx" :cate-name=item.cate_nm>
        <div class="detailImg">
          <img
            :src=item.photo_url
            :alt=item.photo_txt
          />
        </div>
        <p class="detailTit">{{ item.photo_txt }}</p>
      </div>
      <div class="cateNone" v-if="cateNone === true">
        <p>항목이 0개 입니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import type { Ref } from 'vue'
  import { onMounted, ref } from 'vue'

  let inputTxt:Ref<(string|number)[]> = ref([
    101,'','','',''
  ])

  type category = { 
    cate_code:string;
    cate_nm:string
  } 

  type cateCont = { 
    cont_id:number;
    photo_time:string,
    photo_txt:string,
    photo_url:string,
    photo_user:string
  } & category

  type cateNum = {
    count:number
  } & category

  let cateTab:Ref<category[]> = ref([]) // 탭 리스트
  let cateData:Ref<cateCont[]> = ref([]) // 카테고리 리스트
  let cateCount:Ref<cateNum[]> = ref([]) // 카테고리 별 항목 갯수
  let addPop:Ref<boolean> = ref(false) // 카테고리 추가 팝업 open/close
  let nowCate:Ref<number> = ref(0) // 액티브 탭 인덱스
  let cateNone:Ref<boolean> = ref(false) // 카테고리 유무
  let cateAll:number; // 카테고리 총 갯수

  onMounted(async() => { // 로드 시 데이터 불러서 저장
    await axios.get('/api').then((res) => {
      cateData.value = res.data.cate_cont
      cateTab.value = res.data.cate_tab
      cateCount.value = res.data.cate_count
      cateAll = res.data.cate_cont.length
      console.log('mounted')
    })
  })

  function onCate(idx:number) { // 클릭한 탭 active
    nowCate.value = idx
    if (idx != 0 && cateCount.value[idx - 1] == undefined) { // 카테고리 항목들 존재 여부
      cateNone.value = true
    } else {
      cateNone.value = false
    }
  }

  function addClick(e:MouseEvent) { // 카테고리 추가 팝업 제어
    if (e.target != null) {
      if ((e.target as HTMLElement).classList.contains('openAdd')) {
        addPop.value = true
      } else {
        addPop.value = false
      }
    }
  }

  type sendType = {
    func:string,
    data:string|{}
  }

  type resultType = {
    func:string,
    data:[]
  }

  async function sendRequest(functionName:string, dataInfo:string|{}) { // axios post control

    let sendData:sendType = {
      func:'none',
      data:'none'
    }

    sendData['func'] = functionName;
    if (dataInfo == 'string') {
      sendData['data'] = dataInfo;
    } else {
      sendData['data'] = dataInfo;
    }

    try {
      let result = await axios({
        method: 'post',
        url: '/api',
        data: sendData
      })
      postProcess(result.data) // 통신 성공 시 호출
    } catch {
      console.log('err')
    }
  }

function postProcess(data:resultType) {  // 성공 시 값에 따라 함수 제어
  switch(data.func) {
    case 'cateClick':
      cateClick(data.data);
      break;
    case 'cateAdd':
      cateAdd(data.data)
      break;
    /*case 'cateDelete':
      cateDelete(data.data)
      break;*/
  }
}

function cateClick(data:cateCont[]) {
  cateData.value = data
  console.log(cateCount.value)
}
function cateAdd(data:cateCont[]) {
  cateData.value = data
  addPop.value = false
  cateAll += 1
}

</script>