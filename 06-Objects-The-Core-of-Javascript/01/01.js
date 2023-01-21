// Test the JS script before starting
// alert("It's working!");

// ******************************
// Creating Object Literals ******************************
// Example 1
/* 
const fitAppData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avfGoodSleep: '2:13',
  45: 'forty five', // fitBitData[45]
}
console.log(fitAppData)
console.log(fitAppData.length) // undefined
console.log(fitAppData.totalMiles)
console.log(fitAppData.avgCalorieBurn)
console.log(fitAppData.avfGoodSleep)
// console.log(fitBitData.45); ERROR!
console.log(fitAppData[45])

console.log('\n')
let data = { a: 1 }
console.log(data)

let data2 = { a: 1, b: 2, c: 3, d: 4 }
console.log(data2) */

// console.log('\n')
// ******************************
// Accessing Object Properties ******************************
// Example 2

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
}
// console.log(numbers.100); // Unexpected number
console.log(numbers[100]);
console.log(numbers['100'])
console.log(numbers[16]);

console.log('\n')
const numbers2 = {
  '100': 'one hundred',
  '16': 'sixteen',
  '76 trombones': 'great song!'
};
console.log(numbers2['100']);
console.log(numbers2['16']);
console.log(numbers2['76 trombones']);
console.log(numbers2['10'+'0']); // '100'

console.log('\n')
// Example 3
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}

palette.red // '#eb4d4b'
palette.blue // '#30336b'
// palette[blue] // Uncaught ReferenceError: blue is not defined
palette['blue'] // '#30336b'

let mysteryColor = 'yellow';
// It would not work at all because now it's looking for a property
// actually called mystery color and there isn't one
// We only have red, yellow and blue those are the only keys
// It doesn't throw an error, it just tells us undefined
// Just like an array if you're trying to access something that
// does not exist in that array

console.log([1, 2, 3][99]) // undefined
console.log(palette.mysteryColor) // undefined property doesn't exist 'color'
console.log(palette['123 hello hi']); // undefined
console.log(palette.helloworld) // undefined
console.log(palette[mysteryColor]) // '#f9ca24'
console.log(palette['bl'+'ue']); // '#30336b'

// If i try to access