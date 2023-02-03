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
