<template>
  <div class="bookmark">
    <div class="markbtnBox">
      <ul class="markBtnList"></ul>
      <!-- <p class="markNull">즐겨찾는 메뉴가 없습니다.</p> -->
    </div>
    <button type="button" class="markAdd">추가</button>
    <button type="button" class="markInit">초기화</button>
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
</template>

<script setup lang="ts">
</script>