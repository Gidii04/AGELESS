const date = document.querySelector('.date')

const now = new Date().getFullYear()
console.log(now)

date.innerHTML = now

const mySearch = document.querySelector('#mysearch')
const clearSearch = document.querySelector('.clear')
clearSearch.addEventListener('click', () => {
  mySearch.value = ''
})

const searchIcon = document.querySelector('.search-icon')
const searchInput = document.querySelector('.input')
const clearIcon = document.querySelector('.clear')

searchIcon.addEventListener('click', () => {
  searchIcon.classList.toggle('move')
  searchInput.classList.toggle('show')
  clearIcon.classList.toggle('show')
})
