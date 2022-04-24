const title = document.getElementById('title')
const textOff = document.getElementById('textOff')
const icon = document.querySelector('#icon')

const titleTwo = document.getElementById('titleTwo')
const textTwo = document.getElementById('textTwo')
const iconTwo = document.querySelector('#iconTwo')

let isVisible = false
let isVisibleTwo = false

title.onclick = () => {
  textOff.style.display = isVisible ? 'block' : 'none'
  icon.style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisible = !isVisible
}

titleTwo.onclick = () => {
  textTwo.style.display = isVisibleTwo ? 'block' : 'none'
  iconTwo.style.transform = isVisibleTwo ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleTwo = !isVisibleTwo
}
