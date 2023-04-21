<template>
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
</template>

<script setup lang="ts">
</script>