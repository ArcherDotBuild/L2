// ******************************
// value, src, href, and more ******************************
// Example 1
console.log('\n')

const inputs = document.querySelectorAll('input')
console.log('inputs: ', inputs)
console.dir(inputs)

// Example 2
console.log('\n')
console.dir(inputs[0])
console.log('inputs[0]: ', inputs[0].value)
// Changing the value of an input
// inputs[0].value = 'cRaZyBeAr'
// inputs[0].value = '' // Resetting to empty input

// Example 3
console.log('\n')
console.dir(inputs[1])
console.log('inputs[1]: ', inputs[1]) // Password input
console.log('inputs[1]: ', inputs[1].value)

// Example 4
console.log('\n')
console.dir(inputs[2])
console.log('inputs[2]: ', inputs[2])

// this won't check the real value
console.log('inputs[2]: ', inputs[2].value)

console.log('inputs[2]: ', inputs[2].checked)
// Run this code in the browser console to turn it to true
// inputs[2].checked = true

// Example 4
console.log('\n')
console.dir(inputs[3])
console.log('inputs[3]: ', inputs[3])
console.log('inputs[3]: ', inputs[3].value)

// Example 5
console.log('\n')
// Change placeholder text
inputs[1].placeholder = 'Please enter password'

// Example 6
console.log('\n')
const a = document.querySelector('a')
console.log('a: ', a)
console.dir('a: ', a)
console.log('a.href: ', a.href)

// Changing the a href
a.href = 'https://www.google.com'
console.log('a.href: ', a.href)

// Example 7
console.log('\n')
// Changing the bear image
const image = document.querySelector('img')
console.log(image.src)
image.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGpbXOqX6M4NouU-scVBv6d8T4mXr7X-jVw&usqp=CAU'