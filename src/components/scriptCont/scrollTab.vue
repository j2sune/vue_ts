<template>
  <div class="tab2">
    <ul class="tab2box">
      <li class="tab2list" v-for="(item, idx) in tabList" :key="idx">
        <button href="javascript:;" class="tab2tab" @click="scrollTab($event)">{{ item.tabButton }}</button>
        <div class="tab2cont">
          <img :src="item.tcImg" :alt="item.tcAlt" class="tab2img" />
          <div class="tab2more">
            <p class="tab2txt">{{ item.tabTit }}</p>
            <p class="tab2subt">{{ item.tabCont }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

  import { onMounted } from 'vue'
  import { scrollTabSet } from './../../assets/ts/main'
  
  onMounted(() => {
    scrollTabSet()
  })

  function scrollTab(e:MouseEvent) {
    window.scrollTo(0, (e.target as HTMLElement).offsetTop - 100)
  }

  type scTab = {
    tabButton:string,
    tabTit:string,
    tabCont:string,
    tcImg:string,
    tcAlt:string
  }
  const tabList:scTab[] = [
    {
      tabButton:'Toy Story',
      tabTit: '1번',
      tabCont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis quam ducimus velit laudantium similique quo quos, harum, commodi accusantium officia ex a libero animi labore nesciunt laborum eum?',
      tcImg: 'img/t1.jpg',
      tcAlt: '1번'
    },
    {
      tabButton:'Rapunzel',
      tabTit: '2번',
      tabCont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis quam ducimus velit laudantium similique quo quos, harum, commodi accusantium officia ex a libero animi labore nesciunt laborum eum?',
      tcImg: 'img/t2.jpeg',
      tcAlt: '2번'
    },
    {
      tabButton:'Inside Out',
      tabTit: '3번',
      tabCont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis quam ducimus velit laudantium similique quo quos, harum, commodi accusantium officia ex a libero animi labore nesciunt laborum eum?',
      tcImg: 'img/t3.jpeg',
      tcAlt: '3번'
    },
    {
      tabButton:'Pooh',
      tabTit: '4번',
      tabCont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis quam ducimus velit laudantium similique quo quos, harum, commodi accusantium officia ex a libero animi labore nesciunt laborum eum?',
      tcImg: 'img/t4.jpg',
      tcAlt: '4번'
    },
    {
      tabButton:'Disney Princess',
      tabTit: '5번',
      tabCont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum veritatis quam ducimus velit laudantium similique quo quos, harum, commodi accusantium officia ex a libero animi labore nesciunt laborum eum?',
      tcImg: 'img/t5.jpg',
      tcAlt: '5번'
    }
  ]
</script>