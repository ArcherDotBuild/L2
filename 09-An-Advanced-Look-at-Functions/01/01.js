// Test the JS script before starting
// alert("It's working!");

// ******************************
// Function Scope ******************************
// Example 1

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

console.log('\n')
if (true) {
  let animal = 'eel'
  console.log(animal)
}
// console.log(animal); // is not defined

console.log('\n')
if (true) {
  var animal = 'eel'
  console.log(animal)
}
console.log('It works with var: ', animal) // is not defined
/* 
console.log('\n')
let animals = ['grizzly bear', 'panda bear', 'spectacled bear']
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
console.log(i) // 3, var error of 3 from the for loop

console.log('\n')
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
// console.log(i); // is not defined

console.log('\n')
// [1,2,5] -> [2,6,10]
function doubleArr(arr) {
  const result = []
  for (let num of arr) {
    let double = num * 2
    result.push(double)
  }
  // i don't have access to double is out of scope
  // console.log(double); // is not defined
  return result
}
console.log(doubleArr([1, 2, 3]))

console.log('\n')

console.log('\n')
function outer() {
  let movie = 'Amadeus'

  function inner() {
    console.log(movie.toUpperCase())
  }
}
outer() // doesn't returns nothing

console.log('\n')
function outer2() {
  let movie = 'Amadeus'

  function inner() {
    console.log(movie.toUpperCase())
  }
  inner()
}
console.log(outer2()) // AMADEUS
// inner();  // inner is not defined

console.log('\n')
function outer3() {
  let movie = 'Amadeus'

  function inner() {
    let movie = 'The Shining'
    console.log(movie.toUpperCase())
  }
  inner()
}
console.log(outer3()) // "The Shining" , prints the nearest variable in scope

console.log('\n')
function outer4() {
  let movie = 'Amadeus'

  function inner() {
    // let movie = 'The Shining'

    function extraInner() {
      console.log(movie.toUpperCase())
    }
    extraInner()
  }
  inner()
}
console.log(outer4())

console.log('\n')
// this on it's own is not valid, we can't call it, it has no name
// function(x, y) {
//   return x + y
// }
const sum = function (x, y) {
  return x + y
}
console.log(sum(1, 99))

console.log('\n')
// i can add a name to the function
const product = function multiply(x, y) {
  return x * y
}
console.log(product(3, 5))
// console.log(multiply(3, 5)); // is not defined

console.log('\n')
function add2(x, y) {
  return x + y
}

const subtract2 = function (x, y) {
  return x - y
}

function multiply2(x, y) {
  return x * y
}

const divide2 = function (x, y) {
  return x / y
}

const operations = [add2, subtract2, multiply2, divide2]
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
for (let func of operations) {
  let result = func(30, 5)
  console.log(result)
}

console.log('\n')
const thing = {
  doSomething: multiply2,
}
console.log(thing.doSomething(50, 2)) // 100

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

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action()
  }
}

repeatNTimes(rage, 5)
repeatNTimes(cry, 5)

console.log('\n')
function pickOne(f1, f2) {
  let rand = Math.random()
  console.log(rand)
  if (rand < 0.5) {
    f1()
  } else {
    f2()
  }
}
pickOne(cry, rage)

console.log('\n')
function multiplyByNew(num) {
  return function () {
    console.log('HI!!')
  }
}
const mystery = multiplyByNew()
console.log(mystery)
console.log(mystery())

console.log('\n')
function multiplyBy(num) {
  return function (x) {
    return x * num
  }
}
// stores 3 in the num variable
const triple = multiplyBy(3)
console.log(triple(6)) // 18, x * num, 6 * 3
console.log(triple(2)) // 6, x * num, 2 * 3
console.log(triple(9)) // 27, x * num, 9 * 3

console.log('\n')
// stores 2 in the num variable
const double = multiplyBy(2)
console.log(double(5)) // 10, x * num, 5 * 2
console.log(double(3)) // 6, x * num, 3 * 2

console.log('\n')
const halve = multiplyBy(0.5)
console.log(halve(9)) // 4.5, x * num, 9 * 0.5

console.log('\n')
function makeBetweenFunc2(x, y) {
  return function (num) {
    if (num >= x && num <= y) {
      return true
    }
    return false
  }
}

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

// after 5 seconds run the func
// setTimeout(func, 5000);
setTimeout(function () {
  console.log('setTimeout, 2000')
}, 2000) */