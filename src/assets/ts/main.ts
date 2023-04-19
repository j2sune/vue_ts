const gnb = (e:MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (e.type == 'mouseover') {
      e.target.closest('li')?.classList.add('on')
      const dep2 = e.target.closest('li')?.lastElementChild
      if (dep2 instanceof HTMLElement) {
        dep2.style.height = dep2.children.length * 36 + 'px';
      }
    } else if (e.type == 'mouseleave') {
      e.target.closest('li')?.classList.remove('on')
      const dep2 = e.target.closest('li')?.lastElementChild
      if (dep2 instanceof HTMLElement) {
        dep2.style.height = 0 + 'px';
      }
    }
  }
}

export { gnb }