<template>
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
</template>

<script setup lang="ts">
</script>