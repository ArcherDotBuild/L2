// ******************************
// The Event Object ******************************
// Example 1
console.log('The Event Object')
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

const changeColor = function (event) {
  // Click on a color box to see the event object in the browser console
  console.log(event)
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

// Key event
document.body.addEventListener('keypress', function(event) {
  console.log(event);
  console.log(event.keyCode)
  console.log(event.key)
})