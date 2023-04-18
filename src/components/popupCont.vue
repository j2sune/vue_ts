<template>
  <div class="popup test">
		<div class="popDim"></div>
		<div class="popCont">
			<div class="popTop">
				<h3 class="mainWork">주요 작업</h3>
				<button type="button" class="popClose" @click="popClose($event)">닫기</button>
			</div>
			<div class="aboutBox">
				<ul class="aboutList">
					<li v-for="(list, idx) in props.codeList" :key="idx">
						<p class="aboutTit">{{ list.tit }}</p>
						<p>{{ list.cont }}</p>
						<img v-if="list.img != null" :src="list.img" :alt=list.alt>
					</li>
					<li>현재 슬라이드 번호, 버튼 제어 등등은 slideSet() 응용</li>
				</ul>
			</div>
		</div>
  </div>
</template>
<script setup lang="ts">

	import type { Ref } from 'vue';

	type ppcodeList = {
		tit:string,
		cont:string,
		img?:string,
		alt?:string
	}
	const props = defineProps<{
    codeList:ppcodeList[],
		nowScroll:Ref<number>
  }>()

  const body = document.getElementsByTagName('body')[0]

  function popClose(e:MouseEvent) {
		if (e.target instanceof Element) {
			body.removeAttribute('style')
			body.removeAttribute('class')
			window.scrollTo(0, props.nowScroll.value + 90)
			e.target.closest('.popup')?.classList.remove('open')
		}
  }
</script>