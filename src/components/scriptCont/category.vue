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
        <cateAddPop :addPop="ref(addPop)" @popClose="popClose" @popSubmit="popSubmit"></cateAddPop>
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
        <p class="writeUser"><span class="user">{{ item.photo_user }}</span><span class="cateNm">{{ item.cate_nm }}</span></p>
        <button type="button" class="deleteOpen" @click="deleteClick($event)">삭제</button>
        <div class="deleteWrap">
          <div class="pwBox">
            <input type="text"><button type="button" class="cateDelete" @click="deleteCate($event, item.cont_id)">확인</button><button type="button" class="deleteCancel" @click="deleteClick($event)">취소</button>
          </div>
          <p class="errMsg">비밀번호가 틀렸습니다. 다시 입력해주세요.</p>
        </div>
      </div>
      <div class="cateNone" v-if="cateNone === true">
        <p>항목이 0개 입니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import type { InputHTMLAttributes, Ref } from 'vue'
  import { onMounted, ref } from 'vue'
  import cateAddPop from '@/components/catePop/cateAddPop.vue'

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

  function popClose(pop:boolean) {
    addPop.value = pop
  }

  function popSubmit(result:(string|number)[]) {
    sendRequest('cateAdd', result)
  }

  function deleteClick(e:MouseEvent) {
    if (e != undefined) {
      if ((e.target as Element)?.classList.contains('deleteOpen')) {
        (e.target as Element)?.nextElementSibling?.classList.add('on')
      } else {
        (e.target as Element)?.closest('.deleteWrap')?.classList.remove('on')
      }
    }
  }

  function deleteCate(e:MouseEvent, contid:number) {
    if (e != undefined) {
      const clickInput = (e.target as Element).previousElementSibling as HTMLInputElement
      if (clickInput != null) {
        const clickInputValue = clickInput.value
        sendRequest('cateDelete', {contid, clickInputValue})
      }
    }
  }

  type sendType = {
    func:string,
    data:string|{}
  }

  type resultType = {
    func:string,
    data:[],
    errorData?:{msg:string, id:number}
    dataCount?:[]
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
      cateAdd(data.data, data.dataCount)
      break;
    case 'cateDelete':
      cateDelete(data?.data, data?.errorData, data.dataCount)
      break;
  }
}

function cateClick(data:cateCont[]) {
  cateData.value = data
}

function cateAdd(data:cateCont[], dataCount:cateNum[] | undefined) {
  cateData.value = data
  addPop.value = false
  cateAll += 1
  if (dataCount != undefined) {
    cateCount.value = dataCount
  }
}

function cateDelete(data?:cateCont[] | undefined, errorData?:{msg:string, id:number} | undefined, dataCount?:cateNum[] | undefined) {
  if (data == undefined) {
    if (errorData != undefined) {
      let errorIdx = cateData.value.findIndex(item => item.cont_id == errorData.id)
      let errorCont = document.getElementsByClassName('cateDetail')[errorIdx]
      errorCont.classList.add('pwError');
      (errorCont.lastElementChild?.children[0].children[0] as InputHTMLAttributes).value = '';
    }
  } else {
    if (dataCount != undefined) {
      cateAll -= 1
      cateData.value = data
      cateCount.value = dataCount
    }
  }
}

</script>