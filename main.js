function onScroll() {
  if(scrollY > 0){ // 'scrollY' indica a posição do scroll
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}