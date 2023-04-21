<template>
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
</template>

<script setup lang="ts">
</script>