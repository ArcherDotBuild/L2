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

// Example 8
console.log('\n')
const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y)
}
blah(1)
blah(1, 3)
*/

// ******************************
// Spread for Function Calls ******************************
// Example 9
/*
console.log(Math.max(3, 4, 5, 6, 7,12 ,19, 99, 3));
console.log(Math.min(3, 4, 5, 6, 7,12 ,19, 99, 3));

console.log('\n')
console.log(Math.min([3, 4, 5, 6, 7,12 ,19, 99, 3]));

const nums = [45, 23, 34, 7, 5]
console.log(Math.max(nums))

console.log(Math.max(...nums));

// Example 10
console.log('\n');
function giveMeFour(a, b, c, d) {
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
  console.log('d:', d); 
}

giveMeFour(4, 5, 6, 7)

// Example 11
console.log('\n');
const colors = ['red', 'orange', 'yellow', 'green'];
console.log(giveMeFour(colors))
console.log('\n');
console.log(giveMeFour(...colors));
console.log('\n');
console.log(giveMeFour(...('GOAT')));
console.log('\n')
console.log('colors: ', colors)
*/

// ******************************
// Spread in Array Literals ******************************
// Example 12
/*
console.log('\n')
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug']

const cnidaria = ['fire coral', 'moon jelly']

const mollusca = [...cephalopods, ...gastropods]
console.log('mollusca: ', mollusca)

// The order does matters
const mollusca2 = [...gastropods, ...cephalopods]
console.log('mollusca2: ', mollusca2)

console.log('\n')
console.log('mollusca + garden slug', ['garden slug', gastropods])

console.log('mollusca + garden slug', [
  'garden slug',
  ...gastropods,
  ...cephalopods,
])

console.log('\n')
const inverts = [...cnidaria, ...gastropods, ...cephalopods]
console.log('inverts: ', inverts)

console.log('\n')
console.log(cephalopods.concat(gastropods))

console.log('\n')
// Spread clones, a new Array in memory, with a new unique reference
const cephCopy = [...cephalopods]
console.log('cephCopy: ', cephCopy)
// false, They are not the same
console.log('cephCopy === cephalopods: ', cephCopy === cephalopods)

// Example 13
console.log('\n')
console.log('abcdefg'.split(''))
console.log([...'abc', ...['abcdegf']])
console.log([...'abcdefg'])
console.log([...'abc', ...'def', ...'HELLO!!'])
console.log([...'abc', ...'def', 'HELLO!!'])
*/

// ******************************
// Spread in Object Literals ******************************
// Example 14
/*
console.log('\n')
const feline = { legs: 4, family: 'Felidae' }
const canine = { family: 'Caninae', furry: true, legs: 4 }

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
}
console.log('dog: ', dog)

console.log('\n')
const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable',
}
console.log('houseCat: ', houseCat)

console.log('\n')
const catDog = {
  ...canine,
  ...feline,
}
console.log('catDog: ', catDog)

// Example 15
console.log('\n')
const tripod = {
  ...canine,
  legs: 3,
}
console.log('tripod: ', tripod)

console.log('\n')
// Orders does matter
const tripod2 = {
  legs: 3,
  ...canine,
}
console.log('tripod2: ', tripod2)

// Example 16
console.log('\n')
// Creating an Object from catDog that was created from 2 other objects
const catDogClone = {
  ...catDog,
}
console.log('catDogClone: ', catDogClone)
// Not the same reference
console.log('catDogClone === catDog: ', catDogClone === catDog)

// Example 17
console.log('\n')
// This is the only context where you can spread an object
// when you're into another object

// const arrayObjectSpread = [...dog]; // Error object is not iterable
// console.log(arrayObjectSpread) // dog is not iterable

// console.log(Math.max(...dog)); // Error is not iterable

// We get key value pairs based in index order
// we can spread an array into an object
console.log({ ...[4, 5, 6] })
// we can spread a string into an object
console.log({ ...'abcde' })

// Example 18
console.log('\n')
// We can create array literals that also contain objects literals
const random = [
  ...'hello',
  {
    ...catDog,
  },
]
console.log('random: ', random)

console.log('\n')
const random2 = [
  [...'hello'],
  {
    ...catDog,
  },
]
console.log('random2: ', random2)
*/

// ******************************
// The Arguments Object (not new) ******************************
// Example 19
/*
console.log('\n')
function sum() {
  console.log(arguments)
}
sum(1, 2, 3)
sum(1, 2, 3, 4, 5, 6, 7, 8, 9)

// Example 20
console.log('\n')
// function sum2() {
//   // Error: arguments.reduce is not a function
//   return arguments.reduce((total, currVal) => {
//     return total + currVal
//   })
// }
// sum2(1, 2, 3);


// Example 21
console.log('\n')
function sum3() {
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}
console.log('sum3: ', sum3(1, 2, 3, 4, 5))

// Example 22
console.log('\n')
function fullName(first, last) {
  // Arguments includes everything
  console.log(arguments)
  console.log(first)
  console.log(last)
}
console.log(fullName('tom', 'jones', 'III', 'order of the phoenix'))

// Example 23
console.log('\n')
// argument doesn't work with => arrow functions
// Error: arguments is not defined
// const argumentsArrowFunction = () => {
//   console.log(arguments);
// }
// console.log(argumentsArrowFunction());
*/

// ******************************
// Rest Parameters (new) ******************************
// Example 24

console.log('\n')
function sum(...sum) {
  console.log('sum: ', sum)
}

sum(1, 2, 3)
sum(1, 2, 3, 4, 5, 6, 7, 8, 9)

// Example 25
console.log('\n')
function sumReduce(...nums) {
  return nums.reduce((total, currentValue) => {
    return total + currentValue
  })
}

console.log('sumReduce: ', sumReduce(1, 2, 3))
console.log('sumReduce: ', sumReduce(10, 20, 30, 40, 50))

// Example 26
console.log('\n')
// Order does matter
// Rest parameter must be the last formal parameter
function fullName(first, last, ...titles) {
  console.log('first: ', first)
  console.log('last: ', last)
  console.log('titles: ', titles)
}
fullName('tom', 'jones', 'III', 'order of the phoenix')

// Example 27
console.log('\n')
const multiply = (...mul) =>
  mul.reduce((total, currVal) => {
    return total * currVal
  })
console.log('multiply: ', multiply(2, 3, 4))