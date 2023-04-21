<template>
  <div class="sorting">
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

  /* 테이블 상태 구분 코드 */
  let sortType = 'init'
  let existItemId = 'none'

  /* 테이블 DOM */
  function tableInsert(tableValue:dataType[]) {
    let tr = ''
    tableValue.forEach((item:dataType) => {
      tr += '<tr>'
      + '<td>' + item.score + '</td>'
      + '<td>' + item.name + '</td>'
      + '<td>' + item.artist + '</td>'
      + '<td>' + item.date + '</td>'
      + '</tr>'
    })
    
    return tr
  }

  const tableOrig = tableInsert(sortData)

  function sorting(e:MouseEvent, clickId:string) {
    let tbody:Element | null | undefined = (e.target as HTMLButtonElement)?.closest('thead')?.nextElementSibling;
    let sortFc:number;
    let result:dataType[];

    if (tbody != null) {
      tbody.innerHTML = tableInsert(sortData)
    }

    async function sortTable(clickId:string) {

      if (existItemId != clickId) {
        sortType = 'init'
      }

      if (clickId == 'score') {
        const ivalue = 'score'
        result = sortData.sort((a:dataType, b:dataType) :number => {
          if (sortType === 'init') {
            sortFc = a[ivalue] - b[ivalue]
          } else if (sortType === 'asc') {
            sortFc = b[ivalue] - a[ivalue]
          } 
          return sortFc
        })
      } else if (clickId == 'name') {
        const ivalue = 'name'
        result = sortData.sort((a:dataType, b:dataType) :number => {
          if (sortType === 'init') {
            let x = a[ivalue].toLowerCase()
            let y = b[ivalue].toLowerCase()
            if (x < y) {
              return -1
            }
            if (x > y) {
              return 1
            }
            return 0 
          } else if (sortType === 'asc') {
            let x = a[ivalue].toLowerCase();
            let y = b[ivalue].toLowerCase();
            if (x > y) {
              return -1;
            }
    
            if (x < y) {
              return 1;
            }
            return 0;
          }
          return 0
        })
      } else if (clickId == 'artist') {
        const ivalue = 'artist'
        result = sortData.sort((a:dataType, b:dataType) :number => {
          if (sortType === 'init') {
            let x = a[ivalue].toLowerCase()
            let y = b[ivalue].toLowerCase()
            if (x < y) {
              return -1
            }
            if (x > y) {
              return 1
            }
            return 0 
          } else if (sortType === 'asc') {
            let x = a[ivalue].toLowerCase();
            let y = b[ivalue].toLowerCase();
            if (x > y) {
              return -1;
            }
    
            if (x < y) {
              return 1;
            }
            return 0;
          }
          return 0
        })
      } else {
        const ivalue = 'date'
        result = sortData.sort((a:dataType, b:dataType) :number => {
          if (sortType === 'init') {
            sortFc = a[ivalue] - b[ivalue]
          } else if (sortType === 'asc') {
            sortFc = b[ivalue] - a[ivalue]
          } 
          return sortFc
        })
      }
      return result

    }

    sortTable(clickId).then(function(sortResult) {
      if(tbody != null && sortType === 'init') { 
        sortType = 'asc'
        tbody.innerHTML = tableInsert(sortResult)
      } else if (tbody != null && sortType === 'asc') {
        sortType = 'desc'
        tbody.innerHTML = tableInsert(sortResult)
      } else if (tbody != null && sortType === 'desc') {
        sortType = 'init'
        tbody.innerHTML = tableOrig
      }
      existItemId = clickId
    })
  }
</script>
