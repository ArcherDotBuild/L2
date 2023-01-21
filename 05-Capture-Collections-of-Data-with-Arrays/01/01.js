// Test the JS script before starting
// alert("It's working!");

// ******************************
// Creating Arrays ******************************
// Example 1
/* 
let shoppingList = ['cereal', 'cheese', 'ice']

let lotto = [45, 12, 23, 25, 34]

let myCollection = [12, 'dog', true, null, NaN]
console.log(shoppingList);
console.log(lotto)
console.log(myCollection);

// Longer way to make an Array
let longerArray = new Array(1,2,3,4,5,6,7,8,9,10)
console.log(longerArray)

console.log('lotto:', lotto[123]) // undefined
console.log('abcdefg:', 'abcdefg'[123]) // undefined
 */
// console.log('\n')
// ******************************
// Array Indices ******************************
// Example 2
/* 
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(colors)
console.log(colors.length)
console.log(colors[0]);
console.log(colors[6])
console.log(colors[7])
console.log(colors[colors.length]);
console.log(colors[colors.length - 1])

console.log('lotto:', lotto[123]) // undefined
console.log('abcdefg:', 'abcdefg'[123]) // undefined
 */
// console.log('\n')
// ******************************
// Modifying Arrays ******************************
// Example 3
/* 
let shoppingList = ['Cheddar Cheese', '2% Milk' ]

console.log(shoppingList.length);
console.log(shoppingList)
shoppingList[1] = 'Whole Milk'
console.log(shoppingList)
shoppingList[2] = 'Ice Cream'
console.log(shoppingList)
shoppingList[shoppingList.length] = 'Tomatoes'
shoppingList[shoppingList.length] = 'Potatoes'
shoppingList[0] = 'Bread'
console.log(shoppingList) */

// console.log('\n')
// ******************************
// Push and Pop ******************************
// Example 4
/* 
let topSongs = [
  'First Time Ever I Saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
]

console.log(topSongs)
topSongs.push('Soulfly')
console.log(topSongs)
topSongs.push(true)
console.log(topSongs);
console.log(topSongs[topSongs.length - 1])
let rodWave = topSongs.pop()
console.log('\n')
console.log('song:', rodWave);
console.log('array now:', topSongs)
topSongs.pop()
topSongs.pop()
topSongs.pop()
topSongs.pop()
topSongs.pop()
console.log('topSongs', topSongs); */

// ******************************
// Shift and Unshift ******************************
// Example 5
/* 
let dishesToDo = ['big platter']
console.log(dishesToDo)
dishesToDo.unshift('large plate')
dishesToDo.unshift('small plate')
console.log(dishesToDo)

dishesToDo.unshift('cereal bowl')
dishesToDo.unshift('mug')
dishesToDo.unshift('dirty spoon')
console.log(dishesToDo)

dishesToDo.shift()
console.log(dishesToDo)
dishesToDo.shift()
console.log(dishesToDo)
dishesToDo.shift()
console.log(dishesToDo)
dishesToDo.shift()
dishesToDo.shift()
dishesToDo.shift()
console.log(dishesToDo)

// You can add in multiple things at once
// It puts them in as a chunk together
dishesToDo.unshift('fork', 'knife')
console.log(dishesToDo)
dishesToDo.unshift('small spoon')
dishesToDo.unshift('large spoon')
console.log(dishesToDo) */

// ******************************
// Concat ******************************
// Example 6
/* 
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2))

let fruits = ['apple', 'banana']
let veggies = ['asparagus', 'brussel sprouts']
let meats = ['steak', 'chicken breast']

console.log(fruits.concat(veggies))
console.log(veggies.concat(fruits))

let allFood = fruits.concat(veggies, meats)
console.log(allFood) */

// ******************************
// Includes and IndexOf ******************************
// Example 7
/* 
let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brownsuggar',
  'shrimp',
  'eel',
  'butter',
]

console.log(ingredients.includes('fish')) // false
console.log(ingredients.includes('shrimp')) // true
// It's looking for an exact match
console.log(ingredients.includes('corn')) // false

// fromIndex is a way you can specify where to start searching from
console.log(ingredients.includes('water', 3)) // false
console.log(ingredients.includes('water', 0)) // true


// We don't have to check if that equals true because
// it is a boolean method, it returns true or false
if (ingredients.includes('flour')) {
  console.log('I am gluten free, i cannot eat that')
}

Example 8
console.log('\n');
console.log('indexOf:')
console.log(ingredients.indexOf('eel')) // index 6   
console.log(ingredients.indexOf('maple syrup')) // -1

console.log('\n')
console.log(ingredients.indexOf('cheese', 5))
console.log(ingredients.indexOf('cheese', 2))
console.log(ingredients.indexOf('flour') !== -1) // true

console.log('\n')
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison')) // 1

// start from index 2
console.log(beasts.indexOf('bison', 2)) // 4
console.log(beasts.indexOf('giraffe')) // -1
 */

