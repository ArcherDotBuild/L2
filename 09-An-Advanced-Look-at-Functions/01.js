// Test the JS script before starting
// alert("It's working!");

// ******************************
// Function Scope ******************************
// Example 1
/* 
function lol() {
  let person = 'Tom'
  const age = 45
  var color = 'teal'
  console.log(age)
}

lol()
// console.log(person); // person is not defined
// console.log(age); // age is not defined
// console.log(color); // color is not defined

console.log('\n')
// Example 2

// i have multiple functions with same variables names
function changeColor() {
  color = 'purple'
  age = 19
  console.log(age)
}
// Same age variable but unique values
lol() // 45
changeColor() // 19

console.log('\n')
// Example 3

// i can have 2 variables with the same name
// because they are in different scope
let bird = 'mandarin duck'
function birdWatch() {
  let bird = 'golden pheasant'
  console.log(bird)
}

birdWatch() // 'golden pheasant'
console.log(bird) // 'mandarin duck'
 */
// ******************************
// Block Scope ******************************
// Example 4
/* 
if (true) {
  let animal = 'eel'
  console.log('If animal true: ',animal)
}
// console.log(animal); // is not defined

console.log('\n')
// Example 5

if (true) {
  var animal = 'eel'
  console.log(animal)
}
// This works in both cases, it printed inside and outside the block
console.log('It works with var: ', animal)

console.log('\n')
// Example 6

let animals = ['grizzly bear', 'panda bear', 'spectacled bear']
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
console.log(i) // 3, var equals 3 from the for loop

console.log('\n')
// Example 7

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
// console.log(i); // i is not defined

console.log('\n')
// Example 8

// Will double an array that is passed in
// Ex: [1,2,5] -> [2,6,10]
function doubleArr(arr) {
  const result = []
  for (let num of arr) {
    let double = num * 2
    result.push(double)
  }
  // i don't have access to double, is scoped to for loop block
  // console.log(double); // is not defined
  return result
}
console.log(doubleArr([1, 2, 3]))
 */

// ******************************
//  Lexical Scope ******************************
// Example 9
/*
function outer() {
  let movie = 'Amadeus'

  function inner() {
    console.log(movie.toUpperCase())
  }
}
// We have a function declaration but we're never calling it
outer() // It doesn't return anything

console.log('\n')
// Example 10
function outer2() {
  let movie = 'Amadeus'

  function inner() {
    console.log(movie.toUpperCase())
  }
  inner()
}
console.log(outer2()) // AMADEUS
// I don't have access to inner() outside of outer2
// inner();  // inner is not defined


console.log('\n')
// Example 11
function outer3() {
  let movie = 'Amadeus'

  function inner() {
    let movie = 'The Shining'
    console.log(movie.toUpperCase())
  }
  inner()
}
// When i execute outer3(), the inner() function defines its own version of movie called 'The Shining'
// 'The Shining', prints the nearest variable in scope
console.log(outer3())


console.log('\n')
// Example 12
function outer4() {
  let movie = 'Amadeus'
  console.log('outer4()')

  function inner() {
    // let movie = 'The Shining'
    console.log('inner()')

    function extraInner() {
      // extraInner() does not have a movie defined inside
      console.log(movie.toUpperCase())
      console.log('extraInner()')
    }
    extraInner()
  }
  inner()
}
console.log(outer4())

console.log('\n')
// Example 13
// TodoList in ReactJS
function TodoList() {
  let todos = []
  let username = ''
  function addTodo() {

  }
  function removeTodo() {
  
  }
}
*/

// ******************************
// Function Expressions ******************************
// Example 14
/*
console.log('\n')
// this on it's own is not valid, we can't call this
// We have no way of referring to this function
// This is called an anonymous function
// function(x, y) {
//   return x + y
// }
function add(x, y) {
  return x + y
}

// Anonymous function expression
const sum = function (x, y) {
  return x + y
}

// Named function expression
const product = function multiply(x, y) {
  return x * y
}

// They work exactly the same way, but we declared them
// in two different format, two different syntaxes
console.log(add(1, 99))
console.log(sum(1, 99))
// console.log(multiply(1, 99)) // Error: multiply is not defined
console.log(product(1, 99))

// Inspect the function
console.dir(add)
console.dir(sum)
console.dir(product)
*/

