// Test the JS script before starting
// alert("It's working!");

// ******************************
// Our First Function ******************************
// Example 1
/* 
function grumpus() {
  console.log('ugh...you again...')
  console.log('for the last time...')
  console.log('LEAVE ME ALONE!!!')
}
grumpus
grumpus()
console.log('\n')
grumpus()

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
// Dice Roll Function ******************************
// Example 3

/* function greet(value) {
  console.log(`Hi, ${value}!`)
}
greet('Alberto') */

// console.log('\n')
// Example 4

function rollDie() {
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
