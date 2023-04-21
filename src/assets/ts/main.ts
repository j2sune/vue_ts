const gnb = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (e.type == 'mouseover') {
      e.target.closest('li')?.classList.add('on')
      const dep2 = e.target.closest('li')?.lastElementChild
      if (dep2 instanceof HTMLElement) {
        dep2.style.height = dep2.children.length * 36 + 'px'
      }
    } else if (e.type == 'mouseleave') {
      e.target.closest('li')?.classList.remove('on')
      const dep2 = e.target.closest('li')?.lastElementChild
      if (dep2 instanceof HTMLElement) {
        dep2.style.height = 0 + 'px'
      }
    }
  }
}

const tooltip = () => {
  const tooltip: HTMLElement | null = document.querySelector('.tooltip')
  const toolPop: HTMLElement | null = document.querySelector('.toolpopBox')
  let toolH: number

  window.addEventListener('scroll', function () {
    if (tooltip != null) {
      toolH = tooltip.getBoundingClientRect().top
    }

    if (toolH > 100 && toolPop != null) {
      toolPop.classList.add('top')
    } else if (toolH < 100 && toolPop != null) {
      toolPop.classList.remove('top')
    }
  })
}

const scrollTabSet = () => {
  const tab2img:HTMLCollection = document.getElementsByClassName('tab2img');
  const tab2box: HTMLElement | null = document.querySelector('.tab2box');
  const tab2list:HTMLCollection = document.getElementsByClassName('tab2list');

  // 이미지 크기
  if (tab2img != null) {
    for (let l = 0; l < tab2img.length; l++) {
      if ((tab2img[l] as HTMLElement).offsetHeight > (tab2img[l] as HTMLElement).offsetWidth) {
        (tab2img[l] as HTMLElement).style.width = '70%';
      } 
    }
  }

  window.addEventListener('scroll', function() {
    if (tab2box != null) {
      if(tab2box.getBoundingClientRect().top < 0 && tab2box.getBoundingClientRect().bottom > 0) {
        for (let n = 0; n < tab2list.length; n++) {
                
          const tabBoxListLoca = tab2list[n].getBoundingClientRect().top - 160;
          const tabBoxListH = (tab2list[n] as HTMLElement).offsetHeight;

          if (tabBoxListLoca <= 160 && tabBoxListLoca + tabBoxListH >= 160) { 
              tab2list[n].classList.add('tab2on');
          } else {
              tab2list[n].classList.remove('tab2on');
          }
        }
      }
    }
  });
}

const lazyLoad = () => {
  const lazyImages:NodeList = document.querySelectorAll("img.lazy");  
     
  // target = 현재 active 된 이미지 객체
  const lazyLoad = (target:Node) => { // function lazyLoad(target) {return ...}
    // entries = 현재 들어오는 타켓 객체들, observer = 이미지의 위치 확인
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // entry 에 IntersectionObserverEntry 라는 active 된 객체 종합 정보가 들어온다.
        // isIntersection => boolean 리턴 => 객체가 들어왔는지 확인
        if (entry.isIntersecting) { 
          // entry.target == 현재 active img 태그
          const img = entry.target;
          const src = img.getAttribute('data-lazy');

          if (src != null) {
            img.setAttribute('src', src);
            img.classList.add('fade');
          }

          observer.disconnect();
        }
      });
    });
    // 이미지 위치 보는 메소드 연결 끊기
    io.observe((target as Element))
  }
  
  // 이미지 태그에 순차적으로 lazyLoad 적용
  lazyImages.forEach(lazyLoad)
}

export { gnb, tooltip, scrollTabSet, lazyLoad }