// console.log('\n')
// ******************************
// Reverse and Join ******************************
// Example 9
/* let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
console.log(letters.reverse());
let arrayToReverse = ['one', 'two', 'three']
console.log('array:', arrayToReverse)
let arrayReversed = arrayToReverse.reverse()
console.log(arrayReversed)

console.log('\n')
let elements = ['fire', 'air', 'water']

console.log(elements)
console.log(elements.join())
// fire,air,water
console.log(elements.join(''))
// fireairwater
console.log(elements.join('-'))
// fire-air-water
console.log(elements.join(', '))
// fire, air, water
console.log(elements.reverse().join('_'))
// water_air_fire
console.log([12.3, 60, false])
// [12.3, 60, false]
console.log([12.3, 60, false].join())
// '12.3,60,false'
console.log([12.3, 60, false].join(' # -> '))
// '12.3 # -> 60 # -> false'

console.log('\n')
let respect = ['T', 'C', 'E', 'P', 'S', 'E', 'R']
console.log(respect.reverse())
console.log(respect.reverse())
console.log(respect.reverse().join('.')) */

// console.log('\n')
// ******************************
// Slice ******************************
// Example 10

/* let animals = [
  'shark',
  'salmon',
  'whale',
  'bear',
  'lizard',
  'tortoise',
]

// creates a new array with its own memory location
console.log(animals)
console.log(animals.slice(2))
console.log(animals.slice(3))

console.log('\n')
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 5))

console.log('\n')
let swimmers = animals.slice(0, 3)
console.log('swimmers:', swimmers)

let mammals = animals.slice(2, 4)
console.log('mammals:', mammals)

let reptiles = animals.slice(4, 6)
let reptiles2 = animals.slice(5)
console.log('reptiles:', reptiles)
console.log('reptiles:', reptiles2)

console.log('\n')
let quadruped = animals.slice(-3)
console.log('quadruped:', quadruped)
console.log(animals.slice(-3, -1))

console.log('\n')
// This makes a copy of the entire array
// it doesn't impact the original, it's just make a new one
let copySlice = animals.slice()
console.log(copySlice)
console.log(animals) */

// console.log('\n')
// ******************************
// Splice ******************************
// Example 11

/* let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
console.log(animals)
animals.splice(1, 0, 'octopus')
console.log(animals)

console.log('\n')
// We can also use it to delete
// It returns the deleted values
animals.splice(3, 2)
console.log(animals)

animals.splice(3, 0, 'snake', 'frog')
console.log(animals)

// We can also use it to replace
animals.splice(0, 2, 'SHARK!', 'OCTOPUS!')
console.log(animals) */

// console.log('\n')
// ******************************
// Sorting ******************************
// Example 12
/* 
let months = ['jan', 'march', 'april', 'june']
console.log('months:', months)
months.sort()
console.log('months:', months)

let people = ['Alberto', 'Josue', 'Yarelis', 'Beto']
console.log('people:', people)
people.sort()
// Variable is updated, it was mutated, it was sorted in place
// and people.sort() also returned the value to the sorted array
// If you wanted to, you could capture the it
console.log('people:', people)

// The default sort order is built upon converting the elements
// into strings, then comparing their sequences of UTF-16 code units values
let numbersSort = [1, 30, 4, 21, 10000]
numbersSort.sort()
console.log(numbersSort) */

// console.log('\n')
// ******************************
// Reference Types ******************************
// Example 12
/* 
// primitive types are not linked
let fruit = 'orange'
let color = fruit
console.log(fruit)
console.log(color)
fruit = 'watermelon'
console.log(fruit)
console.log(color)
// What this means is that in memory JavaScript stores,
// all of these variables, every single variable we ever
// make is stored in a memory slot

// Arrays can have tons of information in them. So instead of
// storing all those values in the variable itself,
// what JS does instead is it stores a reference to that array
 
// When we work with arrays and we put them in a variable
// the variable itself does not hold the array, It holds
// an arrow, a pointer, a reference to where the array is in
// memory compared to a value type variable where the actual
// value is stored

console.log('\n')
let nums = [1, 2, 3, 4, 5]
// nums = 1356982171 some reference in memory
console.log('nums:', nums)
let otherNums = nums
// It will set otherNums to be the same reference as nums
// Soo they're both pointing to the same thing in memory
// instead of each version or each variable storing
// the actual value of the array
console.log('otherNums:', otherNums)

nums.push(6, 7, 8)
console.log('nums:', nums)
console.log('otherNums:', otherNums)
otherNums.pop()
otherNums.pop()
otherNums.pop()
otherNums.pop()
console.log('nums:', nums)
console.log('otherNums:', otherNums) */

// console.log('\n')
// ******************************
// Using Const with Arrays ******************************
// Example 13

// Using consts with Arrays
/* const city = 'Lisbon'
city = 'Barranquilla'
console.log(city) */
// Uncaught TypeError: Assignment to constant variable.

const foods = ['milk']
foods.push('chocolate')
console.log(foods)
foods.unshift('tortillas')
console.log(foods)
foods.pop()
foods.pop()
foods.pop()
console.log(foods)

// foods = [] // can't change the reference
// Even though it's already an empty array

console.log('\n')
const animalPairs = [
  ['doe', 'buck'], // 0
  ['ewe', 'ram'], // 1
  ['peahen', 'peacock'], // 2
]
console.log(animalPairs)
console.log(animalPairs[2]) // ['peahen', 'peacock']
console.log(animalPairs[2][0]) // 'peahen'
console.log(animalPairs[2][1]) // 'peacock'
console.log(animalPairs[1][1]) // 'ram'
// animalPairs[0][1] = 'stag' // 'buck' changes to 'stag'
console.log(animalPairs)
// console.log(animalPairs[0]) // ['doe', 'stag']

console.log('\n')
const board = [
  ['0', null, 'X'],
  [null, 'X', '0'],
  ['X', '0', null],
]

animalPairs.splice([0][1], 1, ['raptor', 'venom'])
