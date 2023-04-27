<template>
  <div class="cateAddpop" v-if="props.addPop.value == true">
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
        <button type="button" class="cancel" @click="close()">취소</button>
        <button type="button" class="add" @click="submit()">등록</button>
      </div>
    </div>
    <div class="popDim"></div>
  </div>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { ref } from 'vue'

  const props = defineProps<{
    addPop:Ref<boolean>
  }>()

  const emit = defineEmits(['popClose', 'popSubmit'])

  function close() {
    emit('popClose', false)
  }

  function submit() {
    emit('popSubmit', inputTxt.value)
  }

  let inputTxt:Ref<(string | number)[]> = ref([101, '', '', ''])
</script>