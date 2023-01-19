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
console.log('\n')
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
console.log('\n')
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

console.log('\n')
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