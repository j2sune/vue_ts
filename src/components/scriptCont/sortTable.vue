<template>
  <div class="sorting bundleCont">
    <table>
      <thead>
        <th v-for="(value, key) in thCont" :key="key">
          <button
            type="button"
            class="sortBtn"
            @click="sorting($event, (key as string))"
            :id="(key as string)"
          >
            {{ value }}
          </button>
        </th>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in sortData" :key="idx">
          <td>{{ item.score }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.artist }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

  type thType = {
    [index:string]: string,
    score:string,
    name:string,
    artist:string,
    date:string
  }

  type dataType = {
    score: number
    name: string
    artist: string
    date: number
  }

  const thCont:thType = { score: '순위', name: '음원명', artist: '가수', date: '발매일' }

  const sortData: dataType[] = [
    { score: 8, name: 'Love Poem', artist: '아이유', date: 20200302 },
    { score: 1, name: 'Darling', artist: '세븐틴', date: 20220423 },
    { score: 3, name: 'Tomboy', artist: '아이들', date: 20220516 },
    { score: 10, name: '나의 오랜 연인에게', artist: '다비치', date: 20200915 },
    { score: 6, name: '어제처럼', artist: '폴킴', date: 20190821 },
    { score: 2, name: 'LOVE DIVE', artist: 'IVE', date: 20220517 },
    { score: 9, name: '상상더하기', artist: '라붐', date: 20170808 },
    { score: 5, name: 'Feel My Rhythm', artist: '레드벨벳', date: 20220221 },
    { score: 7, name: 'Savage', artist: 'aespa', date: 20211231 },
    { score: 4, name: '신호등', artist: '이무진', date: 20210819 }
  ]

  function sorting(e:MouseEvent, clickId:string) {
    let tbody:Element | null | undefined = (e.target as HTMLButtonElement)?.closest('thead')?.nextElementSibling;

    function getId(id:string) {
      let nowClick:string;
      if (id == 'score') {
        const name = "score"
        nowClick = typeof sortData[0][name];
      } else if (id == 'name') {
        const name = "name"
        nowClick = typeof sortData[0][name];
      } else if (id == 'artist') {
        const name = "artist"
        nowClick = typeof sortData[0][name];
      } else {
        const name = "date"
        nowClick = typeof sortData[0][name];
      }
      return nowClick
    }
    const itemType:string = getId(clickId)
    console.log(itemType)

    function tableM(tableValue:dataType[]) {
      let tr = ''
      tableValue.forEach((item:dataType) => {
        tr +=
          '<tr>' +
          '<td>' +
          item.score +
          '</td>' +
          '<td>' +
          item.name +
          '</td>' +
          '<td>' +
          item.artist +
          '</td>' +
          '<td>' +
          item.date +
          '</td>' +
          '</tr>'
      })

      return tr
    }

    if (tbody != null) {
      tbody.innerHTML = tableM(sortData)
    }

    /* 테이블 정렬 */
    let sortType = 'init'
    let existItemId = 'none'

    if (existItemId == clickId) {
      sortTable()
    } else {
      sortType = 'init'
      sortTable()
    }

    function sortTable() {
      let rdd:number;
      if (itemType == 'number') {
        if (sortType === 'init') {
          sortType = 'asc'
          sortData.sort((a:dataType, b:dataType) :number => {
            if (clickId == 'score') {
              const type22 = "score"
              rdd = a[type22] - b[type22]
            } else {
              const type22 = "date"
              rdd = a[type22] - b[type22]
            }
            return rdd
          })
          if(tbody != null) tbody.innerHTML = tableM(sortData)
        } else if (sortType === 'asc') {
          sortType = 'desc'
          sortData.sort((a:dataType, b:dataType) :number => {
            if (clickId == 'score') {
              const type22 = "score"
              rdd = b[type22] - a[type22]
            } else {
              const type22 = "date"
              rdd = b[type22] - a[type22]
            }
            return rdd
          })
          if(tbody != null) tbody.innerHTML = tableM(sortData)
        } else {
          sortType = 'init'
          if(tbody != null) tbody.innerHTML = tableM(sortData)
        }
      } /*else if (itemType == 'string') {
        if (sortType === 'init') {
          sortType = 'asc'
          sortData.sort(function (a, b) {
            let x = a[clickId].toLowerCase()
            let y = b[clickId].toLowerCase()

            if (x < y) {
              return -1
            }

            if (x > y) {
              return 1
            }
            return 0
          })
          if(tbody != null) tbody.innerHTML = tableM(sortData)
        } else if (sortType === 'asc') {
          sortType = 'desc'
          sortData.sort(function (a, b) {
            let x = a[clickId].toLowerCase()
            let y = b[clickId].toLowerCase()

            if (x > y) {
              return -1
            }

            if (x < y) {
              return 1
            }
            return 0
          })
          if(tbody != null) tbody.innerHTML = tableM(sortData)
        } else {
          sortType = 'init'
          if(tbody != null) tbody.innerHTML = tableM(sortData)
        }
      }*/

      existItemId = clickId
    }
  }
</script>
