// ******************************
// Altering Styles ******************************
// Example 1
console.log('\n')

const h1 = document.querySelector('h1')
console.log(h1.style)
// html inline style
console.log(h1.style.color)

// Example 2
console.log('\n')

const h2 = document.querySelector('h2')
console.log(h2.style)
// Nothing is here
console.log(h2.style.color)

// Example 3
console.log('\n')
// Changing color and size of a P element
const p = document.querySelector('p')
p.style.color = 'lightgreen'
p.style.fontSize = '20px'

// Example 4
console.log('\n')
// Changing color of a baclground
p.style.backgroundColor = 'black'

// Example 4
console.log('\n')
const allLis = document.querySelectorAll('li')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// Option 1
allLis.forEach((li, index) => {
  const color = colors[index]
  li.style.color = color
})

// Option 2
// allLis.forEach((element, index) => {
//   element.style.color = colors[index]
//   console.log(element)
//   console.log(index);
// })