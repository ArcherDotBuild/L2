// ******************************
// Events on Multiple Elements ******************************
// Example 1
console.log('Events on Multiple Elements')
console.log('\n')

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
]

// Using functions

// const printColor = function (box) {
//   console.log('CLICKED A BOX')
//   console.log(box.style.backgroundColor)
// }

// const container = document.querySelector('#boxes')

// for (let color of colors) {
//   const box = document.createElement('div')
//   box.style.backgroundColor = color
//   box.classList.add('box')
//   container.appendChild(box)
//   box.addEventListener('click', function() {
//     printColor(box)
//   })
// }

// Using THIS keywordq
const changeColor = function () {
  const h1 = document.querySelector('h1')
  h1.style.color = this.style.backgroundColor
  console.log(this)
  console.log(this.style.backgroundColor)
}

const container = document.querySelector('#boxes')

for (let color of colors) {
  const box = document.createElement('div')
  box.style.backgroundColor = color
  box.classList.add('box')
  container.appendChild(box)
  box.addEventListener('click', changeColor)
}

const h2 = document.querySelector('h2')
h2.addEventListener('mouseover', function() {
  console.log(h2.innerText);
})