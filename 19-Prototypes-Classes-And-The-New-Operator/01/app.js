// ******************************
// What on Earth are Prototypes ******************************

console.log('What on Earth are Prototypes')
console.log('\n')

// Example 1
String.prototype.grumpus = () => {
  console.log('GO AWAY!!!')
}

console.log(String.prototype)

console.log('\n');
console.log(String.prototype.grumpus)

console.log('\n')
const cat = 'Blue'
console.log(cat.grumpus());

console.log('\n')
// Example 2
String.prototype.yell = function() {
  console.log(this);
  // This refers to whatever string we're calling the method on
  return `OMG!!! ${this.toUpperCase()}!!!!!! AHGHGHGHGGHH!`
}

const hello = 'Hello'
console.log(hello.yell())

console.log('\n')
// Example 3
// Overwritting .pop
Array.prototype.pop = function() {
  return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!'
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.pop())
console.log('\n')
console.log(arr);