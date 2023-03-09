// Test the JS script before starting
// alert("It's working!");

// ******************************
// Our First Function ******************************
// Example 1

/* function grumpus() {
  console.log('ugh...you again...')
  console.log('for the last time...')
  console.log('LEAVE ME ALONE!!!')
}
grumpus
grumpus()
console.log('\n')
grumpus()

console.log('\n')
grumpus('Alberto') // Func will run
grumpus({}) // Func will run
grumpus([]) // Func will run
grumpus() // Func will run

console.log('\n')
for (let i = 0; i < 3; i++) {
  grumpus()
} */

// console.log('\n')
// ******************************
// Dice Roll Function ******************************
// Example 2
/* 
function rollDie() {
  let roll = Math.floor(Math.random() * 6)
  console.log(`Rolled: ${roll}`)
}

rollDie()

console.log('\n')
function throwDice() {
  rollDie()
  rollDie()
  rollDie()
  rollDie()
  rollDie()
  rollDie()
}

throwDice()
 */
// console.log('\n')
// ******************************
// Introducing Arguments ******************************
// Example 3

/* function greet(value) {
  console.log(`Hi, ${value}!`)
}
greet('Alberto')
greet({}) // Hi, [object Object]!
greet([]) // Hi, !
greet() // Hi, undefined!

 */

// console.log('\n')
// Example 4

/* function rollDie() {
  let roll = Math.floor(Math.random() * 6)
  console.log(`Rolled: ${roll}`)
}
function throwDice(numRolls) {
  for(let i = 0; i < numRolls; i++) {
    rollDie()
  }
}
throwDice(3)
console.log('\n')
throwDice(5)
 */

// console.log('\n')
// ******************************
// Functions With Multiple Args ******************************
// Example 5
/* 
function square(num) {
  console.log(num * num);
}

square(2)

console.log('\n')
function sum(x, y) {
  console.log(x + y);
}

sum(4, 5); // 9

console.log('\n');
function divide(a, b) {
  console.log(a / b);
}
divide(1, 4); // 0.25
divide(4, 1); // 4
divide('s', 4) // NaN 's' / 4 = NaN
divide(5); // 5 / undefined) = NaN
 */

// console.log('\n')
// ******************************
// The Return Statement ******************************
// Example 6
/* 
function add(x, y) {
  return x + y
}
const total = add(4, 5)
console.log(total)
 */

// console.log('\n')
// ******************************
// More on Return Values ******************************
// Example 7
/* 
function square(x) {
  return x * x
  // This code won't run because it's after the return
  console.log('ALL DONE!');
}
console.log(square(4)) // 16

// Example 8
console.log('\n')
function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true
    console.log('YAY!'); // this code won't run
  } else {
    return false
  }
}
console.log(isPurple('blue'))
console.log(isPurple('purple'))

console.log('\n')
// Example 9
// We can remove the else entirely because of the way the return statements work
// If it's true return true, if it's not jump to return false
function isPurple2(color) {
  if (color.toLowerCase() === 'purple') {
    return true
    console.log('YAY!'); // this code won't run
  }
  return false
}
console.log(isPurple('black'))
console.log(isPurple('purple'))

console.log('\n')
// Example 10
function isPurple3(color) {
  return color.toLowerCase() === 'purple'
}
console.log(isPurple('green'))
console.log(isPurple('purple'))
 */
/* 
console.log('\n')
// Example 11

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true
    }
  }
  return false
}
let resultPurple1 = containsPurple(['blue', 'pink', 'magenta'])
console.log('containsPurple: ', resultPurple1)

let resultPurple2 = containsPurple(['blue', 'pink', 'green'])
console.log('containsPurple: ', resultPurple2)
 */