// Higher Order Functions ******************************
// Example 15
/*
console.log('\n')
// Function statement
function add(x, y) {
  return x + y
}

const subtract = function (x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

const divide = function (x, y) {
  return x / y
}

const operations = [add, subtract, multiply, divide]
console.log(operations[0])
console.log(operations[1])
console.log(operations[2])
console.log(operations[3])
console.log('\n')

console.log(operations[0](100, 4)) // 104
console.log(operations[1](100, 4)) // 96
console.log(operations[2](100, 4)) // 400
console.log(operations[3](100, 4)) // 25

console.log('\n')
// Example 16
// We can loop functions in an array
for (let func of operations) {
  let result = func(30, 5)
  console.log(result)
}

console.log('\n')
// Example 17
// We can store functions in an object
const thing = {
  // Method: a function stored in an object
  doSomething: multiply,
}
console.log(thing);
console.log(thing.doSomething(50, 2)) // 100
*/

// Functions as Arguments ******************************
// Example 18
/*
console.log('\n')
function callThreeTimes(func) {
  func()
  func()
  func()
}

function cry() {
  console.log("BOO HOO I'M SO SAD!")
}
cry()
cry()
cry()
console.log('\n')
callThreeTimes(cry)

console.log('\n')
function rage() {
  console.log('I HATE EVERYTHING!')
}
callThreeTimes(rage)

console.log('\n')
// Example 19
function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action()
  }
}

repeatNTimes(rage, 5)
repeatNTimes(cry, 4)

console.log('\n')
// Example 20
function pickOne(f1, f2) {
  let rand = Math.random()
  console.log('Random num insinde pickOne: ', rand)
  if (rand < 0.5) {
    f1()
  } else {
    f2()
  }
}
pickOne(cry, rage)
*/

// Functions as Arguments ******************************
// Example 21
/*
console.log('\n')
function multiplyByNo1(num) {
  // Function expression, anonymous functiion
  return function () {
    console.log('HI!!')
  }
}
const mystery = multiplyByNo1()
console.log(mystery)
console.log(mystery())

console.log('\n')
// Example 22
function multiplyByNo2(num) {
  return function (x) {
    return x * num
  }
}
// Stores 3 in the func multiplyByNo2(num) variable
const triple = multiplyByNo2(3)
console.log(triple(6)) // 18, x * num, 6 * 3
console.log(triple(2)) // 6, x * num, 2 * 3
console.log(triple(9)) // 27, x * num, 9 * 3

console.log('\n')
// Stores 2 in the func multiplyByNo2(num) variable
const double = multiplyByNo2(2)
console.log(double(5)) // 10, x * num, 5 * 2
console.log(double(3)) // 6, x * num, 3 * 2

console.log('\n')
const halve = multiplyByNo2(0.5)
console.log(halve(9)) // 4.5, x * num, 9 * 0.5

console.log('\n')
// Example 23
function makeBetweenFunc2(x, y) {
  return function (num) {
    if (num >= x && num <= y) {
      return true
    }
    return false
  }
}
// Short syntax of makeBetweenFunc2
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y
  }
}
const isChild = makeBetweenFunc(0, 18)
console.log(isChild(17)) // true
console.log(isChild(99)) // false
console.log('\n')
const isInNineties = makeBetweenFunc(1990, 1999)
console.log(isInNineties(1989)) // false
console.log(isInNineties(1992)) // true

console.log('\n')
const isNiceWeather = makeBetweenFunc(60, 79)
console.log(isNiceWeather(45)) // false
console.log(isNiceWeather(76)) // true
*/

// Callbacks ******************************
// Example 24
/*
console.log('\n')
// after 5 seconds run the func
// setTimeout(func, 5000);
setTimeout(function () {
  console.log('setTimeout, 2000');
}, 2000);
*/