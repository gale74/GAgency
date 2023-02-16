const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navItems')

menu.addEventListener('click', () => {
  navbar.classList.toggle('active')
  menu.classList.toggle('active')
  document.body.classList.toggle('overflow-hidden')
})