const title = document.getElementById('title')
const textOff = document.getElementById('textOff')
const icon = document.querySelector('#icon')

let isVisible = true

title.onclick = () => {
  if (isVisible) {
    textOff.style.display = 'block'
    icon.style.transform = 'rotate(0deg)'
    isVisible = false
  } else {
    textOff.style.display = 'none'
    icon.style.transform = 'rotate(180deg)'
    isVisible = true
  }
}
