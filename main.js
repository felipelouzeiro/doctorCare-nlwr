function onScroll() {
  if(scrollY > 0){ // 'scrollY' indica a posição do scroll
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function openMenu() {
  document.body.classList.remove('menu-expanded');
}