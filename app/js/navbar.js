// Мобильное меню бургер
function burgerMenu() {
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.mobile__menu')
    let header = document.querySelector('.header')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        
        menu.classList.add('active')
        menu.style.height = `${menu.scrollHeight + 40}px`;
        menu.style.padding = `20px 0`;
        
        burger.classList.add('active-burger')
      } else {
        menu.classList.remove('active')
        menu.style.padding = `0`;
        menu.style.height = `0px`;
        burger.classList.remove('active-burger')

      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          menu.classList.remove('active')
          burger.classList.remove('active-burger')
      }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 500 
  if ( window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
// window.addEventListener('scroll', fixedNav)
