const titleTwo = document.getElementById('titleTwo')
const textOffTwo = document.getElementById('textOff-two')
const iconTwo = document.querySelector('#icon-two')

let isVisibleTwo = true

titleTwo.onclick = () => {
  if (isVisibleTwo) {
    textOffTwo.style.display = 'block'
    iconTwo.style.transform = 'rotate(0deg)'
    isVisibleTwo = false
  } else {
    textOffTwo.style.display = 'none'
    iconTwo.style.transform = 'rotate(180deg)'
    isVisibleTwo = true
  }
}
