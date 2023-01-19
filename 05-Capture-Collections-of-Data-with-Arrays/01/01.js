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


// ******************************
// Reverse and Join ******************************
// Example 9
let arrayToReverse = ['one', 'two', 'three']
console.log('array:', arrayToReverse)

let arrayReversed = arrayToReverse.reverse()
// ['three', 'two', 'one']
console.log(arrayReversed)

let elements = ['fire', 'air', 'water']

console.log(elements)
// ['fire', 'air', 'water']
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
// 12.3,60,false
console.log([12.3, 60, false].join(' # -> '))
// 12.3 # -> 60 # -> false