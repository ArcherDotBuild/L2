// ******************************
// Default Parameters ******************************
// Example 1
/*
function multiplyNaN(x, y) {
  return x * y // x * undefined = NaN
}

console.log('multiplyNaN: ', multiplyNaN(7)) // NaN missing a parameter (y)

// Example 2
console.log('\n')
// typeof value is "undefined" NOT undefined
// MANUAL CHECK
function multiplyUndefined(x, y) {
  //  this won't work because we always gone get an string back from typeof
  if (typeof y === undefined) return x * y
  return x * y
}

console.log('multiplyUndefined: ', multiplyUndefined(4))

// Example 3
console.log('\n')
function multiply(x, y) {
  if (typeof y === 'undefined') {
    y = 1
  }
  return x * y
}
console.log('multiply: ', multiply(4))
console.log('multiply: ', multiply(4, 5))

// Example 4
console.log('\n')
function multiplyTernary(x, y) {
  y = typeof y === 'undefined' ? 1 : y
  return x * y
}
console.log('multiplyTernary: ', multiplyTernary(4))
console.log('multiplyTernary: ', multiplyTernary(4, 5))

// Example 5
console.log('\n')
function multiplyDefaultParams(a, b = 1) {
  return a * b
}
console.log('multiplyDefaultParams: ', multiplyDefaultParams(4))
console.log('multiplyDefaultParams: ', multiplyDefaultParams(4, 5))

// Example 6
console.log('\n')
const greet = (person, greeting = 'hi') => {
  return console.log(`${greeting}, ${person}!`)
}
greet('tim')
greet('tim', 'YOO')

// Example 7
console.log('\n')
const greetOrder = (person, greeting = 'hi', punctuation = '!') => {
  return console.log(`${greeting}, ${person} ${punctuation}`)
}
greetOrder('anya')
greetOrder('anya', '?')
*/